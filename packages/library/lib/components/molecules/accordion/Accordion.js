"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _accordionButton = _interopRequireDefault(require("../../atoms/accordion-button"));

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
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_accordionButton["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9hY2NvcmRpb24vQWNjb3JkaW9uLmpzIl0sIm5hbWVzIjpbIkFjY29yZGlvbiIsInByb3BzIiwiYWN0aXZlU3RhdGUiLCJpc0Rpc2FibGVkIiwidG9nZ2xlQWNjb3JkaW9uIiwiYWNjb3JkaW9uRGF0YSIsInJlbmRlckFjY29yZGlvbiIsIm1hcCIsImRhdGEiLCJpbmRleCIsImhlYWQiLCJwYW5lbCIsIkFycmF5IiwiaXNBcnJheSIsInJlbmRlclRhYmxlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsIm9uQ2xpY2siLCJmdW5jIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWtCO0FBQUEsTUFBWkMsS0FBWTs7QUFBQSxNQUVoQ0MsV0FGZ0MsR0FNOUJELEtBTjhCLENBRWhDQyxXQUZnQztBQUFBLE1BR2hDQyxVQUhnQyxHQU05QkYsS0FOOEIsQ0FHaENFLFVBSGdDO0FBQUEsTUFJaENDLGVBSmdDLEdBTTlCSCxLQU44QixDQUloQ0csZUFKZ0M7QUFBQSxNQUtoQ0MsYUFMZ0MsR0FNOUJKLEtBTjhCLENBS2hDSSxhQUxnQzs7QUFRbEMsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLFdBQ0VELGFBQWEsQ0FBQ0UsR0FBZCxDQUFrQixVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFBQSxVQUMxQkMsSUFEMEIsR0FDWEYsSUFEVyxDQUMxQkUsSUFEMEI7QUFBQSxVQUNwQkMsS0FEb0IsR0FDWEgsSUFEVyxDQUNwQkcsS0FEb0I7QUFFakMsMEJBQ0EsK0VBQ0EsZ0NBQUMsMkJBQUQ7QUFDQSxRQUFBLFFBQVEsRUFBRVQsV0FEVjtBQUVBLFFBQUEsVUFBVSxFQUFFQyxVQUZaO0FBR0EsUUFBQSxrQkFBa0IsRUFBQyxXQUhuQjtBQUlBLFFBQUEsS0FBSyxFQUFFTyxJQUpQO0FBS0EsUUFBQSxPQUFPLEVBQUVOO0FBTFQsUUFEQSxlQVFGO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixTQUNHUSxLQUFLLENBQUNDLE9BQU4sQ0FBY0YsS0FBZCxJQUF1QkcsV0FBVyxDQUFDSCxLQUFELENBQWxDLGdCQUE0QywyQ0FBSUEsS0FBSixDQUQvQyxDQVJFLENBREE7QUFjRCxLQWhCRCxDQURGO0FBbUJELEdBcEJEOztBQXFCQSxNQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDSCxLQUFELEVBQVc7QUFDN0Isd0JBQU8sZ0NBQUMsa0JBQUQ7QUFBVSxNQUFBLFNBQVMsRUFBRUE7QUFBckIsTUFBUDtBQUNELEdBRkQ7O0FBS0Esc0JBQ0UsNkNBQ0dMLGVBQWUsRUFEbEIsQ0FERjtBQUtELENBdkNEOztBQXlDQU4sU0FBUyxDQUFDZSxTQUFWLEdBQXNCO0FBQ3BCYixFQUFBQSxXQUFXLEVBQUVjLHNCQUFVQyxJQURIO0FBRXBCZCxFQUFBQSxVQUFVLEVBQUVhLHNCQUFVQyxJQUZGOztBQUdwQjtBQUNGO0FBQ0E7QUFDRUMsRUFBQUEsT0FBTyxFQUFFRixzQkFBVUc7QUFOQyxDQUF0QjtBQVNBbkIsU0FBUyxDQUFDb0IsWUFBVixHQUF5QjtBQUN2QmxCLEVBQUFBLFdBQVcsRUFBRSxJQURVO0FBRXZCQyxFQUFBQSxVQUFVLEVBQUUsS0FGVztBQUd2QmUsRUFBQUEsT0FBTyxFQUFFRztBQUhjLENBQXpCO2VBTWVyQixTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IEFjY29yZGlvbkJ1dHRvbiBmcm9tIFwiLi4vLi4vYXRvbXMvYWNjb3JkaW9uLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi9hY2NvcmRpb24uY3NzXCI7XG5pbXBvcnQgeyBUYWJsZVJvdyB9IGZyb20gXCIuLi90YWJsZVJvdy9UYWJsZVJvd1wiO1xuXG4vKipcbiAqIEFjY29yZGlvbiBVSSBjb21wb25lbnQgZm9yIHVzZXIgaW50ZXJhY3Rpb25cbiAqL1xuY29uc3QgQWNjb3JkaW9uID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCB7XG4gICAgYWN0aXZlU3RhdGUsXG4gICAgaXNEaXNhYmxlZCxcbiAgICB0b2dnbGVBY2NvcmRpb24sXG4gICAgYWNjb3JkaW9uRGF0YVxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgcmVuZGVyQWNjb3JkaW9uID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBhY2NvcmRpb25EYXRhLm1hcCgoZGF0YSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qge2hlYWQsIHBhbmVsfSA9IGRhdGE7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxBY2NvcmRpb25CdXR0b25cbiAgICAgICAgaXNBY3RpdmU9e2FjdGl2ZVN0YXRlfVxuICAgICAgICBpc0Rpc2FibGVkPXtpc0Rpc2FibGVkfVxuICAgICAgICBhY2NvcmRpb25DbGFzc05hbWU9XCJhY2NvcmRpb25cIlxuICAgICAgICBsYWJlbD17aGVhZH1cbiAgICAgICAgb25DbGljaz17dG9nZ2xlQWNjb3JkaW9ufVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWxcIj5cbiAgICAgICAge0FycmF5LmlzQXJyYXkocGFuZWwpID8gcmVuZGVyVGFibGUocGFuZWwpIDogPHA+e3BhbmVsfTwvcD59XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICAgKVxuICAgICAgfSlcbiAgICApXG4gIH1cbiAgY29uc3QgcmVuZGVyVGFibGUgPSAocGFuZWwpID0+IHtcbiAgICByZXR1cm4gPFRhYmxlUm93IHBhbmVsRGF0YT17cGFuZWx9IC8+O1xuICB9O1xuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge3JlbmRlckFjY29yZGlvbigpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQWNjb3JkaW9uLnByb3BUeXBlcyA9IHtcbiAgYWN0aXZlU3RhdGU6IFByb3BUeXBlcy5ib29sLFxuICBpc0Rpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGNsaWNrIGhhbmRsZXJcbiAgICovXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuQWNjb3JkaW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWN0aXZlU3RhdGU6IHRydWUsXG4gIGlzRGlzYWJsZWQ6IGZhbHNlLFxuICBvbkNsaWNrOiB1bmRlZmluZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb247Il19