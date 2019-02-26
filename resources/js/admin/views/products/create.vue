<script>
  import Froala from '../../components/Form/Froala.vue'
  import DataImage from '../../components/Form/Image.vue'

  export default {
    data() {
      return {
        categorys: [],
        inited: false,
        form: {
          cover: null,
          name: null,
          describe: null,
          pricing: null,
          current: null,
          first_category_id: null,
          second_category_id: null,
          content: null,
          tb_link: null,
          jd_link: null,
          tm_link: null,
          weight: null
        },
        loading: false,
        rules: {
          cover: [
            {required: true, message: '请上传展示图片', trigger: 'change'}
          ],
          name: [
            {required: true, message: '请输入产品名称', trigger: 'change'}
          ],
          describe: [
            {required: true, message: '请输入产品描述', trigger: 'change'}
          ],
          content: [
            {required: true, message: '请输入产品详情', trigger: 'change'}
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
    methods: {
      exp(val) {
        if (val.length !== 2) {
          return this.$message.error('分类选择错误')
        }
        this.form.first_category_id = val[0]
        this.form.second_category_id = val[1]
      },
      store() {
        this.$refs['form'].validate((valid) => {
          if (!valid) return false
          this.loading = true
          this.$http.post(this.$api.products.store, this.form)
          .then(r => {
            this.loading = false
            this.$message.success('操作成功')
            this.$router.push({name: 'products'})
          })
          .catch(e => {
            this.loading = false
            this.$message.error(e.data.message)
          })
        })
      }
    },
    async created() {
      let {data} = await this.$http.get(this.$api.categorys.all)
      this.categorys = data.categorys
      this.inited = true
    }
  }
</script>

<template>
  <div>
    <h3>创建产品</h3>
    <el-form v-if="inited" class="eform" :rules="rules" :model="form" ref="form" label-width="100px">
      <el-form-item label="展示图片" prop="cover">
        <DataImage @change="(url) => {form.cover = url}" :image="form.cover"></DataImage>
      </el-form-item>
      <el-form-item label="排序权重" prop="weight">
        <el-input-number :min="0" :max="1000" v-model="form.weight" placeholder=""></el-input-number>
      </el-form-item>
      <el-form-item label="产品价格" prop="pricing">
        <el-input-number :precision="2" :min="1" v-model="form.pricing" placeholder=""></el-input-number>
      </el-form-item>
      <el-form-item label="产品分类" prop="current">
        <el-cascader @change="exp" v-model="form.current" :props="{label: 'name', value: 'id', children: 'childers'}" placeholder="" :options="categorys" filterable></el-cascader>
      </el-form-item>
      <el-form-item label="产品名称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="淘宝链接" prop="tb_link">
        <el-input v-model="form.tb_link"></el-input>
      </el-form-item>
      <el-form-item label="京东链接" prop="jd_link">
        <el-input v-model="form.jd_link"></el-input>
      </el-form-item>
      <el-form-item label="天猫链接" prop="tm_link">
        <el-input v-model="form.tm_link"></el-input>
      </el-form-item>
      <el-form-item label="产品描述" prop="describe">
        <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" v-model="form.describe"></el-input>
      </el-form-item>
      <el-form-item label="产品详情" prop="content">
        <Froala :content.sync="form.content"/>
      </el-form-item>
      <el-form-item>
        <router-link :to="{name: 'products'}">
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

