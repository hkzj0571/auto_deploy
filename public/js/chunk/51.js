webpackJsonp([51],{

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(494)
}
var normalizeComponent = __webpack_require__(26)
/* script */
var __vue_script__ = __webpack_require__(496)
/* template */
var __vue_template__ = __webpack_require__(497)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-14550ca6"
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
Component.options.__file = "resources/js/admin/views/products/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-14550ca6", Component.options)
  } else {
    hotAPI.reload("data-v-14550ca6", Component.options)
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

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(495);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(72)("54c908bb", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-14550ca6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-14550ca6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(71)(false);
// imports


// module
exports.push([module.i, "\n.load[data-v-14550ca6] {\n  color: #a9a9a9;\n  font-size: 13px;\n  margin: 5rem auto;\n  text-align: center;\n}\nh3[data-v-14550ca6] {\n  margin-top: 0;\n  font-size: 1.5rem;\n  margin-left: 2rem;\n  margin-bottom: 1.5rem;\n}\n.eform[data-v-14550ca6] {\n  padding: 1rem;\n  background: #fff;\n  border-radius: 3px;\n  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.025) !important;\n          box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.025) !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Form_Froala_vue__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Form_Froala_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Form_Froala_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Form_Image_vue__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Form_Image_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Form_Image_vue__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      categorys: [],
      inited: false,
      form: {
        cover: null,
        name: null,
        describe: null,
        pricing: null,
        current: null,
        first_category_id: null,
        second_category_id: null,
        content: null,
        tb_link: null,
        jd_link: null,
        tm_link: null,
        weight: null
      },
      loading: false,
      rules: {
        cover: [{ required: true, message: '请上传展示图片', trigger: 'change' }],
        name: [{ required: true, message: '请输入产品名称', trigger: 'change' }],
        describe: [{ required: true, message: '请输入产品描述', trigger: 'change' }],
        content: [{ required: true, message: '请输入产品详情', trigger: 'change' }],
        weight: [{ required: true, message: '请输入排序权重', trigger: 'change' }]
      }
    };
  },

  components: {
    Froala: __WEBPACK_IMPORTED_MODULE_1__components_Form_Froala_vue___default.a,
    DataImage: __WEBPACK_IMPORTED_MODULE_2__components_Form_Image_vue___default.a
  },
  methods: {
    exp: function exp(val) {
      if (val.length !== 2) {
        return this.$message.error('分类选择错误');
      }
      this.form.first_category_id = val[0];
      this.form.second_category_id = val[1];
    },
    store: function store() {
      var _this = this;

      this.$refs['form'].validate(function (valid) {
        if (!valid) return false;
        _this.loading = true;
        _this.$http.put(_this.$api.products.update(_this.$route.params.id), _this.form).then(function (r) {
          _this.loading = false;
          _this.$message.success('操作成功');
          _this.$router.push({ name: 'products' });
        }).catch(function (e) {
          _this.loading = false;
          _this.$message.error(e.data.message);
        });
      });
    }
  },
  created: function created() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var _ref, data, res;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this2.$http.get(_this2.$api.categorys.all);

            case 2:
              _ref = _context.sent;
              data = _ref.data;

              _this2.categorys = data.categorys;
              _context.next = 7;
              return _this2.$http.get(_this2.$api.products.show(_this2.$route.params.id));

            case 7:
              res = _context.sent;

              _this2.form = res.data;
              console.log(_this2.form);
              _this2.inited = true;

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    }))();
  }
});

/***/ }),

/***/ 497:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h3", [_vm._v("编辑产品")]),
      _vm._v(" "),
      _vm.inited
        ? _c(
            "el-form",
            {
              ref: "form",
              staticClass: "eform",
              attrs: {
                rules: _vm.rules,
                model: _vm.form,
                "label-width": "100px"
              }
            },
            [
              _c(
                "el-form-item",
                { attrs: { label: "展示图片", prop: "cover" } },
                [
                  _c("DataImage", {
                    attrs: { image: _vm.form.cover },
                    on: {
                      change: function(url) {
                        _vm.form.cover = url
                      }
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
                    attrs: { min: 0, max: 1000, placeholder: "" },
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
                { attrs: { label: "产品价格", prop: "pricing" } },
                [
                  _c("el-input-number", {
                    attrs: { precision: 2, min: 1, placeholder: "" },
                    model: {
                      value: _vm.form.pricing,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "pricing", $$v)
                      },
                      expression: "form.pricing"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "产品分类", prop: "current" } },
                [
                  _c("el-cascader", {
                    attrs: {
                      props: {
                        label: "name",
                        value: "id",
                        children: "childers"
                      },
                      placeholder: "",
                      options: _vm.categorys,
                      filterable: ""
                    },
                    on: { change: _vm.exp },
                    model: {
                      value: _vm.form.current,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "current", $$v)
                      },
                      expression: "form.current"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "产品名称", prop: "name" } },
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
                { attrs: { label: "淘宝链接", prop: "tb_link" } },
                [
                  _c("el-input", {
                    model: {
                      value: _vm.form.tb_link,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "tb_link", $$v)
                      },
                      expression: "form.tb_link"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "京东链接", prop: "jd_link" } },
                [
                  _c("el-input", {
                    model: {
                      value: _vm.form.jd_link,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "jd_link", $$v)
                      },
                      expression: "form.jd_link"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "天猫链接", prop: "tm_link" } },
                [
                  _c("el-input", {
                    model: {
                      value: _vm.form.tm_link,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "tm_link", $$v)
                      },
                      expression: "form.tm_link"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "产品描述", prop: "describe" } },
                [
                  _c("el-input", {
                    attrs: {
                      type: "textarea",
                      autosize: { minRows: 2, maxRows: 4 }
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
                { attrs: { label: "产品详情", prop: "content" } },
                [
                  _c("Froala", {
                    attrs: { content: _vm.form.content },
                    on: {
                      "update:content": function($event) {
                        _vm.$set(_vm.form, "content", $event)
                      }
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
                    "router-link",
                    { attrs: { to: { name: "products" } } },
                    [
                      _c("el-button", { staticClass: "mdi mdi-chevron-left" }, [
                        _vm._v(" 返回")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
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
        : _c("p", { staticClass: "load" }, [
            _c("i", { staticClass: "el-icon-loading" }),
            _vm._v(" 数据加载中")
          ])
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
    require("vue-hot-reload-api")      .rerender("data-v-14550ca6", module.exports)
  }
}

/***/ })

});