"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.accordionButton = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = require("./Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: '/Atoms/button',
  component: _Button.Button,
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_Button.Button, args);
};

var accordionButton = Template.bind({});
exports.accordionButton = accordionButton;
accordionButton.args = {
  label: '',
  isActive: false
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2F0b21zL2FjY29yZGlvbi1idXR0b24vQnV0dG9uLnN0b3JpZXMuanMiXSwibmFtZXMiOlsidGl0bGUiLCJjb21wb25lbnQiLCJCdXR0b24iLCJhcmdUeXBlcyIsImJhY2tncm91bmRDb2xvciIsImNvbnRyb2wiLCJUZW1wbGF0ZSIsImFyZ3MiLCJhY2NvcmRpb25CdXR0b24iLCJiaW5kIiwibGFiZWwiLCJpc0FjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7O2VBRWU7QUFDYkEsRUFBQUEsS0FBSyxFQUFFLGVBRE07QUFFYkMsRUFBQUEsU0FBUyxFQUFFQyxjQUZFO0FBR2JDLEVBQUFBLFFBQVEsRUFBRTtBQUNSQyxJQUFBQSxlQUFlLEVBQUU7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQVg7QUFEVDtBQUhHLEM7OztBQVFmLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLElBQUQ7QUFBQSxzQkFBVSxnQ0FBQyxjQUFELEVBQVlBLElBQVosQ0FBVjtBQUFBLENBQWpCOztBQUVPLElBQU1DLGVBQWUsR0FBR0YsUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUF4Qjs7QUFDUEQsZUFBZSxDQUFDRCxJQUFoQixHQUF1QjtBQUNyQkcsRUFBQUEsS0FBSyxFQUFFLEVBRGM7QUFFckJDLEVBQUFBLFFBQVEsRUFBRTtBQUZXLENBQXZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9CdXR0b24nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRpdGxlOiAnL0F0b21zL2J1dHRvbicsXG4gIGNvbXBvbmVudDogQnV0dG9uLFxuICBhcmdUeXBlczoge1xuICAgIGJhY2tncm91bmRDb2xvcjogeyBjb250cm9sOiAnY29sb3InIH0sXG4gIH0sXG59O1xuXG5jb25zdCBUZW1wbGF0ZSA9IChhcmdzKSA9PiA8QnV0dG9uIHsuLi5hcmdzfSAvPjtcblxuZXhwb3J0IGNvbnN0IGFjY29yZGlvbkJ1dHRvbiA9IFRlbXBsYXRlLmJpbmQoe30pO1xuYWNjb3JkaW9uQnV0dG9uLmFyZ3MgPSB7XG4gIGxhYmVsOiAnJyxcbiAgaXNBY3RpdmU6IGZhbHNlLFxufTtcblxuIl19