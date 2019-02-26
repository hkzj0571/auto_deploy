webpackJsonp([31],{

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(472)
}
var normalizeComponent = __webpack_require__(26)
/* script */
var __vue_script__ = __webpack_require__(474)
/* template */
var __vue_template__ = __webpack_require__(475)
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
Component.options.__file = "resources/js/admin/views/logs/show.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3b6686a4", Component.options)
  } else {
    hotAPI.reload("data-v-3b6686a4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(473);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(72)("0855e588", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3b6686a4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./show.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3b6686a4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./show.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(71)(false);
// imports


// module
exports.push([module.i, "\n.log-table .table-code {\n  float: left;\n  max-width: 90%;\n  font-size: 13px;\n  overflow: hidden;\n  padding: 4px 8px;\n  border-radius: 3px;\n  white-space: nowrap;\n  background: #f5f5f5;\n  display: inline-block;\n  text-overflow: ellipsis;\n  font-family: Menlo,Monaco,Consolas,\"Courier New\",monospace;\n}\n.log-table .table-pre {\n  width: 100%;\n  line-height: 2;\n  font-size: 13px;\n  padding: 4px 8px;\n  overflow: scroll;\n  border-radius: 3px;\n  background: #f5f5f5;\n  text-align: initial;\n  display: inline-block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-family: Menlo,Monaco,Consolas,\"Courier New\",monospace;\n}\n.log-table .EMERGENCY {\n  color: black;\n}\n.log-table .ALERT {\n  color: navy;\n}\n.log-table .CRITICAL {\n  color: maroon;\n}\n.log-table .CRITICAL {\n  color: maroon;\n}\n.log-table .ERROR {\n  color: #ff5959;\n}\n.log-table .WARNING {\n  color: orange;\n}\n.log-table .NOTICE {\n  color: #8790a5;\n}\n.log-table .INFO {\n  color: aqua;\n}\n.log-table .DEBUG {\n  color: green;\n}\n", ""]);

// exports


/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      columns: [{ prop: 'level', label: '等级', width: 80, type: 3 }, { prop: 'env', label: '环境', width: 80, type: 3 }, { prop: 'message', label: 'Message', type: 3 }, { prop: 'time', label: '发生时间', width: 150 }]
    };
  },

  methods: {}
});

/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("data-table", {
    ref: "table",
    staticClass: "log-table",
    attrs: {
      expand: true,
      filter: false,
      paginate: false,
      columns: _vm.columns,
      api: _vm.$api.logs.show(_vm.$route.params.log)
    },
    scopedSlots: _vm._u([
      {
        key: "level",
        fn: function(scope) {
          return _c("div", {}, [
            _c("b", { class: scope.row.level }, [
              _vm._v(_vm._s(scope.row.level))
            ])
          ])
        }
      },
      {
        key: "env",
        fn: function(scope) {
          return _c("div", {}, [_c("b", [_vm._v(_vm._s(scope.row.env))])])
        }
      },
      {
        key: "expand",
        fn: function(scope) {
          return _c("div", {}, [
            _c("pre", { class: "table-pre " + scope.row.level }, [
              _vm._v(_vm._s(scope.row.message) + " "),
              _c("br"),
              _vm._v(" " + _vm._s(scope.row.trace))
            ])
          ])
        }
      },
      {
        key: "message",
        fn: function(scope) {
          return _c("div", {}, [
            _c("code", { class: "table-code " + scope.row.level }, [
              _vm._v(_vm._s(scope.row.message))
            ])
          ])
        }
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3b6686a4", module.exports)
  }
}

/***/ })

});