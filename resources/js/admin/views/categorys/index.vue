<script>
  import DataForm from './form'

  export default {
    data() {
      return {
        parents: [],
        api: this.$api.categorys,
        current: undefined,
        visibles: {
          dialog: false
        },
        columns: [
          {prop: 'id', label: 'ID',},
          {prop: 'name', label: '名称',},
          {prop: 'weight', label: '排序权重',},
          {prop: 'level', label: '类型', type: 3},
          {prop: 'parent', label: '父级', type: 3},
          {prop: 'is_index', label: '首页推荐', type: 1,},
          {prop: 'created_at', label: '创建时间', is_date: true,},
          {prop: 'actions', label: '操作', type: 3, width: 300},
        ],
        filters: [
          {key: 'id', name: 'ID', value: null, type: 0},
          {key: 'name', name: '名称', value: null, type: 0},
          {key: 'created_at', name: '创建时间', value: null, type: 1},
        ]
      }
    },
    computed: {
      dialog_title: function () {
        return this.current ? '编辑分类' : '新建分类'
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
        this.$confirm(`此操作将删除分类『${row.name}』, 是否继续?`, '删除分类', {
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
        this.getParents()
        this.$refs.table.fetch(1)
      },
      async getParents() {
        let {data} = await this.$http.get(this.$api.categorys.parents)
        this.parents = data
      }
    },
    created() {
      this.getParents()
    }
  }
</script>

<template>
  <div>
    <data-table ref="table" :_filters="filters" :columns="columns" :api="api.index" include="parent">
      <div slot="buttons">
        <el-button type="success" icon="mdi mdi-plus-circle" @click="visibles.dialog = true"> 新建</el-button>
      </div>
      <div slot="level" slot-scope="scope">
        <el-tag><b>{{ scope.row.parent_id === 0 ? '顶级分类' : '二级分类' }}</b></el-tag>
      </div>
      <div slot="parent" slot-scope="scope">
        <el-tag><b>{{ scope.row.parent.name || '无' }}</b></el-tag>
      </div>
      <div slot="actions" slot-scope="scope">
        <el-button size="mini" @click="edit(scope.row)" type="primary" icon="mdi mdi-pencil-circle"> 编辑</el-button>
        <el-button size="mini" @click="destroy(scope.row)" type="danger" icon="mdi mdi-close-circle"> 删除</el-button>
      </div>
    </data-table>
    <el-dialog :title="dialog_title" :visible.sync="visibles.dialog" @closed="current = undefined" width="30%">
      <DataForm :parents="parents" :api="api" :form="current" @changed="changed"></DataForm>
    </el-dialog>
  </div>
</template>

