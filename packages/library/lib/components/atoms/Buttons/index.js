"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./button.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var Button = function Button(_ref) {
  var primary = _ref.primary,
      backgroundColor = _ref.backgroundColor,
      size = _ref.size,
      label = _ref.label,
      isIcon = _ref.isIcon,
      props = _objectWithoutProperties(_ref, ["primary", "backgroundColor", "size", "label", "isIcon"]);

  var mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  var withIcon = isIcon ? 'arrow down' : '';
  return /*#__PURE__*/_react["default"].createElement("button", _extends({
    type: "button",
    className: ['storybook-button', "storybook-button--".concat(size), mode, withIcon].join(' '),
    style: backgroundColor && {
      backgroundColor: backgroundColor
    }
  }, props), label);
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: _propTypes["default"].bool,

  /**
   * What background color to use
   */
  backgroundColor: _propTypes["default"].string,

  /**
   * How large should the button be?
   */
  size: _propTypes["default"].oneOf(['small', 'medium', 'large']),

  /**
   * Button contents
   */
  label: _propTypes["default"].string.isRequired,

  /**
   * Icon button
   */
  isIcon: _propTypes["default"].bool,

  /**
   * Optional click handler
   */
  onClick: _propTypes["default"].func
};
Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
  label: 'library button'
};
var _default = Button;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2F0b21zL2J1dHRvbnMvaW5kZXguanMiXSwibmFtZXMiOlsiQnV0dG9uIiwicHJpbWFyeSIsImJhY2tncm91bmRDb2xvciIsInNpemUiLCJsYWJlbCIsImlzSWNvbiIsInByb3BzIiwibW9kZSIsIndpdGhJY29uIiwiam9pbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJvbkNsaWNrIiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBaUU7QUFBQSxNQUE5REMsT0FBOEQsUUFBOURBLE9BQThEO0FBQUEsTUFBckRDLGVBQXFELFFBQXJEQSxlQUFxRDtBQUFBLE1BQXBDQyxJQUFvQyxRQUFwQ0EsSUFBb0M7QUFBQSxNQUE5QkMsS0FBOEIsUUFBOUJBLEtBQThCO0FBQUEsTUFBdkJDLE1BQXVCLFFBQXZCQSxNQUF1QjtBQUFBLE1BQVpDLEtBQVk7O0FBQzlFLE1BQU1DLElBQUksR0FBR04sT0FBTyxHQUFHLDJCQUFILEdBQWlDLDZCQUFyRDtBQUNBLE1BQU1PLFFBQVEsR0FBR0gsTUFBTSxHQUFHLFlBQUgsR0FBa0IsRUFBekM7QUFDQSxzQkFDRTtBQUNFLElBQUEsSUFBSSxFQUFDLFFBRFA7QUFFRSxJQUFBLFNBQVMsRUFBRSxDQUFDLGtCQUFELDhCQUEwQ0YsSUFBMUMsR0FBa0RJLElBQWxELEVBQXdEQyxRQUF4RCxFQUFrRUMsSUFBbEUsQ0FBdUUsR0FBdkUsQ0FGYjtBQUdFLElBQUEsS0FBSyxFQUFFUCxlQUFlLElBQUk7QUFBRUEsTUFBQUEsZUFBZSxFQUFmQTtBQUFGO0FBSDVCLEtBSU1JLEtBSk4sR0FNR0YsS0FOSCxDQURGO0FBVUQsQ0FiRDs7QUFlQUosTUFBTSxDQUFDVSxTQUFQLEdBQW1CO0FBQ2pCO0FBQ0Y7QUFDQTtBQUNFVCxFQUFBQSxPQUFPLEVBQUVVLHNCQUFVQyxJQUpGOztBQUtqQjtBQUNGO0FBQ0E7QUFDRVYsRUFBQUEsZUFBZSxFQUFFUyxzQkFBVUUsTUFSVjs7QUFTakI7QUFDRjtBQUNBO0FBQ0VWLEVBQUFBLElBQUksRUFBRVEsc0JBQVVHLEtBQVYsQ0FBZ0IsQ0FBQyxPQUFELEVBQVUsUUFBVixFQUFvQixPQUFwQixDQUFoQixDQVpXOztBQWFqQjtBQUNGO0FBQ0E7QUFDRVYsRUFBQUEsS0FBSyxFQUFFTyxzQkFBVUUsTUFBVixDQUFpQkUsVUFoQlA7O0FBaUJqQjtBQUNGO0FBQ0E7QUFDRVYsRUFBQUEsTUFBTSxFQUFFTSxzQkFBVUMsSUFwQkQ7O0FBcUJqQjtBQUNGO0FBQ0E7QUFDRUksRUFBQUEsT0FBTyxFQUFFTCxzQkFBVU07QUF4QkYsQ0FBbkI7QUEyQkFqQixNQUFNLENBQUNrQixZQUFQLEdBQXNCO0FBQ3BCaEIsRUFBQUEsZUFBZSxFQUFFLElBREc7QUFFcEJELEVBQUFBLE9BQU8sRUFBRSxLQUZXO0FBR3BCRSxFQUFBQSxJQUFJLEVBQUUsUUFIYztBQUlwQmEsRUFBQUEsT0FBTyxFQUFFRyxTQUpXO0FBS3BCZixFQUFBQSxLQUFLLEVBQUU7QUFMYSxDQUF0QjtlQU9lSixNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgJy4vYnV0dG9uLmNzcyc7XG5cbi8qKlxuICogUHJpbWFyeSBVSSBjb21wb25lbnQgZm9yIHVzZXIgaW50ZXJhY3Rpb25cbiAqL1xuY29uc3QgQnV0dG9uID0gKHsgcHJpbWFyeSwgYmFja2dyb3VuZENvbG9yLCBzaXplLCBsYWJlbCwgaXNJY29uLCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IG1vZGUgPSBwcmltYXJ5ID8gJ3N0b3J5Ym9vay1idXR0b24tLXByaW1hcnknIDogJ3N0b3J5Ym9vay1idXR0b24tLXNlY29uZGFyeSc7XG4gIGNvbnN0IHdpdGhJY29uID0gaXNJY29uID8gJ2Fycm93IGRvd24nIDogJyc7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBjbGFzc05hbWU9e1snc3Rvcnlib29rLWJ1dHRvbicsIGBzdG9yeWJvb2stYnV0dG9uLS0ke3NpemV9YCwgbW9kZSwgd2l0aEljb25dLmpvaW4oJyAnKX1cbiAgICAgIHN0eWxlPXtiYWNrZ3JvdW5kQ29sb3IgJiYgeyBiYWNrZ3JvdW5kQ29sb3IgfX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICB7bGFiZWx9XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuXG5CdXR0b24ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogSXMgdGhpcyB0aGUgcHJpbmNpcGFsIGNhbGwgdG8gYWN0aW9uIG9uIHRoZSBwYWdlP1xuICAgKi9cbiAgcHJpbWFyeTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBXaGF0IGJhY2tncm91bmQgY29sb3IgdG8gdXNlXG4gICAqL1xuICBiYWNrZ3JvdW5kQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBIb3cgbGFyZ2Ugc2hvdWxkIHRoZSBidXR0b24gYmU/XG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnXSksXG4gIC8qKlxuICAgKiBCdXR0b24gY29udGVudHNcbiAgICovXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBJY29uIGJ1dHRvblxuICAgKi9cbiAgaXNJY29uOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGNsaWNrIGhhbmRsZXJcbiAgICovXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgYmFja2dyb3VuZENvbG9yOiBudWxsLFxuICBwcmltYXJ5OiBmYWxzZSxcbiAgc2l6ZTogJ21lZGl1bScsXG4gIG9uQ2xpY2s6IHVuZGVmaW5lZCxcbiAgbGFiZWw6ICdsaWJyYXJ5IGJ1dHRvbidcbn07XG5leHBvcnQgZGVmYXVsdCBCdXR0b247Il19