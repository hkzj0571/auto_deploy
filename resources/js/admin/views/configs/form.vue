<script>
  export default {
    props: {
      form: {
        type: Object,
        default() {
          return {
            id: null,
            name: null,
            alias: null,
            value: null,
            describe: null,
          }
        }
      },
      api: {
        type: Object
      }
    },
    data() {
      return {
        loading: false,
        rules: {
          name: [
            {required: true, message: '请输入Key', trigger: 'change'}
          ],
          alias: [
            {required: true, message: '请输入名称', trigger: 'change'}
          ],
          value: [
            {required: true, message: '请输入真值', trigger: 'change'}
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
    <el-form-item label="Key" prop="name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="名称" prop="alias">
      <el-input v-model="form.alias"></el-input>
    </el-form-item>
    <el-form-item label="真值" prop="value">
      <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="" v-model="form.value"></el-input>
    </el-form-item>
    <el-form-item label="描述" prop="describe">
      <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="" v-model="form.describe"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button class="mdi mdi-check-circle" :loading="loading" @click="store" type="primary"> 提交</el-button>
    </el-form-item>
  </el-form>
</template>
