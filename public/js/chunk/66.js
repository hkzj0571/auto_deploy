webpackJsonp([66],{

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(437)
}
var normalizeComponent = __webpack_require__(26)
/* script */
var __vue_script__ = __webpack_require__(439)
/* template */
var __vue_template__ = __webpack_require__(440)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/admin/views/auth/login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-559fb7c1", Component.options)
  } else {
    hotAPI.reload("data-v-559fb7c1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(438);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(72)("a0a379c6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-559fb7c1\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-559fb7c1\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(71)(false);
// imports


// module
exports.push([module.i, "\n.lls {\n  background-image: url(\"http://qiniu.hkzj0571.top/hkzj002.jpg\");\n}\n.login_box {\n  width: 450px;\n  margin: 0 auto;\n}\n.login_box .login_form {\n    width: 100%;\n    background: #fff;\n    border-radius: 10px;\n    padding: 5px 65px 25px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.025) !important;\n            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.025) !important;\n}\n.login_box .login_form h1 {\n      font-weight: 700;\n      text-align: center;\n      padding-bottom: 1rem;\n      background: -webkit-gradient(linear, left top, right top, from(#FA709A), to(#f1d539));\n      background: linear-gradient(to right, #FA709A, #f1d539);\n      -webkit-background-clip: text;\n      color: transparent;\n}\n.login_box .login_form .mb_20 {\n      margin-bottom: 20px !important;\n}\n.login_box .login_form .el-checkbox {\n      color: #c0c4cc;\n}\n.login_box .login_form .el-checkbox .el-checkbox__label {\n        font-size: 13px;\n}\n.login_box .login_form .el-input__inner {\n      font-size: 13px;\n      letter-spacing: 1px;\n}\n.login_box .login_form .el-input__inner::-webkit-input-placeholder {\n        font-size: 13px;\n}\n.login_box .login_form .el-input__inner::-ms-input-placeholder {\n        font-size: 13px;\n}\n.login_box .login_form .el-input__inner::placeholder {\n        font-size: 13px;\n}\n.login_box .login_form .el-input__prefix i {\n      font-size: 18px;\n}\n.login_box .login_form .el-button--primary {\n      width: 100%;\n      font-size: 15px;\n      padding: 16px 12px;\n      border-radius: 3px;\n      letter-spacing: 6px;\n      border-radius: 100px;\n}\n.login_box .footer {\n    margin: 0;\n    line-height: 2;\n    color: #8790a5;\n    font-size: 15px;\n    margin-top: 1rem;\n    text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    var validateMobile = function validateMobile(rule, value, callback) {
      callback(/^1[3|5|7|8][0-9]\d{4,8}$/.test(value) ? callback() : new Error('请输入正确的手机号码'));
    };
    return {
      form: {
        mobile: null,
        remember: true,
        password: null
      },
      rules: {
        mobile: [{ required: true, message: '请输入你的手机号码', trigger: 'change' }, { validator: validateMobile, trigger: 'blur' }],
        password: [{ required: true, message: '请输入你的密码', trigger: 'change' }, { min: 6, max: 30, message: '密码为 6 - 30 位', trigger: 'change' }]
      },
      loading: false
    };
  },

  methods: {
    login: function login() {
      var _this = this;

      this.$refs['form'].validate(function (valid) {
        if (!valid) return false;
        _this.loading = true;
        _this.$http.post(_this.$api.auth.login, _this.form).then(function (r) {
          _this.$store.commit('LOGIND', r.data.token);
          _this.$router.push({ name: 'index' });
        }).catch(function (e) {
          _this.loading = false;
          _this.$message.error(e.data.message);
        });
      });
    }
  }
});

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "login_box" },
    [
      _c(
        "el-form",
        {
          ref: "form",
          staticClass: "eform login_form",
          attrs: { model: _vm.form, rules: _vm.rules }
        },
        [
          _c("h1", { staticClass: "head" }, [_vm._v("欢迎回来")]),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { prop: "mobile" } },
            [
              _c("el-input", {
                attrs: {
                  size: "large",
                  "prefix-icon": "mdi mdi-cellphone",
                  placeholder: "请输入手机号码"
                },
                model: {
                  value: _vm.form.mobile,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "mobile", $$v)
                  },
                  expression: "form.mobile"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { staticClass: "mb_20", attrs: { prop: "password" } },
            [
              _c("el-input", {
                attrs: {
                  size: "large",
                  type: "password",
                  "prefix-icon": "mdi mdi-lock",
                  placeholder: "请输入登录密码"
                },
                model: {
                  value: _vm.form.password,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "password", $$v)
                  },
                  expression: "form.password"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { staticClass: "mb_20" },
            [
              _c(
                "el-checkbox",
                {
                  model: {
                    value: _vm.form.remember,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "remember", $$v)
                    },
                    expression: "form.remember"
                  }
                },
                [_vm._v("记住登录状态")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            [
              _c(
                "el-button",
                {
                  attrs: {
                    type: "primary",
                    loading: _vm.loading,
                    icon: "mdi mdi-adjust"
                  },
                  on: { click: _vm.login }
                },
                [_vm._v("登录")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("p", { staticClass: "footer" }, [_vm._v("© hkzj 2018..")])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-559fb7c1", module.exports)
  }
}

/***/ })

});