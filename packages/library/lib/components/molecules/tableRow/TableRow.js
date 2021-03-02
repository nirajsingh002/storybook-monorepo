"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableRow = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./tablerow.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var TableRow = function TableRow(_ref) {
  var props = _extends({}, _ref);

  var panelData = props.panelData;

  var renderTableHeader = function renderTableHeader() {
    var header = Object.keys(panelData[0]);
    return /*#__PURE__*/_react["default"].createElement("tr", null, header.map(function (key, index) {
      return /*#__PURE__*/_react["default"].createElement("th", {
        key: index
      }, key);
    }));
  };

  var renderTableData = function renderTableData() {
    return panelData.map(function (row, index) {
      var rowData = Object.keys(row);
      return /*#__PURE__*/_react["default"].createElement("tr", {
        key: index
      }, rowData.map(function (key, index) {
        console.log('key', key);
        debugger;

        if (key === 'imgSrc') {
          return /*#__PURE__*/_react["default"].createElement("td", {
            key: index
          }, /*#__PURE__*/_react["default"].createElement("img", {
            src: row[key]
          }));
        }

        return /*#__PURE__*/_react["default"].createElement("td", {
          key: index
        }, row[key]);
      }));
    });
  };

  return /*#__PURE__*/_react["default"].createElement("table", null, /*#__PURE__*/_react["default"].createElement("tbody", null, renderTableHeader(), renderTableData()));
};

exports.TableRow = TableRow;
TableRow.propTypes = {
  panelData: _propTypes["default"].array
};
TableRow.defaultValue = {};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy90YWJsZVJvdy9UYWJsZVJvdy5qcyJdLCJuYW1lcyI6WyJUYWJsZVJvdyIsInByb3BzIiwicGFuZWxEYXRhIiwicmVuZGVyVGFibGVIZWFkZXIiLCJoZWFkZXIiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwiaW5kZXgiLCJyZW5kZXJUYWJsZURhdGEiLCJyb3ciLCJyb3dEYXRhIiwiY29uc29sZSIsImxvZyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5IiwiZGVmYXVsdFZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWtCO0FBQUEsTUFBWkMsS0FBWTs7QUFBQSxNQUNoQ0MsU0FEZ0MsR0FDbEJELEtBRGtCLENBQ2hDQyxTQURnQzs7QUFFeEMsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzlCLFFBQUlDLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlKLFNBQVMsQ0FBQyxDQUFELENBQXJCLENBQWI7QUFDQSx3QkFDRSw0Q0FDR0UsTUFBTSxDQUFDRyxHQUFQLENBQVcsVUFBQ0MsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQzFCLDBCQUFPO0FBQUksUUFBQSxHQUFHLEVBQUVBO0FBQVQsU0FBaUJELEdBQWpCLENBQVA7QUFDRCxLQUZBLENBREgsQ0FERjtBQU9ELEdBVEQ7O0FBV0EsTUFBTUUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLFdBQU9SLFNBQVMsQ0FBQ0ssR0FBVixDQUFjLFVBQUNJLEdBQUQsRUFBTUYsS0FBTixFQUFnQjtBQUNuQyxVQUFJRyxPQUFPLEdBQUdQLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSyxHQUFaLENBQWQ7QUFDQSwwQkFDRTtBQUFJLFFBQUEsR0FBRyxFQUFFRjtBQUFULFNBQ0dHLE9BQU8sQ0FBQ0wsR0FBUixDQUFZLFVBQUNDLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUMzQkksUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBWixFQUFtQk4sR0FBbkI7QUFDQTs7QUFDQSxZQUFHQSxHQUFHLEtBQUssUUFBWCxFQUFxQjtBQUNwQiw4QkFBTztBQUFJLFlBQUEsR0FBRyxFQUFFQztBQUFULDBCQUFnQjtBQUFLLFlBQUEsR0FBRyxFQUFFRSxHQUFHLENBQUNILEdBQUQ7QUFBYixZQUFoQixDQUFQO0FBQ0E7O0FBQ0QsNEJBQU87QUFBSSxVQUFBLEdBQUcsRUFBRUM7QUFBVCxXQUFpQkUsR0FBRyxDQUFDSCxHQUFELENBQXBCLENBQVA7QUFDRCxPQVBBLENBREgsQ0FERjtBQVlELEtBZE0sQ0FBUDtBQWVELEdBaEJEOztBQWlCQSxzQkFDRSw0REFDRSwrQ0FDR0wsaUJBQWlCLEVBRHBCLEVBRUdPLGVBQWUsRUFGbEIsQ0FERixDQURGO0FBUUQsQ0F0Q007OztBQXdDUFYsUUFBUSxDQUFDZSxTQUFULEdBQXFCO0FBQ25CYixFQUFBQSxTQUFTLEVBQUVjLHNCQUFVQztBQURGLENBQXJCO0FBSUFqQixRQUFRLENBQUNrQixZQUFULEdBQXdCLEVBQXhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFwiLi90YWJsZXJvdy5jc3NcIjtcblxuZXhwb3J0IGNvbnN0IFRhYmxlUm93ID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCB7IHBhbmVsRGF0YSB9ID0gcHJvcHM7XG4gIGNvbnN0IHJlbmRlclRhYmxlSGVhZGVyID0gKCkgPT4ge1xuICAgIGxldCBoZWFkZXIgPSBPYmplY3Qua2V5cyhwYW5lbERhdGFbMF0pO1xuICAgIHJldHVybiAoXG4gICAgICA8dHI+XG4gICAgICAgIHtoZWFkZXIubWFwKChrZXksIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDx0aCBrZXk9e2luZGV4fT57a2V5fTwvdGg+O1xuICAgICAgICB9KX1cbiAgICAgIDwvdHI+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJUYWJsZURhdGEgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHBhbmVsRGF0YS5tYXAoKHJvdywgaW5kZXgpID0+IHtcbiAgICAgIGxldCByb3dEYXRhID0gT2JqZWN0LmtleXMocm93KTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICB7cm93RGF0YS5tYXAoKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdrZXknLCBrZXkpO1xuICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICBpZihrZXkgPT09ICdpbWdTcmMnKSB7XG4gICAgICAgICAgICAgcmV0dXJuIDx0ZCBrZXk9e2luZGV4fT48aW1nIHNyYz17cm93W2tleV19IC8+PC90ZD5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiA8dGQga2V5PXtpbmRleH0+e3Jvd1trZXldfTwvdGQ+O1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3RyPlxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8dGFibGU+XG4gICAgICA8dGJvZHk+XG4gICAgICAgIHtyZW5kZXJUYWJsZUhlYWRlcigpfVxuICAgICAgICB7cmVuZGVyVGFibGVEYXRhKCl9XG4gICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gICk7XG59O1xuXG5UYWJsZVJvdy5wcm9wVHlwZXMgPSB7XG4gIHBhbmVsRGF0YTogUHJvcFR5cGVzLmFycmF5LFxufTtcblxuVGFibGVSb3cuZGVmYXVsdFZhbHVlID0ge307XG4iXX0=