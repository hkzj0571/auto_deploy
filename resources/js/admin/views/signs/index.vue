<script>
  export default {
    data() {
      return {
        columns: [
          {prop: 'id', label: 'ID', width: 60},
          {prop: 'signable_id', label: '登录ID', width: 80},
          {prop: 'signable_type', label: '登录类型', type: 3, width: 80},
          {prop: 'name', label: '登录用户', type: 3, width: 100},
          {prop: 'ip', label: 'IP', type: 3},
          {prop: 'device', label: '设备', type: 3, width: 150},
          {prop: 'browser', label: '浏览器', type: 3, width: 100},
          {prop: 'platform', label: '平台', type: 3, width: 100},
          {prop: 'created_at', label: '登录时间', is_date: true, width: 100},
          {prop: 'actions', label: '操作', type: 3, width: 100},
        ],
        filters: [
          {key: 'id', name: 'ID', value: null, type: 0},
          {key: 'signable_id', name: '登录ID', value: null, type: 0},
          {key: 'signable_type', name: '登录类型', value: null, type: 2, options: [{name: '管理员', id: 'App\\Models\\Admin'}]},
          {key: 'created_at', name: '创建时间', value: null, type: 1},
        ]
      }
    },
    methods: {
      destroy(row) {
        this.$confirm(`将删除此登陆日志, 是否继续?`, '删除日志', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'error'
        }).then(async () => {
          await this.$http.delete(this.$api.signs.destroy(row.id))
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
    <data-table ref="table" :_filters="filters" :columns="columns" :api="$api.signs.index" include="signable">
      <div slot="buttons"></div>
      <div slot="signable_type" slot-scope="scope">
        <span v-if="scope.row.signable_type == 'App\\Models\\Admin'">管理员</span>
      </div>
      <div slot="name" slot-scope="scope">
        <span>{{ scope.row.signable.name }}</span>
      </div>
      <div slot="ip" slot-scope="scope">
        <span>{{ scope.row.data.location }}/{{ scope.row.data.ip }}</span>
      </div>
      <div slot="device" slot-scope="scope">
        <span>{{ scope.row.data.device }}</span>
      </div>
      <div slot="browser" slot-scope="scope">
        <span>{{ scope.row.data.browser }}</span>
      </div>
      <div slot="platform" slot-scope="scope">
        <span>{{ scope.row.data.platform }}</span>
      </div>
      <div slot="actions" slot-scope="scope">
        <el-button size="mini" @click="destroy(scope.row)" type="danger" icon="mdi mdi-close-circle"> 删除</el-button>
      </div>
    </data-table>
  </div>
</template>

