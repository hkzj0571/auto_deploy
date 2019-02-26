<script>
  import Froala from '../../components/Form/Froala.vue'
  import DataImage from '../../components/Form/Image.vue'
  export default {
    data() {
      return {
        form: {
          title: null,
          content: null,
        },
        loading: false,
        rules: {
          title: [
            {required: true, message: '请输入城区名称', trigger: 'change'}
          ],
          content: [
            {required: true, message: '请输入城区介绍', trigger: 'change'}
          ],
        }
      }
    },
    components: {
      Froala,
      DataImage
    },
    methods: {
      store() {
        this.$refs['form'].validate((valid) => {
          if (!valid) return false
          this.loading = true
          this.$http.post(this.$api.pages.store, this.form)
          .then(r => {
            this.loading = false
            this.$message.success('操作成功')
            this.$router.push({name: 'articles'})
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
  <div>
    <h3>创建城区</h3>
    <el-form class="eform" :rules="rules" :model="form" ref="form" label-width="100px">
      <el-form-item label="城区名称" prop="title">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="城区介绍" prop="content">
        <Froala :content.sync="form.content"/>
      </el-form-item>
      <el-form-item>
        <router-link :to="{name: 'articles'}">
          <el-button class="mdi mdi-chevron-left"> 返回</el-button>
        </router-link>
        <el-button class="mdi mdi-check-circle" :loading="loading" @click="store" type="primary"> 提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
  .load {
    color: #a9a9a9;
    font-size: 13px;
    margin: 5rem auto;
    text-align: center;
  }
  h3 {
    margin-top: 0;
    font-size: 1.5rem;
    margin-left: 2rem;
    margin-bottom: 1.5rem;
  }
  .eform {
    padding: 1rem;
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.025) !important;
  }
</style>

