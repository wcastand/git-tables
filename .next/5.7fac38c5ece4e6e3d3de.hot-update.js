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

var _defineProperty2 = __webpack_require__(651);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(117);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(652);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(26);

var _react2 = _interopRequireDefault(_react);

var _markdownTable = __webpack_require__(592);

var _markdownTable2 = _interopRequireDefault(_markdownTable);

var _reactRemarkable = __webpack_require__(593);

var _reactRemarkable2 = _interopRequireDefault(_reactRemarkable);

var _reactCopyToClipboard = __webpack_require__(646);

var _reactCopyToClipboard2 = _interopRequireDefault(_reactCopyToClipboard);

var _glamorous = __webpack_require__(650);

var _glamorous2 = _interopRequireDefault(_glamorous);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/willoo/Documents/Projects/git-tables/pages/index.js?entry',
    _glamorous$button,
    _glamorous$button2;

var Row = _glamorous2.default.div({ flex: 1, display: 'flex' });
var Column = _glamorous2.default.div({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  height: '100vh',
  padding: 25
}, function (props) {
  return {
    flex: props.flex || 1,
    backgroundColor: props.bgColor || '#F1F1F1'
  };
});

var Icon = function Icon(_ref) {
  var className = _ref.className,
      type = _ref.type,
      _ref$selected = _ref.selected,
      selected = _ref$selected === undefined ? false : _ref$selected,
      props = (0, _objectWithoutProperties3.default)(_ref, ['className', 'type', 'selected']);

  return _react2.default.createElement(_glamorous.Div, (0, _extends3.default)({
    color: selected ? '#F1F1F1' : '#333',
    backgroundColor: selected ? '#333' : '#F1F1F1',
    display: 'flex',
    border: '1px solid #F1F1F1',
    padding: 4,
    userSelect: 'none',
    cursor: 'pointer'
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), _react2.default.createElement('i', { className: 'material-icons', style: { fontSize: 20 }, __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, type));
};

var Input = _glamorous2.default.input({
  fontFamily: 'Roboto',
  width: '100%',
  outline: 'none',
  border: 'none',
  padding: 8,
  margin: 8,
  backgroundColor: 'transparent',
  borderBottom: '1px solid #F1F1F1',
  color: '#F1F1F1'
});

var Copy = _glamorous2.default.button((_glamorous$button = {
  fontFamily: 'Roboto',
  border: 'none',
  outline: 'none',
  padding: 12,
  margin: '12px 0',
  backgroundColor: '#F1F1F1'
}, (0, _defineProperty3.default)(_glamorous$button, 'border', '1px solid #333'), (0, _defineProperty3.default)(_glamorous$button, 'color', '#333'), (0, _defineProperty3.default)(_glamorous$button, 'transition', 'all .3s ease'), (0, _defineProperty3.default)(_glamorous$button, 'cursor', 'pointer'), (0, _defineProperty3.default)(_glamorous$button, ':hover', {
  color: '#F1F1F1',
  backgroundColor: '#333'
}), _glamorous$button));

var Add = _glamorous2.default.button((_glamorous$button2 = {
  fontFamily: 'Roboto',
  border: 'none',
  outline: 'none',
  padding: 12,
  margin: '12px 0',
  backgroundColor: '#333'
}, (0, _defineProperty3.default)(_glamorous$button2, 'border', '1px solid #F1F1F1'), (0, _defineProperty3.default)(_glamorous$button2, 'color', '#F1F1F1'), (0, _defineProperty3.default)(_glamorous$button2, 'transition', 'all .3s ease'), (0, _defineProperty3.default)(_glamorous$button2, 'cursor', 'pointer'), (0, _defineProperty3.default)(_glamorous$button2, ':hover', {
  color: '#333',
  backgroundColor: '#F1F1F1'
}), _glamorous$button2));

var Code = _glamorous2.default.pre({
  width: '100%',
  padding: 12,
  backgroundColor: '#FAFAFA',
  color: '#333',
  borderRadius: 0
});

var Title = _glamorous2.default.h2({ fontFamily: 'Roboto', padding: 0 }, function (props) {
  return {
    color: props.color || '#333'
  };
});

function parse(state) {
  var str = '';
  var l = state.rows[0].split(',').length;
  var rrows = state.rows.map(function (r) {
    return r.split(',');
  });
  var fr = [];

  var _loop = function _loop(i) {
    fr[i] = fr[i] || [];
    rrows.map(function (r) {
      return fr[i].push(r[i]);
    });
  };

  for (var i = 0; i < l; i++) {
    _loop(i);
  }
  fr = fr.map(function (e) {
    return e.map(function (s) {
      return s ? s.trim() : '';
    });
  });
  var t = (0, _markdownTable2.default)([state.titles.split(',').map(function (s) {
    return s.trim();
  })].concat((0, _toConsumableArray3.default)(fr)), {
    align: state.aligns
  });
  return t;
}

var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index() {
    var _ref2;

    var _temp, _this, _ret2;

    (0, _classCallCheck3.default)(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret2 = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      titles: 'Title, Description',
      rows: ['title 1, title 2', 'desc 1, desc 2'],
      aligns: ['l', 'c']
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
      }, function () {
        return _this._input.focus();
      });
    }, _this._testKey = function (idx, e) {
      return e.keyCode === 13 ? _this._addRow() : e.keyCode === 8 && e.target.value === '' ? _this._removeRow(idx) : null;
    }, _this._changeAlign = function (idx, val) {
      return _this.setState(function (old) {
        var d = [].concat((0, _toConsumableArray3.default)(old.aligns));
        d[idx] = val;
        return (0, _extends3.default)({}, old, {
          aligns: d
        });
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret2);
  }

  (0, _createClass3.default)(Index, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, _react2.default.createElement(Column, { flex: 1, bgColor: '#333', __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, _react2.default.createElement(Title, { color: '#F1F1F1', children: 'Header', __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }), _react2.default.createElement(Input, { value: this.state.titles, onChange: function onChange(e) {
          return _this2._changeTitles(e.target.value);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }), _react2.default.createElement(Title, { color: '#F1F1F1', children: 'Data', __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }), this.state.rows.map(function (data, idx) {
        return _react2.default.createElement(_glamorous.Div, { display: 'flex', alignItems: 'center', width: '100%', key: idx, __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          }
        }, _react2.default.createElement(Input, {
          value: data,
          onChange: function onChange(e) {
            return _this2._changeData(idx, e.target.value);
          },
          onKeyUp: function onKeyUp(e) {
            return _this2._testKey(idx, e);
          },
          innerRef: function innerRef(r) {
            return _this2._input = r;
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          }
        }), _react2.default.createElement(_glamorous.Div, { display: 'flex', __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          }
        }, _react2.default.createElement(Icon, {
          type: 'format_align_left',
          selected: _this2.state.aligns[idx] === 'l',
          onClick: function onClick() {
            return _this2._changeAlign(idx, 'l');
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          }
        }), _react2.default.createElement(Icon, {
          type: 'format_align_center',
          selected: _this2.state.aligns[idx] === 'c',
          onClick: function onClick() {
            return _this2._changeAlign(idx, 'c');
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          }
        }), _react2.default.createElement(Icon, {
          type: 'format_align_right',
          selected: _this2.state.aligns[idx] === 'r',
          onClick: function onClick() {
            return _this2._changeAlign(idx, 'r');
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          }
        })));
      }), _react2.default.createElement(Add, { onClick: this._addRow, __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }, 'Add a row')), _react2.default.createElement(Column, { flex: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }, _react2.default.createElement(_glamorous.Div, {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start', __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }, _react2.default.createElement(Title, { children: 'Preview', __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }), _react2.default.createElement(Code, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, parse(this.state)), _react2.default.createElement(_reactCopyToClipboard2.default, { text: parse(this.state), __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, _react2.default.createElement(Copy, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }, 'Copy the markdown')), _react2.default.createElement('div', { className: 'markdown-body', __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }, _react2.default.createElement(_reactRemarkable2.default, { source: parse(this.state), __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      })))));
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwidGFibGUiLCJSZWFjdE1EIiwiQ29weVRvQ2xpcGJvYXJkIiwiZ2xhbW9yb3VzIiwiRGl2IiwiUm93IiwiZGl2IiwiZmxleCIsImRpc3BsYXkiLCJDb2x1bW4iLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwicGFkZGluZyIsInByb3BzIiwiYmFja2dyb3VuZENvbG9yIiwiYmdDb2xvciIsIkljb24iLCJjbGFzc05hbWUiLCJ0eXBlIiwic2VsZWN0ZWQiLCJmb250U2l6ZSIsIklucHV0IiwiaW5wdXQiLCJmb250RmFtaWx5Iiwid2lkdGgiLCJvdXRsaW5lIiwiYm9yZGVyIiwibWFyZ2luIiwiYm9yZGVyQm90dG9tIiwiY29sb3IiLCJDb3B5IiwiYnV0dG9uIiwiQWRkIiwiQ29kZSIsInByZSIsImJvcmRlclJhZGl1cyIsIlRpdGxlIiwiaDIiLCJwYXJzZSIsInN0YXRlIiwic3RyIiwibCIsInJvd3MiLCJzcGxpdCIsImxlbmd0aCIsInJyb3dzIiwibWFwIiwiciIsImZyIiwiaSIsInB1c2giLCJlIiwicyIsInRyaW0iLCJ0IiwidGl0bGVzIiwiYWxpZ24iLCJhbGlnbnMiLCJJbmRleCIsIl9jaGFuZ2VUaXRsZXMiLCJzZXRTdGF0ZSIsIl9jaGFuZ2VEYXRhIiwiaWR4IiwidmFsIiwib2xkIiwiX2FkZFJvdyIsIl9pbnB1dCIsImZvY3VzIiwiX3JlbW92ZVJvdyIsImZpbHRlciIsInYiLCJfdGVzdEtleSIsImtleUNvZGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIl9jaGFuZ2VBbGlnbiIsImQiLCJkYXRhIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7Ozs7Ozs7O0FBRW5CLElBQU0sTUFBTSxvQkFBQSxBQUFVLElBQUksRUFBQyxNQUFELEFBQU8sR0FBRyxTQUFwQyxBQUFZLEFBQWMsQUFBbUI7QUFDN0MsSUFBTSw2QkFBUyxBQUFVO1FBQ3ZCLEFBQ1EsQUFDTjtXQUZGLEFBRVcsQUFDVDtpQkFIRixBQUdpQixBQUNmO2tCQUpGLEFBSWtCLEFBQ2hCO2NBTEYsQUFLYyxBQUNaO1VBTkYsQUFNVSxBQUNSO1dBUlcsQUFDYixBQU9XO0FBUFgsQUFDRSxDQUZXLEVBVWIsaUJBQUE7O1VBQ1EsTUFBQSxBQUFNLFFBREosQUFDWSxBQUNwQjtxQkFBaUIsTUFBQSxBQUFNLFdBRnpCLEFBQVUsQUFFMEI7QUFGMUIsQUFDUjtBQVhKLEFBQWU7O0FBZ0JmLElBQU0sT0FBTyxTQUFQLEFBQU8sV0FBQTtNQUFBLEFBQUUsaUJBQUYsQUFBRTtNQUFGLEFBQWEsWUFBYixBQUFhOzJCQUFiLEFBQW1CO01BQW5CLEFBQW1CLHlDQUFuQixBQUE4QixRQUE5QjtNQUFBLEFBQXdDLDJFQUF4Qzs7eUJBQ1gsQUFBQztXQUNRLFdBQUEsQUFBVyxZQURwQixBQUNnQyxBQUM5QjtxQkFBaUIsV0FBQSxBQUFXLFNBRjlCLEFBRXVDLEFBQ3JDO2FBSEYsQUFHVSxBQUNSO1lBSkYsQUFJUyxBQUNQO2FBTEYsQUFLVyxBQUNUO2dCQU5GLEFBTWEsQUFDWDtZQVBGLEFBT1M7QUFOUCxLQURGLEFBUU07O2dCQVJOO2tCQUFBLEFBU0U7QUFURjtBQUFBLElBQUEsa0JBU0UsY0FBQSxPQUFHLFdBQUgsQUFBYSxrQkFBaUIsT0FBTyxFQUFDLFVBQXRDLEFBQXFDLEFBQVc7Z0JBQWhEO2tCQUFBLEFBQ0c7QUFESDtLQVZTLEFBQ1gsQUFTRTtBQVZKOztBQWdCQSxJQUFNLDRCQUFRLEFBQVU7Y0FBTSxBQUNoQixBQUNaO1NBRjRCLEFBRXJCLEFBQ1A7V0FINEIsQUFHbkIsQUFDVDtVQUo0QixBQUlwQixBQUNSO1dBTDRCLEFBS25CLEFBQ1Q7VUFONEIsQUFNcEIsQUFDUjttQkFQNEIsQUFPWCxBQUNqQjtnQkFSNEIsQUFRZCxBQUNkO1NBVEYsQUFBYyxBQUFnQixBQVNyQjtBQVRxQixBQUM1QixDQURZOztBQVlkLElBQU0sT0FBTyxvQkFBQSxBQUFVO2NBQVYsQUFDQyxBQUNaO1VBRlcsQUFFSCxBQUNSO1dBSFcsQUFHRixBQUNUO1dBSlcsQUFJRixBQUNUO1VBTFcsQUFLSCxBQUNSO21CQU5XLEFBTU07QUFMakIsOERBRFcsQUFPSCw2RUFQRyxBQVFKLHdFQVJJLEFBU0MsNEVBVEQsQUFVSCw2REFWRyxBQVdYO1NBQVUsQUFDRCxBQUNQO21CQWJTLEFBV0QsQUFFUztBQUZULEFBQ1IsSUFaSjs7QUFpQkEsSUFBTSxNQUFNLG9CQUFBLEFBQVU7Y0FBVixBQUNFLEFBQ1o7VUFGVSxBQUVGLEFBQ1I7V0FIVSxBQUdELEFBQ1Q7V0FKVSxBQUlELEFBQ1Q7VUFMVSxBQUtGLEFBQ1I7bUJBTlUsQUFNTztBQUxqQiwrREFEVSxBQU9GLGlGQVBFLEFBUUgsNEVBUkcsQUFTRSw2RUFURixBQVVGLDhEQVZFLEFBV1Y7U0FBVSxBQUNELEFBQ1A7bUJBYlEsQUFXQSxBQUVTO0FBRlQsQUFDUixJQVpKOztBQWlCQSxJQUFNLDJCQUFPLEFBQVU7U0FBSSxBQUNsQixBQUNQO1dBRnlCLEFBRWhCLEFBQ1Q7bUJBSHlCLEFBR1IsQUFDakI7U0FKeUIsQUFJbEIsQUFDUDtnQkFMRixBQUFhLEFBQWMsQUFLWDtBQUxXLEFBQ3pCLENBRFc7O0FBUWIsSUFBTSw0QkFBUSxBQUFVLEdBQUcsRUFBQyxZQUFELEFBQWEsVUFBVSxTQUFwQyxBQUFhLEFBQWdDLEtBQUksaUJBQUE7O1dBQ3RELE1BQUEsQUFBTSxTQURnRCxBQUFVLEFBQ2pEO0FBRGlELEFBQ3ZFO0FBREYsQUFBYyxDQUFBOztBQUlkLFNBQUEsQUFBUyxNQUFULEFBQWUsT0FBTyxBQUNwQjtNQUFJLE1BQUosQUFBVSxBQUNWO01BQU0sSUFBSSxNQUFBLEFBQU0sS0FBTixBQUFXLEdBQVgsQUFBYyxNQUFkLEFBQW9CLEtBQTlCLEFBQW1DLEFBQ25DO01BQU0sY0FBUSxBQUFNLEtBQU4sQUFBVyxJQUFJLGFBQUE7V0FBSyxFQUFBLEFBQUUsTUFBUCxBQUFLLEFBQVE7QUFBMUMsQUFBYyxBQUNkLEdBRGM7TUFDVixLQUpnQixBQUlwQixBQUFTOzs2QkFKVyxBQUtYLEdBQ1A7T0FBQSxBQUFHLEtBQUssR0FBQSxBQUFHLE1BQVgsQUFBaUIsQUFDakI7VUFBQSxBQUFNLElBQUksYUFBQTthQUFLLEdBQUEsQUFBRyxHQUFILEFBQU0sS0FBSyxFQUFoQixBQUFLLEFBQVcsQUFBRTtBQVBWLEFBT2xCO0FBRkY7O09BQUssSUFBSSxJQUFULEFBQWEsR0FBRyxJQUFoQixBQUFvQixHQUFwQixBQUF1QixLQUFLO1VBQW5CLEFBQW1CLEFBRzNCO0FBQ0Q7VUFBSyxBQUFHLElBQUksYUFBQTthQUFLLEFBQUUsSUFBSSxhQUFBO2FBQU0sSUFBSSxFQUFKLEFBQUksQUFBRSxTQUFaLEFBQXFCO0FBQWhDLEFBQUssS0FBQTtBQUFqQixBQUFLLEFBQ0wsR0FESztNQUNDLHdDQUFXLEFBQU0sT0FBTixBQUFhLE1BQWIsQUFBbUIsS0FBbkIsQUFBd0IsSUFBSSxhQUFBO1dBQUssRUFBTCxBQUFLLEFBQUU7QUFBMUMsQUFBTyxHQUFBLDJDQUFQLEFBQXNEO1dBQ3ZELE1BRFQsQUFBVSxBQUEyRCxBQUN0RCxBQUVmO0FBSHFFLEFBQ25FLEdBRFE7U0FHVixBQUFPLEFBQ1I7OztJQUVLLEE7Ozs7Ozs7Ozs7Ozs7OzZNQUNKLEE7Y0FBUSxBQUNFLEFBQ1I7WUFBTSxDQUFBLEFBQUMsb0JBRkQsQUFFQSxBQUFxQixBQUMzQjtjQUFRLENBQUEsQUFBQyxLQUFELEFBQU0sQSxBQUhSO0FBQUEsQUFDTixhQUlGLEEsZ0JBQWdCLGtCQUFBO21CQUFVLEFBQUssU0FBUyxlQUFBO2VBQVEsRUFBQyxRQUFULEFBQVE7QUFBaEMsQUFBVSxPQUFBO0EsYUFDMUIsQSxjQUFjLFVBQUEsQUFBQyxLQUFELEFBQU0sS0FBTjttQkFDWixBQUFLLFNBQVMsZUFBQTtpQkFBUyxVQUFNLEFBQUksS0FBSixBQUFTLElBQUksVUFBQSxBQUFDLEdBQUQsQUFBSSxHQUFKO21CQUFXLE1BQUEsQUFBTSxNQUFOLEFBQVksTUFBdkIsQUFBNkI7QUFBekQsQUFBUSxBQUFPLFdBQUEsQ0FBUDtBQURWLEFBQ1osT0FBQTtBLGFBQ0YsQSxVQUFVLFlBQUE7bUJBQU0sQUFBSyxTQUFTLGVBQUE7ZUFBUSxFQUFDLGlEQUFVLElBQVYsQUFBYyxRQUF2QixBQUFRLEFBQUMsQUFBb0I7QUFBM0MsT0FBQSxFQUFrRCxZQUFBO2VBQU0sTUFBQSxBQUFLLE9BQVgsQUFBTSxBQUFZO0FBQTFFLEFBQU07QSxhQUNoQixBLGFBQWEsZUFBQTttQkFDWCxBQUFLLFNBQVMsZUFBQTtpQkFBUyxVQUFNLEFBQUksS0FBSixBQUFTLE9BQU8sVUFBQSxBQUFDLEdBQUQsQUFBSSxHQUFKO21CQUFVLE1BQVYsQUFBZ0I7QUFBL0MsQUFBUSxBQUFPLFdBQUEsQ0FBUDtBQUF0QixPQUFBLEVBQXFFLFlBQUE7ZUFBTSxNQUFBLEFBQUssT0FBWCxBQUFNLEFBQVk7QUFENUUsQUFDWDtBLGFBQ0YsQSxXQUFXLFVBQUEsQUFBQyxLQUFELEFBQU0sR0FBTjthQUNULEVBQUEsQUFBRSxZQUFGLEFBQWMsS0FDVixNQURKLEFBQ0ksQUFBSyxZQUNMLEVBQUEsQUFBRSxZQUFGLEFBQWMsS0FBSyxFQUFBLEFBQUUsT0FBRixBQUFTLFVBQTVCLEFBQXNDLEtBQUssTUFBQSxBQUFLLFdBQWhELEFBQTJDLEFBQWdCLE9BSHRELEFBRzZEO0EsYUFDeEUsQSxlQUFlLFVBQUEsQUFBQyxLQUFELEFBQU0sS0FBTjttQkFDYixBQUFLLFNBQVMsZUFBTyxBQUNuQjtZQUFNLCtDQUFRLElBQWQsQUFBTSxBQUFZLEFBQ2xCO1VBQUEsQUFBRSxPQUFGLEFBQVMsQUFDVDswQ0FBQSxBQUNLO2tCQURMLEFBRVUsQUFFWDtBQUZHO0FBTlMsQUFDYixPQUFBO0E7Ozs7OzZCQVFPO21CQUNQOzs2QkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNHLGNBQUQsVUFBUSxNQUFSLEFBQWMsR0FBRyxTQUFqQixBQUF5QjtvQkFBekI7c0JBQUEsQUFDRTtBQURGO3VDQUNFLEFBQUMsU0FBTSxPQUFQLEFBQWEsV0FBVSxVQUF2QixBQUFnQztvQkFBaEM7c0JBREYsQUFDRSxBQUNBO0FBREE7d0NBQ0EsQUFBQyxTQUFNLE9BQU8sS0FBQSxBQUFLLE1BQW5CLEFBQXlCLFFBQVEsVUFBVSxxQkFBQTtpQkFBSyxPQUFBLEFBQUssY0FBYyxFQUFBLEFBQUUsT0FBMUIsQUFBSyxBQUE0QjtBQUE1RTtvQkFBQTtzQkFGRixBQUVFLEFBQ0E7QUFEQTt3Q0FDQSxBQUFDLFNBQU0sT0FBUCxBQUFhLFdBQVUsVUFBdkIsQUFBZ0M7b0JBQWhDO3NCQUhGLEFBR0UsQUFDQztBQUREO2VBQ0MsQUFBSyxNQUFMLEFBQVcsS0FBWCxBQUFnQixJQUFJLFVBQUEsQUFBQyxNQUFELEFBQU8sS0FBUDsrQkFDbkIsQUFBQyxnQ0FBSSxTQUFMLEFBQWEsUUFBTyxZQUFwQixBQUErQixVQUFTLE9BQXhDLEFBQThDLFFBQU8sS0FBckQsQUFBMEQ7c0JBQTFEO3dCQUFBLEFBQ0U7QUFERjtTQUFBLGdDQUNFLEFBQUM7aUJBQUQsQUFDUyxBQUNQO29CQUFVLHFCQUFBO21CQUFLLE9BQUEsQUFBSyxZQUFMLEFBQWlCLEtBQUssRUFBQSxBQUFFLE9BQTdCLEFBQUssQUFBK0I7QUFGaEQsQUFHRTttQkFBUyxvQkFBQTttQkFBSyxPQUFBLEFBQUssU0FBTCxBQUFjLEtBQW5CLEFBQUssQUFBbUI7QUFIbkMsQUFJRTtvQkFBVSxxQkFBQTttQkFBTSxPQUFBLEFBQUssU0FBWCxBQUFvQjtBQUpoQzs7c0JBQUE7d0JBREYsQUFDRSxBQU1BO0FBTkE7QUFDRSw0QkFLRixBQUFDLGdDQUFJLFNBQUwsQUFBYTtzQkFBYjt3QkFBQSxBQUNFO0FBREY7eUNBQ0UsQUFBQztnQkFBRCxBQUNPLEFBQ0w7b0JBQVUsT0FBQSxBQUFLLE1BQUwsQUFBVyxPQUFYLEFBQWtCLFNBRjlCLEFBRXVDLEFBQ3JDO21CQUFTLG1CQUFBO21CQUFNLE9BQUEsQUFBSyxhQUFMLEFBQWtCLEtBQXhCLEFBQU0sQUFBdUI7QUFIeEM7O3NCQUFBO3dCQURGLEFBQ0UsQUFLQTtBQUxBO0FBQ0UsMENBSUYsQUFBQztnQkFBRCxBQUNPLEFBQ0w7b0JBQVUsT0FBQSxBQUFLLE1BQUwsQUFBVyxPQUFYLEFBQWtCLFNBRjlCLEFBRXVDLEFBQ3JDO21CQUFTLG1CQUFBO21CQUFNLE9BQUEsQUFBSyxhQUFMLEFBQWtCLEtBQXhCLEFBQU0sQUFBdUI7QUFIeEM7O3NCQUFBO3dCQU5GLEFBTUUsQUFLQTtBQUxBO0FBQ0UsMENBSUYsQUFBQztnQkFBRCxBQUNPLEFBQ0w7b0JBQVUsT0FBQSxBQUFLLE1BQUwsQUFBVyxPQUFYLEFBQWtCLFNBRjlCLEFBRXVDLEFBQ3JDO21CQUFTLG1CQUFBO21CQUFNLE9BQUEsQUFBSyxhQUFMLEFBQWtCLEtBQXhCLEFBQU0sQUFBdUI7QUFIeEM7O3NCQUFBO3dCQW5CZSxBQUNuQixBQU9FLEFBV0U7QUFBQTtBQUNFO0FBeEJWLEFBSUcsQUEyQkQsMEJBQUMsY0FBRCxPQUFLLFNBQVMsS0FBZCxBQUFtQjtvQkFBbkI7c0JBQUE7QUFBQTtTQWhDSixBQUNFLEFBK0JFLEFBRUYsK0JBQUMsY0FBRCxVQUFRLE1BQVIsQUFBYztvQkFBZDtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQztjQUFELEFBQ1EsQUFDTjtpQkFGRixBQUVVLEFBQ1I7dUJBSEYsQUFHZ0IsQUFDZDtlQUpGLEFBSVEsQUFDTjt3QkFMRixBQUtpQixBQUNmO29CQU5GLEFBTWE7b0JBTmI7c0JBQUEsQUFPRTtBQVBGO0FBQ0UsdUNBTUEsQUFBQyxTQUFNLFVBQVAsQUFBZ0I7b0JBQWhCO3NCQVBGLEFBT0UsQUFDQTtBQURBOzBCQUNDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLGVBQWEsS0FSZixBQVFFLEFBQU8sQUFBVyxBQUNsQix5QkFBQSxBQUFDLGdEQUFnQixNQUFNLE1BQU0sS0FBN0IsQUFBdUIsQUFBVztvQkFBbEM7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQVZKLEFBU0UsQUFDRSxBQUVGLHVDQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsMkNBQVEsUUFBUSxNQUFNLEtBQXZCLEFBQWlCLEFBQVc7b0JBQTVCO3NCQWpEVixBQUNFLEFBa0NFLEFBQ0UsQUFZRSxBQUNFLEFBTVg7QUFOVzs7Ozs7O0VBM0VNLGdCQUFNLEEsQUFvRjFCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy93aWxsb28vRG9jdW1lbnRzL1Byb2plY3RzL2dpdC10YWJsZXMifQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS43ZmFjMzhjNWVjZTRlNmUzZDNkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/NzQyZWU2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdGFibGUgZnJvbSAnbWFya2Rvd24tdGFibGUnXG5pbXBvcnQgUmVhY3RNRCBmcm9tICdyZWFjdC1yZW1hcmthYmxlJ1xuaW1wb3J0IENvcHlUb0NsaXBib2FyZCBmcm9tICdyZWFjdC1jb3B5LXRvLWNsaXBib2FyZCdcbmltcG9ydCBnbGFtb3JvdXMsIHtEaXZ9IGZyb20gJ2dsYW1vcm91cydcblxuY29uc3QgUm93ID0gZ2xhbW9yb3VzLmRpdih7ZmxleDogMSwgZGlzcGxheTogJ2ZsZXgnfSlcbmNvbnN0IENvbHVtbiA9IGdsYW1vcm91cy5kaXYoXG4gIHtcbiAgICBmbGV4OiAxLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcbiAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgcGFkZGluZzogMjUsXG4gIH0sXG4gIHByb3BzID0+ICh7XG4gICAgZmxleDogcHJvcHMuZmxleCB8fCAxLFxuICAgIGJhY2tncm91bmRDb2xvcjogcHJvcHMuYmdDb2xvciB8fCAnI0YxRjFGMScsXG4gIH0pXG4pXG5cbmNvbnN0IEljb24gPSAoe2NsYXNzTmFtZSwgdHlwZSwgc2VsZWN0ZWQgPSBmYWxzZSwgLi4ucHJvcHN9KSA9PiAoXG4gIDxEaXZcbiAgICBjb2xvcj17c2VsZWN0ZWQgPyAnI0YxRjFGMScgOiAnIzMzMyd9XG4gICAgYmFja2dyb3VuZENvbG9yPXtzZWxlY3RlZCA/ICcjMzMzJyA6ICcjRjFGMUYxJ31cbiAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgYm9yZGVyPVwiMXB4IHNvbGlkICNGMUYxRjFcIlxuICAgIHBhZGRpbmc9ezR9XG4gICAgdXNlclNlbGVjdD1cIm5vbmVcIlxuICAgIGN1cnNvcj1cInBvaW50ZXJcIlxuICAgIHsuLi5wcm9wc30+XG4gICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBzdHlsZT17e2ZvbnRTaXplOiAyMH19PlxuICAgICAge3R5cGV9XG4gICAgPC9pPlxuICA8L0Rpdj5cbilcblxuY29uc3QgSW5wdXQgPSBnbGFtb3JvdXMuaW5wdXQoe1xuICBmb250RmFtaWx5OiAnUm9ib3RvJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgb3V0bGluZTogJ25vbmUnLFxuICBib3JkZXI6ICdub25lJyxcbiAgcGFkZGluZzogOCxcbiAgbWFyZ2luOiA4LFxuICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjRjFGMUYxJyxcbiAgY29sb3I6ICcjRjFGMUYxJyxcbn0pXG5cbmNvbnN0IENvcHkgPSBnbGFtb3JvdXMuYnV0dG9uKHtcbiAgZm9udEZhbWlseTogJ1JvYm90bycsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBvdXRsaW5lOiAnbm9uZScsXG4gIHBhZGRpbmc6IDEyLFxuICBtYXJnaW46ICcxMnB4IDAnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjFGMUYxJyxcbiAgYm9yZGVyOiAnMXB4IHNvbGlkICMzMzMnLFxuICBjb2xvcjogJyMzMzMnLFxuICB0cmFuc2l0aW9uOiAnYWxsIC4zcyBlYXNlJyxcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gICc6aG92ZXInOiB7XG4gICAgY29sb3I6ICcjRjFGMUYxJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMzMzJyxcbiAgfSxcbn0pXG5cbmNvbnN0IEFkZCA9IGdsYW1vcm91cy5idXR0b24oe1xuICBmb250RmFtaWx5OiAnUm9ib3RvJyxcbiAgYm9yZGVyOiAnbm9uZScsXG4gIG91dGxpbmU6ICdub25lJyxcbiAgcGFkZGluZzogMTIsXG4gIG1hcmdpbjogJzEycHggMCcsXG4gIGJhY2tncm91bmRDb2xvcjogJyMzMzMnLFxuICBib3JkZXI6ICcxcHggc29saWQgI0YxRjFGMScsXG4gIGNvbG9yOiAnI0YxRjFGMScsXG4gIHRyYW5zaXRpb246ICdhbGwgLjNzIGVhc2UnLFxuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgJzpob3Zlcic6IHtcbiAgICBjb2xvcjogJyMzMzMnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNGMUYxRjEnLFxuICB9LFxufSlcblxuY29uc3QgQ29kZSA9IGdsYW1vcm91cy5wcmUoe1xuICB3aWR0aDogJzEwMCUnLFxuICBwYWRkaW5nOiAxMixcbiAgYmFja2dyb3VuZENvbG9yOiAnI0ZBRkFGQScsXG4gIGNvbG9yOiAnIzMzMycsXG4gIGJvcmRlclJhZGl1czogMCxcbn0pXG5cbmNvbnN0IFRpdGxlID0gZ2xhbW9yb3VzLmgyKHtmb250RmFtaWx5OiAnUm9ib3RvJywgcGFkZGluZzogMH0sIHByb3BzID0+ICh7XG4gIGNvbG9yOiBwcm9wcy5jb2xvciB8fCAnIzMzMycsXG59KSlcblxuZnVuY3Rpb24gcGFyc2Uoc3RhdGUpIHtcbiAgbGV0IHN0ciA9ICcnXG4gIGNvbnN0IGwgPSBzdGF0ZS5yb3dzWzBdLnNwbGl0KCcsJykubGVuZ3RoXG4gIGNvbnN0IHJyb3dzID0gc3RhdGUucm93cy5tYXAociA9PiByLnNwbGl0KCcsJykpXG4gIGxldCBmciA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgZnJbaV0gPSBmcltpXSB8fCBbXVxuICAgIHJyb3dzLm1hcChyID0+IGZyW2ldLnB1c2gocltpXSkpXG4gIH1cbiAgZnIgPSBmci5tYXAoZSA9PiBlLm1hcChzID0+IChzID8gcy50cmltKCkgOiAnJykpKVxuICBjb25zdCB0ID0gdGFibGUoW3N0YXRlLnRpdGxlcy5zcGxpdCgnLCcpLm1hcChzID0+IHMudHJpbSgpKSwgLi4uZnJdLCB7XG4gICAgYWxpZ246IHN0YXRlLmFsaWducyxcbiAgfSlcbiAgcmV0dXJuIHRcbn1cblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB0aXRsZXM6ICdUaXRsZSwgRGVzY3JpcHRpb24nLFxuICAgIHJvd3M6IFsndGl0bGUgMSwgdGl0bGUgMicsICdkZXNjIDEsIGRlc2MgMiddLFxuICAgIGFsaWduczogWydsJywgJ2MnXSxcbiAgfVxuICBfY2hhbmdlVGl0bGVzID0gdGl0bGVzID0+IHRoaXMuc2V0U3RhdGUob2xkID0+ICh7dGl0bGVzfSkpXG4gIF9jaGFuZ2VEYXRhID0gKGlkeCwgdmFsKSA9PlxuICAgIHRoaXMuc2V0U3RhdGUob2xkID0+ICh7cm93czogb2xkLnJvd3MubWFwKChyLCBpKSA9PiAoaSA9PT0gaWR4ID8gdmFsIDogcikpfSkpXG4gIF9hZGRSb3cgPSAoKSA9PiB0aGlzLnNldFN0YXRlKG9sZCA9PiAoe3Jvd3M6IFsuLi5vbGQucm93cywgJyddfSksICgpID0+IHRoaXMuX2lucHV0LmZvY3VzKCkpXG4gIF9yZW1vdmVSb3cgPSBpZHggPT5cbiAgICB0aGlzLnNldFN0YXRlKG9sZCA9PiAoe3Jvd3M6IG9sZC5yb3dzLmZpbHRlcigodiwgaSkgPT4gaSAhPT0gaWR4KX0pLCAoKSA9PiB0aGlzLl9pbnB1dC5mb2N1cygpKVxuICBfdGVzdEtleSA9IChpZHgsIGUpID0+XG4gICAgZS5rZXlDb2RlID09PSAxM1xuICAgICAgPyB0aGlzLl9hZGRSb3coKVxuICAgICAgOiBlLmtleUNvZGUgPT09IDggJiYgZS50YXJnZXQudmFsdWUgPT09ICcnID8gdGhpcy5fcmVtb3ZlUm93KGlkeCkgOiBudWxsXG4gIF9jaGFuZ2VBbGlnbiA9IChpZHgsIHZhbCkgPT5cbiAgICB0aGlzLnNldFN0YXRlKG9sZCA9PiB7XG4gICAgICBjb25zdCBkID0gWy4uLm9sZC5hbGlnbnNdXG4gICAgICBkW2lkeF0gPSB2YWxcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLm9sZCxcbiAgICAgICAgYWxpZ25zOiBkLFxuICAgICAgfVxuICAgIH0pXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbHVtbiBmbGV4PXsxfSBiZ0NvbG9yPVwiIzMzM1wiPlxuICAgICAgICAgIDxUaXRsZSBjb2xvcj1cIiNGMUYxRjFcIiBjaGlsZHJlbj1cIkhlYWRlclwiIC8+XG4gICAgICAgICAgPElucHV0IHZhbHVlPXt0aGlzLnN0YXRlLnRpdGxlc30gb25DaGFuZ2U9e2UgPT4gdGhpcy5fY2hhbmdlVGl0bGVzKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICA8VGl0bGUgY29sb3I9XCIjRjFGMUYxXCIgY2hpbGRyZW49XCJEYXRhXCIgLz5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5yb3dzLm1hcCgoZGF0YSwgaWR4KSA9PiAoXG4gICAgICAgICAgICA8RGl2IGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHdpZHRoPVwiMTAwJVwiIGtleT17aWR4fT5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgdmFsdWU9e2RhdGF9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5fY2hhbmdlRGF0YShpZHgsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBvbktleVVwPXtlID0+IHRoaXMuX3Rlc3RLZXkoaWR4LCBlKX1cbiAgICAgICAgICAgICAgICBpbm5lclJlZj17ciA9PiAodGhpcy5faW5wdXQgPSByKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPERpdiBkaXNwbGF5PVwiZmxleFwiPlxuICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZm9ybWF0X2FsaWduX2xlZnRcIlxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuYWxpZ25zW2lkeF0gPT09ICdsJ31cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuX2NoYW5nZUFsaWduKGlkeCwgJ2wnKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZm9ybWF0X2FsaWduX2NlbnRlclwiXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5zdGF0ZS5hbGlnbnNbaWR4XSA9PT0gJ2MnfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5fY2hhbmdlQWxpZ24oaWR4LCAnYycpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJmb3JtYXRfYWxpZ25fcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuYWxpZ25zW2lkeF0gPT09ICdyJ31cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuX2NoYW5nZUFsaWduKGlkeCwgJ3InKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0Rpdj5cbiAgICAgICAgICAgIDwvRGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxBZGQgb25DbGljaz17dGhpcy5fYWRkUm93fT5BZGQgYSByb3c8L0FkZD5cbiAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgIDxDb2x1bW4gZmxleD17Mn0+XG4gICAgICAgICAgPERpdlxuICAgICAgICAgICAgZmxleD17MX1cbiAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiZmxleC1zdGFydFwiXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiPlxuICAgICAgICAgICAgPFRpdGxlIGNoaWxkcmVuPVwiUHJldmlld1wiIC8+XG4gICAgICAgICAgICA8Q29kZT57cGFyc2UodGhpcy5zdGF0ZSl9PC9Db2RlPlxuICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZCB0ZXh0PXtwYXJzZSh0aGlzLnN0YXRlKX0+XG4gICAgICAgICAgICAgIDxDb3B5PkNvcHkgdGhlIG1hcmtkb3duPC9Db3B5PlxuICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmtkb3duLWJvZHlcIj5cbiAgICAgICAgICAgICAgPFJlYWN0TUQgc291cmNlPXtwYXJzZSh0aGlzLnN0YXRlKX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRGl2PlxuICAgICAgICA8L0NvbHVtbj5cbiAgICAgIDwvUm93PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BOztBQVNBO0FBQ0E7QUFEQTtBQVhBO0FBQ0E7QUFlQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTs7QUFEQTtBQVNBO0FBVEE7QUFBQTtBQVNBO0FBQ0E7QUFEQTtBQUFBO0FBVkE7QUFDQTtBQWVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBUkE7QUFDQTtBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTEE7QUFZQTtBQUFBO0FBREE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTEE7QUFZQTtBQUFBO0FBREE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBQ0E7QUFNQTs7QUFDQTtBQUFBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7OztBQUVBOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUZBO0FBTEE7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUpBOztBQUFBO0FBTUE7QUFOQTtBQUNBO0FBS0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUhBOztBQUFBO0FBS0E7QUFMQTtBQUNBO0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFIQTs7QUFBQTtBQUtBO0FBTEE7QUFDQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBSEE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQU9BO0FBUEE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBTUE7QUFOQTs7Ozs7O0FBM0VBO0FBQ0E7QUFtRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==