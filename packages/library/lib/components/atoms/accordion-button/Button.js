"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./button.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Primary UI component for user interaction
 */
var Button = function Button(_ref) {
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

exports.Button = Button;
Button.propTypes = {
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
Button.defaultProps = {
  backgroundColor: null,
  isActive: false
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2F0b21zL2FjY29yZGlvbi1idXR0b24vQnV0dG9uLmpzIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInByb3BzIiwiYmFja2dyb3VuZENvbG9yIiwiYWNjb3JkaW9uQ2xhc3NOYW1lIiwibGFiZWwiLCJpc0FjdGl2ZSIsImlzRGlzYWJsZWQiLCJhY2NvcmRpb25DbGFzcyIsInRvZ2dsZUFjY29yZGlvbiIsImRpc2FibGVkQWNjb3JkaW9uIiwiam9pbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJib29sIiwib25DbGljayIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ08sSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBa0I7QUFBQSxNQUFaQyxLQUFZOztBQUFBLE1BQzlCQyxlQUQ4QixHQUNzQ0QsS0FEdEMsQ0FDOUJDLGVBRDhCO0FBQUEsTUFDYkMsa0JBRGEsR0FDc0NGLEtBRHRDLENBQ2JFLGtCQURhO0FBQUEsTUFDT0MsS0FEUCxHQUNzQ0gsS0FEdEMsQ0FDT0csS0FEUDtBQUFBLE1BQ2NDLFFBRGQsR0FDc0NKLEtBRHRDLENBQ2NJLFFBRGQ7QUFBQSxNQUN3QkMsVUFEeEIsR0FDc0NMLEtBRHRDLENBQ3dCSyxVQUR4QjtBQUV0QyxNQUFNQyxjQUFjLEdBQUdKLGtCQUFrQixHQUFHQSxrQkFBSCxHQUF3QixFQUFqRTtBQUNBLE1BQU1LLGVBQWUsR0FBR0gsUUFBUSxHQUFHLFFBQUgsR0FBYyxFQUE5QztBQUNBLE1BQU1JLGlCQUFpQixHQUFHSCxVQUFVLEdBQUcsVUFBSCxHQUFnQixFQUFwRDtBQUNBLHNCQUNFO0FBQ0UsSUFBQSxJQUFJLEVBQUMsUUFEUDtBQUVFLElBQUEsU0FBUyxFQUFFLENBQUMseURBQUQsRUFBNERDLGNBQTVELEVBQTRFQyxlQUE1RSxFQUE2RkMsaUJBQTdGLEVBQWdIQyxJQUFoSCxDQUFxSCxHQUFySCxDQUZiO0FBR0UsSUFBQSxLQUFLLEVBQUVSLGVBQWUsSUFBSTtBQUFFQSxNQUFBQSxlQUFlLEVBQWZBO0FBQUY7QUFINUIsS0FJTUQsS0FKTixHQU1HRyxLQU5ILENBREY7QUFVRCxDQWZNOzs7QUFpQlBKLE1BQU0sQ0FBQ1csU0FBUCxHQUFtQjtBQUNqQjtBQUNGO0FBQ0E7QUFDRVQsRUFBQUEsZUFBZSxFQUFFVSxzQkFBVUMsTUFKVjs7QUFLakI7QUFDRjtBQUNBO0FBQ0VWLEVBQUFBLGtCQUFrQixFQUFFUyxzQkFBVUMsTUFSYjs7QUFTakI7QUFDRjtBQUNBO0FBQ0VULEVBQUFBLEtBQUssRUFBRVEsc0JBQVVDLE1BQVYsQ0FBaUJDLFVBWlA7O0FBYWpCO0FBQ0Y7QUFDQTtBQUNFVCxFQUFBQSxRQUFRLEVBQUVPLHNCQUFVRyxJQWhCSDs7QUFpQmpCO0FBQ0Y7QUFDQTtBQUNFQyxFQUFBQSxPQUFPLEVBQUVKLHNCQUFVSztBQXBCRixDQUFuQjtBQXVCQWpCLE1BQU0sQ0FBQ2tCLFlBQVAsR0FBc0I7QUFDcEJoQixFQUFBQSxlQUFlLEVBQUUsSUFERztBQUVwQkcsRUFBQUEsUUFBUSxFQUFFO0FBRlUsQ0FBdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAnLi9idXR0b24uY3NzJztcblxuLyoqXG4gKiBQcmltYXJ5IFVJIGNvbXBvbmVudCBmb3IgdXNlciBpbnRlcmFjdGlvblxuICovXG5leHBvcnQgY29uc3QgQnV0dG9uID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCB7IGJhY2tncm91bmRDb2xvciwgYWNjb3JkaW9uQ2xhc3NOYW1lLCBsYWJlbCwgaXNBY3RpdmUsIGlzRGlzYWJsZWR9ID0gcHJvcHNcbiAgY29uc3QgYWNjb3JkaW9uQ2xhc3MgPSBhY2NvcmRpb25DbGFzc05hbWUgPyBhY2NvcmRpb25DbGFzc05hbWUgOiAnJztcbiAgY29uc3QgdG9nZ2xlQWNjb3JkaW9uID0gaXNBY3RpdmUgPyAnYWN0aXZlJyA6ICcnO1xuICBjb25zdCBkaXNhYmxlZEFjY29yZGlvbiA9IGlzRGlzYWJsZWQgPyAnZGlzYWJsZWQnIDogJyc7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBjbGFzc05hbWU9e1snc3Rvcnlib29rLWJ1dHRvbiBzdG9yeWJvb2stYnV0dG9uLS1hY2NvcmRpb24gYXJyb3cgZG93bicsIGFjY29yZGlvbkNsYXNzLCB0b2dnbGVBY2NvcmRpb24sIGRpc2FibGVkQWNjb3JkaW9uXS5qb2luKCcgJyl9XG4gICAgICBzdHlsZT17YmFja2dyb3VuZENvbG9yICYmIHsgYmFja2dyb3VuZENvbG9yIH19XG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAge2xhYmVsfVxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcblxuQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFdoYXQgYmFja2dyb3VuZCBjb2xvciB0byB1c2VcbiAgICovXG4gIGJhY2tncm91bmRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIGFjY29yZGlvbkNsYXNzTmFtZVxuICAgKi9cbiAgYWNjb3JkaW9uQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogQnV0dG9uIGNvbnRlbnRzXG4gICAqL1xuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogVG9nZ2xlIHN0YXRlIG9wZW5lZC9jbG9zZWRcbiAgICovXG4gIGlzQWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGNsaWNrIGhhbmRsZXJcbiAgICovXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgYmFja2dyb3VuZENvbG9yOiBudWxsLFxuICBpc0FjdGl2ZTogZmFsc2UsXG59O1xuIl19