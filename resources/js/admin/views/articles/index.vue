<script>
  export default {
    data() {
      return {
        api: this.$api.articles,
        current: undefined,
        visibles: {
          dialog: false
        },
        columns: [
          {prop: 'id', label: 'ID',},
          {prop: 'title', label: '标题',},
          {prop: 'weight', label: '排序',},
          {prop: 'created_at', label: '创建时间', is_date: true,},
          {prop: 'actions', label: '操作', type: 3, width: 300},
        ],
        filters: [
          {key: 'id', name: 'ID', value: null, type: 0},
          {key: 'title', name: '名称', value: null, type: 0},
          {key: 'created_at', name: '创建时间', value: null, type: 1},
        ]
      }
    },
    methods: {
      destroy(row) {
        this.$confirm(`此操作将删除文章『${row.title}』, 是否继续?`, '删除文章', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'error'
        }).then(async () => {
          await this.$http.delete(this.api.destroy(row.id))
          this.$message.success('删除成功')
          this.$refs.table.fetch(1)
        }).catch(() => {
        })
      }
    }
  }
</script>

<template>
  <div>
    <data-table ref="table" :_filters="filters" :columns="columns" :api="api.index">
      <div slot="buttons">
        <router-link :to="{name: 'articles.create'}">
          <el-button type="success" icon="mdi mdi-plus-circle" @click="visibles.dialog = true"> 新建</el-button>
        </router-link>
      </div>
      <div slot="actions" slot-scope="scope">
        <router-link :to="{name: 'articles.edit', params:{id:scope.row.id}}">
          <el-button size="mini" type="primary" icon="mdi mdi-pencil-circle"> 编辑</el-button>
        </router-link>
        <el-button size="mini" @click="destroy(scope.row)" type="danger" icon="mdi mdi-close-circle"> 删除</el-button>
      </div>
    </data-table>
  </div>
</template>

