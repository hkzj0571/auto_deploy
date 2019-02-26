<template>
  <div class="data-table">
    <el-row class="table_header" style="margin-bottom: 1rem;">
      <el-col v-if="filter" :span="16">
        <el-collapse>
          <el-collapse-item title="点击展开筛选项" name="filters">
            <el-form class="eform" :inline="true">
              <el-form-item v-for="(filter, index) in filters" :key="index" :label="filter.name">
                <el-input v-if="filter.type === 0" v-model="filter.value"></el-input>
                <el-date-picker v-if="filter.type === 1" v-model="filter.value" type="datetimerange" range-separator="至" format="yyyy-MM-dd HH:mm:ss" value-format="yyyy-MM-dd HH:mm:ss" start-placeholder="" end-placeholder="" align="center"></el-date-picker>
                <el-select v-if="filter.type === 2" v-model="filter.value" placeholder="">
                  <el-option v-for="(option, index) in filter.options" :key="index" :label="option[filter.option_label || 'name']" :value="option[filter.option_value || 'id']"></el-option>
                </el-select>
                <el-input-number v-if="filter.type === 3" v-model="filter.value" :min="filter.min || 0" :max="filter.min || 100" label=""></el-input-number>
                <el-switch v-if="filter.type === 4" v-model="filter.value" :active-color="filter.active_color || '#13ce66'" :inactive-color="filter.inactive_color || '#ff4949'"></el-switch>
                <el-radio-group v-if="filter.type === 5" v-model="filter.value">
                  <el-radio v-for="(option, index) in filter.options" :key="index" :label="option[filter.option_value || 'id']">{{ option[filter.option_label || 'name'] }}</el-radio>
                </el-radio-group>
                <el-checkbox-group v-if="filter.type === 6" v-model="filter.value">
                  <el-checkbox v-for="(option, index) in filter.options" :key="index" :label="option[filter.option_value || 'id']">{{ option[filter.option_label || 'name'] }}</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <slot name="filters"></slot>
              <el-form-item style="display: block;">
                <el-button type="primary" @click="fetch(1)" icon="mdi mdi-radiobox-marked"> 查询</el-button>
                <el-button type="info" @click="reload" icon="mdi mdi-reload"> 重置</el-button>
              </el-form-item>
            </el-form>
          </el-collapse-item>
        </el-collapse>
      </el-col>
      <el-col style="text-align: right" :span="8">
        <slot name="buttons"></slot>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-table class="data-table" border :data="items" v-loading="loading">
          <el-table-column v-if="expand" type="expand">
            <template slot-scope="scope">
              <slot name="expand" :row="scope.row"></slot>
            </template>
          </el-table-column>
          <el-table-column v-if="selection" type="selection" width="55"></el-table-column>
          <template v-for="column in columns">
            <el-table-column :label="column.label" :width="column.width">
              <template slot-scope="scope">
                <el-tooltip v-if="column.type === undefined" effect="dark" :content="scope.row[column.prop] + ' '" placement="top">
                  <span v-clipboard:copy="scope.row[column.prop]" v-clipboard:success="clipboard">{{ scope.row[column.prop] | dater(column) }}</span>
                </el-tooltip>
                <a href="javascript:;" v-if="column.type === 1">
                  <span class="bage bage-success" v-if="scope.row[column.prop]"><i class="mdi mdi-check-circle"></i></span>
                  <span class="bage bage-danger" v-else><i class="mdi mdi-close-circle"></i></span>
                </a>
                <preview class="preview" v-if="column.type === 2" :url="scope.row[column.prop]"></preview>
                <slot v-if="column.type === 3" :name="column.prop" :row="scope.row"></slot>
              </template>
            </el-table-column>
          </template>
        </el-table>
        <div class="table-footer">
          <el-pagination v-if="paginate" @size-change="handleSizeChange" background layout="total, sizes, prev, pager, next, jumper" :page-sizes="[10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200]" :total="pagination.total" :page-size="pagination.count" :current-page="pagination.current_page" @current-change="fetch"></el-pagination>
          <el-button type="primary" icon="mdi mdi-file-excel" @click="exportExcel"> 导出为 Excel</el-button>
          <el-button icon="mdi mdi-reload" @click="fetch(pagination ? pagination.current_page : undefined)" :loading="loading"> 刷新</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import moment from 'moment'
  import FileSaver from 'file-saver'
  import XLSX from 'xlsx'

  moment.locale('zh-cn')
  export default {
    props: {
      api: {
        default() {
          return null
        }
      },
      include: {
        default() {
          return null
        }
      },
      filter: {
        type: Boolean,
        default() {
          return true
        }
      },
      expand: {
        type: Boolean,
        default() {
          return false
        }
      },
      _filters: {
        type: Array,
        default() {
          return []
        }
      },
      columns: {
        type: Array,
        default() {
          return []
        },
      },
      paginate: {
        type: Boolean,
        default() {
          return true
        }
      },
      selection: {
        type: Boolean,
        default() {
          return false
        },
      }
    },
    data() {
      return {
        filters: {},
        loading: true,
        items: [],
        pagination: {}
      }
    },
    filters: {
      dater: function (value, column) {
        return column.is_date ? moment(new Date(value)).from(new Date()) : value
      }
    },
    created() {
      this.filters = JSON.parse(JSON.stringify(this._filters))
      Object.keys(this.$route.query).forEach((key) => {
        this.filters.forEach((filter, index) => {
          if (filter.key === key) {
            if (this.filters[index].is_int) {
              return this.filters[index].value = parseInt(this.$route.query[key])
            }
            if (['true', 'false'].indexOf(this.$route.query[key]) !== -1) {
              return this.filters[index].value = this.$route.query[key] == 'true' ? true : false
            }
            return this.filters[index].value = this.$route.query[key]
          }
        })
        if (this.paginate) {
          if (key === 'page') this.pagination.current_page = parseInt(this.$route.query[key])
          if (key === 'limit') this.pagination.count = parseInt(this.$route.query[key])
        }
      })
      this.fetch()
    },
    methods: {
      reload() {
        this.filters = JSON.parse(JSON.stringify(this._filters))
        if (this.paginate) {
          this.pagination.current_page = 1
          this.pagination.count = 10
        }
        this.fetch()
      },
      clipboard() {
        this.$message.success('复制成功')
      },
      handleSizeChange(limit) {
        this.pagination.current_page = 1
        this.pagination.count = limit
        this.fetch()
      },
      exportExcel() {
        var wb = XLSX.utils.table_to_book(document.querySelector('.data-table'))
        var wbout = XLSX.write(wb, {bookType: 'xlsx', bookSST: true, type: 'array'})
        try {
          FileSaver.saveAs(new Blob([wbout], {type: 'application/octet-stream'}), 'sheetjs.xlsx')
        } catch (e) {
          if (typeof console !== 'undefined') console.log(e, wbout)
        }
        return wbout
      },
      async fetch(page = undefined) {
        if (page !== undefined && this.paginate) {
          this.pagination.current_page = page
        }
        this.loading = true
        let params = {}
        this.filters.forEach((value, key) => {
          params[value.key] = value.value
        })
        if (this.paginate) {
          params.page = this.pagination.current_page || 1
          params.limit = this.pagination.count || 10
        }
        params.include = this.include || undefined
        this.$router.push({path: '', query: params})
        let res = await this.$http[this.api.method || 'get'](this.api.method || this.api, {params})
        this.items = res.data.data
        if (this.paginate) {
          this.pagination = res.data.meta.pagination
          this.pagination.count = params.limit
        }
        this.loading = false
      }
    }
  }
</script>

<style lang="scss"></style>
