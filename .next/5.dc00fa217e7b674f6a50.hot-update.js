webpackHotUpdate(5,{

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _defineProperty2 = __webpack_require__(592);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = __webpack_require__(117);

var _extends4 = _interopRequireDefault(_extends3);

var _objectWithoutProperties2 = __webpack_require__(593);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(26);

var _react2 = _interopRequireDefault(_react);

var _markdownTable = __webpack_require__(594);

var _markdownTable2 = _interopRequireDefault(_markdownTable);

var _reactRemarkable = __webpack_require__(595);

var _reactRemarkable2 = _interopRequireDefault(_reactRemarkable);

var _reactCopyToClipboard = __webpack_require__(648);

var _reactCopyToClipboard2 = _interopRequireDefault(_reactCopyToClipboard);

var _glamorous = __webpack_require__(652);

var _glamorous2 = _interopRequireDefault(_glamorous);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/willoo/Documents/Projects/git-tables/pages/index.js?entry',
    _glamorous$div,
    _glamorous$input,
    _glamorous$button;

var Container = _glamorous2.default.div({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 1024,
  margin: '0 auto',
  fontFamily: 'Roboto',
  fontSize: 16
});
var Column = _glamorous2.default.div({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: 25
}, function (props) {
  return { flex: props.flex || 1 };
});

var Icon = function Icon(_ref) {
  var _extends2;

  var className = _ref.className,
      type = _ref.type,
      _ref$selected = _ref.selected,
      selected = _ref$selected === undefined ? false : _ref$selected,
      props = (0, _objectWithoutProperties3.default)(_ref, ['className', 'type', 'selected']);

  return _react2.default.createElement(_glamorous.Div, (0, _extends4.default)((_extends2 = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: selected ? '#FF9036' : '#F1F1F1',
    backgroundColor: selected ? '#F1F1F1' : '#333'
  }, (0, _defineProperty3.default)(_extends2, 'display', 'flex'), (0, _defineProperty3.default)(_extends2, 'border', '1px solid #333'), (0, _defineProperty3.default)(_extends2, 'padding', 4), (0, _defineProperty3.default)(_extends2, 'userSelect', 'none'), (0, _defineProperty3.default)(_extends2, 'cursor', 'pointer'), (0, _defineProperty3.default)(_extends2, 'width', '35px'), (0, _defineProperty3.default)(_extends2, 'height', '35px'), (0, _defineProperty3.default)(_extends2, 'transition', 'all .3s ease'), _extends2), props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }), _react2.default.createElement('i', { className: 'material-icons', style: { fontSize: 20 }, __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, type));
};

var ContainerD = _glamorous2.default.div((_glamorous$div = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#333',
  backgroundColor: '#F1F1F1'
}, (0, _defineProperty3.default)(_glamorous$div, 'display', 'flex'), (0, _defineProperty3.default)(_glamorous$div, 'border', '1px solid #333'), (0, _defineProperty3.default)(_glamorous$div, 'padding', 4), (0, _defineProperty3.default)(_glamorous$div, 'userSelect', 'none'), (0, _defineProperty3.default)(_glamorous$div, 'cursor', 'pointer'), (0, _defineProperty3.default)(_glamorous$div, 'width', '35px'), (0, _defineProperty3.default)(_glamorous$div, 'height', '35px'), (0, _defineProperty3.default)(_glamorous$div, 'transition', 'all .3s ease'), (0, _defineProperty3.default)(_glamorous$div, ':hover', {
  backgroundColor: '#333',
  color: '#F1F1F1'
}), _glamorous$div));

var Delete = function Delete(_ref2) {
  var className = _ref2.className,
      type = _ref2.type,
      props = (0, _objectWithoutProperties3.default)(_ref2, ['className', 'type']);

  return _react2.default.createElement(ContainerD, (0, _extends4.default)({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }), _react2.default.createElement('i', { className: 'material-icons', style: { fontSize: 20 }, __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, type));
};

var Input = _glamorous2.default.input((_glamorous$input = {
  fontFamily: 'Roboto',
  fontSize: 16,
  width: '100%',
  height: 35,
  outline: 'none',
  border: 'none',
  padding: 12,
  margin: 8,
  backgroundColor: 'transparent'
}, (0, _defineProperty3.default)(_glamorous$input, 'border', '1px solid #333'), (0, _defineProperty3.default)(_glamorous$input, 'color', '#333'), (0, _defineProperty3.default)(_glamorous$input, 'transition', 'all .3s ease'), (0, _defineProperty3.default)(_glamorous$input, ':focus', {}), _glamorous$input));

var Button = _glamorous2.default.button((_glamorous$button = {
  fontFamily: 'Roboto',
  border: 'none',
  outline: 'none',
  height: 35,
  minWidth: 35,
  lineHeight: '11px',
  padding: 12,
  margin: '12px 0',
  backgroundColor: '#F1F1F1'
}, (0, _defineProperty3.default)(_glamorous$button, 'border', '1px solid #333'), (0, _defineProperty3.default)(_glamorous$button, 'color', '#333'), (0, _defineProperty3.default)(_glamorous$button, 'transition', 'all .3s ease'), (0, _defineProperty3.default)(_glamorous$button, 'cursor', 'pointer'), (0, _defineProperty3.default)(_glamorous$button, ':hover', {
  color: '#F1F1F1',
  backgroundColor: '#333'
}), _glamorous$button));

var Code = _glamorous2.default.pre({
  width: '100%',
  padding: 12,
  backgroundColor: '#FAFAFA',
  color: '#333',
  borderRadius: 0
});

var Title = _glamorous2.default.h2({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Roboto',
  padding: 0,
  color: '#333'
});

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
    var _ref3;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref3 = Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call.apply(_ref3, [this].concat(args))), _this), _this.state = {
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
        return (0, _extends4.default)({}, old, {
          aligns: d
        });
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Index, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        }
      }, _react2.default.createElement(Column, { flex: 1, bgColor: '#333', __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      }, _react2.default.createElement(Title, { color: '#F1F1F1', __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        }
      }, _react2.default.createElement(_glamorous2.default.Span, { paddingRight: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      }, 'Header'), _react2.default.createElement(Button, { onClick: this._addTitle, __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      }, '+')), this.state.columns.map(function (data, idx) {
        return _react2.default.createElement(_glamorous.Div, { display: 'flex', alignItems: 'center', width: '100%', key: 'title_' + idx, __source: {
            fileName: _jsxFileName,
            lineNumber: 218
          }
        }, _react2.default.createElement(Input, {
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
            lineNumber: 219
          }
        }), _react2.default.createElement(_glamorous.Div, { display: 'flex', __source: {
            fileName: _jsxFileName,
            lineNumber: 225
          }
        }, _react2.default.createElement(Icon, {
          type: 'format_align_left',
          selected: _this2.state.aligns[idx] === 'l',
          onClick: function onClick() {
            return _this2._changeAlign(idx, 'l');
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 226
          }
        }), _react2.default.createElement(Icon, {
          type: 'format_align_center',
          selected: _this2.state.aligns[idx] === 'c',
          onClick: function onClick() {
            return _this2._changeAlign(idx, 'c');
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 231
          }
        }), _react2.default.createElement(Icon, {
          type: 'format_align_right',
          selected: _this2.state.aligns[idx] === 'r',
          onClick: function onClick() {
            return _this2._changeAlign(idx, 'r');
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 236
          }
        })));
      }), _react2.default.createElement(Title, { color: '#F1F1F1', __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        }
      }, _react2.default.createElement(_glamorous2.default.Span, { paddingRight: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        }
      }, 'Rows'), _react2.default.createElement(Button, { onClick: this._addRow, __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        }
      }, '+')), this.state.rows.map(function (data, idx) {
        return _react2.default.createElement(_glamorous.Div, { display: 'flex', alignItems: 'center', width: '100%', key: 'data_' + idx, __source: {
            fileName: _jsxFileName,
            lineNumber: 249
          }
        }, _react2.default.createElement(Input, {
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
            lineNumber: 250
          }
        }), _react2.default.createElement(Delete, { type: 'remove', onClick: function onClick() {
            return _this2._removeRow(idx);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 256
          }
        }));
      })), _react2.default.createElement(Column, { flex: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        }
      }, _react2.default.createElement(_glamorous.Div, {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start', __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        }
      }, _react2.default.createElement(Title, { children: 'Preview', __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        }
      }), _react2.default.createElement(_reactCopyToClipboard2.default, { text: parse(this.state), __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        }
      }, _react2.default.createElement(Button, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        }
      }, 'Copy the markdown')), _react2.default.createElement('div', { className: 'markdown-body', __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        }
      }, _react2.default.createElement(_reactRemarkable2.default, { source: parse(this.state), __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        }
      })), _react2.default.createElement(Code, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        }
      }, parse(this.state)))));
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwidGFibGUiLCJSZWFjdE1EIiwiQ29weVRvQ2xpcGJvYXJkIiwiZ2xhbW9yb3VzIiwiRGl2IiwiQ29udGFpbmVyIiwiZGl2IiwiZmxleCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJDb2x1bW4iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJwYWRkaW5nIiwicHJvcHMiLCJJY29uIiwiY2xhc3NOYW1lIiwidHlwZSIsInNlbGVjdGVkIiwiQ29udGFpbmVyRCIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiRGVsZXRlIiwiSW5wdXQiLCJpbnB1dCIsIndpZHRoIiwiaGVpZ2h0Iiwib3V0bGluZSIsImJvcmRlciIsIkJ1dHRvbiIsImJ1dHRvbiIsIm1pbldpZHRoIiwibGluZUhlaWdodCIsIkNvZGUiLCJwcmUiLCJib3JkZXJSYWRpdXMiLCJUaXRsZSIsImgyIiwicGFyc2UiLCJzdGF0ZSIsInJyb3dzIiwicm93cyIsIm1hcCIsInIiLCJzcGxpdCIsInMiLCJ0cmltIiwidCIsImNvbHVtbnMiLCJhbGlnbiIsImFsaWducyIsIkluZGV4IiwiX2NoYW5nZVRpdGxlIiwiaWR4IiwidGl0bGUiLCJzZXRTdGF0ZSIsIm9sZCIsImkiLCJfY2hhbmdlRGF0YSIsInZhbCIsIl9hZGRUaXRsZSIsIl9pbnB1dFRpdGxlIiwiZm9jdXMiLCJfcmVtb3ZlVGl0bGUiLCJmaWx0ZXIiLCJ2IiwiY29uc29sZSIsImxvZyIsIl9hZGRSb3ciLCJfaW5wdXQiLCJfcmVtb3ZlUm93IiwiX3Rlc3RLZXlUaXRsZSIsImUiLCJrZXlDb2RlIiwidGFyZ2V0IiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsIl90ZXN0S2V5Um93IiwiX2NoYW5nZUFsaWduIiwiZCIsImRhdGEiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7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QWtFO3NCQUFsRTt3QkFBQSxBQUNFO0FBREY7U0FBQSxnQ0FDRSxBQUFDO2lCQUFELEFBQ1MsQUFDUDtvQkFBVSxxQkFBQTttQkFBSyxPQUFBLEFBQUssWUFBTCxBQUFpQixLQUFLLEVBQUEsQUFBRSxPQUE3QixBQUFLLEFBQStCO0FBRmhELEFBR0U7cUJBQVcsc0JBQUE7bUJBQUssT0FBQSxBQUFLLFlBQUwsQUFBaUIsS0FBdEIsQUFBSyxBQUFzQjtBQUh4QyxBQUlFO29CQUFVLHFCQUFBO21CQUFNLE9BQUEsQUFBSyxTQUFYLEFBQW9CO0FBSmhDOztzQkFBQTt3QkFERixBQUNFLEFBTUE7QUFOQTtBQUNFLDBDQUtGLEFBQUMsVUFBTyxNQUFSLEFBQWEsVUFBUyxTQUFTLG1CQUFBO21CQUFNLE9BQUEsQUFBSyxXQUFYLEFBQU0sQUFBZ0I7QUFBckQ7c0JBQUE7d0JBUmlCLEFBQ25CLEFBT0U7QUFBQTs7QUE3Q1IsQUFDRSxBQW9DRyxBQVlILDJCQUFDLGNBQUQsVUFBUSxNQUFSLEFBQWM7b0JBQWQ7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUM7Y0FBRCxBQUNRLEFBQ047aUJBRkYsQUFFVSxBQUNSO3VCQUhGLEFBR2dCLEFBQ2Q7ZUFKRixBQUlRLEFBQ047d0JBTEYsQUFLaUIsQUFDZjtvQkFORixBQU1hO29CQU5iO3NCQUFBLEFBT0U7QUFQRjtBQUNFLHVDQU1BLEFBQUMsU0FBTSxVQUFQLEFBQWdCO29CQUFoQjtzQkFQRixBQU9FLEFBQ0E7QUFEQTswQkFDQSxBQUFDLGdEQUFnQixNQUFNLE1BQU0sS0FBN0IsQUFBdUIsQUFBVztvQkFBbEM7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQVRKLEFBUUUsQUFDRSxBQUVGLHVDQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsMkNBQVEsUUFBUSxNQUFNLEtBQXZCLEFBQWlCLEFBQVc7b0JBQTVCO3NCQVpKLEFBV0UsQUFDRSxBQUVGO0FBRkU7MkJBRUQsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsZUFBYSxLQWpFckIsQUFDRSxBQWlERSxBQUNFLEFBY0UsQUFBTyxBQUFXLEFBSzNCOzs7OztFQTVJaUIsZ0JBQU0sQSxBQStJMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3dpbGxvby9Eb2N1bWVudHMvUHJvamVjdHMvZ2l0LXRhYmxlcyJ9

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5kYzAwZmEyMTdlN2I2NzRmNmE1MC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/OTdkNmVlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdGFibGUgZnJvbSAnbWFya2Rvd24tdGFibGUnXG5pbXBvcnQgUmVhY3RNRCBmcm9tICdyZWFjdC1yZW1hcmthYmxlJ1xuaW1wb3J0IENvcHlUb0NsaXBib2FyZCBmcm9tICdyZWFjdC1jb3B5LXRvLWNsaXBib2FyZCdcbmltcG9ydCBnbGFtb3JvdXMsIHtEaXZ9IGZyb20gJ2dsYW1vcm91cydcblxuY29uc3QgQ29udGFpbmVyID0gZ2xhbW9yb3VzLmRpdih7XG4gIGZsZXg6IDEsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIG1heFdpZHRoOiAxMDI0LFxuICBtYXJnaW46ICcwIGF1dG8nLFxuICBmb250RmFtaWx5OiAnUm9ib3RvJyxcbiAgZm9udFNpemU6IDE2LFxufSlcbmNvbnN0IENvbHVtbiA9IGdsYW1vcm91cy5kaXYoXG4gIHtcbiAgICBmbGV4OiAxLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcbiAgICBwYWRkaW5nOiAyNSxcbiAgfSxcbiAgcHJvcHMgPT4gKHtmbGV4OiBwcm9wcy5mbGV4IHx8IDF9KVxuKVxuXG5jb25zdCBJY29uID0gKHtjbGFzc05hbWUsIHR5cGUsIHNlbGVjdGVkID0gZmFsc2UsIC4uLnByb3BzfSkgPT4gKFxuICA8RGl2XG4gICAgZGlzcGxheT1cImZsZXhcIlxuICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICBjb2xvcj17c2VsZWN0ZWQgPyAnI0ZGOTAzNicgOiAnI0YxRjFGMSd9XG4gICAgYmFja2dyb3VuZENvbG9yPXtzZWxlY3RlZCA/ICcjRjFGMUYxJyA6ICcjMzMzJ31cbiAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgYm9yZGVyPVwiMXB4IHNvbGlkICMzMzNcIlxuICAgIHBhZGRpbmc9ezR9XG4gICAgdXNlclNlbGVjdD1cIm5vbmVcIlxuICAgIGN1cnNvcj1cInBvaW50ZXJcIlxuICAgIHdpZHRoPVwiMzVweFwiXG4gICAgaGVpZ2h0PVwiMzVweFwiXG4gICAgdHJhbnNpdGlvbj1cImFsbCAuM3MgZWFzZVwiXG4gICAgey4uLnByb3BzfT5cbiAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIHN0eWxlPXt7Zm9udFNpemU6IDIwfX0+XG4gICAgICB7dHlwZX1cbiAgICA8L2k+XG4gIDwvRGl2PlxuKVxuXG5jb25zdCBDb250YWluZXJEID0gZ2xhbW9yb3VzLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgY29sb3I6ICcjMzMzJyxcbiAgYmFja2dyb3VuZENvbG9yOiAnI0YxRjFGMScsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYm9yZGVyOiAnMXB4IHNvbGlkICMzMzMnLFxuICBwYWRkaW5nOiA0LFxuICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICB3aWR0aDogJzM1cHgnLFxuICBoZWlnaHQ6ICczNXB4JyxcbiAgdHJhbnNpdGlvbjogJ2FsbCAuM3MgZWFzZScsXG4gICc6aG92ZXInOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzMzMycsXG4gICAgY29sb3I6ICcjRjFGMUYxJyxcbiAgfSxcbn0pXG5cbmNvbnN0IERlbGV0ZSA9ICh7Y2xhc3NOYW1lLCB0eXBlLCAuLi5wcm9wc30pID0+IChcbiAgPENvbnRhaW5lckQgey4uLnByb3BzfT5cbiAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIHN0eWxlPXt7Zm9udFNpemU6IDIwfX0+XG4gICAgICB7dHlwZX1cbiAgICA8L2k+XG4gIDwvQ29udGFpbmVyRD5cbilcblxuY29uc3QgSW5wdXQgPSBnbGFtb3JvdXMuaW5wdXQoe1xuICBmb250RmFtaWx5OiAnUm9ib3RvJyxcbiAgZm9udFNpemU6IDE2LFxuICB3aWR0aDogJzEwMCUnLFxuICBoZWlnaHQ6IDM1LFxuICBvdXRsaW5lOiAnbm9uZScsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBwYWRkaW5nOiAxMixcbiAgbWFyZ2luOiA4LFxuICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gIGJvcmRlcjogJzFweCBzb2xpZCAjMzMzJyxcbiAgY29sb3I6ICcjMzMzJyxcbiAgdHJhbnNpdGlvbjogJ2FsbCAuM3MgZWFzZScsXG4gICc6Zm9jdXMnOiB7fSxcbn0pXG5cbmNvbnN0IEJ1dHRvbiA9IGdsYW1vcm91cy5idXR0b24oe1xuICBmb250RmFtaWx5OiAnUm9ib3RvJyxcbiAgYm9yZGVyOiAnbm9uZScsXG4gIG91dGxpbmU6ICdub25lJyxcbiAgaGVpZ2h0OiAzNSxcbiAgbWluV2lkdGg6IDM1LFxuICBsaW5lSGVpZ2h0OiAnMTFweCcsXG4gIHBhZGRpbmc6IDEyLFxuICBtYXJnaW46ICcxMnB4IDAnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjFGMUYxJyxcbiAgYm9yZGVyOiAnMXB4IHNvbGlkICMzMzMnLFxuICBjb2xvcjogJyMzMzMnLFxuICB0cmFuc2l0aW9uOiAnYWxsIC4zcyBlYXNlJyxcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gICc6aG92ZXInOiB7XG4gICAgY29sb3I6ICcjRjFGMUYxJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMzMzJyxcbiAgfSxcbn0pXG5cbmNvbnN0IENvZGUgPSBnbGFtb3JvdXMucHJlKHtcbiAgd2lkdGg6ICcxMDAlJyxcbiAgcGFkZGluZzogMTIsXG4gIGJhY2tncm91bmRDb2xvcjogJyNGQUZBRkEnLFxuICBjb2xvcjogJyMzMzMnLFxuICBib3JkZXJSYWRpdXM6IDAsXG59KVxuXG5jb25zdCBUaXRsZSA9IGdsYW1vcm91cy5oMih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgZm9udEZhbWlseTogJ1JvYm90bycsXG4gIHBhZGRpbmc6IDAsXG4gIGNvbG9yOiAnIzMzMycsXG59KVxuXG5mdW5jdGlvbiBwYXJzZShzdGF0ZSkge1xuICBjb25zdCBycm93cyA9IHN0YXRlLnJvd3MubWFwKHIgPT4gci5zcGxpdCgnLCcpLm1hcChzID0+IChzID8gcy50cmltKCkgOiAnJykpKVxuXG4gIGNvbnN0IHQgPSB0YWJsZShbc3RhdGUuY29sdW1ucy5tYXAocyA9PiBzLnRyaW0oKSksIC4uLnJyb3dzXSwge1xuICAgIGFsaWduOiBzdGF0ZS5hbGlnbnMsXG4gIH0pXG4gIHJldHVybiB0XG59XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgY29sdW1uczogWydUaXRsZScsICdEZXNjcmlwdGlvbiddLFxuICAgIHJvd3M6IFsndGl0bGUgMSwgZGVzYyAxJywgJ3RpdGxlIDIsIGRlc2MgMiddLFxuICAgIGFsaWduczogWydsJywgJ2MnXSxcbiAgfVxuICBfY2hhbmdlVGl0bGUgPSAoaWR4LCB0aXRsZSkgPT5cbiAgICB0aGlzLnNldFN0YXRlKG9sZCA9PiAoe2NvbHVtbnM6IG9sZC5jb2x1bW5zLm1hcCgociwgaSkgPT4gKGkgPT09IGlkeCA/IHRpdGxlIDogcikpfSkpXG4gIF9jaGFuZ2VEYXRhID0gKGlkeCwgdmFsKSA9PlxuICAgIHRoaXMuc2V0U3RhdGUob2xkID0+ICh7cm93czogb2xkLnJvd3MubWFwKChyLCBpKSA9PiAoaSA9PT0gaWR4ID8gdmFsIDogcikpfSkpXG5cbiAgX2FkZFRpdGxlID0gKCkgPT5cbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgb2xkID0+ICh7Y29sdW1uczogWy4uLm9sZC5jb2x1bW5zLCAnJ10sIGFsaWduczogWy4uLm9sZC5hbGlnbnMsICcnXX0pLFxuICAgICAgKCkgPT4gdGhpcy5faW5wdXRUaXRsZS5mb2N1cygpXG4gICAgKVxuICBfcmVtb3ZlVGl0bGUgPSBpZHggPT5cbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgb2xkID0+ICh7XG4gICAgICAgIGNvbHVtbnM6IG9sZC5jb2x1bW5zLmZpbHRlcigodiwgaSkgPT4gaSAhPT0gaWR4KSxcbiAgICAgICAgYWxpZ25zOiBvbGQuYWxpZ25zLmZpbHRlcigodiwgaSkgPT4gaSAhPT0gaWR4KSxcbiAgICAgIH0pLFxuICAgICAgKCkgPT4gKGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpLCB0aGlzLl9pbnB1dFRpdGxlLmZvY3VzKCkpXG4gICAgKVxuXG4gIF9hZGRSb3cgPSAoKSA9PiB0aGlzLnNldFN0YXRlKG9sZCA9PiAoe3Jvd3M6IFsuLi5vbGQucm93cywgJyddfSksICgpID0+IHRoaXMuX2lucHV0LmZvY3VzKCkpXG4gIF9yZW1vdmVSb3cgPSBpZHggPT5cbiAgICB0aGlzLnNldFN0YXRlKG9sZCA9PiAoe3Jvd3M6IG9sZC5yb3dzLmZpbHRlcigodiwgaSkgPT4gaSAhPT0gaWR4KX0pLCAoKSA9PiB0aGlzLl9pbnB1dC5mb2N1cygpKVxuXG4gIF90ZXN0S2V5VGl0bGUgPSAoaWR4LCBlKSA9PiB7XG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgIGNhc2UgMTM6XG4gICAgICAgIHRoaXMuX2FkZFRpdGxlKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgODpcbiAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSAnJykge1xuICAgICAgICAgIHRoaXMuX3JlbW92ZVRpdGxlKGlkeClcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBfdGVzdEtleVJvdyA9IChpZHgsIGUpID0+IHtcbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgY2FzZSAxMzpcbiAgICAgICAgdGhpcy5fYWRkUm93KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgODpcbiAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSAnJykge1xuICAgICAgICAgIHRoaXMuX3JlbW92ZVJvdyhpZHgpXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIF9jaGFuZ2VBbGlnbiA9IChpZHgsIHZhbCkgPT5cbiAgICB0aGlzLnNldFN0YXRlKG9sZCA9PiB7XG4gICAgICBjb25zdCBkID0gWy4uLm9sZC5hbGlnbnNdXG4gICAgICBkW2lkeF0gPSB2YWxcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLm9sZCxcbiAgICAgICAgYWxpZ25zOiBkLFxuICAgICAgfVxuICAgIH0pXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPENvbHVtbiBmbGV4PXsxfSBiZ0NvbG9yPVwiIzMzM1wiPlxuICAgICAgICAgIDxUaXRsZSBjb2xvcj1cIiNGMUYxRjFcIj5cbiAgICAgICAgICAgIDxnbGFtb3JvdXMuU3BhbiBwYWRkaW5nUmlnaHQ9ezEyfT5IZWFkZXI8L2dsYW1vcm91cy5TcGFuPlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLl9hZGRUaXRsZX0+KzwvQnV0dG9uPlxuICAgICAgICAgIDwvVGl0bGU+XG4gICAgICAgICAge3RoaXMuc3RhdGUuY29sdW1ucy5tYXAoKGRhdGEsIGlkeCkgPT4gKFxuICAgICAgICAgICAgPERpdiBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiB3aWR0aD1cIjEwMCVcIiBrZXk9e2B0aXRsZV8ke2lkeH1gfT5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgdmFsdWU9e2RhdGF9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5fY2hhbmdlVGl0bGUoaWR4LCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgb25LZXlEb3duPXtlID0+IHRoaXMuX3Rlc3RLZXlUaXRsZShpZHgsIGUpfVxuICAgICAgICAgICAgICAgIGlubmVyUmVmPXtyID0+ICh0aGlzLl9pbnB1dFRpdGxlID0gcil9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxEaXYgZGlzcGxheT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgdHlwZT1cImZvcm1hdF9hbGlnbl9sZWZ0XCJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLmFsaWduc1tpZHhdID09PSAnbCd9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLl9jaGFuZ2VBbGlnbihpZHgsICdsJyl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgdHlwZT1cImZvcm1hdF9hbGlnbl9jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuYWxpZ25zW2lkeF0gPT09ICdjJ31cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuX2NoYW5nZUFsaWduKGlkeCwgJ2MnKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZm9ybWF0X2FsaWduX3JpZ2h0XCJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLmFsaWduc1tpZHhdID09PSAncid9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLl9jaGFuZ2VBbGlnbihpZHgsICdyJyl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9EaXY+XG4gICAgICAgICAgICA8L0Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8VGl0bGUgY29sb3I9XCIjRjFGMUYxXCI+XG4gICAgICAgICAgICA8Z2xhbW9yb3VzLlNwYW4gcGFkZGluZ1JpZ2h0PXsxMn0+Um93czwvZ2xhbW9yb3VzLlNwYW4+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuX2FkZFJvd30+KzwvQnV0dG9uPlxuICAgICAgICAgIDwvVGl0bGU+XG4gICAgICAgICAge3RoaXMuc3RhdGUucm93cy5tYXAoKGRhdGEsIGlkeCkgPT4gKFxuICAgICAgICAgICAgPERpdiBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiB3aWR0aD1cIjEwMCVcIiBrZXk9e2BkYXRhXyR7aWR4fWB9PlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLl9jaGFuZ2VEYXRhKGlkeCwgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiB0aGlzLl90ZXN0S2V5Um93KGlkeCwgZSl9XG4gICAgICAgICAgICAgICAgaW5uZXJSZWY9e3IgPT4gKHRoaXMuX2lucHV0ID0gcil9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxEZWxldGUgdHlwZT1cInJlbW92ZVwiIG9uQ2xpY2s9eygpID0+IHRoaXMuX3JlbW92ZVJvdyhpZHgpfSAvPlxuICAgICAgICAgICAgPC9EaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQ29sdW1uPlxuICAgICAgICA8Q29sdW1uIGZsZXg9ezJ9PlxuICAgICAgICAgIDxEaXZcbiAgICAgICAgICAgIGZsZXg9ezF9XG4gICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImZsZXgtc3RhcnRcIlxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIj5cbiAgICAgICAgICAgIDxUaXRsZSBjaGlsZHJlbj1cIlByZXZpZXdcIiAvPlxuICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZCB0ZXh0PXtwYXJzZSh0aGlzLnN0YXRlKX0+XG4gICAgICAgICAgICAgIDxCdXR0b24+Q29weSB0aGUgbWFya2Rvd248L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJrZG93bi1ib2R5XCI+XG4gICAgICAgICAgICAgIDxSZWFjdE1EIHNvdXJjZT17cGFyc2UodGhpcy5zdGF0ZSl9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlPntwYXJzZSh0aGlzLnN0YXRlKX08L0NvZGU+XG4gICAgICAgICAgPC9EaXY+XG4gICAgICAgIDwvQ29sdW1uPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQVFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTEE7QUFPQTtBQVRBO0FBQ0E7QUFXQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFKQTs7QUFEQTtBQWVBO0FBZkE7QUFBQTtBQWVBO0FBQ0E7QUFEQTtBQUFBO0FBaEJBO0FBQ0E7QUFxQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFlQTtBQUFBO0FBREE7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBRkE7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBUkE7QUFDQTtBQWNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBUkE7QUFlQTtBQUFBO0FBREE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFHQTs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBRkE7QUFJQTtBQUNBOztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBRkE7QUFLQTtBQUxBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUZBO0FBTEE7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7O0FBQUE7QUFNQTtBQU5BO0FBQ0E7QUFLQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBSEE7O0FBQUE7QUFLQTtBQUxBO0FBQ0E7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUhBOztBQUFBO0FBS0E7QUFMQTtBQUNBO0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFIQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU9BO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUpBOztBQUFBO0FBTUE7QUFOQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7QUFPQTtBQVBBO0FBQ0E7QUFNQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUF2SUE7QUFDQTtBQThJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9