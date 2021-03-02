"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = require("../../atoms/accordion-button/Button");

require("./accordion.css");

var _TableRow = require("../tableRow/TableRow");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Accordion UI component for user interaction
 */
var Accordion = function Accordion(_ref) {
  var props = _extends({}, _ref);

  var activeState = props.activeState,
      isDisabled = props.isDisabled,
      toggleAccordion = props.toggleAccordion,
      accordionData = props.accordionData;

  var renderAccordion = function renderAccordion() {
    return accordionData.map(function (data, index) {
      var head = data.head,
          panel = data.panel;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
        isActive: activeState,
        isDisabled: isDisabled,
        accordionClassName: "accordion",
        label: head,
        onClick: toggleAccordion
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "panel"
      }, Array.isArray(panel) ? renderTable(panel) : /*#__PURE__*/_react["default"].createElement("p", null, panel)));
    });
  };

  var renderTable = function renderTable(panel) {
    return /*#__PURE__*/_react["default"].createElement(_TableRow.TableRow, {
      panelData: panel
    });
  };

  return /*#__PURE__*/_react["default"].createElement("div", null, renderAccordion());
};

Accordion.propTypes = {
  activeState: _propTypes["default"].bool,
  isDisabled: _propTypes["default"].bool,

  /**
   * Optional click handler
   */
  onClick: _propTypes["default"].func
};
Accordion.defaultProps = {
  activeState: true,
  isDisabled: false,
  onClick: undefined
};
var _default = Accordion;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9hY2NvcmRpb24vQWNjb3JkaW9uLmpzIl0sIm5hbWVzIjpbIkFjY29yZGlvbiIsInByb3BzIiwiYWN0aXZlU3RhdGUiLCJpc0Rpc2FibGVkIiwidG9nZ2xlQWNjb3JkaW9uIiwiYWNjb3JkaW9uRGF0YSIsInJlbmRlckFjY29yZGlvbiIsIm1hcCIsImRhdGEiLCJpbmRleCIsImhlYWQiLCJwYW5lbCIsIkFycmF5IiwiaXNBcnJheSIsInJlbmRlclRhYmxlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsIm9uQ2xpY2siLCJmdW5jIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWtCO0FBQUEsTUFBWkMsS0FBWTs7QUFBQSxNQUVoQ0MsV0FGZ0MsR0FNOUJELEtBTjhCLENBRWhDQyxXQUZnQztBQUFBLE1BR2hDQyxVQUhnQyxHQU05QkYsS0FOOEIsQ0FHaENFLFVBSGdDO0FBQUEsTUFJaENDLGVBSmdDLEdBTTlCSCxLQU44QixDQUloQ0csZUFKZ0M7QUFBQSxNQUtoQ0MsYUFMZ0MsR0FNOUJKLEtBTjhCLENBS2hDSSxhQUxnQzs7QUFRbEMsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLFdBQ0VELGFBQWEsQ0FBQ0UsR0FBZCxDQUFrQixVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFBQSxVQUMxQkMsSUFEMEIsR0FDWEYsSUFEVyxDQUMxQkUsSUFEMEI7QUFBQSxVQUNwQkMsS0FEb0IsR0FDWEgsSUFEVyxDQUNwQkcsS0FEb0I7QUFFakMsMEJBQ0EsK0VBQ0EsZ0NBQUMsY0FBRDtBQUNBLFFBQUEsUUFBUSxFQUFFVCxXQURWO0FBRUEsUUFBQSxVQUFVLEVBQUVDLFVBRlo7QUFHQSxRQUFBLGtCQUFrQixFQUFDLFdBSG5CO0FBSUEsUUFBQSxLQUFLLEVBQUVPLElBSlA7QUFLQSxRQUFBLE9BQU8sRUFBRU47QUFMVCxRQURBLGVBUUY7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQ0dRLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixLQUFkLElBQXVCRyxXQUFXLENBQUNILEtBQUQsQ0FBbEMsZ0JBQTRDLDJDQUFJQSxLQUFKLENBRC9DLENBUkUsQ0FEQTtBQWNELEtBaEJELENBREY7QUFtQkQsR0FwQkQ7O0FBcUJBLE1BQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNILEtBQUQsRUFBVztBQUM3Qix3QkFBTyxnQ0FBQyxrQkFBRDtBQUFVLE1BQUEsU0FBUyxFQUFFQTtBQUFyQixNQUFQO0FBQ0QsR0FGRDs7QUFLQSxzQkFDRSw2Q0FDR0wsZUFBZSxFQURsQixDQURGO0FBS0QsQ0F2Q0Q7O0FBeUNBTixTQUFTLENBQUNlLFNBQVYsR0FBc0I7QUFDcEJiLEVBQUFBLFdBQVcsRUFBRWMsc0JBQVVDLElBREg7QUFFcEJkLEVBQUFBLFVBQVUsRUFBRWEsc0JBQVVDLElBRkY7O0FBR3BCO0FBQ0Y7QUFDQTtBQUNFQyxFQUFBQSxPQUFPLEVBQUVGLHNCQUFVRztBQU5DLENBQXRCO0FBU0FuQixTQUFTLENBQUNvQixZQUFWLEdBQXlCO0FBQ3ZCbEIsRUFBQUEsV0FBVyxFQUFFLElBRFU7QUFFdkJDLEVBQUFBLFVBQVUsRUFBRSxLQUZXO0FBR3ZCZSxFQUFBQSxPQUFPLEVBQUVHO0FBSGMsQ0FBekI7ZUFNZXJCLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vLi4vYXRvbXMvYWNjb3JkaW9uLWJ1dHRvbi9CdXR0b25cIjtcbi8vIGltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZvdW5kYXRpb24tc3Rvcnlib29rL3NyYy9zdG9yaWVzL2F0b21zL2J1dHRvbnMvQnV0dG9uJztcbmltcG9ydCBcIi4vYWNjb3JkaW9uLmNzc1wiO1xuaW1wb3J0IHsgVGFibGVSb3cgfSBmcm9tIFwiLi4vdGFibGVSb3cvVGFibGVSb3dcIjtcblxuLyoqXG4gKiBBY2NvcmRpb24gVUkgY29tcG9uZW50IGZvciB1c2VyIGludGVyYWN0aW9uXG4gKi9cbmNvbnN0IEFjY29yZGlvbiA9ICh7IC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3Qge1xuICAgIGFjdGl2ZVN0YXRlLFxuICAgIGlzRGlzYWJsZWQsXG4gICAgdG9nZ2xlQWNjb3JkaW9uLFxuICAgIGFjY29yZGlvbkRhdGFcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHJlbmRlckFjY29yZGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgYWNjb3JkaW9uRGF0YS5tYXAoKGRhdGEsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHtoZWFkLCBwYW5lbH0gPSBkYXRhO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgIGlzQWN0aXZlPXthY3RpdmVTdGF0ZX1cbiAgICAgICAgaXNEaXNhYmxlZD17aXNEaXNhYmxlZH1cbiAgICAgICAgYWNjb3JkaW9uQ2xhc3NOYW1lPVwiYWNjb3JkaW9uXCJcbiAgICAgICAgbGFiZWw9e2hlYWR9XG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUFjY29yZGlvbn1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsXCI+XG4gICAgICAgIHtBcnJheS5pc0FycmF5KHBhbmVsKSA/IHJlbmRlclRhYmxlKHBhbmVsKSA6IDxwPntwYW5lbH08L3A+fVxuICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICAgIClcbiAgICAgIH0pXG4gICAgKVxuICB9XG4gIGNvbnN0IHJlbmRlclRhYmxlID0gKHBhbmVsKSA9PiB7XG4gICAgcmV0dXJuIDxUYWJsZVJvdyBwYW5lbERhdGE9e3BhbmVsfSAvPjtcbiAgfTtcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtyZW5kZXJBY2NvcmRpb24oKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkFjY29yZGlvbi5wcm9wVHlwZXMgPSB7XG4gIGFjdGl2ZVN0YXRlOiBQcm9wVHlwZXMuYm9vbCxcbiAgaXNEaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBPcHRpb25hbCBjbGljayBoYW5kbGVyXG4gICAqL1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbkFjY29yZGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGFjdGl2ZVN0YXRlOiB0cnVlLFxuICBpc0Rpc2FibGVkOiBmYWxzZSxcbiAgb25DbGljazogdW5kZWZpbmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaW9uOyJdfQ==