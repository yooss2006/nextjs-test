webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/yusunsang/Documents/\\u110B\\u1172\\u1109\\u116E\\u11AB\\u1109\\u1161\\u11BC/study/\\u110C\\u1166\\u1105\\u1169\\u110E\\u1169/nextjs-test/components/PostCard.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar PostCard = function PostCard(_ref) {\n  _s();\n\n  var post = _ref.post;\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      user = _useSelector.user;\n\n  var id = user === null || user === void 0 ? void 0 : user.id;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n      cover: post.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(PostImages, {\n        images: post.Images\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 34\n      }, _this),\n      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__[\"RetweetOutlined\"], {}, \"retweet\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__[\"HeartOutlined\"], {}, \"heart\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__[\"MessageOutlined\"], {}, \"comment\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Popover\"], {\n        content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(Button.Group, {\n          children: id && post.User.id === id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"Fragment\"], {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(Button, {\n              type: \"primery\",\n              children: \"\\uC218\\uC815\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 21\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(Button, {\n              type: \"danger\",\n              children: \"\\uC0AD\\uC81C\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 21\n            }, _this)]\n          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(Button, {\n            children: \"\\uC2E0\\uACE0\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 19\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 15\n        }, _this),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__[\"EllipsisOutlined\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 13\n        }, _this)\n      }, \"more\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 11\n      }, _this)],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Meta, {\n        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Avatar\"], {\n          children: post.User.nickname[0]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 19\n        }, _this),\n        title: post.User.nickname,\n        description: post.content\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(PostCard, \"HA6wZhGeXNR9tzJ3aDGGsGCdOyI=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"]];\n});\n\n_c = PostCard;\nPostCard.propTypes = {\n  post: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({\n    id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,\n    User: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,\n    content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,\n    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,\n    Comments: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object),\n    Images: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object)\n  }).isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"PostCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcz85MWRiIl0sIm5hbWVzIjpbIlBvc3RDYXJkIiwicG9zdCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwiaWQiLCJJbWFnZXMiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJudW1iZXIiLCJvYmplY3QiLCJzdHJpbmciLCJjcmVhdGVkQXQiLCJDb21tZW50cyIsImFycmF5T2YiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBYztFQUFBOztFQUFBLElBQVhDLElBQVcsUUFBWEEsSUFBVzs7RUFDN0IsbUJBQWlCQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7SUFBQSxPQUFXQSxLQUFLLENBQUNDLElBQWpCO0VBQUEsQ0FBRCxDQUE1QjtFQUFBLElBQVFBLElBQVIsZ0JBQVFBLElBQVI7O0VBQ0EsSUFBTUMsRUFBRSxHQUFHRCxJQUFILGFBQUdBLElBQUgsdUJBQUdBLElBQUksQ0FBRUMsRUFBakI7RUFDQSxvQkFDRTtJQUFBLHVCQUNFLHFFQUFDLHlDQUFEO01BQ0UsS0FBSyxFQUFFSixJQUFJLENBQUNLLE1BQUwsQ0FBWSxDQUFaLGtCQUFrQixxRUFBQyxVQUFEO1FBQVksTUFBTSxFQUFFTCxJQUFJLENBQUNLO01BQXpCO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FEM0I7TUFFRSxPQUFPLEVBQUUsY0FDUCxxRUFBQyxpRUFBRCxNQUFxQixTQUFyQjtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBRE8sZUFFUCxxRUFBQywrREFBRCxNQUFtQixPQUFuQjtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBRk8sZUFHUCxxRUFBQyxpRUFBRCxNQUFxQixTQUFyQjtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBSE8sZUFJUCxxRUFBQyw0Q0FBRDtRQUVFLE9BQU8sZUFDTCxxRUFBQyxNQUFELENBQVEsS0FBUjtVQUFBLFVBQ0dELEVBQUUsSUFBSUosSUFBSSxDQUFDTSxJQUFMLENBQVVGLEVBQVYsS0FBaUJBLEVBQXZCLGdCQUNDO1lBQUEsd0JBQ0UscUVBQUMsTUFBRDtjQUFRLElBQUksRUFBQyxTQUFiO2NBQUE7WUFBQTtjQUFBO2NBQUE7Y0FBQTtZQUFBLFNBREYsZUFFRSxxRUFBQyxNQUFEO2NBQVEsSUFBSSxFQUFDLFFBQWI7Y0FBQTtZQUFBO2NBQUE7Y0FBQTtjQUFBO1lBQUEsU0FGRjtVQUFBLGdCQURELGdCQU1DLHFFQUFDLE1BQUQ7WUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUE7UUFQSjtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBSEo7UUFBQSx1QkFlRSxxRUFBQyxrRUFBRDtVQUFBO1VBQUE7VUFBQTtRQUFBO01BZkYsR0FDTSxNQUROO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FKTyxDQUZYO01BQUEsdUJBeUJFLHFFQUFDLHlDQUFELENBQU0sSUFBTjtRQUNFLE1BQU0sZUFBRSxxRUFBQywyQ0FBRDtVQUFBLFVBQVNKLElBQUksQ0FBQ00sSUFBTCxDQUFVQyxRQUFWLENBQW1CLENBQW5CO1FBQVQ7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQURWO1FBRUUsS0FBSyxFQUFFUCxJQUFJLENBQUNNLElBQUwsQ0FBVUMsUUFGbkI7UUFHRSxXQUFXLEVBQUVQLElBQUksQ0FBQ1E7TUFIcEI7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQXpCRjtNQUFBO01BQUE7TUFBQTtJQUFBO0VBREY7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURGO0FBcUNELENBeENEOztHQUFNVCxRO1VBQ2FFLHVEOzs7S0FEYkYsUTtBQTBDTkEsUUFBUSxDQUFDVSxTQUFULEdBQXFCO0VBQ25CVCxJQUFJLEVBQUVVLGlEQUFTLENBQUNDLEtBQVYsQ0FBZ0I7SUFDcEJQLEVBQUUsRUFBRU0saURBQVMsQ0FBQ0UsTUFETTtJQUVwQk4sSUFBSSxFQUFFSSxpREFBUyxDQUFDRyxNQUZJO0lBR3BCTCxPQUFPLEVBQUVFLGlEQUFTLENBQUNJLE1BSEM7SUFJcEJDLFNBQVMsRUFBRUwsaURBQVMsQ0FBQ0csTUFKRDtJQUtwQkcsUUFBUSxFQUFFTixpREFBUyxDQUFDTyxPQUFWLENBQWtCUCxpREFBUyxDQUFDRyxNQUE1QixDQUxVO0lBTXBCUixNQUFNLEVBQUVLLGlEQUFTLENBQUNPLE9BQVYsQ0FBa0JQLGlEQUFTLENBQUNHLE1BQTVCO0VBTlksQ0FBaEIsRUFPSEs7QUFSZ0IsQ0FBckI7QUFVZW5CLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEVsbGlwc2lzT3V0bGluZWQsXG4gIEhlYXJ0T3V0bGluZWQsXG4gIE1lc3NhZ2VPdXRsaW5lZCxcbiAgUmV0d2VldE91dGxpbmVkLFxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCB7IFBvcG92ZXIgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSBcImFudGRcIjtcblxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuICBjb25zdCBpZCA9IHVzZXI/LmlkO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Q2FyZFxuICAgICAgICBjb3Zlcj17cG9zdC5JbWFnZXNbMF0gJiYgPFBvc3RJbWFnZXMgaW1hZ2VzPXtwb3N0LkltYWdlc30gLz59XG4gICAgICAgIGFjdGlvbnM9e1tcbiAgICAgICAgICA8UmV0d2VldE91dGxpbmVkIGtleT1cInJldHdlZXRcIiAvPixcbiAgICAgICAgICA8SGVhcnRPdXRsaW5lZCBrZXk9XCJoZWFydFwiIC8+LFxuICAgICAgICAgIDxNZXNzYWdlT3V0bGluZWQga2V5PVwiY29tbWVudFwiIC8+LFxuICAgICAgICAgIDxQb3BvdmVyXG4gICAgICAgICAgICBrZXk9XCJtb3JlXCJcbiAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICA8QnV0dG9uLkdyb3VwPlxuICAgICAgICAgICAgICAgIHtpZCAmJiBwb3N0LlVzZXIuaWQgPT09IGlkID8gKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWVyeVwiPuyImOyglTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJkYW5nZXJcIj7sgq3soJw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvQnV0dG9uLkdyb3VwPlxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxFbGxpcHNpc091dGxpbmVkIC8+XG4gICAgICAgICAgPC9Qb3BvdmVyPixcbiAgICAgICAgXX1cbiAgICAgID5cbiAgICAgICAgPENhcmQuTWV0YVxuICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57cG9zdC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cbiAgICAgICAgICB0aXRsZT17cG9zdC5Vc2VyLm5pY2tuYW1lfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtwb3N0LmNvbnRlbnR9XG4gICAgICAgIC8+XG4gICAgICA8L0NhcmQ+XG4gICAgICB7LyogPENvbW1lbnRGb3JtLz5cbiAgICAgIDxDb21tZW50Lz4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Qb3N0Q2FyZC5wcm9wVHlwZXMgPSB7XG4gIHBvc3Q6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgVXNlcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNyZWF0ZWRBdDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBDb21tZW50czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG4gICAgSW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgfSkuaXNSZXF1aXJlZCxcbn07XG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PostCard.js\n");

/***/ })

})