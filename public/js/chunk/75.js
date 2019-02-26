webpackJsonp([75],{

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(26)
/* script */
var __vue_script__ = __webpack_require__(558)
/* template */
var __vue_template__ = __webpack_require__(559)
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
Component.options.__file = "resources/js/admin/views/labels/form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9f8d6f36", Component.options)
  } else {
    hotAPI.reload("data-v-9f8d6f36", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 558:
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
          label: null,
          color: null,
          weight: 0,
          is_disabled: false
        };
      }
    },
    api: {
      type: Object
    }
  },
  data: function data() {
    return {
      loading: false,
      rules: {
        name: [{ required: true, message: '请输入名称', trigger: 'change' }],
        label: [{ required: true, message: '请输入标签文字', trigger: 'change' }],
        bg_color: [{ required: true, message: '请选择标签背景颜色', trigger: 'change' }],
        font_color: [{ required: true, message: '请选择标签文字颜色', trigger: 'change' }],
        weight: [{ required: true, message: '请输入排序权重', trigger: 'change' }],
        is_disabled: [{ required: true, message: '请选择是否禁用', trigger: 'change' }]
      }
    };
  },

  methods: {
    store: function store() {
      var _this = this;

      this.$refs['form'].validate(function (valid) {
        if (!valid) return false;
        _this.loading = true;
        var url = _this.form.id ? _this.api.update(_this.form.id) : _this.api.store;
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

/***/ 559:
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
        { attrs: { label: "名称", prop: "name" } },
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
        { attrs: { label: "标签文字", prop: "label" } },
        [
          _c("el-input", {
            model: {
              value: _vm.form.label,
              callback: function($$v) {
                _vm.$set(_vm.form, "label", $$v)
              },
              expression: "form.label"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: "背景颜色", prop: "bg_color" } },
        [
          _c("el-color-picker", {
            model: {
              value: _vm.form.bg_color,
              callback: function($$v) {
                _vm.$set(_vm.form, "bg_color", $$v)
              },
              expression: "form.bg_color"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: "文字颜色", prop: "font_color" } },
        [
          _c("el-color-picker", {
            model: {
              value: _vm.form.font_color,
              callback: function($$v) {
                _vm.$set(_vm.form, "font_color", $$v)
              },
              expression: "form.font_color"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: "排序权重", prop: "weight" } },
        [
          _c("el-input-number", {
            attrs: { min: 0, max: 1000 },
            model: {
              value: _vm.form.weight,
              callback: function($$v) {
                _vm.$set(_vm.form, "weight", $$v)
              },
              expression: "form.weight"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: "是否禁用", prop: "is_disabled" } },
        [
          _c("el-switch", {
            model: {
              value: _vm.form.is_disabled,
              callback: function($$v) {
                _vm.$set(_vm.form, "is_disabled", $$v)
              },
              expression: "form.is_disabled"
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
    require("vue-hot-reload-api")      .rerender("data-v-9f8d6f36", module.exports)
  }
}

/***/ })

});