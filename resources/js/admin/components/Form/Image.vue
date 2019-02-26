<script>
export default {
  props: ['image'],
  data () {
    return {
      loading: false
    }
  },
  methods: {
    async upload (file) {
      this.loading = true
      let form = new FormData()
      form.append('file', file)
      let res = await this.$http.post(this.$api.systems.upload, form)
      this.$emit('change', res.data.url)
      this.loading = false
      return false
    }
  }
}
</script>

<template>
    <el-upload v-loading="loading" class="data-uploader" action="/" :show-file-list="false" :before-upload="upload" :http-request="()=>{}">
        <img v-if="image" :src="image" class="read">
        <i v-else class="el-icon-plus data-uploader-icon"></i>
    </el-upload>
</template>

<style lang="scss">
    .data-uploader {
        width: 178px;
        .el-upload {
            cursor: pointer;
            overflow: hidden;
            background: #fff;
            border-radius: 6px;
            position: relative;
            border: 1px dashed #d9d9d9;
            transition: .3s ease all;
        }
    }

    .data-uploader .el-upload:hover {
        border-color: #2b3452;
    }

    .data-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }

    .read {
        width: 178px;
        height: auto;
        display: block;
    }
</style>
