<script>
  import DataImage from '../../components/Form/Image.vue'

  export default {
    props: {
      form: {
        type: Object,
        default() {
          return {
            id: null,
            name: null,
            weight: 0,
            parent_id: 0,
            is_index: false
          }
        }
      },
      api: {
        type: Object
      },
      parents: {
        type: Array
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
            {required: true, message: '请输入分类名称', trigger: 'change'}
          ],
          weight: [
            {required: true, message: '请输入排序权重', trigger: 'change'}
          ],
          parent_id: [
            {required: true, message: '请选择父级分类', trigger: 'change'}
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
    <el-form-item label="父级分类" prop="parent_id">
      <el-select  :disabled="form.id !== null" v-model="form.parent_id" filterable placeholder="请选择">
        <el-option label="顶级分类" :value="0"></el-option>
        <el-option v-for="(parent, index) in parents" :key="index" :label="parent.name" :value="parent.id">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="分类名称" prop="name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="排序权重" prop="weight">
      <el-input-number :min="0" :max="1000" v-model="form.weight" placeholder=""></el-input-number>
    </el-form-item>
    <el-form-item label="首页推荐" prop="is_index">
      <el-switch v-model="form.is_index"></el-switch>
    </el-form-item>
    <el-form-item>
      <el-button class="mdi mdi-check-circle" :loading="loading" @click="store" type="primary"> 提交</el-button>
    </el-form-item>
  </el-form>
</template>
