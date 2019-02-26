<script>
  export default {
    data() {
      return {
        loading: false,
        files: [],
      }
    },
    methods: {
      async fetch() {
        this.loading = true
        let r = await this.$http.get(this.$api.logs.index)
        this.files = r.data.data
        this.loading = false
        if (this.files.length) {
          return this.$router.push({name: 'logs.show', params: {log: this.files[0]}})
        }
      }
    },
    async created() {
      this.fetch()
    }
  }
</script>

<template>
  <div>
    <el-row :gutter="30">
      <el-col :span="5">
        <div class="log-menu">
          <h1>Files <span>{{ files.length }} 个日志文件 <a href="javascript:;" @click="fetch"><i class="mdi mdi-reload"></i></a></span></h1>
          <div v-loading="loading">
            <el-menu router v-if="files.length" :default-active="$route.params.log || files[0]">
              <el-menu-item v-for="(file, index) in files" :key="index" :route="{name:'logs.show', params: {log: file}}" :index="file">
                <i class="mdi mdi-file-question"></i>
                <span slot="title">{{ file }}</span>
              </el-menu-item>
            </el-menu>
            <p class="empty" v-else>
              <i class="mdi mdi-inbox"></i> 空空如也
            </p>
          </div>
        </div>
      </el-col>
      <el-col :span="19">
        <router-view :key="$route.fullPath"></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss">
  .log-menu {
    background: #fff;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.025) !important;
    h1 {
      margin-top: 0;
      font-weight: 300;
      padding: 0 .75rem;
      padding-top: .75rem;
      padding-bottom: .6rem;
      margin-bottom: .25rem;
      background: #f9f9f9;
      border-bottom: 1px solid #eee;
      span {
        float: right;
        color: #909399;
        font-size: 12px;
        margin-top: 4px;
        font-weight: 700;
        a i {
          font-size: 16px;
          vertical-align: middle;
        }
      }
    }
    .el-menu {
      overflow: scroll;
      min-height: 200px !important;
      max-height: 600px !important;
      border-right: none !important;
      .el-menu-item {
        color: #909399;
        transition: ease all .3s;
        height: 36px !important;
        font-size: 13px !important;
        line-height: 36px !important;
        padding-left: 15px !important;
        padding-right: 15px !important;
        border-radius: 3px;
        i {
          font-size: 16px;
        }
      }
      .is-active {
        color: #409EFF;
        font-weight: 700 !important;
      }
    }
    .empty {
      color: #909399;
      font-size: 13px;
      line-height: 10;
      text-align: center;
    }
  }
</style>

