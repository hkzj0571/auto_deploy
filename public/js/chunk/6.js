webpackJsonp([6,33],{

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(26)
/* script */
var __vue_script__ = __webpack_require__(412)
/* template */
var __vue_template__ = __webpack_require__(413)
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
Component.options.__file = "resources/js/admin/views/configs/form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d60ba73e", Component.options)
  } else {
    hotAPI.reload("data-v-d60ba73e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(26)
/* script */
var __vue_script__ = __webpack_require__(447)
/* template */
var __vue_template__ = __webpack_require__(448)
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
Component.options.__file = "resources/js/admin/views/configs/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-70eb9405", Component.options)
  } else {
    hotAPI.reload("data-v-70eb9405", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 412:
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
          alias: null,
          value: null,
          describe: null
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
        name: [{ required: true, message: '请输入Key', trigger: 'change' }],
        alias: [{ required: true, message: '请输入名称', trigger: 'change' }],
        value: [{ required: true, message: '请输入真值', trigger: 'change' }]
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

/***/ 413:
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
        { attrs: { label: "Key", prop: "name" } },
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
        { attrs: { label: "名称", prop: "alias" } },
        [
          _c("el-input", {
            model: {
              value: _vm.form.alias,
              callback: function($$v) {
                _vm.$set(_vm.form, "alias", $$v)
              },
              expression: "form.alias"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: "真值", prop: "value" } },
        [
          _c("el-input", {
            attrs: {
              type: "textarea",
              autosize: { minRows: 2, maxRows: 4 },
              placeholder: ""
            },
            model: {
              value: _vm.form.value,
              callback: function($$v) {
                _vm.$set(_vm.form, "value", $$v)
              },
              expression: "form.value"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: "描述", prop: "describe" } },
        [
          _c("el-input", {
            attrs: {
              type: "textarea",
              autosize: { minRows: 2, maxRows: 4 },
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
    require("vue-hot-reload-api")      .rerender("data-v-d60ba73e", module.exports)
  }
}

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__form__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      api: this.$api.configs,
      current: undefined,
      visibles: {
        dialog: false
      },
      columns: [{ prop: 'id', label: 'ID' }, { prop: 'name', label: 'Key' }, { prop: 'alias', label: '名称' }, { prop: 'value', label: '真值' }, { prop: 'describe', label: '描述' }, { prop: 'created_at', label: '创建时间', is_date: true }, { prop: 'updated_at', label: '更新时间', is_date: true }, { prop: 'actions', label: '操作', type: 3, width: 300 }],
      filters: [{ key: 'id', name: 'ID', value: null, type: 0 }, { key: 'name', name: 'Key', value: null, type: 0 }, { key: 'alias', name: '名称', value: null, type: 0 }, { key: 'created_at', name: '创建时间', value: null, type: 1 }]
    };
  },

  computed: {
    dialog_title: function dialog_title() {
      return this.current ? '编辑配置' : '新建配置';
    }
  },
  components: {
    DataForm: __WEBPACK_IMPORTED_MODULE_1__form___default.a
  },
  methods: {
    edit: function edit(row) {
      this.current = row;
      this.visibles.dialog = true;
    },
    destroy: function destroy(row) {
      var _this = this;

      this.$confirm('\u6B64\u64CD\u4F5C\u5C06\u5220\u9664\u914D\u7F6E\u300E' + row.name + '\u300F, \u662F\u5426\u7EE7\u7EED?', '删除配置', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'error'
      }).then(_asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$http.delete(_this.api.destroy(row.id));

              case 2:
                _this.$message.success('删除成功');
                _this.$refs.table.fetch(1);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))).catch(function () {});
    },
    changed: function changed() {
      this.visibles.dialog = false;
      this.$refs.table.fetch(1);
    }
  }
});

/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "data-table",
        {
          ref: "table",
          attrs: {
            _filters: _vm.filters,
            columns: _vm.columns,
            api: _vm.api.index
          },
          scopedSlots: _vm._u([
            {
              key: "actions",
              fn: function(scope) {
                return _c(
                  "div",
                  {},
                  [
                    _c(
                      "el-button",
                      {
                        attrs: {
                          size: "mini",
                          type: "primary",
                          icon: "mdi mdi-pencil-circle"
                        },
                        on: {
                          click: function($event) {
                            _vm.edit(scope.row)
                          }
                        }
                      },
                      [_vm._v(" 编辑")]
                    ),
                    _vm._v(" "),
                    _c(
                      "el-button",
                      {
                        attrs: {
                          size: "mini",
                          type: "danger",
                          icon: "mdi mdi-close-circle"
                        },
                        on: {
                          click: function($event) {
                            _vm.destroy(scope.row)
                          }
                        }
                      },
                      [_vm._v(" 删除")]
                    )
                  ],
                  1
                )
              }
            }
          ])
        },
        [
          _c(
            "div",
            { attrs: { slot: "buttons" }, slot: "buttons" },
            [
              _c(
                "el-button",
                {
                  attrs: { type: "success", icon: "mdi mdi-plus-circle" },
                  on: {
                    click: function($event) {
                      _vm.visibles.dialog = true
                    }
                  }
                },
                [_vm._v(" 新建")]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: {
            title: _vm.dialog_title,
            visible: _vm.visibles.dialog,
            width: "30%"
          },
          on: {
            "update:visible": function($event) {
              _vm.$set(_vm.visibles, "dialog", $event)
            },
            closed: function($event) {
              _vm.current = undefined
            }
          }
        },
        [
          _c("DataForm", {
            attrs: { api: _vm.api, form: _vm.current },
            on: { changed: _vm.changed }
          })
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
    require("vue-hot-reload-api")      .rerender("data-v-70eb9405", module.exports)
  }
}

/***/ })

});