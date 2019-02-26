webpackJsonp([39],{

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(415)
}
var normalizeComponent = __webpack_require__(26)
/* script */
var __vue_script__ = __webpack_require__(417)
/* template */
var __vue_template__ = __webpack_require__(418)
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
Component.options.__file = "resources/js/admin/components/Layouts/ProgressCard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fe60bc24", Component.options)
  } else {
    hotAPI.reload("data-v-fe60bc24", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(416);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(72)("a83d7b10", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fe60bc24\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProgressCard.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fe60bc24\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProgressCard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(71)(false);
// imports


// module
exports.push([module.i, "\n.process_card {\n  text-align: center;\n}\n.process_card h1 {\n    font-size: 2.5rem !important;\n}\n.process_card i {\n    margin-right: 3px;\n}\n.process_card h3 {\n    margin-top: 0;\n    font-size: 13px;\n    text-align: left;\n}\n.process_card h3 .r {\n      float: right;\n}\n.process_card .el-progress {\n    margin-top: 1rem;\n    width: 100% !important;\n    height: 100% !important;\n}\n.process_card .el-progress .el-progress-circle {\n      width: 100% !important;\n      height: 100% !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    color: String,
    title: String,
    _class: String,
    width: {
      type: Number,
      default: 150
    },
    right: {
      type: String,
      default: null
    },
    percentage: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      process: 0,
      interval: null
    };
  },
  created: function created() {
    this.interval = setInterval(this.calculate, 20);
  },

  methods: {
    calculate: function calculate() {
      if (this.percentage <= this.process) return clearInterval(this.interval);
      this.process++;
    }
  }
});

/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-card",
    { staticClass: "process_card" },
    [
      _c("h3", { style: { color: _vm.color } }, [
        _c("i", { class: _vm._class, style: { color: _vm.color } }),
        _vm._v(_vm._s(_vm.title) + " "),
        _c("span", {
          style: { color: _vm.color },
          domProps: { textContent: _vm._s(_vm.right) }
        })
      ]),
      _vm._v(" "),
      _c(
        "el-progress",
        {
          attrs: {
            color: _vm.color,
            width: _vm.width,
            type: "circle",
            percentage: _vm.process,
            status: "text"
          }
        },
        [
          _c("h1", { style: { color: _vm.color } }, [
            _vm._v(_vm._s(_vm.process) + "%")
          ])
        ]
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
    require("vue-hot-reload-api")      .rerender("data-v-fe60bc24", module.exports)
  }
}

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(504)
}
var normalizeComponent = __webpack_require__(26)
/* script */
var __vue_script__ = __webpack_require__(506)
/* template */
var __vue_template__ = __webpack_require__(507)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4a780210"
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
Component.options.__file = "resources/js/admin/views/systems/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4a780210", Component.options)
  } else {
    hotAPI.reload("data-v-4a780210", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(505);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(72)("9dc8875a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4a780210\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4a780210\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(71)(false);
// imports


// module
exports.push([module.i, "\n.el-col-8[data-v-4a780210] {\n  margin-bottom: 1rem;\n}\n.el-col-12 h1[data-v-4a780210] {\n  margin-top: 0;\n  font-size: 15px;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #f5f5f5;\n}\n.el-col-12 .el-card p[data-v-4a780210] {\n  font-size: 13px;\n}\n.el-col-12 .el-card p span[data-v-4a780210]:first-child {\n    width: 100px;\n    font-weight: 700;\n    display: inline-block;\n}\n.el-col-12 .el-card p span[data-v-4a780210]:last-child {\n    font-weight: 400;\n}\n", ""]);

// exports


/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layouts_ProgressCard__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layouts_ProgressCard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Layouts_ProgressCard__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      info: {}
    };
  },

  components: {
    ProgressCard: __WEBPACK_IMPORTED_MODULE_1__components_Layouts_ProgressCard___default.a
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.$http.get(_this.$api.systems.information);

            case 2:
              _this.info = _context.sent.data;

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "system_info" },
    [
      _c(
        "el-row",
        { attrs: { gutter: 20 } },
        [
          _c(
            "el-col",
            { attrs: { span: 12 } },
            [
              _c("el-card", [
                _c("h1", [_vm._v("系统信息")]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [_vm._v("系统信息:")]),
                  _c("span", { domProps: { textContent: _vm._s(_vm.info.os) } })
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [_vm._v("服务器地址:")]),
                  _c("span", {
                    domProps: { textContent: _vm._s(_vm.info.server_addr) }
                  })
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [_vm._v("服务器域名")]),
                  _vm._v(" "),
                  _c("span", {
                    domProps: { textContent: _vm._s(_vm.info.server_name) }
                  })
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [_vm._v("服务器端口:")]),
                  _c("span", {
                    domProps: { textContent: _vm._s(_vm.info.server_port) }
                  })
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [_vm._v("服务器驱动:")]),
                  _c("span", {
                    domProps: { textContent: _vm._s(_vm.info.server_soft) }
                  })
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [_vm._v("PHP版本信息:")]),
                  _c("span", {
                    domProps: { textContent: _vm._s(_vm.info.php_version) }
                  })
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [_vm._v("PHP运行模式:")]),
                  _c("span", {
                    domProps: { textContent: _vm._s(_vm.info.php_runer) }
                  })
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [_vm._v("PHP上传限制:")]),
                  _c("span", {
                    domProps: { textContent: _vm._s(_vm.info.php_max_upload) }
                  })
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [_vm._v("PHP缓存驱动:")]),
                  _c("span", {
                    domProps: { textContent: _vm._s(_vm.info.cache_driver) }
                  })
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [_vm._v("数据库字符")]),
                  _c("span", {
                    domProps: { textContent: _vm._s(_vm.info.database_charset) }
                  })
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [_vm._v("数据库地址:")]),
                  _c("span", {
                    domProps: { textContent: _vm._s(_vm.info.database_host) }
                  })
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [_vm._v("数据库名称:")]),
                  _c("span", {
                    domProps: { textContent: _vm._s(_vm.info.database_name) }
                  })
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [_vm._v("数据库端口:")]),
                  _c("span", {
                    domProps: { textContent: _vm._s(_vm.info.database_port) }
                  })
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [_vm._v("数据库类型:")]),
                  _c("span", {
                    domProps: { textContent: _vm._s(_vm.info.database_type) }
                  })
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [_vm._v("调试模式:")]),
                  _c("span", {
                    domProps: { textContent: _vm._s(_vm.info.debug) }
                  })
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-col",
            { attrs: { span: 12 } },
            [
              _c(
                "el-col",
                { attrs: { span: 8 } },
                [
                  _c("ProgressCard", {
                    attrs: {
                      color: "#12caad",
                      title: "CPU使用率",
                      _class: "mdi mdi-google-analytics",
                      percentage: Math.floor(Math.random() * (80 - 1) + 1)
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-col",
                { attrs: { span: 8 } },
                [
                  _c("ProgressCard", {
                    attrs: {
                      color: "#ff8400",
                      title: "虚拟内存使用率",
                      _class: "mdi mdi-heart-pulse",
                      percentage: Math.floor(Math.random() * (80 - 1) + 1)
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-col",
                { attrs: { span: 8 } },
                [
                  _c("ProgressCard", {
                    attrs: {
                      color: "#4a9ff5",
                      title: "实际内存使用率",
                      _class: "mdi mdi-hockey-puck",
                      percentage: Math.floor(Math.random() * (80 - 1) + 1)
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-col",
                { attrs: { span: 8 } },
                [
                  _c("ProgressCard", {
                    attrs: {
                      color: "#7d85ef",
                      title: "带宽使用率",
                      _class: "mdi mdi-houzz-box",
                      percentage: Math.floor(Math.random() * (80 - 1) + 1)
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-col",
                { attrs: { span: 8 } },
                [
                  _c("ProgressCard", {
                    attrs: {
                      color: "#f30e5c",
                      title: "硬盘使用率",
                      _class: "mdi mdi-keg",
                      percentage: Math.floor(Math.random() * (80 - 1) + 1)
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-col",
                { attrs: { span: 8 } },
                [
                  _c("ProgressCard", {
                    attrs: {
                      color: "#ff5f5f",
                      title: "IO读取效率",
                      _class: "mdi mdi-movie",
                      percentage: Math.floor(Math.random() * (80 - 1) + 1)
                    }
                  })
                ],
                1
              )
            ],
            1
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
    require("vue-hot-reload-api")      .rerender("data-v-4a780210", module.exports)
  }
}

/***/ })

});