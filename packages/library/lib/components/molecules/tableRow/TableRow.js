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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy90YWJsZVJvdy9UYWJsZVJvdy5qcyJdLCJuYW1lcyI6WyJUYWJsZVJvdyIsInByb3BzIiwicGFuZWxEYXRhIiwicmVuZGVyVGFibGVIZWFkZXIiLCJoZWFkZXIiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwiaW5kZXgiLCJyZW5kZXJUYWJsZURhdGEiLCJyb3ciLCJyb3dEYXRhIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXkiLCJkZWZhdWx0VmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRU8sSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBa0I7QUFBQSxNQUFaQyxLQUFZOztBQUFBLE1BQ2hDQyxTQURnQyxHQUNsQkQsS0FEa0IsQ0FDaENDLFNBRGdDOztBQUV4QyxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDOUIsUUFBSUMsTUFBTSxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUosU0FBUyxDQUFDLENBQUQsQ0FBckIsQ0FBYjtBQUNBLHdCQUNFLDRDQUNHRSxNQUFNLENBQUNHLEdBQVAsQ0FBVyxVQUFDQyxHQUFELEVBQU1DLEtBQU4sRUFBZ0I7QUFDMUIsMEJBQU87QUFBSSxRQUFBLEdBQUcsRUFBRUE7QUFBVCxTQUFpQkQsR0FBakIsQ0FBUDtBQUNELEtBRkEsQ0FESCxDQURGO0FBT0QsR0FURDs7QUFXQSxNQUFNRSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUIsV0FBT1IsU0FBUyxDQUFDSyxHQUFWLENBQWMsVUFBQ0ksR0FBRCxFQUFNRixLQUFOLEVBQWdCO0FBQ25DLFVBQUlHLE9BQU8sR0FBR1AsTUFBTSxDQUFDQyxJQUFQLENBQVlLLEdBQVosQ0FBZDtBQUNBLDBCQUNFO0FBQUksUUFBQSxHQUFHLEVBQUVGO0FBQVQsU0FDR0csT0FBTyxDQUFDTCxHQUFSLENBQVksVUFBQ0MsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQzNCLFlBQUdELEdBQUcsS0FBSyxRQUFYLEVBQXFCO0FBQ3BCLDhCQUFPO0FBQUksWUFBQSxHQUFHLEVBQUVDO0FBQVQsMEJBQWdCO0FBQUssWUFBQSxHQUFHLEVBQUVFLEdBQUcsQ0FBQ0gsR0FBRDtBQUFiLFlBQWhCLENBQVA7QUFDQTs7QUFDRCw0QkFBTztBQUFJLFVBQUEsR0FBRyxFQUFFQztBQUFULFdBQWlCRSxHQUFHLENBQUNILEdBQUQsQ0FBcEIsQ0FBUDtBQUNELE9BTEEsQ0FESCxDQURGO0FBVUQsS0FaTSxDQUFQO0FBYUQsR0FkRDs7QUFlQSxzQkFDRSw0REFDRSwrQ0FDR0wsaUJBQWlCLEVBRHBCLEVBRUdPLGVBQWUsRUFGbEIsQ0FERixDQURGO0FBUUQsQ0FwQ007OztBQXNDUFYsUUFBUSxDQUFDYSxTQUFULEdBQXFCO0FBQ25CWCxFQUFBQSxTQUFTLEVBQUVZLHNCQUFVQztBQURGLENBQXJCO0FBSUFmLFFBQVEsQ0FBQ2dCLFlBQVQsR0FBd0IsRUFBeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgXCIuL3RhYmxlcm93LmNzc1wiO1xuXG5leHBvcnQgY29uc3QgVGFibGVSb3cgPSAoeyAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHsgcGFuZWxEYXRhIH0gPSBwcm9wcztcbiAgY29uc3QgcmVuZGVyVGFibGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgbGV0IGhlYWRlciA9IE9iamVjdC5rZXlzKHBhbmVsRGF0YVswXSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0cj5cbiAgICAgICAge2hlYWRlci5tYXAoKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gPHRoIGtleT17aW5kZXh9PntrZXl9PC90aD47XG4gICAgICAgIH0pfVxuICAgICAgPC90cj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclRhYmxlRGF0YSA9ICgpID0+IHtcbiAgICByZXR1cm4gcGFuZWxEYXRhLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgbGV0IHJvd0RhdGEgPSBPYmplY3Qua2V5cyhyb3cpO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgIHtyb3dEYXRhLm1hcCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYoa2V5ID09PSAnaW1nU3JjJykge1xuICAgICAgICAgICAgIHJldHVybiA8dGQga2V5PXtpbmRleH0+PGltZyBzcmM9e3Jvd1trZXldfSAvPjwvdGQ+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gPHRkIGtleT17aW5kZXh9Pntyb3dba2V5XX08L3RkPjtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC90cj5cbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPHRhYmxlPlxuICAgICAgPHRib2R5PlxuICAgICAgICB7cmVuZGVyVGFibGVIZWFkZXIoKX1cbiAgICAgICAge3JlbmRlclRhYmxlRGF0YSgpfVxuICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICApO1xufTtcblxuVGFibGVSb3cucHJvcFR5cGVzID0ge1xuICBwYW5lbERhdGE6IFByb3BUeXBlcy5hcnJheSxcbn07XG5cblRhYmxlUm93LmRlZmF1bHRWYWx1ZSA9IHt9O1xuIl19