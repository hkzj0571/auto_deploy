webpackJsonp([68],{

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(26)
/* script */
var __vue_script__ = __webpack_require__(435)
/* template */
var __vue_template__ = __webpack_require__(436)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/js/admin/views/services/form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5648b8a6", Component.options)
  } else {
    hotAPI.reload("data-v-5648b8a6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    form: {
      type: Object,
      default: function _default() {
        return {
          id: null,
          name: null,
          qq: null,
          type_id: null,
          nickname: null,
          describe: null
        };
      }
    },
    types: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      loading: false,
      rules: {
        name: [{ required: true, message: '请输入客服真实名称', trigger: 'change' }],
        nickname: [{ required: true, message: '请输入客服昵称', trigger: 'change' }],
        qq: [{ required: true, message: '请输入客服QQ', trigger: 'change' }],
        type_id: [{ required: true, message: '请选择客服类型', trigger: 'change' }]
      }
    };
  },

  methods: {
    store: function store() {
      var _this = this;

      this.$refs['form'].validate(function (valid) {
        if (!valid) return false;
        _this.loading = true;
        var url = _this.form.id ? _this.$api.services.update(_this.form.id) : _this.$api.services.store;
        var method = _this.form.id ? 'put' : 'post';
        _this.$http[method](url, _this.form).then(function (r) {
          _this.loading = false;
          _this.$message.success('操作成功');
          _this.$refs['form'].resetFields();
          _this.$emit('changed');
        }).catch(function (e) {
          _this.loading = false;
          _this.$message.error(e.data.message);
        });
      });
    }
  }
});

/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-form",
    {
      ref: "form",
      staticClass: "eform",
      attrs: { rules: _vm.rules, model: _vm.form, "label-width": "100px" }
    },
    [
      _c(
        "el-form-item",
        { attrs: { label: "真实名称", prop: "name" } },
        [
          _c("el-input", {
            model: {
              value: _vm.form.name,
              callback: function($$v) {
                _vm.$set(_vm.form, "name", $$v)
              },
              expression: "form.name"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: "客服昵称", prop: "nickname" } },
        [
          _c("el-input", {
            model: {
              value: _vm.form.nickname,
              callback: function($$v) {
                _vm.$set(_vm.form, "nickname", $$v)
              },
              expression: "form.nickname"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: "QQ 号码", prop: "qq" } },
        [
          _c("el-input", {
            model: {
              value: _vm.form.qq,
              callback: function($$v) {
                _vm.$set(_vm.form, "qq", $$v)
              },
              expression: "form.qq"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: "客服类型", prop: "type_id" } },
        [
          _c(
            "el-select",
            {
              attrs: { filterable: "", placeholder: "" },
              model: {
                value: _vm.form.type_id,
                callback: function($$v) {
                  _vm.$set(_vm.form, "type_id", $$v)
                },
                expression: "form.type_id"
              }
            },
            _vm._l(_vm.types, function(item) {
              return _c("el-option", {
                key: item.id,
                attrs: { label: item.name, value: item.id }
              })
            })
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: "客服描述", prop: "describe" } },
        [
          _c("el-input", {
            attrs: {
              type: "textarea",
              autosize: { minRows: 3, maxRows: 6 },
              placeholder: ""
            },
            model: {
              value: _vm.form.describe,
              callback: function($$v) {
                _vm.$set(_vm.form, "describe", $$v)
              },
              expression: "form.describe"
            }
          })
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
              staticClass: "mdi mdi-check-circle",
              attrs: { loading: _vm.loading, type: "primary" },
              on: { click: _vm.store }
            },
            [_vm._v(" 提交")]
          )
        ],
        1
      )
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
    require("vue-hot-reload-api")      .rerender("data-v-5648b8a6", module.exports)
  }
}

/***/ })

});