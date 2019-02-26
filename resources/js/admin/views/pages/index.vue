<script>
    import ProgressCard from '../../components/Layouts/ProgressCard'

    export default {
        data() {
            return {
                info: {}
            }
        },
        components: {
            ProgressCard
        },
        async created() {
            this.info = (await this.$http.get(this.$api.systems.information)).data
        }
    }
</script>

<template>
  <div>
    <h3>欢迎登入！</h3>
    <div class="system_info">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-card>
            <h1>系统信息</h1>
            <p><span>系统信息:</span><span v-text="info.os"></span></p>
            <p><span>服务器地址:</span><span v-text="info.server_addr"></span></p>
            <p><span>服务器域名</span> <span v-text="info.server_name"></span></p>
            <p><span>服务器端口:</span><span v-text="info.server_port"></span></p>
            <p><span>服务器驱动:</span><span v-text="info.server_soft"></span></p>
            <p><span>PHP版本信息:</span><span v-text="info.php_version"></span></p>
            <p><span>PHP运行模式:</span><span v-text="info.php_runer"></span></p>
            <p><span>PHP上传限制:</span><span v-text="info.php_max_upload"></span></p>
            <p><span>PHP缓存驱动:</span><span v-text="info.cache_driver"></span></p>
            <p><span>数据库字符</span><span v-text="info.database_charset"></span></p>
            <p><span>数据库地址:</span><span v-text="info.database_host"></span></p>
            <p><span>数据库名称:</span><span v-text="info.database_name"></span></p>
            <p><span>数据库端口:</span><span v-text="info.database_port"></span></p>
            <p><span>数据库类型:</span><span v-text="info.database_type"></span></p>
            <p><span>调试模式:</span><span v-text="info.debug"></span></p>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-col :span="8">
            <ProgressCard color="#12caad" title="CPU使用率" _class="mdi mdi-google-analytics" :percentage="Math.floor(Math.random()*(80 - 1) + 1)"></ProgressCard>
          </el-col>
          <el-col :span="8">
            <ProgressCard color="#ff8400" title="虚拟内存使用率" _class="mdi mdi-heart-pulse" :percentage="Math.floor(Math.random()*(80 - 1) + 1)"></ProgressCard>
          </el-col>
          <el-col :span="8">
            <ProgressCard color="#4a9ff5" title="实际内存使用率" _class="mdi mdi-hockey-puck" :percentage="Math.floor(Math.random()*(80 - 1) + 1)"></ProgressCard>
          </el-col>
          <el-col :span="8">
            <ProgressCard color="#7d85ef" title="带宽使用率" _class="mdi mdi-houzz-box" :percentage="Math.floor(Math.random()*(80 - 1) + 1)"></ProgressCard>
          </el-col>
          <el-col :span="8">
            <ProgressCard color="#f30e5c" title="硬盘使用率" _class="mdi mdi-keg" :percentage="Math.floor(Math.random()*(80 - 1) + 1)"></ProgressCard>
          </el-col>
          <el-col :span="8">
            <ProgressCard color="#ff5f5f" title="IO读取效率" _class="mdi mdi-movie" :percentage="Math.floor(Math.random()*(80 - 1) + 1)"></ProgressCard>
          </el-col>
        </el-col>
      </el-row>
    </div>
    <!--<h1 style="text-align: center;font-weight: 100 !important;font-size: 3rem;">Welcome to Dashboard</h1>-->
    <!--<h1 style="text-align: center;font-weight: 100 !important;font-size: 2rem;">Version: 1.0.0</h1>-->
  </div>
</template>

<style lang="scss" scoped>
  .el-col-8 {
    margin-bottom: 1rem;
  }

  .el-col-12 {
    h1 {
      margin-top: 0;
      font-size: 15px;
      padding-bottom: 1rem;
      border-bottom: 1px solid #f5f5f5;
    }
    .el-card {
      p {
        font-size: 13px;
        span {
          &:first-child {
            width: 100px;
            font-weight: 700;
            display: inline-block;
          }
          &:last-child {
            font-weight: 400;
          }
        }
      }
    }
  }
</style>