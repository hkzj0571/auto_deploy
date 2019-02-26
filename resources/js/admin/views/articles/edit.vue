<script>
  import Froala from '../../components/Form/Froala.vue'
  import DataImage from '../../components/Form/Image.vue'
  export default {
    data() {
      return {
        inited: false,
        form: {
          cover: null,
          title: null,
          describe: null,
          content: null,
          weight: null
        },
        loading: false,
        rules: {
          cover: [
            {required: true, message: '请上传展示图片', trigger: 'change'}
          ],
          title: [
            {required: true, message: '请输入文章标题', trigger: 'change'}
          ],
          describe: [
            {required: true, message: '请输入文章描述', trigger: 'change'}
          ],
          content: [
            {required: true, message: '请输入文章内容', trigger: 'change'}
          ],
          weight: [
            {required: true, message: '请输入排序权重', trigger: 'change'}
          ]
        }
      }
    },
    components: {
      Froala,
      DataImage
    },
    async beforeCreate () {
      let {data} = await this.$http.get(this.$api.articles.show(this.$route.params.id))
      this.form = data
      this.inited  = true
    },
    methods: {
      store() {
        this.$refs['form'].validate((valid) => {
          if (!valid) return false
          this.loading = true
          this.$http.post(this.$api.articles.update(this.$route.params.id), this.form)
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
    <h3>编辑文章</h3>
    <el-form v-if="inited" class="eform" :rules="rules" :model="form" ref="form" label-width="100px">
      <el-form-item label="展示图片" prop="cover">
        <DataImage @change="(url) => {form.cover = url}" :image="form.cover"></DataImage>
      </el-form-item>
      <el-form-item label="排序权重" prop="weight">
        <el-input-number :min="0" :max="1000" v-model="form.weight" placeholder=""></el-input-number>
      </el-form-item>
      <el-form-item label="文章标题" prop="title">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="文章描述" prop="describe">
        <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" v-model="form.describe"></el-input>
      </el-form-item>
      <el-form-item label="文章内容" prop="content">
        <Froala :content.sync="form.content"/>
      </el-form-item>
      <el-form-item>
        <router-link :to="{name: 'articles'}">
          <el-button class="mdi mdi-chevron-left"> 返回</el-button>
        </router-link>
        <el-button class="mdi mdi-check-circle" :loading="loading" @click="store" type="primary"> 提交</el-button>
      </el-form-item>
    </el-form>
    <p class="load" v-else><i class="el-icon-loading"></i> 数据加载中</p>
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

