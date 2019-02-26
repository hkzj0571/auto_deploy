<script>
  import DataImage from '../../components/Form/Image.vue'
  import DataFroala from '../../components/Form/Froala.vue'

  export default {
    props: {
      api: {
        type: Object
      },
      targets: {
        type: Array
      },
      form: {
        type: Object,
        default() {
          return {
            id: null,
            name: null,
            url: null,
            link: null,
            weight: 0,
            target: 0
          }
        }
      }
    },
    components: {
      DataImage,
      DataFroala
    },
    data() {
      return {
        loading: false,
        rules: {
          name: [
            {required: true, message: '请输入轮播名称', trigger: 'change'}
          ],
          url: [
            {required: true, message: '请上传展示图片', trigger: 'change'}
          ],
          weight: [
            {required: false, message: '请输入排序权重', trigger: 'change'}
          ],
          target: [
            {required: false, message: '请选择打开方式', trigger: 'change'}
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
    <el-form-item label="轮播图片" prop="url">
      <DataImage @change="(url) => {form.url = url}" :image="form.url"></DataImage>
      <p class="tips"><i class="mdi mdi-information"></i>显示图片，请上传比例适合的图片</p>
    </el-form-item>
    <el-form-item label="排序权重" prop="weight">
      <el-input-number v-model="form.weight" :min="0"></el-input-number>
      <p class="tips"><i class="mdi mdi-information"></i>数字越大排序越靠前</p>
    </el-form-item>
    <el-form-item label="打开方式" prop="target">
      <el-select v-model="form.target" filterable placeholder="">
        <el-option
          v-for="target in targets"
          :key="target.id"
          :label="target.name"
          :value="target.id">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="轮播名称" prop="name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="跳转链接" prop="link">
      <el-input v-model="form.link"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button class="mdi mdi-check-circle" :loading="loading" @click="store" type="primary"> 提交</el-button>
    </el-form-item>
  </el-form>
</template>
