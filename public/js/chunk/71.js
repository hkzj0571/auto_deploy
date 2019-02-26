webpackJsonp([71],{

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(26)
/* script */
var __vue_script__ = __webpack_require__(407)
/* template */
var __vue_template__ = __webpack_require__(408)
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
Component.options.__file = "resources/js/admin/views/regionals/lasts_form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-45839dc0", Component.options)
  } else {
    hotAPI.reload("data-v-45839dc0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 407:
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
          game_id: null,
          name: null
        };
      }
    },
    api: {
      type: Object
    },
    row: {
      type: Object
    },
    parent: {
      type: Object
    }
  },
  data: function data() {
    return {
      loading: false,
      is_multiple: false,
      rules: {
        name: [{ required: true, message: '请输入区服名称', trigger: 'change' }]
      }
    };
  },

  methods: {
    store: function store() {
      var _this = this;

      this.$refs['form'].validate(function (valid) {
        if (!valid) return false;
        _this.loading = true;
        _this.form.game_id = _this.row.id;
        _this.form.parent_id = _this.parent.id;
        if (!_this.form.id) {
          _this.form.is_multiple = _this.is_multiple;
        }
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

/***/ 408:
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
      _vm.row
        ? _c(
            "el-form-item",
            { attrs: { label: "所属游戏" } },
            [
              _c("el-input", {
                attrs: { disabled: true },
                model: {
                  value: _vm.row.name,
                  callback: function($$v) {
                    _vm.$set(_vm.row, "name", $$v)
                  },
                  expression: "row.name"
                }
              })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.parent
        ? _c(
            "el-form-item",
            { attrs: { label: "上级区服" } },
            [
              _c("el-input", {
                attrs: { disabled: true },
                model: {
                  value: _vm.parent.name,
                  callback: function($$v) {
                    _vm.$set(_vm.parent, "name", $$v)
                  },
                  expression: "parent.name"
                }
              })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !this.form.id
        ? _c(
            "el-form-item",
            { attrs: { label: "批量添加" } },
            [
              _c("el-switch", {
                attrs: {
                  "active-color": "#13ce66",
                  "inactive-color": "#ff4949"
                },
                model: {
                  value: _vm.is_multiple,
                  callback: function($$v) {
                    _vm.is_multiple = $$v
                  },
                  expression: "is_multiple"
                }
              })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: "区服名称", prop: "name" } },
        [
          !_vm.is_multiple
            ? _c("el-input", {
                model: {
                  value: _vm.form.name,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "name", $$v)
                  },
                  expression: "form.name"
                }
              })
            : _c(
                "div",
                [
                  _c("el-input", {
                    attrs: {
                      type: "textarea",
                      autosize: { minRows: 4, maxRows: 6 }
                    },
                    model: {
                      value: _vm.form.name,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "name", $$v)
                      },
                      expression: "form.name"
                    }
                  }),
                  _vm._v(" "),
                  _c("p", { staticClass: "tips" }, [
                    _vm._v(
                      '使用 "|" 符号分隔多个参数，例如 "重庆区|上海区|江苏区"'
                    )
                  ])
                ],
                1
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
    require("vue-hot-reload-api")      .rerender("data-v-45839dc0", module.exports)
  }
}

/***/ })

});