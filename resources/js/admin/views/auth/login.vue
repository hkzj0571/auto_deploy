<script>
  export default {
    data() {
      var validateMobile = (rule, value, callback) => {
        callback((/^1[3|5|7|8][0-9]\d{4,8}$/.test(value)) ? callback() : new Error('请输入正确的手机号码'))
      }
      return {
        form: {
          mobile: null,
          remember: true,
          password: null
        },
        rules: {
          mobile: [
            {required: true, message: '请输入你的手机号码', trigger: 'change'},
            {validator: validateMobile, trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入你的密码', trigger: 'change'},
            {min: 6, max: 30, message: '密码为 6 - 30 位', trigger: 'change'}
          ]
        },
        loading: false
      }
    },
    methods: {
      login() {
        this.$refs['form'].validate((valid) => {
          if (!valid) return false
          this.loading = true
          this.$http.post(this.$api.auth.login, this.form)
          .then(r => {
            this.$store.commit('LOGIND', r.data.token)
            this.$router.push({name: 'index'})
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


  <div class="login_box">
    <el-form ref="form" class="eform login_form" :model="form" :rules="rules">
      <h1 class="head">欢迎回来</h1>
      <el-form-item prop="mobile">
        <el-input size="large" v-model="form.mobile" prefix-icon="mdi mdi-cellphone" placeholder="请输入手机号码"></el-input>
      </el-form-item>
      <el-form-item prop="password" class="mb_20">
        <el-input size="large" v-model="form.password" type="password" prefix-icon="mdi mdi-lock" placeholder="请输入登录密码"></el-input>
      </el-form-item>
      <el-form-item class="mb_20">
        <el-checkbox v-model="form.remember">记住登录状态</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="loading" @click="login" icon="mdi mdi-adjust">登录</el-button>
      </el-form-item>
    </el-form>
    <p class="footer">© hkzj 2018..</p>
  </div>

</template>

<style lang="scss">
  .lls{
    background-image: url("http://qiniu.hkzj0571.top/hkzj002.jpg");

  }
  .login_box {
    width: 450px;
    margin: 0 auto;
    .login_form {
      width: 100%;
      background: #fff;
      border-radius: 10px;
      padding: 5px 65px 25px;
      box-sizing: border-box;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.025)!important;
      h1 {
        font-weight: 700;
        text-align: center;
        padding-bottom: 1rem;
        background: linear-gradient(to right, #FA709A, #f1d539);
        -webkit-background-clip: text;
        color: transparent;
      }
      .mb_20 {
        margin-bottom: 20px !important;
      }
      .el-checkbox {
        color: #c0c4cc;
        .el-checkbox__label {
          font-size: 13px;
        }
      }
      .el-input__inner {
        font-size: 13px;
        letter-spacing: 1px;
        &::placeholder {
          font-size: 13px;
        }
      }
      .el-input__prefix {
        i {
          font-size: 18px;
        }
      }
      .el-button--primary {
        width: 100%;
        font-size: 15px;
        padding: 16px 12px;
        border-radius: 3px;
        letter-spacing: 6px;
        border-radius: 100px;
      }
    }
    .footer {
      margin: 0;
      line-height: 2;
      color: #8790a5;
      font-size: 15px;
      margin-top: 1rem;
      text-align: center;
    }
  }
</style>
