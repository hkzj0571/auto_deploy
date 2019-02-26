<script>
  import Preview from '../Layouts/Preview'

  export default {
    props: {
      images: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Preview
    },
    data() {
      return {
        loading: false
      }
    },
    methods: {
      toTop (index) {
        this.$emit('top', index)
      },
      toDelete(index) {
        this.$confirm('确认删除此图片吗?', '删除提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$emit('del', index)
        }).catch(() => {
        })
      },
      async upload(file) {
        this.loading = true
        let form = new FormData()
        form.append('file', file)
        let res = await this.$http.post(this.$api.systems.upload, form)
        this.$emit('uploaded', res.data.url)
        this.loading = false
        return false
      }
    }
  }
</script>

<template>
  <div>
    <div class="list_box" v-for="(image, index) in images" :key="index">
      <Preview :url="image"></Preview>
      <span class="primary_baged" v-if="index === 0">主图</span>
      <div>
        <a @click="toTop(index)" href="javascript:;"  v-if="index !== 0">
          <i class="mdi mdi-format-vertical-align-top"></i>
        </a>
        <a @click="toDelete(index)" class="del" href="javascript:;">
          <i class="mdi mdi-close-circle"></i>
        </a>
      </div>
    </div>
    <el-upload multiple v-loading="loading" class="data-uploader" action="/" :show-file-list="false" :before-upload="upload" :http-request="()=>{}">
      <i class="el-icon-plus data-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<style lang="scss">
  .data-uploader {
    width: 178px;
    vertical-align: top;
    display: inline-block;
    .el-upload {
      cursor: pointer;
      overflow: hidden;
      background: #fff;
      border-radius: 6px;
      position: relative;
      border: 1px dashed #d9d9d9;
      transition: .3s ease all;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.01);
      i {
        color: #d9d9d9;
        transition: .3s ease all;
      }
      &:hover {
        i {
          color: #2b3452;
        }
        border-color: #2b3452;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      }
    }
  }

  .data-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .list_box {
    margin-right: 1.5rem;
    margin-bottom: .5rem;
    display: inline-block;
    position: relative;
    span {
      vertical-align: middle;
    }
    img {
      width: 178px;
      height: auto;
      cursor: pointer;
      border-radius: 3px;
      display: inline-block;
      vertical-align: middle;
      transition: ease all .3s;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.05);
      &:hover {
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.25);
      }
    }
    .primary_baged {
      display: inline-block;
      background: #67C23A;
      color: #fff;
      font-size: 12px;
      line-height: 1;
      padding: 6px 12px;
      font-weight: 700;
      border-bottom-left-radius: 12px;
      border-top-right-radius: 12px;
      position: absolute;
      top: -8px;
      right: -6px;
    }
    div {
      text-align: center;
    }
    a {
      letter-spacing: 6px;
      i {
        color: #84b7ec;
        transition: ease all .3s;
        font-size: 18px;
        &:hover {
          color: #409EFF;
        }
      }
    }
    .del {
      i {
        color: #f1a1a1;
        &:hover {
          color: #F56C6C;
        }
      }
    }
  }
</style>
