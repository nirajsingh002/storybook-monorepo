"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./accordion-button.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Primary UI component for user interaction
 */
var AccordionButton = function AccordionButton(_ref) {
  var props = _extends({}, _ref);

  var backgroundColor = props.backgroundColor,
      accordionClassName = props.accordionClassName,
      label = props.label,
      isActive = props.isActive,
      isDisabled = props.isDisabled;
  var accordionClass = accordionClassName ? accordionClassName : '';
  var toggleAccordion = isActive ? 'active' : '';
  var disabledAccordion = isDisabled ? 'disabled' : '';
  return /*#__PURE__*/_react["default"].createElement("button", _extends({
    type: "button",
    className: ['storybook-button storybook-button--accordion arrow down', accordionClass, toggleAccordion, disabledAccordion].join(' '),
    style: backgroundColor && {
      backgroundColor: backgroundColor
    }
  }, props), label);
};

AccordionButton.propTypes = {
  /**
   * What background color to use
   */
  backgroundColor: _propTypes["default"].string,

  /**
   * accordionClassName
   */
  accordionClassName: _propTypes["default"].string,

  /**
   * Button contents
   */
  label: _propTypes["default"].string.isRequired,

  /**
   * Toggle state opened/closed
   */
  isActive: _propTypes["default"].bool,

  /**
   * Optional click handler
   */
  onClick: _propTypes["default"].func
};
AccordionButton.defaultProps = {
  backgroundColor: null,
  isActive: false
};
var _default = AccordionButton;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2F0b21zL2FjY29yZGlvbi1idXR0b24vaW5kZXguanMiXSwibmFtZXMiOlsiQWNjb3JkaW9uQnV0dG9uIiwicHJvcHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJhY2NvcmRpb25DbGFzc05hbWUiLCJsYWJlbCIsImlzQWN0aXZlIiwiaXNEaXNhYmxlZCIsImFjY29yZGlvbkNsYXNzIiwidG9nZ2xlQWNjb3JkaW9uIiwiZGlzYWJsZWRBY2NvcmRpb24iLCJqb2luIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJvbkNsaWNrIiwiZnVuYyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLE9BQWtCO0FBQUEsTUFBWkMsS0FBWTs7QUFBQSxNQUNoQ0MsZUFEZ0MsR0FDb0NELEtBRHBDLENBQ2hDQyxlQURnQztBQUFBLE1BQ2ZDLGtCQURlLEdBQ29DRixLQURwQyxDQUNmRSxrQkFEZTtBQUFBLE1BQ0tDLEtBREwsR0FDb0NILEtBRHBDLENBQ0tHLEtBREw7QUFBQSxNQUNZQyxRQURaLEdBQ29DSixLQURwQyxDQUNZSSxRQURaO0FBQUEsTUFDc0JDLFVBRHRCLEdBQ29DTCxLQURwQyxDQUNzQkssVUFEdEI7QUFFeEMsTUFBTUMsY0FBYyxHQUFHSixrQkFBa0IsR0FBR0Esa0JBQUgsR0FBd0IsRUFBakU7QUFDQSxNQUFNSyxlQUFlLEdBQUdILFFBQVEsR0FBRyxRQUFILEdBQWMsRUFBOUM7QUFDQSxNQUFNSSxpQkFBaUIsR0FBR0gsVUFBVSxHQUFHLFVBQUgsR0FBZ0IsRUFBcEQ7QUFDQSxzQkFDRTtBQUNFLElBQUEsSUFBSSxFQUFDLFFBRFA7QUFFRSxJQUFBLFNBQVMsRUFBRSxDQUFDLHlEQUFELEVBQTREQyxjQUE1RCxFQUE0RUMsZUFBNUUsRUFBNkZDLGlCQUE3RixFQUFnSEMsSUFBaEgsQ0FBcUgsR0FBckgsQ0FGYjtBQUdFLElBQUEsS0FBSyxFQUFFUixlQUFlLElBQUk7QUFBRUEsTUFBQUEsZUFBZSxFQUFmQTtBQUFGO0FBSDVCLEtBSU1ELEtBSk4sR0FNR0csS0FOSCxDQURGO0FBVUQsQ0FmRDs7QUFpQkFKLGVBQWUsQ0FBQ1csU0FBaEIsR0FBNEI7QUFDMUI7QUFDRjtBQUNBO0FBQ0VULEVBQUFBLGVBQWUsRUFBRVUsc0JBQVVDLE1BSkQ7O0FBSzFCO0FBQ0Y7QUFDQTtBQUNFVixFQUFBQSxrQkFBa0IsRUFBRVMsc0JBQVVDLE1BUko7O0FBUzFCO0FBQ0Y7QUFDQTtBQUNFVCxFQUFBQSxLQUFLLEVBQUVRLHNCQUFVQyxNQUFWLENBQWlCQyxVQVpFOztBQWExQjtBQUNGO0FBQ0E7QUFDRVQsRUFBQUEsUUFBUSxFQUFFTyxzQkFBVUcsSUFoQk07O0FBaUIxQjtBQUNGO0FBQ0E7QUFDRUMsRUFBQUEsT0FBTyxFQUFFSixzQkFBVUs7QUFwQk8sQ0FBNUI7QUF1QkFqQixlQUFlLENBQUNrQixZQUFoQixHQUErQjtBQUM3QmhCLEVBQUFBLGVBQWUsRUFBRSxJQURZO0FBRTdCRyxFQUFBQSxRQUFRLEVBQUU7QUFGbUIsQ0FBL0I7ZUFJZUwsZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICcuL2FjY29yZGlvbi1idXR0b24uY3NzJztcblxuLyoqXG4gKiBQcmltYXJ5IFVJIGNvbXBvbmVudCBmb3IgdXNlciBpbnRlcmFjdGlvblxuICovXG5jb25zdCBBY2NvcmRpb25CdXR0b24gPSAoeyAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHsgYmFja2dyb3VuZENvbG9yLCBhY2NvcmRpb25DbGFzc05hbWUsIGxhYmVsLCBpc0FjdGl2ZSwgaXNEaXNhYmxlZH0gPSBwcm9wc1xuICBjb25zdCBhY2NvcmRpb25DbGFzcyA9IGFjY29yZGlvbkNsYXNzTmFtZSA/IGFjY29yZGlvbkNsYXNzTmFtZSA6ICcnO1xuICBjb25zdCB0b2dnbGVBY2NvcmRpb24gPSBpc0FjdGl2ZSA/ICdhY3RpdmUnIDogJyc7XG4gIGNvbnN0IGRpc2FibGVkQWNjb3JkaW9uID0gaXNEaXNhYmxlZCA/ICdkaXNhYmxlZCcgOiAnJztcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzTmFtZT17WydzdG9yeWJvb2stYnV0dG9uIHN0b3J5Ym9vay1idXR0b24tLWFjY29yZGlvbiBhcnJvdyBkb3duJywgYWNjb3JkaW9uQ2xhc3MsIHRvZ2dsZUFjY29yZGlvbiwgZGlzYWJsZWRBY2NvcmRpb25dLmpvaW4oJyAnKX1cbiAgICAgIHN0eWxlPXtiYWNrZ3JvdW5kQ29sb3IgJiYgeyBiYWNrZ3JvdW5kQ29sb3IgfX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICB7bGFiZWx9XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuXG5BY2NvcmRpb25CdXR0b24ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogV2hhdCBiYWNrZ3JvdW5kIGNvbG9yIHRvIHVzZVxuICAgKi9cbiAgYmFja2dyb3VuZENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogYWNjb3JkaW9uQ2xhc3NOYW1lXG4gICAqL1xuICBhY2NvcmRpb25DbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBCdXR0b24gY29udGVudHNcbiAgICovXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBUb2dnbGUgc3RhdGUgb3BlbmVkL2Nsb3NlZFxuICAgKi9cbiAgaXNBY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICogT3B0aW9uYWwgY2xpY2sgaGFuZGxlclxuICAgKi9cbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5BY2NvcmRpb25CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBiYWNrZ3JvdW5kQ29sb3I6IG51bGwsXG4gIGlzQWN0aXZlOiBmYWxzZSxcbn07XG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb25CdXR0b247Il19