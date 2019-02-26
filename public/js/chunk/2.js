webpackJsonp([2,28],{

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(26)
/* script */
var __vue_script__ = __webpack_require__(403)
/* template */
var __vue_template__ = __webpack_require__(404)
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
Component.options.__file = "resources/js/admin/views/admins/form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-01965700", Component.options)
  } else {
    hotAPI.reload("data-v-01965700", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(26)
/* script */
var __vue_script__ = __webpack_require__(421)
/* template */
var __vue_template__ = __webpack_require__(422)
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
Component.options.__file = "resources/js/admin/views/admins/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d0568574", Component.options)
  } else {
    hotAPI.reload("data-v-d0568574", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(394)
}
var normalizeComponent = __webpack_require__(26)
/* script */
var __vue_script__ = __webpack_require__(396)
/* template */
var __vue_template__ = __webpack_require__(397)
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
Component.options.__file = "resources/js/admin/components/Form/Image.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-417d3aca", Component.options)
  } else {
    hotAPI.reload("data-v-417d3aca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(395);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(72)("37546627", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-417d3aca\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Image.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-417d3aca\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Image.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(71)(false);
// imports


// module
exports.push([module.i, "\n.data-uploader {\n  width: 178px;\n}\n.data-uploader .el-upload {\n    cursor: pointer;\n    overflow: hidden;\n    background: #fff;\n    border-radius: 6px;\n    position: relative;\n    border: 1px dashed #d9d9d9;\n    -webkit-transition: .3s ease all;\n    transition: .3s ease all;\n}\n.data-uploader .el-upload:hover {\n  border-color: #2b3452;\n}\n.data-uploader-icon {\n  font-size: 28px;\n  color: #8c939d;\n  width: 178px;\n  height: 178px;\n  line-height: 178px;\n  text-align: center;\n}\n.read {\n  width: 178px;\n  height: auto;\n  display: block;\n}\n", ""]);

// exports


/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['image'],
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

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
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
      attrs: {
        action: "/",
        "show-file-list": false,
        "before-upload": _vm.upload,
        "http-request": function() {}
      }
    },
    [
      _vm.image
        ? _c("img", { staticClass: "read", attrs: { src: _vm.image } })
        : _c("i", { staticClass: "el-icon-plus data-uploader-icon" })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-417d3aca", module.exports)
  }
}

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Form_Image_vue__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Form_Image_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Form_Image_vue__);



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    form: {
      type: Object,
      default: function _default() {
        return {
          id: null,
          avatar: null,
          name: null,
          mobile: null,
          password: null,
          is_disabled: false
        };
      }
    },
    api: {
      type: Object
    }
  },
  components: {
    DataImage: __WEBPACK_IMPORTED_MODULE_0__components_Form_Image_vue___default.a
  },
  data: function data() {
    var validateMobile = function validateMobile(rule, value, callback) {
      callback(/^1[3|5|7|8][0-9]\d{4,8}$/.test(value) && value.length === 11 ? callback() : new Error('请输入正确的手机号码'));
    };
    return {
      loading: false,
      rules: {
        name: [{ required: true, message: '请输入名称', trigger: 'change' }],
        avatar: [{ required: true, message: '请上传头像', trigger: 'change' }],
        mobile: [{ required: true, message: '请输入手机号码', trigger: 'change' }, { validator: validateMobile, trigger: 'blur' }],
        password: [{ required: !this.form.id, message: '请输入登录密码', trigger: 'change' }, { min: 6, message: '密码最小为 6 位数', trigger: 'change' }]
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

/***/ 404:
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
        { attrs: { label: "用户头像", prop: "avatar" } },
        [
          _c("DataImage", {
            attrs: { image: _vm.form.avatar },
            on: {
              change: function(url) {
                _vm.form.avatar = url
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: "用户名称", prop: "name" } },
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
        { attrs: { label: "手机号码", prop: "mobile" } },
        [
          _c("el-input", {
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
        { attrs: { label: "登录密码", prop: "password" } },
        [
          _c("el-input", {
            attrs: { type: "password" },
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
    require("vue-hot-reload-api")      .rerender("data-v-01965700", module.exports)
  }
}

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__form__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      api: this.$api.admins,
      current: undefined,
      visibles: {
        dialog: false
      },
      columns: [{ prop: 'id', label: 'ID' }, { prop: 'avatar', label: '头像', type: 2 }, { prop: 'name', label: '名称' }, { prop: 'mobile', label: '手机号码' }, { prop: 'is_disabled', label: '是否禁用', type: 1 }, { prop: 'created_at', label: '创建时间', is_date: true }, { prop: 'updated_at', label: '更新时间', is_date: true }, { prop: 'actions', label: '操作', type: 3, width: 300 }],
      filters: [{ key: 'id', name: 'ID', value: null, type: 0 }, { key: 'name', name: '名称', value: null, type: 0 }, { key: 'mobile', name: '手机号码', value: null, type: 0 }, { key: 'is_disabled', name: '是否禁用', value: null, type: 5, options: [{ name: '是', id: true }, { name: '否', id: false }] }, { key: 'created_at', name: '创建时间', value: null, type: 1 }]
    };
  },

  computed: {
    dialog_title: function dialog_title() {
      return this.current ? '编辑管理用户' : '新建管理用户';
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

      this.$confirm('\u6B64\u64CD\u4F5C\u5C06\u5220\u9664\u7528\u6237\u300E' + row.name + '\u300F, \u662F\u5426\u7EE7\u7EED?', '删除用户', {
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
    state: function state(row) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.$http.patch(_this2.api.state(row.id));

              case 2:
                _this2.$message.success('操作成功');
                row.is_disabled = !row.is_disabled;

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    changed: function changed() {
      this.visibles.dialog = false;
      this.$refs.table.fetch(1);
    }
  }
});

/***/ }),

/***/ 422:
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
                    ),
                    _vm._v(" "),
                    !scope.row.is_disabled
                      ? _c(
                          "el-button",
                          {
                            attrs: {
                              size: "mini",
                              type: "danger",
                              icon: "mdi mdi-account-alert"
                            },
                            on: {
                              click: function($event) {
                                _vm.state(scope.row)
                              }
                            }
                          },
                          [_vm._v(" 禁用")]
                        )
                      : _c(
                          "el-button",
                          {
                            attrs: {
                              size: "mini",
                              type: "success",
                              icon: "mdi mdi-account-check"
                            },
                            on: {
                              click: function($event) {
                                _vm.state(scope.row)
                              }
                            }
                          },
                          [_vm._v(" 启用")]
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
    require("vue-hot-reload-api")      .rerender("data-v-d0568574", module.exports)
  }
}

/***/ })

});