"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radio = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./radio-button.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var Radio = function Radio(_ref) {
  var label = _ref.label,
      checked = _ref.checked,
      props = _objectWithoutProperties(_ref, ["label", "checked"]);

  var mode = checked ? "checked" : "unchecked";
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", _extends({
    type: "radio",
    className: ["storybook-button", "storybook-button--".concat(1), mode].join(" "),
    name: "radio-group",
    checked: checked,
    value: "Male"
  }, props)), /*#__PURE__*/_react["default"].createElement("label", {
    "for": "test1"
  }, label));
};

exports.Radio = Radio;
Radio.propTypes = {
  /**
   * Radio Button contents
   */
  label: _propTypes["default"].string.isRequired,

  /**
   * Is this the principal call to action on the page?
   */
  checked: _propTypes["default"].bool,

  /**
   * Optional click handler
   */
  onChange: _propTypes["default"].func
};
Radio.defaultProps = {
  checked: false,
  onChange: undefined
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2F0b21zL2J1dHRvbnMvUmFkaW8uanMiXSwibmFtZXMiOlsiUmFkaW8iLCJsYWJlbCIsImNoZWNrZWQiLCJwcm9wcyIsIm1vZGUiLCJqb2luIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJvbkNoYW5nZSIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQWtDO0FBQUEsTUFBL0JDLEtBQStCLFFBQS9CQSxLQUErQjtBQUFBLE1BQXhCQyxPQUF3QixRQUF4QkEsT0FBd0I7QUFBQSxNQUFaQyxLQUFZOztBQUNyRCxNQUFNQyxJQUFJLEdBQUdGLE9BQU8sR0FBRyxTQUFILEdBQWUsV0FBbkM7QUFDQSxzQkFDRSwwREFDRTtBQUNFLElBQUEsSUFBSSxFQUFDLE9BRFA7QUFFRSxJQUFBLFNBQVMsRUFBRSxDQUFDLGtCQUFELDhCQUEwQyxDQUExQyxHQUErQ0UsSUFBL0MsRUFBcURDLElBQXJELENBQ1QsR0FEUyxDQUZiO0FBS0UsSUFBQSxJQUFJLEVBQUMsYUFMUDtBQU1FLElBQUEsT0FBTyxFQUFFSCxPQU5YO0FBT0UsSUFBQSxLQUFLLEVBQUM7QUFQUixLQVFNQyxLQVJOLEVBREYsZUFZRTtBQUFPLFdBQUk7QUFBWCxLQUFvQkYsS0FBcEIsQ0FaRixDQURGO0FBZ0JELENBbEJNOzs7QUFvQlBELEtBQUssQ0FBQ00sU0FBTixHQUFrQjtBQUNoQjtBQUNGO0FBQ0E7QUFDRUwsRUFBQUEsS0FBSyxFQUFFTSxzQkFBVUMsTUFBVixDQUFpQkMsVUFKUjs7QUFLaEI7QUFDRjtBQUNBO0FBQ0VQLEVBQUFBLE9BQU8sRUFBRUssc0JBQVVHLElBUkg7O0FBU2hCO0FBQ0Y7QUFDQTtBQUNFQyxFQUFBQSxRQUFRLEVBQUVKLHNCQUFVSztBQVpKLENBQWxCO0FBZUFaLEtBQUssQ0FBQ2EsWUFBTixHQUFxQjtBQUNuQlgsRUFBQUEsT0FBTyxFQUFFLEtBRFU7QUFFbkJTLEVBQUFBLFFBQVEsRUFBRUc7QUFGUyxDQUFyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBcIi4vcmFkaW8tYnV0dG9uLmNzc1wiO1xuXG4vKipcbiAqIFByaW1hcnkgVUkgY29tcG9uZW50IGZvciB1c2VyIGludGVyYWN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBSYWRpbyA9ICh7IGxhYmVsLCBjaGVja2VkLCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IG1vZGUgPSBjaGVja2VkID8gXCJjaGVja2VkXCIgOiBcInVuY2hlY2tlZFwiO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgY2xhc3NOYW1lPXtbXCJzdG9yeWJvb2stYnV0dG9uXCIsIGBzdG9yeWJvb2stYnV0dG9uLS0kezF9YCwgbW9kZV0uam9pbihcbiAgICAgICAgICBcIiBcIlxuICAgICAgICApfVxuICAgICAgICBuYW1lPVwicmFkaW8tZ3JvdXBcIlxuICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgICB2YWx1ZT1cIk1hbGVcIlxuICAgICAgICB7Li4ucHJvcHN9XG5cbiAgICAgIC8+XG4gICAgICA8bGFiZWwgZm9yPVwidGVzdDFcIj57bGFiZWx9PC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICApO1xufTtcblxuUmFkaW8ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogUmFkaW8gQnV0dG9uIGNvbnRlbnRzXG4gICAqL1xuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogSXMgdGhpcyB0aGUgcHJpbmNpcGFsIGNhbGwgdG8gYWN0aW9uIG9uIHRoZSBwYWdlP1xuICAgKi9cbiAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBPcHRpb25hbCBjbGljayBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5SYWRpby5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoZWNrZWQ6IGZhbHNlLFxuICBvbkNoYW5nZTogdW5kZWZpbmVkLFxufTtcbiJdfQ==