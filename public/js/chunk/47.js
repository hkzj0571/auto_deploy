webpackJsonp([47],{

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(26)
/* script */
var __vue_script__ = __webpack_require__(498)
/* template */
var __vue_template__ = __webpack_require__(499)
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
Component.options.__file = "resources/js/admin/views/products/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8ff77c34", Component.options)
  } else {
    hotAPI.reload("data-v-8ff77c34", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      api: this.$api.products,
      current: undefined,
      visibles: {
        dialog: false
      },
      columns: [{ prop: 'id', label: 'ID' }, { prop: 'name', label: '名称' }, { prop: 'pricing', label: '价格' }, { prop: 'weight', label: '排序' }, { prop: 'created_at', label: '创建时间', is_date: true }, { prop: 'actions', label: '操作', type: 3, width: 300 }],
      filters: [{ key: 'id', name: 'ID', value: null, type: 0 }, { key: 'name', name: '名称', value: null, type: 0 }, { key: 'created_at', name: '创建时间', value: null, type: 1 }]
    };
  },

  methods: {
    destroy: function destroy(row) {
      var _this = this;

      this.$confirm('\u6B64\u64CD\u4F5C\u5C06\u5220\u9664\u6587\u7AE0\u300E' + row.title + '\u300F, \u662F\u5426\u7EE7\u7EED?', '删除文章', {
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
    }
  }
});

/***/ }),

/***/ 499:
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
                      "router-link",
                      {
                        attrs: {
                          to: {
                            name: "products.edit",
                            params: { id: scope.row.id }
                          }
                        }
                      },
                      [
                        _c(
                          "el-button",
                          {
                            attrs: {
                              size: "mini",
                              type: "primary",
                              icon: "mdi mdi-pencil-circle"
                            }
                          },
                          [_vm._v(" 编辑")]
                        )
                      ],
                      1
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
                "router-link",
                { attrs: { to: { name: "products.create" } } },
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
            ],
            1
          )
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
    require("vue-hot-reload-api")      .rerender("data-v-8ff77c34", module.exports)
  }
}

/***/ })

});