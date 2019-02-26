<script>
  export default {
    props: ['url'],
    data() {
      return {
        loading: false
      }
    },
    methods: {
      async upload(file) {
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
  <div>
    <a v-if="url" :href="url" target="_blank">
      <el-button><i class="mdi mdi-eye"></i> 预览文件</el-button>
    </a>
    <el-upload style="display: inline-block;margin-left: 12px;" v-loading="loading" class="data-uploader" action="/" :show-file-list="false" :before-upload="upload" :http-request="()=>{}">
      <el-button type="primary"><i class="mdi mdi-upload"></i> {{ url ? '重新上传' : '上传文件' }}</el-button>
    </el-upload>
  </div>
</template>
