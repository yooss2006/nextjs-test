webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PostImages */ \"./components/PostImages.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/yusunsang/Documents/\\u110B\\u1172\\u1109\\u116E\\u11AB\\u1109\\u1161\\u11BC/study/\\u110C\\u1166\\u1105\\u1169\\u110E\\u1169/nextjs-test/components/PostCard.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar PostCard = function PostCard(_ref) {\n  _s();\n\n  var post = _ref.post;\n  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(function (state) {\n    var _state$user$me;\n\n    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;\n  });\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      liked = _useState[0],\n      setLiked = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      commentFormOpened = _useState2[0],\n      setCommentFormOpened = _useState2[1];\n\n  var onToggleLike = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    setLiked(function (prev) {\n      return !prev;\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"div\", {\n    style: {\n      marginBottom: 20\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n      cover: post.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(_PostImages__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        images: post.Images\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 34\n      }, _this),\n      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__[\"RetweetOutlined\"], {}, \"retweet\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 11\n      }, _this), liked ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__[\"HeartTwoTone\"], {\n        twoToneColor: \"#eb2f96\",\n        onclick: onToggleLike\n      }, \"heart\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 13\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__[\"HeartOutlined\"], {\n        onclick: onToggleLike\n      }, \"heart\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__[\"MessageOutlined\"], {}, \"comment\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Popover\"], {\n        content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"].Group, {\n          children: id && post.User.id === id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"Fragment\"], {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n              type: \"primery\",\n              children: \"\\uC218\\uC815\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 21\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n              type: \"danger\",\n              children: \"\\uC0AD\\uC81C\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 44,\n              columnNumber: 21\n            }, _this)]\n          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n            type: \"danger\",\n            children: \"\\uC2E0\\uACE0\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 19\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 15\n        }, _this),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__[\"EllipsisOutlined\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 13\n        }, _this)\n      }, \"more\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 11\n      }, _this)],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Meta, {\n        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Avatar\"], {\n          children: post.User.nickname[0]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 19\n        }, _this),\n        title: post.User.nickname,\n        description: post.content\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(PostCard, \"5GHZvzSEFqnax8c83kZ+cozV5Z0=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"]];\n});\n\n_c = PostCard;\nPostCard.propTypes = {\n  post: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({\n    id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,\n    User: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,\n    content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,\n    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,\n    Comments: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object),\n    Images: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object)\n  }).isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"PostCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcz85MWRiIl0sIm5hbWVzIjpbIlBvc3RDYXJkIiwicG9zdCIsImlkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsInVzZVN0YXRlIiwibGlrZWQiLCJzZXRMaWtlZCIsImNvbW1lbnRGb3JtT3BlbmVkIiwic2V0Q29tbWVudEZvcm1PcGVuZWQiLCJvblRvZ2dsZUxpa2UiLCJ1c2VDYWxsYmFjayIsInByZXYiLCJtYXJnaW5Cb3R0b20iLCJJbWFnZXMiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJudW1iZXIiLCJvYmplY3QiLCJzdHJpbmciLCJjcmVhdGVkQXQiLCJDb21tZW50cyIsImFycmF5T2YiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFjO0VBQUE7O0VBQUEsSUFBWEMsSUFBVyxRQUFYQSxJQUFXO0VBQzdCLElBQU1DLEVBQUUsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0lBQUE7O0lBQUEseUJBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxFQUF0QixtREFBVyxlQUFlSixFQUExQjtFQUFBLENBQUQsQ0FBdEI7O0VBQ0EsZ0JBQTBCSyxzREFBUSxDQUFDLEtBQUQsQ0FBbEM7RUFBQSxJQUFPQyxLQUFQO0VBQUEsSUFBY0MsUUFBZDs7RUFDQSxpQkFBa0RGLHNEQUFRLENBQUMsS0FBRCxDQUExRDtFQUFBLElBQU9HLGlCQUFQO0VBQUEsSUFBMEJDLG9CQUExQjs7RUFDQSxJQUFNQyxZQUFZLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtJQUNyQ0osUUFBUSxDQUFDLFVBQUNLLElBQUQ7TUFBQSxPQUFVLENBQUNBLElBQVg7SUFBQSxDQUFELENBQVI7RUFDRCxDQUYrQixFQUU3QixFQUY2QixDQUFoQztFQUdBLG9CQUNFO0lBQUssS0FBSyxFQUFFO01BQUVDLFlBQVksRUFBRTtJQUFoQixDQUFaO0lBQUEsdUJBQ0UscUVBQUMseUNBQUQ7TUFDRSxLQUFLLEVBQUVkLElBQUksQ0FBQ2UsTUFBTCxDQUFZLENBQVosa0JBQWtCLHFFQUFDLG1EQUFEO1FBQVksTUFBTSxFQUFFZixJQUFJLENBQUNlO01BQXpCO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FEM0I7TUFFRSxPQUFPLEVBQUUsY0FDUCxxRUFBQyxpRUFBRCxNQUFxQixTQUFyQjtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBRE8sRUFFUFIsS0FBSyxnQkFDSCxxRUFBQyw4REFBRDtRQUNFLFlBQVksRUFBQyxTQURmO1FBR0UsT0FBTyxFQUFFSTtNQUhYLEdBRU0sT0FGTjtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBREcsZ0JBT0gscUVBQUMsK0RBQUQ7UUFBMkIsT0FBTyxFQUFFQTtNQUFwQyxHQUFtQixPQUFuQjtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBVEssZUFXUCxxRUFBQyxpRUFBRCxNQUFxQixTQUFyQjtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBWE8sZUFZUCxxRUFBQyw0Q0FBRDtRQUVFLE9BQU8sZUFDTCxxRUFBQywyQ0FBRCxDQUFRLEtBQVI7VUFBQSxVQUNHVixFQUFFLElBQUlELElBQUksQ0FBQ2dCLElBQUwsQ0FBVWYsRUFBVixLQUFpQkEsRUFBdkIsZ0JBQ0M7WUFBQSx3QkFDRSxxRUFBQywyQ0FBRDtjQUFRLElBQUksRUFBQyxTQUFiO2NBQUE7WUFBQTtjQUFBO2NBQUE7Y0FBQTtZQUFBLFNBREYsZUFFRSxxRUFBQywyQ0FBRDtjQUFRLElBQUksRUFBQyxRQUFiO2NBQUE7WUFBQTtjQUFBO2NBQUE7Y0FBQTtZQUFBLFNBRkY7VUFBQSxnQkFERCxnQkFNQyxxRUFBQywyQ0FBRDtZQUFRLElBQUksRUFBQyxRQUFiO1lBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBO1FBUEo7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQUhKO1FBQUEsdUJBZUUscUVBQUMsa0VBQUQ7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQWZGLEdBQ00sTUFETjtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBWk8sQ0FGWDtNQUFBLHVCQWlDRSxxRUFBQyx5Q0FBRCxDQUFNLElBQU47UUFDRSxNQUFNLGVBQUUscUVBQUMsMkNBQUQ7VUFBQSxVQUFTRCxJQUFJLENBQUNnQixJQUFMLENBQVVDLFFBQVYsQ0FBbUIsQ0FBbkI7UUFBVDtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBRFY7UUFFRSxLQUFLLEVBQUVqQixJQUFJLENBQUNnQixJQUFMLENBQVVDLFFBRm5CO1FBR0UsV0FBVyxFQUFFakIsSUFBSSxDQUFDa0I7TUFIcEI7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQWpDRjtNQUFBO01BQUE7TUFBQTtJQUFBO0VBREY7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURGO0FBNkNELENBcEREOztHQUFNbkIsUTtVQUNPRyx1RDs7O0tBRFBILFE7QUFzRE5BLFFBQVEsQ0FBQ29CLFNBQVQsR0FBcUI7RUFDbkJuQixJQUFJLEVBQUVvQixpREFBUyxDQUFDQyxLQUFWLENBQWdCO0lBQ3BCcEIsRUFBRSxFQUFFbUIsaURBQVMsQ0FBQ0UsTUFETTtJQUVwQk4sSUFBSSxFQUFFSSxpREFBUyxDQUFDRyxNQUZJO0lBR3BCTCxPQUFPLEVBQUVFLGlEQUFTLENBQUNJLE1BSEM7SUFJcEJDLFNBQVMsRUFBRUwsaURBQVMsQ0FBQ0csTUFKRDtJQUtwQkcsUUFBUSxFQUFFTixpREFBUyxDQUFDTyxPQUFWLENBQWtCUCxpREFBUyxDQUFDRyxNQUE1QixDQUxVO0lBTXBCUixNQUFNLEVBQUVLLGlEQUFTLENBQUNPLE9BQVYsQ0FBa0JQLGlEQUFTLENBQUNHLE1BQTVCO0VBTlksQ0FBaEIsRUFPSEs7QUFSZ0IsQ0FBckI7QUFVZTdCLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEVsbGlwc2lzT3V0bGluZWQsXG4gIEhlYXJ0T3V0bGluZWQsXG4gIEhlYXJ0VHdvVG9uZSxcbiAgTWVzc2FnZU91dGxpbmVkLFxuICBSZXR3ZWV0T3V0bGluZWQsXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0IHsgQ2FyZCwgQXZhdGFyLCBCdXR0b24sIFBvcG92ZXIgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gXCIuL1Bvc3RJbWFnZXNcIjtcblxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcbiAgY29uc3QgaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubWU/LmlkKTtcbiAgY29uc3QgW2xpa2VkLCBzZXRMaWtlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjb21tZW50Rm9ybU9wZW5lZCwgc2V0Q29tbWVudEZvcm1PcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBvblRvZ2dsZUxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0TGlrZWQoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fT5cbiAgICAgIDxDYXJkXG4gICAgICAgIGNvdmVyPXtwb3N0LkltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuSW1hZ2VzfSAvPn1cbiAgICAgICAgYWN0aW9ucz17W1xuICAgICAgICAgIDxSZXR3ZWV0T3V0bGluZWQga2V5PVwicmV0d2VldFwiIC8+LFxuICAgICAgICAgIGxpa2VkID8gKFxuICAgICAgICAgICAgPEhlYXJ0VHdvVG9uZVxuICAgICAgICAgICAgICB0d29Ub25lQ29sb3I9XCIjZWIyZjk2XCJcbiAgICAgICAgICAgICAga2V5PVwiaGVhcnRcIlxuICAgICAgICAgICAgICBvbmNsaWNrPXtvblRvZ2dsZUxpa2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8SGVhcnRPdXRsaW5lZCBrZXk9XCJoZWFydFwiIG9uY2xpY2s9e29uVG9nZ2xlTGlrZX0gLz5cbiAgICAgICAgICApLFxuICAgICAgICAgIDxNZXNzYWdlT3V0bGluZWQga2V5PVwiY29tbWVudFwiIC8+LFxuICAgICAgICAgIDxQb3BvdmVyXG4gICAgICAgICAgICBrZXk9XCJtb3JlXCJcbiAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICA8QnV0dG9uLkdyb3VwPlxuICAgICAgICAgICAgICAgIHtpZCAmJiBwb3N0LlVzZXIuaWQgPT09IGlkID8gKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWVyeVwiPuyImOyglTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJkYW5nZXJcIj7sgq3soJw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJkYW5nZXJcIj7si6Dqs6A8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RWxsaXBzaXNPdXRsaW5lZCAvPlxuICAgICAgICAgIDwvUG9wb3Zlcj4sXG4gICAgICAgIF19XG4gICAgICA+XG4gICAgICAgIDxDYXJkLk1ldGFcbiAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e3Bvc3QuVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XG4gICAgICAgICAgdGl0bGU9e3Bvc3QuVXNlci5uaWNrbmFtZX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17cG9zdC5jb250ZW50fVxuICAgICAgICAvPlxuICAgICAgPC9DYXJkPlxuICAgICAgey8qIDxDb21tZW50Rm9ybS8+XG4gICAgICA8Q29tbWVudC8+ICovfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuUG9zdENhcmQucHJvcFR5cGVzID0ge1xuICBwb3N0OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFVzZXI6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjcmVhdGVkQXQ6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgQ29tbWVudHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuICAgIEltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG4gIH0pLmlzUmVxdWlyZWQsXG59O1xuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PostCard.js\n");

/***/ })

})