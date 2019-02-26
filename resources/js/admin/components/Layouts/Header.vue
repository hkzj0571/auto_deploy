<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    user: state => state.user.data
  }),
  methods: {
    logout () {
      this.$confirm('您确定要安全退出系统吗？', '退出登录', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'info'
      }).then(() => {
        this.$store.commit('LOGOUT')
        this.$router.push({ name: 'auth.login' })
        this.$message({
          type: 'success',
          message: '你已经安全退出'
        })
      }).catch(() => {
      })
    }
  },
  created () {}
}
</script>

<template>
  <el-header>
    <span class="avatar">
      <el-dropdown placement="bottom" trigger="click">
        <img :src="user.avatar">
        <el-dropdown-menu slot="dropdown">
          <a href="javascript:;" @click="logout">
            <el-dropdown-item>安全退出</el-dropdown-item>
          </a>
        </el-dropdown-menu>
      </el-dropdown>
    </span>
  </el-header>
</template>
