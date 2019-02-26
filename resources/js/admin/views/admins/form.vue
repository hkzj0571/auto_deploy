<script>
  import DataImage from '../../components/Form/Image.vue'

  export default {
    props: {
      form: {
        type: Object,
        default() {
          return {
            id: null,
            avatar: null,
            name: null,
            mobile: null,
            password: null,
            is_disabled: false
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
      var validateMobile = (rule, value, callback) => {
        callback((/^1[3|5|7|8][0-9]\d{4,8}$/.test(value)) && value.length === 11 ? callback() : new Error('请输入正确的手机号码'))
      }
      return {
        loading: false,
        rules: {
          name: [
            {required: true, message: '请输入名称', trigger: 'change'}
          ],
          avatar: [
            {required: true, message: '请上传头像', trigger: 'change'}
          ],
          mobile: [
            {required: true, message: '请输入手机号码', trigger: 'change'},
            { validator: validateMobile, trigger: 'blur' }
          ],
          password: [
            { required: !this.form.id, message: '请输入登录密码', trigger: 'change' },
            { min: 6, message: '密码最小为 6 位数', trigger: 'change' }
          ],
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
    <el-form-item label="用户头像" prop="avatar">
      <DataImage @change="(url) => {form.avatar = url}" :image="form.avatar"></DataImage>
    </el-form-item>
    <el-form-item label="用户名称" prop="name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="手机号码" prop="mobile">
      <el-input v-model="form.mobile"></el-input>
    </el-form-item>
    <el-form-item label="登录密码" prop="password">
      <el-input v-model="form.password" type="password"></el-input>
    </el-form-item>
    <el-form-item label="是否禁用" prop="is_disabled">
      <el-switch v-model="form.is_disabled"></el-switch>
    </el-form-item>
    <el-form-item>
      <el-button class="mdi mdi-check-circle" :loading="loading" @click="store" type="primary"> 提交</el-button>
    </el-form-item>
  </el-form>
</template>
