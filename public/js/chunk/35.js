webpackJsonp([35,59],{

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(26)
/* script */
var __vue_script__ = __webpack_require__(441)
/* template */
var __vue_template__ = __webpack_require__(442)
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
Component.options.__file = "resources/js/admin/views/banners/form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f6e4686a", Component.options)
  } else {
    hotAPI.reload("data-v-f6e4686a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(537)
}
var normalizeComponent = __webpack_require__(26)
/* script */
var __vue_script__ = __webpack_require__(539)
/* template */
var __vue_template__ = __webpack_require__(540)
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
Component.options.__file = "resources/js/admin/views/banners/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-73cbe1db", Component.options)
  } else {
    hotAPI.reload("data-v-73cbe1db", Component.options)
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

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(399)
}
var normalizeComponent = __webpack_require__(26)
/* script */
var __vue_script__ = __webpack_require__(401)
/* template */
var __vue_template__ = __webpack_require__(402)
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
Component.options.__file = "resources/js/admin/components/Form/Froala.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-de2080fa", Component.options)
  } else {
    hotAPI.reload("data-v-de2080fa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(400);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(72)("5c945439", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-de2080fa\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Froala.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-de2080fa\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Froala.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(71)(false);
// imports


// module
exports.push([module.i, "\n.fr-wrapper > div[style*='z-index: 9999'] {\n  display: none;\n}\n.fr-box .fr-toolbar {\n  /*border-top: none;*/\n  /*box-shadow: none;*/\n}\n.fr-box .fr-wrapper {\n  /*box-shadow: none !important;*/\n}\n.fr-box .fr-wrapper p {\n    line-height: 2;\n    letter-spacing: 1px;\n}\n.fr-box .fr-quick-insert .fr-floating-btn {\n  /*border: none;*/\n  height: 40px;\n  width: 40px;\n  -webkit-box-shadow: 0 10px 40px -10px rgba(0, 64, 128, 0.2);\n          box-shadow: 0 10px 40px -10px rgba(0, 64, 128, 0.2);\n}\n.fr-box .fr-quick-insert .fr-floating-btn svg {\n    fill: #a6a6a6;\n}\n.fr-box .fr-quick-insert .fr-floating-btn:hover svg {\n    fill: #333;\n}\n.fr-box .fr-qi-helper .fr-btn {\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n}\n", ""]);

// exports


/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    content: String,
    height: {
      type: Number,
      default: 400
    }
  },
  methods: {
    updateContent: function updateContent(val) {
      this.$emit('update:content', val);
    }
  },
  data: function data() {
    return {
      // current: this.content,
      config: {
        heightMin: this.height,
        language: 'zh_cn',
        charCounterCount: false,
        tooltips: false,
        toolbarButtons: ['fullscreen', 'paragraphFormat', 'bold', 'italic', 'underline', 'strikeThrough', 'fontSize', 'color', 'align', 'formatOL', 'formatUL', 'insertLink', 'insertImage', 'embedly'],
        imageUploadURL: '/api/' + this.$api.systems.upload,
        imageUploadParam: 'file',
        paragraphFormat: {
          N: '正文',
          H1: '标题 1',
          H2: '标题 2',
          H3: '标题 3',
          H4: '标题 4'
        },
        videoInsertButtons: ['videoBack', '|', 'videoByURL', 'videoEmbed'],
        requestHeaders: {
          Authorization: localStorage.token,
          accept: 'application/vnd.laradmin.admin+json'
        }
      }
    };
  }
});

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("froala", {
    attrs: { tag: "textarea", value: _vm.content, config: _vm.config },
    on: { input: _vm.updateContent }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-de2080fa", module.exports)
  }
}

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Form_Image_vue__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Form_Image_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Form_Image_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Form_Froala_vue__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Form_Froala_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Form_Froala_vue__);




/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    api: {
      type: Object
    },
    targets: {
      type: Array
    },
    form: {
      type: Object,
      default: function _default() {
        return {
          id: null,
          name: null,
          url: null,
          link: null,
          weight: 0,
          target: 0
        };
      }
    }
  },
  components: {
    DataImage: __WEBPACK_IMPORTED_MODULE_0__components_Form_Image_vue___default.a,
    DataFroala: __WEBPACK_IMPORTED_MODULE_1__components_Form_Froala_vue___default.a
  },
  data: function data() {
    return {
      loading: false,
      rules: {
        name: [{ required: true, message: '请输入轮播名称', trigger: 'change' }],
        url: [{ required: true, message: '请上传展示图片', trigger: 'change' }],
        weight: [{ required: false, message: '请输入排序权重', trigger: 'change' }],
        target: [{ required: false, message: '请选择打开方式', trigger: 'change' }]
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

/***/ 442:
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
        { attrs: { label: "轮播图片", prop: "url" } },
        [
          _c("DataImage", {
            attrs: { image: _vm.form.url },
            on: {
              change: function(url) {
                _vm.form.url = url
              }
            }
          }),
          _vm._v(" "),
          _c("p", { staticClass: "tips" }, [
            _c("i", { staticClass: "mdi mdi-information" }),
            _vm._v("显示图片，请上传比例适合的图片")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: "排序权重", prop: "weight" } },
        [
          _c("el-input-number", {
            attrs: { min: 0 },
            model: {
              value: _vm.form.weight,
              callback: function($$v) {
                _vm.$set(_vm.form, "weight", $$v)
              },
              expression: "form.weight"
            }
          }),
          _vm._v(" "),
          _c("p", { staticClass: "tips" }, [
            _c("i", { staticClass: "mdi mdi-information" }),
            _vm._v("数字越大排序越靠前")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: "打开方式", prop: "target" } },
        [
          _c(
            "el-select",
            {
              attrs: { filterable: "", placeholder: "" },
              model: {
                value: _vm.form.target,
                callback: function($$v) {
                  _vm.$set(_vm.form, "target", $$v)
                },
                expression: "form.target"
              }
            },
            _vm._l(_vm.targets, function(target) {
              return _c("el-option", {
                key: target.id,
                attrs: { label: target.name, value: target.id }
              })
            })
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: "轮播名称", prop: "name" } },
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
        { attrs: { label: "跳转链接", prop: "link" } },
        [
          _c("el-input", {
            model: {
              value: _vm.form.link,
              callback: function($$v) {
                _vm.$set(_vm.form, "link", $$v)
              },
              expression: "form.link"
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
    require("vue-hot-reload-api")      .rerender("data-v-f6e4686a", module.exports)
  }
}

/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(538);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(72)("5547d1e1", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-73cbe1db\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-73cbe1db\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(71)(false);
// imports


// module
exports.push([module.i, "\n.el-steps--simple {\n  padding: 10px 8%;\n  margin-bottom: 1.5rem;\n}\n.el-step.is-simple .el-step__title {\n  font-size: 13px;\n  line-height: 20px;\n  font-weight: 500;\n}\n.inlink {\n  max-width: 300px;\n  overflow: hidden;\n  white-space: nowrap;\n  display: inline-block;\n  text-overflow: ellipsis;\n}\n.i-tag {\n  background: #409EFF;\n  color: #fff;\n  font-weight: 700;\n  border-radius: 2px;\n}\n", ""]);

// exports


/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__form__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    var targets = [{ name: '当前页面打开', id: 0 }, { name: '在新页面打开', id: 1 }];
    return {
      targets: targets,
      api: this.$api.banners,
      current: undefined,
      visibles: {
        dialog: false
      },
      columns: [{ prop: 'id', label: 'ID', width: 50 }, { prop: 'url', label: '展示图片', type: 2, width: 120 }, { prop: 'name', label: '名称' }, { prop: 'weight', label: '排序权重', width: 80 }, { prop: 'link', label: '跳转链接', type: 3, width: 320 }, { prop: 'target', label: '打开方式', type: 3, width: 130 }, { prop: 'created_at', label: '创建时间', is_date: true, width: 100 }, { prop: 'actions', label: '操作', type: 3, width: 180 }],
      filters: [{ key: 'id', name: 'ID', value: null, type: 0 }, { key: 'name', name: '名称', value: null, type: 0 }, { key: 'target', name: '打开方式', value: null, type: 2, options: targets }, { key: 'created_at', name: '创建时间', value: null, type: 1 }]
    };
  },

  computed: {
    dialog_title: function dialog_title() {
      return this.current ? '编辑轮播' : '新建轮播';
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

      this.$confirm('\u6B64\u64CD\u4F5C\u5C06\u5220\u9664\u8F6E\u64AD\u300E' + row.name + '\u300F, \u662F\u5426\u7EE7\u7EED?', '删除轮播', {
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

/***/ 540:
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
              key: "link",
              fn: function(scope) {
                return _c("div", {}, [
                  _c(
                    "a",
                    {
                      staticClass: "inlink",
                      attrs: { href: scope.row.link, target: "_blank" }
                    },
                    [_vm._v(_vm._s(scope.row.link))]
                  )
                ])
              }
            },
            {
              key: "zone",
              fn: function(scope) {
                return _c(
                  "div",
                  {},
                  _vm._l(_vm.zones, function(zone) {
                    return zone.id == scope.row.zone
                      ? _c("el-tag", { key: zone.id, staticClass: "i-tag" }, [
                          _vm._v(_vm._s(zone.name))
                        ])
                      : _vm._e()
                  })
                )
              }
            },
            {
              key: "target",
              fn: function(scope) {
                return _c(
                  "div",
                  {},
                  _vm._l(_vm.targets, function(target) {
                    return target.id == scope.row.target
                      ? _c("el-tag", { key: target.id, staticClass: "i-tag" }, [
                          _vm._v(_vm._s(target.name))
                        ])
                      : _vm._e()
                  })
                )
              }
            },
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
            }
          }
        },
        [
          _c("DataForm", {
            attrs: { targets: _vm.targets, form: _vm.current, api: _vm.api },
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
    require("vue-hot-reload-api")      .rerender("data-v-73cbe1db", module.exports)
  }
}

/***/ })

});