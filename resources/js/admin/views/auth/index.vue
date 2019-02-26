<script>
  export default {}
</script>

<template>
  <div class="auth full-height">
    <el-row class="full-height">
      <el-col class="full-height" :span="24">
        <router-view/>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
  .auth {
    .el-row {
      width: 100%;
      .full-height {
        display: flex;
        align-items: center;
      }
    }
  }
</style>
