<script>
  import DataForm from './form'

  export default {
    data() {
      let targets = [
        {name: '当前页面打开', id: 0},
        {name: '在新页面打开', id: 1}
      ]
      return {
        targets: targets,
        api: this.$api.banners,
        current: undefined,
        visibles: {
          dialog: false
        },
        columns: [
          {prop: 'id', label: 'ID',width: 50},
          {prop: 'url', label: '展示图片', type: 2, width: 120},
          {prop: 'name', label: '名称'},
          {prop: 'weight', label: '排序权重', width: 80},
          {prop: 'link', label: '跳转链接',type: 3, width: 320},
          {prop: 'target', label: '打开方式', type: 3, width: 130},
          {prop: 'created_at', label: '创建时间', is_date: true,width: 100},
          {prop: 'actions', label: '操作', type: 3, width: 180},
        ],
        filters: [
          {key: 'id', name: 'ID', value: null, type: 0},
          {key: 'name', name: '名称', value: null, type: 0},
          {key: 'target', name: '打开方式', value: null, type: 2, options: targets},
          {key: 'created_at', name: '创建时间', value: null, type: 1},
        ]
      }
    },
    computed: {
      dialog_title: function () {
        return this.current ? '编辑轮播' : '新建轮播'
      }
    },
    components: {
      DataForm
    },
    methods: {
      edit(row) {
        this.current = row
        this.visibles.dialog = true
      },
      destroy(row) {
        this.$confirm(`此操作将删除轮播『${row.name}』, 是否继续?`, '删除轮播', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'error'
        }).then(async () => {
          await this.$http.delete(this.api.destroy(row.id))
          this.$message.success('删除成功')
          this.$refs.table.fetch(1)
        }).catch(() => {
        })
      },
      changed() {
        this.visibles.dialog = false
        this.$refs.table.fetch(1)
      }
    }
  }
</script>

<template>
  <div>
    <data-table ref="table" :_filters="filters" :columns="columns" :api="api.index">
      <div slot="buttons">
        <el-button type="success" icon="mdi mdi-plus-circle" @click="visibles.dialog = true"> 新建</el-button>
      </div>
      <div slot="link" slot-scope="scope">
        <a class="inlink" :href="scope.row.link" target="_blank">{{ scope.row.link }}</a>
      </div>
      <div slot="zone" slot-scope="scope">
        <el-tag v-for="zone in zones" class="i-tag" v-if="zone.id == scope.row.zone" :key="zone.id">{{ zone.name }}</el-tag>
      </div>
      <div slot="target" slot-scope="scope">
        <el-tag v-for="target in targets" class="i-tag" v-if="target.id == scope.row.target" :key="target.id">{{ target.name }}</el-tag>
      </div>
      <div slot="actions" slot-scope="scope">
        <el-button size="mini" @click="edit(scope.row)" type="primary" icon="mdi mdi-pencil-circle"> 编辑</el-button>
        <el-button size="mini" @click="destroy(scope.row)" type="danger" icon="mdi mdi-close-circle"> 删除</el-button>
      </div>
    </data-table>
    <el-dialog :title="dialog_title" :visible.sync="visibles.dialog" width="30%">
      <DataForm :targets="targets" :form="current" :api="api" @changed="changed"></DataForm>
    </el-dialog>
  </div>
</template>

<style lang="scss">
  .el-steps--simple {
    padding: 10px 8%;
    margin-bottom: 1.5rem;
  }

  .el-step.is-simple .el-step__title {
    font-size: 13px;
    line-height: 20px;
    font-weight: 500;
  }
  .inlink {
    max-width: 300px;
    overflow: hidden;
    white-space: nowrap;
    display: inline-block;
    text-overflow: ellipsis;
  }
  .i-tag {
    background: #409EFF;
    color: #fff;
    font-weight: 700;
    border-radius: 2px;
  }
</style>

