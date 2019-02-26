webpackJsonp([5,30],{

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(26)
/* script */
var __vue_script__ = __webpack_require__(405)
/* template */
var __vue_template__ = __webpack_require__(409)
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
Component.options.__file = "resources/js/admin/views/books/form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-512cc5f0", Component.options)
  } else {
    hotAPI.reload("data-v-512cc5f0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(26)
/* script */
var __vue_script__ = __webpack_require__(443)
/* template */
var __vue_template__ = __webpack_require__(444)
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
Component.options.__file = "resources/js/admin/views/books/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7c6a383e", Component.options)
  } else {
    hotAPI.reload("data-v-7c6a383e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Form_File_vue__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Form_File_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Form_File_vue__);



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    form: {
      type: Object,
      default: function _default() {
        return {
          id: null,
          name: null,
          link: null
        };
      }
    },
    api: {
      type: Object
    }
  },
  components: {
    File: __WEBPACK_IMPORTED_MODULE_0__components_Form_File_vue___default.a
  },
  data: function data() {
    return {
      loading: false,
      rules: {
        name: [{ required: true, message: '请输入名称', trigger: 'change' }],
        link: [{ required: true, message: '请上文件', trigger: 'change' }]
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

/***/ 406:
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
Component.options.__file = "resources/js/admin/components/Form/File.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-79e338ec", Component.options)
  } else {
    hotAPI.reload("data-v-79e338ec", Component.options)
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['url'],
  data: function data() {
    return {
      loading: false
    };
  },

  methods: {
    upload: function upload(file) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var form, res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading = true;
                form = new FormData();

                form.append('file', file);
                _context.next = 5;
                return _this.$http.post(_this.$api.systems.upload, form);

              case 5:
                res = _context.sent;

                _this.$emit('change', res.data.url);
                _this.loading = false;
                return _context.abrupt('return', false);

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
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
    "div",
    [
      _vm.url
        ? _c(
            "a",
            { attrs: { href: _vm.url, target: "_blank" } },
            [
              _c("el-button", [
                _c("i", { staticClass: "mdi mdi-eye" }),
                _vm._v(" 预览文件")
              ])
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "el-upload",
        {
          directives: [
            {
              name: "loading",
              rawName: "v-loading",
              value: _vm.loading,
              expression: "loading"
            }
          ],
          staticClass: "data-uploader",
          staticStyle: { display: "inline-block", "margin-left": "12px" },
          attrs: {
            action: "/",
            "show-file-list": false,
            "before-upload": _vm.upload,
            "http-request": function() {}
          }
        },
        [
          _c("el-button", { attrs: { type: "primary" } }, [
            _c("i", { staticClass: "mdi mdi-upload" }),
            _vm._v(" " + _vm._s(_vm.url ? "重新上传" : "上传文件"))
          ])
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
    require("vue-hot-reload-api")      .rerender("data-v-79e338ec", module.exports)
  }
}

/***/ }),

/***/ 409:
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
        { attrs: { label: "说明文件", prop: "link" } },
        [
          _c("File", {
            attrs: { url: _vm.form.link },
            on: {
              change: function(url) {
                _vm.form.link = url
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: "文件名称", prop: "name" } },
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
    require("vue-hot-reload-api")      .rerender("data-v-512cc5f0", module.exports)
  }
}

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__form__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      api: this.$api.books,
      current: undefined,
      visibles: {
        dialog: false
      },
      columns: [{ prop: 'id', label: 'ID' }, { prop: 'name', label: '名称' }, { prop: 'link', label: '下载链接' }, { prop: 'created_at', label: '创建时间', is_date: true }, { prop: 'actions', label: '操作', type: 3, width: 300 }],
      filters: [{ key: 'id', name: 'ID', value: null, type: 0 }, { key: 'name', name: '名称', value: null, type: 0 }, { key: 'created_at', name: '创建时间', value: null, type: 1 }]
    };
  },

  computed: {
    dialog_title: function dialog_title() {
      return this.current ? '编辑说明书' : '新建说明书';
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

      this.$confirm('\u6B64\u64CD\u4F5C\u5C06\u5220\u9664\u8BF4\u660E\u4E66\u300E' + row.name + '\u300F, \u662F\u5426\u7EE7\u7EED?', '删除说明书', {
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

/***/ 444:
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
    require("vue-hot-reload-api")      .rerender("data-v-7c6a383e", module.exports)
  }
}

/***/ })

});