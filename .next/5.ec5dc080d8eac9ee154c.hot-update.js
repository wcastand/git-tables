webpackHotUpdate(5,{

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(28);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(29);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _toConsumableArray2 = __webpack_require__(107);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = __webpack_require__(134);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(25);

var _react2 = _interopRequireDefault(_react);

var _markdownTable = __webpack_require__(564);

var _markdownTable2 = _interopRequireDefault(_markdownTable);

var _reactRemarkable = __webpack_require__(565);

var _reactRemarkable2 = _interopRequireDefault(_reactRemarkable);

var _reactCopyToClipboard = __webpack_require__(618);

var _reactCopyToClipboard2 = _interopRequireDefault(_reactCopyToClipboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/willoo/Documents/Projects/git-tables/pages/index.js?entry';


var Row = function Row(props) {
  return _react2.default.createElement('div', (0, _extends3.default)({ style: { flex: 1, display: 'flex' } }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }));
};
var Column = function Column(props) {
  return _react2.default.createElement('div', (0, _extends3.default)({ style: { flex: 1, display: 'flex', flexDirection: 'column' } }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }));
};

function parse(state) {
  var str = '';
  var t = (0, _markdownTable2.default)([state.titles.split(',').map(function (s) {
    return s.trim();
  })].concat((0, _toConsumableArray3.default)(state.rows.map(function (r) {
    return r.split(',').map(function (s) {
      return s.trim();
    });
  }))));
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
      titles: 'Title, Description',
      rows: ['title 1, description 1']
    }, _this._changeTitles = function (titles) {
      return _this.setState(function (old) {
        return { titles: titles };
      });
    }, _this._changeData = function (idx, val) {
      return _this.setState(function (old) {
        return { rows: old.rows.map(function (r, i) {
            return i === idx ? val : r;
          }) };
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
      });
    }, _this._testKey = function (idx, e) {
      return e.keyCode === 13 ? _this._addRow() : e.keyCode === 8 && e.target.value === '' ? _this._removeRow(idx) : null;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Index, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('input', { value: this.state.titles, onChange: function onChange(e) {
          return _this2._changeTitles(e.target.value);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), this.state.rows.map(function (data, idx) {
        return _react2.default.createElement('input', {
          key: idx,
          value: data,
          onChange: function onChange(e) {
            return _this2._changeData(idx, e.target.value);
          },
          onKeyUp: function onKeyUp(e) {
            return _this2._testKey(idx, e);
          },
          ref: function ref(r) {
            return _this2._input = r;
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        });
      }), _react2.default.createElement('button', { onClick: this._addRow, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, 'Add a row'), _react2.default.createElement(_reactCopyToClipboard2.default, { text: parse(this.state), __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement('button', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, 'Copy to clipboard')), _react2.default.createElement('div', { className: 'markdown-body', __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_reactRemarkable2.default, { source: parse(this.state), __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      })));
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwidGFibGUiLCJSZWFjdE1EIiwiQ29weVRvQ2xpcGJvYXJkIiwiUm93IiwiZmxleCIsImRpc3BsYXkiLCJwcm9wcyIsIkNvbHVtbiIsImZsZXhEaXJlY3Rpb24iLCJwYXJzZSIsInN0YXRlIiwic3RyIiwidCIsInRpdGxlcyIsInNwbGl0IiwibWFwIiwicyIsInRyaW0iLCJyb3dzIiwiciIsIkluZGV4IiwiX2NoYW5nZVRpdGxlcyIsInNldFN0YXRlIiwiX2NoYW5nZURhdGEiLCJpZHgiLCJ2YWwiLCJvbGQiLCJpIiwiX2FkZFJvdyIsIl9pbnB1dCIsImZvY3VzIiwiX3JlbW92ZVJvdyIsImZpbHRlciIsInYiLCJfdGVzdEtleSIsImUiLCJrZXlDb2RlIiwidGFyZ2V0IiwidmFsdWUiLCJkYXRhIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxNQUFNLFNBQU4sQUFBTSxXQUFBO3VFQUFjLE9BQU8sRUFBQyxNQUFELEFBQU8sR0FBRyxTQUF0QixBQUFZLEFBQW1CLFlBQS9CLEFBQTRDOztnQkFBNUM7a0JBQVQsQUFBUztBQUFBO0FBQUEsSUFBQTtBQUFyQjtBQUNBLElBQU0sU0FBUyxTQUFULEFBQVMsY0FBQTt1RUFDUixPQUFPLEVBQUMsTUFBRCxBQUFPLEdBQUcsU0FBVixBQUFtQixRQUFRLGVBQXZDLEFBQVksQUFBMEMsY0FBdEQsQUFBcUU7O2dCQUFyRTtrQkFEYSxBQUNiO0FBQUE7QUFBQSxJQUFBO0FBREY7O0FBSUEsU0FBQSxBQUFTLE1BQVQsQUFBZSxPQUFPLEFBQ3BCO01BQUksTUFBSixBQUFVLEFBQ1Y7TUFBTSx3Q0FDSixBQUFNLE9BQU4sQUFBYSxNQUFiLEFBQW1CLEtBQW5CLEFBQXdCLElBQUksYUFBQTtXQUFLLEVBQUwsQUFBSyxBQUFFO0FBRDNCLEFBQ1IsR0FBQSxpREFDRyxBQUFNLEtBQU4sQUFBVyxJQUFJLGFBQUE7YUFBSyxBQUFFLE1BQUYsQUFBUSxLQUFSLEFBQWEsSUFBSSxhQUFBO2FBQUssRUFBTCxBQUFLLEFBQUU7QUFBN0IsQUFBSyxLQUFBO0FBRnpCLEFBQVUsQUFFTCxBQUVMLEdBRkssR0FGSztTQUlWLEFBQU8sQUFDUjs7O0lBRUssQTs7Ozs7Ozs7Ozs7Ozs7ME1BQ0osQTtjQUFRLEFBQ0UsQUFDUjtZQUFNLENBRkEsQUFFQSxBQUFDLEE7QUFGRCxBQUNOLGEsQUFHRixnQkFBZ0Isa0JBQUE7bUJBQVUsQUFBSyxTQUFTLGVBQUE7ZUFBUSxFQUFDLFFBQVQsQUFBUTtBQUFoQyxBQUFVLE9BQUE7QSxhQUMxQixBLGNBQWMsVUFBQSxBQUFDLEtBQUQsQUFBTSxLQUFOO21CQUNaLEFBQUssU0FBUyxlQUFBO2lCQUFTLFVBQU0sQUFBSSxLQUFKLEFBQVMsSUFBSSxVQUFBLEFBQUMsR0FBRCxBQUFJLEdBQUo7bUJBQVcsTUFBQSxBQUFNLE1BQU4sQUFBWSxNQUF2QixBQUE2QjtBQUF6RCxBQUFRLEFBQU8sV0FBQSxDQUFQO0FBRFYsQUFDWixPQUFBO0EsYSxBQUNGLFVBQVUsWUFBQTttQkFBTSxBQUFLLFNBQVMsZUFBQTtlQUFRLEVBQUMsaURBQVUsSUFBVixBQUFjLFFBQXZCLEFBQVEsQUFBQyxBQUFvQjtBQUEzQyxPQUFBLEVBQWtELFlBQUE7ZUFBTSxNQUFBLEFBQUssT0FBWCxBQUFNLEFBQVk7QUFBMUUsQUFBTTtBLGFBQ2hCLEEsYUFBYSxlQUFBO21CQUFPLEFBQUssU0FBUyxlQUFBO2lCQUFTLFVBQU0sQUFBSSxLQUFKLEFBQVMsT0FBTyxVQUFBLEFBQUMsR0FBRCxBQUFJLEdBQUo7bUJBQVUsTUFBVixBQUFnQjtBQUEvQyxBQUFRLEFBQU8sV0FBQSxDQUFQO0FBQTdCLEFBQU8sT0FBQTtBLGEsQUFDcEIsV0FBVyxVQUFBLEFBQUMsS0FBRCxBQUFNLEdBQU47YUFDVCxFQUFBLEFBQUUsWUFBRixBQUFjLEtBQ1YsTUFESixBQUNJLEFBQUssWUFDTCxFQUFBLEFBQUUsWUFBRixBQUFjLEtBQUssRUFBQSxBQUFFLE9BQUYsQUFBUyxVQUE1QixBQUFzQyxLQUFLLE1BQUEsQUFBSyxXQUFoRCxBQUEyQyxBQUFnQixPQUh0RCxBQUc2RDtBOzs7Ozs2QkFFL0Q7bUJBQ1A7OzZCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsMkNBQ1MsT0FBTyxLQUFBLEFBQUssTUFBbkIsQUFBeUIsUUFBUSxVQUFVLHFCQUFBO2lCQUFLLE9BQUEsQUFBSyxjQUFjLEVBQUEsQUFBRSxPQUExQixBQUFLLEFBQTRCO0FBQTVFO29CQUFBO3NCQURGLEFBQ0UsQUFDQztBQUREO2VBQ0MsQUFBSyxNQUFMLEFBQVcsS0FBWCxBQUFnQixJQUFJLFVBQUEsQUFBQyxNQUFELEFBQU8sS0FBUDs7ZUFDbkIsQUFDTyxBQUNMO2lCQUZGLEFBRVMsQUFDUDtvQkFBVSxxQkFBQTttQkFBSyxPQUFBLEFBQUssWUFBTCxBQUFpQixLQUFLLEVBQUEsQUFBRSxPQUE3QixBQUFLLEFBQStCO0FBSGhELEFBSUU7bUJBQVMsb0JBQUE7bUJBQUssT0FBQSxBQUFLLFNBQUwsQUFBYyxLQUFuQixBQUFLLEFBQW1CO0FBSm5DLEFBS0U7ZUFBSyxnQkFBQTttQkFBTSxPQUFBLEFBQUssU0FBWCxBQUFvQjtBQUwzQjs7c0JBQUE7d0JBRG1CLEFBQ25CO0FBQUE7QUFDRSxTQURGO0FBSEosQUFFRyxBQVNELDBCQUFBLGNBQUEsWUFBUSxTQUFTLEtBQWpCLEFBQXNCO29CQUF0QjtzQkFBQTtBQUFBO1NBWEYsQUFXRSxBQUNBLDhCQUFBLEFBQUMsZ0RBQWdCLE1BQU0sTUFBTSxLQUE3QixBQUF1QixBQUFXO29CQUFsQztzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBYkosQUFZRSxBQUNFLEFBRUYsdUNBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQywyQ0FBUSxRQUFRLE1BQU0sS0FBdkIsQUFBaUIsQUFBVztvQkFBNUI7c0JBakJOLEFBQ0UsQUFlRSxBQUNFLEFBSVA7QUFKTzs7Ozs7O0VBakNVLGdCQUFNLEEsQUF3QzFCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy93aWxsb28vRG9jdW1lbnRzL1Byb2plY3RzL2dpdC10YWJsZXMifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/willoo/Documents/Projects/git-tables/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/willoo/Documents/Projects/git-tables/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(109)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5lYzVkYzA4MGQ4ZWFjOWVlMTU0Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/NjM1MWEyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdGFibGUgZnJvbSAnbWFya2Rvd24tdGFibGUnXG5pbXBvcnQgUmVhY3RNRCBmcm9tICdyZWFjdC1yZW1hcmthYmxlJ1xuaW1wb3J0IENvcHlUb0NsaXBib2FyZCBmcm9tICdyZWFjdC1jb3B5LXRvLWNsaXBib2FyZCdcblxuY29uc3QgUm93ID0gcHJvcHMgPT4gPGRpdiBzdHlsZT17e2ZsZXg6IDEsIGRpc3BsYXk6ICdmbGV4J319IHsuLi5wcm9wc30gLz5cbmNvbnN0IENvbHVtbiA9IHByb3BzID0+IChcbiAgPGRpdiBzdHlsZT17e2ZsZXg6IDEsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbid9fSB7Li4ucHJvcHN9IC8+XG4pXG5cbmZ1bmN0aW9uIHBhcnNlKHN0YXRlKSB7XG4gIGxldCBzdHIgPSAnJ1xuICBjb25zdCB0ID0gdGFibGUoW1xuICAgIHN0YXRlLnRpdGxlcy5zcGxpdCgnLCcpLm1hcChzID0+IHMudHJpbSgpKSxcbiAgICAuLi5zdGF0ZS5yb3dzLm1hcChyID0+IHIuc3BsaXQoJywnKS5tYXAocyA9PiBzLnRyaW0oKSkpLFxuICBdKVxuICByZXR1cm4gdFxufVxuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHRpdGxlczogJ1RpdGxlLCBEZXNjcmlwdGlvbicsXG4gICAgcm93czogWyd0aXRsZSAxLCBkZXNjcmlwdGlvbiAxJ10sXG4gIH1cbiAgX2NoYW5nZVRpdGxlcyA9IHRpdGxlcyA9PiB0aGlzLnNldFN0YXRlKG9sZCA9PiAoe3RpdGxlc30pKVxuICBfY2hhbmdlRGF0YSA9IChpZHgsIHZhbCkgPT5cbiAgICB0aGlzLnNldFN0YXRlKG9sZCA9PiAoe3Jvd3M6IG9sZC5yb3dzLm1hcCgociwgaSkgPT4gKGkgPT09IGlkeCA/IHZhbCA6IHIpKX0pKVxuICBfYWRkUm93ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZShvbGQgPT4gKHtyb3dzOiBbLi4ub2xkLnJvd3MsICcnXX0pLCAoKSA9PiB0aGlzLl9pbnB1dC5mb2N1cygpKVxuICBfcmVtb3ZlUm93ID0gaWR4ID0+IHRoaXMuc2V0U3RhdGUob2xkID0+ICh7cm93czogb2xkLnJvd3MuZmlsdGVyKCh2LCBpKSA9PiBpICE9PSBpZHgpfSkpXG4gIF90ZXN0S2V5ID0gKGlkeCwgZSkgPT5cbiAgICBlLmtleUNvZGUgPT09IDEzXG4gICAgICA/IHRoaXMuX2FkZFJvdygpXG4gICAgICA6IGUua2V5Q29kZSA9PT0gOCAmJiBlLnRhcmdldC52YWx1ZSA9PT0gJycgPyB0aGlzLl9yZW1vdmVSb3coaWR4KSA6IG51bGxcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb2x1bW4+XG4gICAgICAgIDxpbnB1dCB2YWx1ZT17dGhpcy5zdGF0ZS50aXRsZXN9IG9uQ2hhbmdlPXtlID0+IHRoaXMuX2NoYW5nZVRpdGxlcyhlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgIHt0aGlzLnN0YXRlLnJvd3MubWFwKChkYXRhLCBpZHgpID0+IChcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgICAgdmFsdWU9e2RhdGF9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLl9jaGFuZ2VEYXRhKGlkeCwgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgb25LZXlVcD17ZSA9PiB0aGlzLl90ZXN0S2V5KGlkeCwgZSl9XG4gICAgICAgICAgICByZWY9e3IgPT4gKHRoaXMuX2lucHV0ID0gcil9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5fYWRkUm93fT5BZGQgYSByb3c8L2J1dHRvbj5cbiAgICAgICAgPENvcHlUb0NsaXBib2FyZCB0ZXh0PXtwYXJzZSh0aGlzLnN0YXRlKX0+XG4gICAgICAgICAgPGJ1dHRvbj5Db3B5IHRvIGNsaXBib2FyZDwvYnV0dG9uPlxuICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJrZG93bi1ib2R5XCI+XG4gICAgICAgICAgPFJlYWN0TUQgc291cmNlPXtwYXJzZSh0aGlzLnN0YXRlKX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbHVtbj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBSUE7QUFKQTs7Ozs7O0FBakNBO0FBQ0E7QUF1Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==