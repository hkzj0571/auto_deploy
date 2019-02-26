<script>
  import DataImage from '../../components/Form/Image.vue'

  export default {
    props: {
      form: {
        type: Object,
        default() {
          return {
            id: null,
            url: null,
            name: null,
            link: null,
          }
        }
      },
      api: {
        type: Object
      }
    },
    components: {
      DataImage
    },
    data() {
      return {
        loading: false,
        rules: {
          name: [
            {required: true, message: '请输入名称', trigger: 'change'}
          ],
          url: [
            {required: true, message: '请上传店铺名称', trigger: 'change'}
          ],
          link: [
            {required: true, message: '请输入店铺链接', trigger: 'change'}
          ]
        }
      }
    },
    methods: {
      store() {
        this.$refs['form'].validate((valid) => {
          if (!valid) return false
          this.loading = true
          let url = this.form.id ? this.api.update(this.form.id) : this.api.store
          let method = this.form.id ? 'put' : 'post'
          this.$http[method](url, this.form)
          .then(r => {
            this.loading = false
            this.$message.success('操作成功')
            this.$refs['form'].resetFields()
            this.$emit('changed')
          })
          .catch(e => {
            this.loading = false
            this.$message.error(e.data.message)
          })
        })
      }
    }
  }
</script>

<template>
  <el-form class="eform" :rules="rules" :model="form" ref="form" label-width="100px">
    <el-form-item label="店铺图片" prop="url">
      <DataImage @change="(url) => {form.url = url}" :image="form.url"></DataImage>
    </el-form-item>
    <el-form-item label="店铺名称" prop="name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="店铺链接" prop="link">
      <el-input v-model="form.link"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button class="mdi mdi-check-circle" :loading="loading" @click="store" type="primary"> 提交</el-button>
    </el-form-item>
  </el-form>
</template>
