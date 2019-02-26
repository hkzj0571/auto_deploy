<script>
  export default {
    data() {
      return {
        columns: [
          {prop: 'id', label: 'ID', width: 60},
          {prop: 'admin_id', label: '操作用户',type: 3},
          {prop: 'action', label: '请求方式'},
          {prop: 'path', label: '请求路径'},
          {prop: 'created_at', label: '请求时间'},
          {prop: 'actions', label: '操作', type: 3, width: 100},
        ],
        filters: [
          {key: 'id', name: 'ID', value: null, type: 0},
          {key: 'action', name: '请求方式', value: null, type: 0},
          {key: 'path', name: '请求路径', value: null, type: 0},
          {key: 'created_at', name: '创建时间', value: null, type: 1},
        ]
      }
    },
    methods: {
      destroy(row) {
        this.$confirm(`将删除此操作日志, 是否继续?`, '删除日志', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'error'
        }).then(async () => {
          await this.$http.delete(this.$api.dailys.destroy(row.id))
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
    <data-table expand ref="table" :_filters="filters" :columns="columns" :api="$api.dailys.index" include="admin">
      <div slot="buttons"></div>
      <div slot="expand" slot-scope="scope">
        <pre class="table_data">{{ scope.row.data }}</pre>
      </div>
      <div slot="admin_id" slot-scope="scope">
        <span>{{ scope.row.admin.name }} (ID: {{ scope.row.admin.id }})</span>
      </div>
      <div slot="actions" slot-scope="scope">
        <el-button size="mini" @click="destroy(scope.row)" type="danger" icon="mdi mdi-close-circle"> 删除</el-button>
      </div>
    </data-table>
  </div>
</template>

<style lang="scss">
  .table_data {
    margin: 10px 0;
    text-align: left;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 1.75;
    background: #f9f9f9;
    border-radius: 3px;
    padding: 6px 12px;
  }
</style>
