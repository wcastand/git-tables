webpackHotUpdate(5,{

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(117);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(31);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(32);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _toConsumableArray2 = __webpack_require__(113);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _react = __webpack_require__(26);

var _react2 = _interopRequireDefault(_react);

var _markdownTable = __webpack_require__(595);

var _markdownTable2 = _interopRequireDefault(_markdownTable);

var _reactRemarkable = __webpack_require__(596);

var _reactRemarkable2 = _interopRequireDefault(_reactRemarkable);

var _reactCopyToClipboard = __webpack_require__(649);

var _reactCopyToClipboard2 = _interopRequireDefault(_reactCopyToClipboard);

var _glamorous = __webpack_require__(582);

var _glamorous2 = _interopRequireDefault(_glamorous);

var _code = __webpack_require__(653);

var _code2 = _interopRequireDefault(_code);

var _icon = __webpack_require__(654);

var _icon2 = _interopRequireDefault(_icon);

var _hint = __webpack_require__(655);

var _hint2 = _interopRequireDefault(_hint);

var _align = __webpack_require__(662);

var _align2 = _interopRequireDefault(_align);

var _title = __webpack_require__(656);

var _title2 = _interopRequireDefault(_title);

var _input = __webpack_require__(657);

var _input2 = _interopRequireDefault(_input);

var _button = __webpack_require__(658);

var _button2 = _interopRequireDefault(_button);

var _column = __webpack_require__(659);

var _column2 = _interopRequireDefault(_column);

var _delete = __webpack_require__(660);

var _delete2 = _interopRequireDefault(_delete);

var _preview = __webpack_require__(663);

var _preview2 = _interopRequireDefault(_preview);

var _container = __webpack_require__(661);

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/willoo/Documents/Projects/git-tables/pages/index.js?entry';


function parse(state) {
  var rrows = state.rows.map(function (r) {
    return r.split(',').map(function (s) {
      return s ? s.trim() : '';
    });
  });

  var t = (0, _markdownTable2.default)([state.columns.map(function (s) {
    return s.trim();
  })].concat((0, _toConsumableArray3.default)(rrows)), {
    align: state.aligns
  });
  return t;
}

var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      columns: ['Title', 'Description'],
      rows: ['title 1, desc 1', 'title 2, desc 2'],
      aligns: ['l', 'c']
    }, _this._changeTitle = function (idx, title) {
      return _this.setState(function (old) {
        return { columns: old.columns.map(function (r, i) {
            return i === idx ? title : r;
          }) };
      });
    }, _this._changeData = function (idx, val) {
      return _this.setState(function (old) {
        return { rows: old.rows.map(function (r, i) {
            return i === idx ? val : r;
          }) };
      });
    }, _this._addTitle = function () {
      return _this.setState(function (old) {
        return { columns: [].concat((0, _toConsumableArray3.default)(old.columns), ['']), aligns: [].concat((0, _toConsumableArray3.default)(old.aligns), ['']) };
      }, function () {
        return _this._inputTitle.focus();
      });
    }, _this._removeTitle = function (idx) {
      return _this.setState(function (old) {
        return {
          columns: old.columns.filter(function (v, i) {
            return i !== idx;
          }),
          aligns: old.aligns.filter(function (v, i) {
            return i !== idx;
          })
        };
      }, function () {
        return console.log(_this.state), _this._inputTitle.focus();
      });
    }, _this._addRow = function () {
      return _this.setState(function (old) {
        return { rows: [].concat((0, _toConsumableArray3.default)(old.rows), ['']) };
      }, function () {
        return _this._input.focus();
      });
    }, _this._removeRow = function (idx) {
      return _this.setState(function (old) {
        return { rows: old.rows.filter(function (v, i) {
            return i !== idx;
          }) };
      }, function () {
        return _this._input.focus();
      });
    }, _this._testKeyTitle = function (idx, e) {
      switch (e.keyCode) {
        case 13:
          _this._addTitle();
          break;
        case 8:
          if (e.target.value === '') {
            _this._removeTitle(idx);
            e.preventDefault();
          }
          break;
        default:
          break;
      }
    }, _this._testKeyRow = function (idx, e) {
      switch (e.keyCode) {
        case 13:
          _this._addRow();
          break;
        case 8:
          if (e.target.value === '') {
            _this._removeRow(idx);
            e.preventDefault();
          }
          break;
        default:
          break;
      }
    }, _this._changeAlign = function (idx, val) {
      return _this.setState(function (old) {
        var d = [].concat((0, _toConsumableArray3.default)(old.aligns));
        d[idx] = val;
        return (0, _extends3.default)({}, old, {
          aligns: d
        });
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Index, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(_container2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement(_column2.default, { flex: 1, bgColor: '#333', __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react2.default.createElement(_title2.default, { color: '#F1F1F1', __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react2.default.createElement(_glamorous2.default.Span, { paddingRight: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, 'Header'), _react2.default.createElement(_button2.default, { onClick: this._addTitle, __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, '+')), _react2.default.createElement(_hint2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, 'You can add a column by hitting enter in the last input of the list or by clicking on the "+"'), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, 'To delete a column simply delete the text and hit backspace once.')), this.state.columns.map(function (data, idx) {
        return _react2.default.createElement(_glamorous.Div, { display: 'flex', alignItems: 'center', width: '100%', key: 'title_' + idx, __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          }
        }, _react2.default.createElement(_delete2.default, { type: 'remove', onClick: function onClick() {
            return _this2._removeTitle(idx);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          }
        }), _react2.default.createElement(_input2.default, {
          value: data,
          onChange: function onChange(e) {
            return _this2._changeTitle(idx, e.target.value);
          },
          onKeyDown: function onKeyDown(e) {
            return _this2._testKeyTitle(idx, e);
          },
          innerRef: function innerRef(r) {
            return _this2._inputTitle = r;
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          }
        }), _react2.default.createElement(_align2.default, { state: _this2.state.aligns, idx: idx, action: _this2._changeAlign, __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          }
        }));
      }), _react2.default.createElement(_title2.default, { color: '#F1F1F1', __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, _react2.default.createElement(_glamorous2.default.Span, { paddingRight: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, 'Rows'), _react2.default.createElement(_button2.default, { onClick: this._addRow, __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, '+')), _react2.default.createElement(_hint2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, 'You can add a row by hitting enter in the last input of the list or by clicking on the "+"'), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, 'To delete a row simply delete the text and hit backspace once. or click on the "-"')), this.state.rows.map(function (data, idx) {
        return _react2.default.createElement(_glamorous.Div, { display: 'flex', alignItems: 'center', width: '100%', key: 'data_' + idx, __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          }
        }, _react2.default.createElement(_delete2.default, { type: 'remove', onClick: function onClick() {
            return _this2._removeRow(idx);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          }
        }), _react2.default.createElement(_input2.default, {
          value: data,
          onChange: function onChange(e) {
            return _this2._changeData(idx, e.target.value);
          },
          onKeyDown: function onKeyDown(e) {
            return _this2._testKeyRow(idx, e);
          },
          innerRef: function innerRef(r) {
            return _this2._input = r;
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          }
        }));
      })), _react2.default.createElement(_column2.default, { flex: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, _react2.default.createElement(_preview2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, _react2.default.createElement(_title2.default, { children: 'Preview', __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }), _react2.default.createElement(_reactCopyToClipboard2.default, { text: parse(this.state), __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, _react2.default.createElement(_button2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, 'Copy the markdown')), _react2.default.createElement('div', { className: 'markdown-body', __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, _react2.default.createElement(_reactRemarkable2.default, { source: parse(this.state), __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      })), _react2.default.createElement(_code2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, parse(this.state)))));
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwidGFibGUiLCJSZWFjdE1EIiwiQ29weVRvQ2xpcGJvYXJkIiwiZ2xhbW9yb3VzIiwiRGl2IiwiQ29kZSIsIkljb24iLCJIaW50IiwiQWxpZ24iLCJUaXRsZSIsIklucHV0IiwiQnV0dG9uIiwiQ29sdW1uIiwiRGVsZXRlIiwiUHJldmlldyIsIkNvbnRhaW5lciIsInBhcnNlIiwic3RhdGUiLCJycm93cyIsInJvd3MiLCJtYXAiLCJyIiwic3BsaXQiLCJzIiwidHJpbSIsInQiLCJjb2x1bW5zIiwiYWxpZ24iLCJhbGlnbnMiLCJJbmRleCIsIl9jaGFuZ2VUaXRsZSIsImlkeCIsInRpdGxlIiwic2V0U3RhdGUiLCJvbGQiLCJpIiwiX2NoYW5nZURhdGEiLCJ2YWwiLCJfYWRkVGl0bGUiLCJfaW5wdXRUaXRsZSIsImZvY3VzIiwiX3JlbW92ZVRpdGxlIiwiZmlsdGVyIiwidiIsImNvbnNvbGUiLCJsb2ciLCJfYWRkUm93IiwiX2lucHV0IiwiX3JlbW92ZVJvdyIsIl90ZXN0S2V5VGl0bGUiLCJlIiwia2V5Q29kZSIsInRhcmdldCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJfdGVzdEtleVJvdyIsIl9jaGFuZ2VBbGlnbiIsImQiLCJkYXRhIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUVuQixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBRVAsU0FBQSxBQUFTLE1BQVQsQUFBZSxPQUFPLEFB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O0FBREE7MEJBQ0EsQUFBQyxnREFBZ0IsTUFBTSxNQUFNLEtBQTdCLEFBQXVCLEFBQVc7b0JBQWxDO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDOztvQkFBRDtzQkFBQTtBQUFBO0FBQUEsU0FISixBQUVFLEFBQ0UsQUFFRix1Q0FBQSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLDJDQUFRLFFBQVEsTUFBTSxLQUF2QixBQUFpQixBQUFXO29CQUE1QjtzQkFOSixBQUtFLEFBQ0UsQUFFRjtBQUZFOzJCQUVGLEFBQUM7O29CQUFEO3NCQUFBLEFBQU87QUFBUDtBQUFBLGVBQWEsS0E1RHJCLEFBQ0UsQUFrREUsQUFDRSxBQVFFLEFBQU8sQUFBVyxBQUszQjs7Ozs7RUF2SWlCLGdCQUFNLEEsQUEwSTFCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy93aWxsb28vRG9jdW1lbnRzL1Byb2plY3RzL2dpdC10YWJsZXMifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/willoo/Documents/Projects/git-tables/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/willoo/Documents/Projects/git-tables/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(115)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 663:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamorous = __webpack_require__(582);

var _glamorous2 = _interopRequireDefault(_glamorous);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Preview = _glamorous2.default.div({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  justifyContent: 'flex-start',
  alignItems: 'flex-start'
});

exports.default = Preview;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJldmlldy5qcyJdLCJuYW1lcyI6WyJnbGFtb3JvdXMiLCJQcmV2aWV3IiwiZGl2IiwiZmxleCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwid2lkdGgiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7OztBQUVQLElBQU0sOEJBQVUsQUFBVTtRQUFJLEFBQ3RCLEFBQ047V0FGNEIsQUFFbkIsQUFDVDtpQkFINEIsQUFHYixBQUNmO1NBSjRCLEFBSXJCLEFBQ1A7a0JBTDRCLEFBS1osQUFDaEI7Y0FORixBQUFnQixBQUFjLEFBTWhCLEFBR2Q7QUFUOEIsQUFDNUIsQ0FEYzs7a0JBU2hCLEFBQWUiLCJmaWxlIjoicHJldmlldy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvd2lsbG9vL0RvY3VtZW50cy9Qcm9qZWN0cy9naXQtdGFibGVzIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/willoo/Documents/Projects/git-tables/components/preview.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/willoo/Documents/Projects/git-tables/components/preview.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS44M2ZmYmM0N2RhYmUwZGQzNTA1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/YjQ0Njg0YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3ByZXZpZXcuanM/OGIyN2IzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdGFibGUgZnJvbSAnbWFya2Rvd24tdGFibGUnXG5pbXBvcnQgUmVhY3RNRCBmcm9tICdyZWFjdC1yZW1hcmthYmxlJ1xuaW1wb3J0IENvcHlUb0NsaXBib2FyZCBmcm9tICdyZWFjdC1jb3B5LXRvLWNsaXBib2FyZCdcbmltcG9ydCBnbGFtb3JvdXMsIHtEaXZ9IGZyb20gJ2dsYW1vcm91cydcblxuaW1wb3J0IENvZGUgZnJvbSAnLi4vY29tcG9uZW50cy9jb2RlJ1xuaW1wb3J0IEljb24gZnJvbSAnLi4vY29tcG9uZW50cy9pY29uJ1xuaW1wb3J0IEhpbnQgZnJvbSAnLi4vY29tcG9uZW50cy9oaW50J1xuaW1wb3J0IEFsaWduIGZyb20gJy4uL2NvbXBvbmVudHMvYWxpZ24nXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vY29tcG9uZW50cy90aXRsZSdcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9jb21wb25lbnRzL2lucHV0J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbidcbmltcG9ydCBDb2x1bW4gZnJvbSAnLi4vY29tcG9uZW50cy9jb2x1bW4nXG5pbXBvcnQgRGVsZXRlIGZyb20gJy4uL2NvbXBvbmVudHMvZGVsZXRlJ1xuaW1wb3J0IFByZXZpZXcgZnJvbSAnLi4vY29tcG9uZW50cy9wcmV2aWV3J1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcidcblxuZnVuY3Rpb24gcGFyc2Uoc3RhdGUpIHtcbiAgY29uc3QgcnJvd3MgPSBzdGF0ZS5yb3dzLm1hcChyID0+IHIuc3BsaXQoJywnKS5tYXAocyA9PiAocyA/IHMudHJpbSgpIDogJycpKSlcblxuICBjb25zdCB0ID0gdGFibGUoW3N0YXRlLmNvbHVtbnMubWFwKHMgPT4gcy50cmltKCkpLCAuLi5ycm93c10sIHtcbiAgICBhbGlnbjogc3RhdGUuYWxpZ25zLFxuICB9KVxuICByZXR1cm4gdFxufVxuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGNvbHVtbnM6IFsnVGl0bGUnLCAnRGVzY3JpcHRpb24nXSxcbiAgICByb3dzOiBbJ3RpdGxlIDEsIGRlc2MgMScsICd0aXRsZSAyLCBkZXNjIDInXSxcbiAgICBhbGlnbnM6IFsnbCcsICdjJ10sXG4gIH1cbiAgX2NoYW5nZVRpdGxlID0gKGlkeCwgdGl0bGUpID0+XG4gICAgdGhpcy5zZXRTdGF0ZShvbGQgPT4gKHtjb2x1bW5zOiBvbGQuY29sdW1ucy5tYXAoKHIsIGkpID0+IChpID09PSBpZHggPyB0aXRsZSA6IHIpKX0pKVxuICBfY2hhbmdlRGF0YSA9IChpZHgsIHZhbCkgPT5cbiAgICB0aGlzLnNldFN0YXRlKG9sZCA9PiAoe3Jvd3M6IG9sZC5yb3dzLm1hcCgociwgaSkgPT4gKGkgPT09IGlkeCA/IHZhbCA6IHIpKX0pKVxuXG4gIF9hZGRUaXRsZSA9ICgpID0+XG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIG9sZCA9PiAoe2NvbHVtbnM6IFsuLi5vbGQuY29sdW1ucywgJyddLCBhbGlnbnM6IFsuLi5vbGQuYWxpZ25zLCAnJ119KSxcbiAgICAgICgpID0+IHRoaXMuX2lucHV0VGl0bGUuZm9jdXMoKVxuICAgIClcbiAgX3JlbW92ZVRpdGxlID0gaWR4ID0+XG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIG9sZCA9PiAoe1xuICAgICAgICBjb2x1bW5zOiBvbGQuY29sdW1ucy5maWx0ZXIoKHYsIGkpID0+IGkgIT09IGlkeCksXG4gICAgICAgIGFsaWduczogb2xkLmFsaWducy5maWx0ZXIoKHYsIGkpID0+IGkgIT09IGlkeCksXG4gICAgICB9KSxcbiAgICAgICgpID0+IChjb25zb2xlLmxvZyh0aGlzLnN0YXRlKSwgdGhpcy5faW5wdXRUaXRsZS5mb2N1cygpKVxuICAgIClcblxuICBfYWRkUm93ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZShvbGQgPT4gKHtyb3dzOiBbLi4ub2xkLnJvd3MsICcnXX0pLCAoKSA9PiB0aGlzLl9pbnB1dC5mb2N1cygpKVxuICBfcmVtb3ZlUm93ID0gaWR4ID0+XG4gICAgdGhpcy5zZXRTdGF0ZShvbGQgPT4gKHtyb3dzOiBvbGQucm93cy5maWx0ZXIoKHYsIGkpID0+IGkgIT09IGlkeCl9KSwgKCkgPT4gdGhpcy5faW5wdXQuZm9jdXMoKSlcblxuICBfdGVzdEtleVRpdGxlID0gKGlkeCwgZSkgPT4ge1xuICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICBjYXNlIDEzOlxuICAgICAgICB0aGlzLl9hZGRUaXRsZSgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIDg6XG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICB0aGlzLl9yZW1vdmVUaXRsZShpZHgpXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgX3Rlc3RLZXlSb3cgPSAoaWR4LCBlKSA9PiB7XG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgIGNhc2UgMTM6XG4gICAgICAgIHRoaXMuX2FkZFJvdygpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIDg6XG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICB0aGlzLl9yZW1vdmVSb3coaWR4KVxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVha1xuICAgIH1cbiAgfVxuICBfY2hhbmdlQWxpZ24gPSAoaWR4LCB2YWwpID0+XG4gICAgdGhpcy5zZXRTdGF0ZShvbGQgPT4ge1xuICAgICAgY29uc3QgZCA9IFsuLi5vbGQuYWxpZ25zXVxuICAgICAgZFtpZHhdID0gdmFsXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5vbGQsXG4gICAgICAgIGFsaWduczogZCxcbiAgICAgIH1cbiAgICB9KVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxDb2x1bW4gZmxleD17MX0gYmdDb2xvcj1cIiMzMzNcIj5cbiAgICAgICAgICA8VGl0bGUgY29sb3I9XCIjRjFGMUYxXCI+XG4gICAgICAgICAgICA8Z2xhbW9yb3VzLlNwYW4gcGFkZGluZ1JpZ2h0PXsxMn0+SGVhZGVyPC9nbGFtb3JvdXMuU3Bhbj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5fYWRkVGl0bGV9Pis8L0J1dHRvbj5cbiAgICAgICAgICA8L1RpdGxlPlxuICAgICAgICAgIDxIaW50PlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICBZb3UgY2FuIGFkZCBhIGNvbHVtbiBieSBoaXR0aW5nIGVudGVyIGluIHRoZSBsYXN0IGlucHV0IG9mIHRoZSBsaXN0IG9yIGJ5IGNsaWNraW5nIG9uXG4gICAgICAgICAgICAgIHRoZSBcIitcIlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5UbyBkZWxldGUgYSBjb2x1bW4gc2ltcGx5IGRlbGV0ZSB0aGUgdGV4dCBhbmQgaGl0IGJhY2tzcGFjZSBvbmNlLjwvbGk+XG4gICAgICAgICAgPC9IaW50PlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmNvbHVtbnMubWFwKChkYXRhLCBpZHgpID0+IChcbiAgICAgICAgICAgIDxEaXYgZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgd2lkdGg9XCIxMDAlXCIga2V5PXtgdGl0bGVfJHtpZHh9YH0+XG4gICAgICAgICAgICAgIDxEZWxldGUgdHlwZT1cInJlbW92ZVwiIG9uQ2xpY2s9eygpID0+IHRoaXMuX3JlbW92ZVRpdGxlKGlkeCl9IC8+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuX2NoYW5nZVRpdGxlKGlkeCwgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiB0aGlzLl90ZXN0S2V5VGl0bGUoaWR4LCBlKX1cbiAgICAgICAgICAgICAgICBpbm5lclJlZj17ciA9PiAodGhpcy5faW5wdXRUaXRsZSA9IHIpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8QWxpZ24gc3RhdGU9e3RoaXMuc3RhdGUuYWxpZ25zfSBpZHg9e2lkeH0gYWN0aW9uPXt0aGlzLl9jaGFuZ2VBbGlnbn0gLz5cbiAgICAgICAgICAgIDwvRGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxUaXRsZSBjb2xvcj1cIiNGMUYxRjFcIj5cbiAgICAgICAgICAgIDxnbGFtb3JvdXMuU3BhbiBwYWRkaW5nUmlnaHQ9ezEyfT5Sb3dzPC9nbGFtb3JvdXMuU3Bhbj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5fYWRkUm93fT4rPC9CdXR0b24+XG4gICAgICAgICAgPC9UaXRsZT5cbiAgICAgICAgICA8SGludD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgWW91IGNhbiBhZGQgYSByb3cgYnkgaGl0dGluZyBlbnRlciBpbiB0aGUgbGFzdCBpbnB1dCBvZiB0aGUgbGlzdCBvciBieSBjbGlja2luZyBvbiB0aGVcbiAgICAgICAgICAgICAgXCIrXCJcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIFRvIGRlbGV0ZSBhIHJvdyBzaW1wbHkgZGVsZXRlIHRoZSB0ZXh0IGFuZCBoaXQgYmFja3NwYWNlIG9uY2UuIG9yIGNsaWNrIG9uIHRoZSBcIi1cIlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L0hpbnQ+XG4gICAgICAgICAge3RoaXMuc3RhdGUucm93cy5tYXAoKGRhdGEsIGlkeCkgPT4gKFxuICAgICAgICAgICAgPERpdiBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiB3aWR0aD1cIjEwMCVcIiBrZXk9e2BkYXRhXyR7aWR4fWB9PlxuICAgICAgICAgICAgICA8RGVsZXRlIHR5cGU9XCJyZW1vdmVcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLl9yZW1vdmVSb3coaWR4KX0gLz5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgdmFsdWU9e2RhdGF9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5fY2hhbmdlRGF0YShpZHgsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBvbktleURvd249e2UgPT4gdGhpcy5fdGVzdEtleVJvdyhpZHgsIGUpfVxuICAgICAgICAgICAgICAgIGlubmVyUmVmPXtyID0+ICh0aGlzLl9pbnB1dCA9IHIpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9EaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQ29sdW1uPlxuICAgICAgICA8Q29sdW1uIGZsZXg9ezJ9PlxuICAgICAgICAgIDxQcmV2aWV3PlxuICAgICAgICAgICAgPFRpdGxlIGNoaWxkcmVuPVwiUHJldmlld1wiIC8+XG4gICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkIHRleHQ9e3BhcnNlKHRoaXMuc3RhdGUpfT5cbiAgICAgICAgICAgICAgPEJ1dHRvbj5Db3B5IHRoZSBtYXJrZG93bjwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmtkb3duLWJvZHlcIj5cbiAgICAgICAgICAgICAgPFJlYWN0TUQgc291cmNlPXtwYXJzZSh0aGlzLnN0YXRlKX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGU+e3BhcnNlKHRoaXMuc3RhdGUpfTwvQ29kZT5cbiAgICAgICAgICA8L1ByZXZpZXc+XG4gICAgICAgIDwvQ29sdW1uPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJ1xuXG5jb25zdCBQcmV2aWV3ID0gZ2xhbW9yb3VzLmRpdih7XG4gIGZsZXg6IDEsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIHdpZHRoOiAnMTAwJScsXG4gIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXG4gIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0Jyxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IFByZXZpZXdcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvcHJldmlldy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7OztBQUVBOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUZBO0FBSUE7QUFDQTs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUZBO0FBS0E7QUFMQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFGQTtBQUxBOzs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUpBOztBQUFBO0FBTUE7QUFOQTtBQUNBO0FBS0E7QUFBQTtBQUFBOztBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUpBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBUUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7OztBQWxJQTtBQUNBO0FBeUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JLQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBUkE7QUFDQTtBQU9BOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=