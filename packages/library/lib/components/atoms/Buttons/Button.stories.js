"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Small = exports.Large = exports.Secondary = exports.Primary = exports["default"] = void 0;

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

var Primary = Template.bind({});
exports.Primary = Primary;
Primary.args = {
  primary: true,
  label: 'Button',
  isIcon: false
};
var Secondary = Template.bind({});
exports.Secondary = Secondary;
Secondary.args = {
  label: 'Button'
};
var Large = Template.bind({});
exports.Large = Large;
Large.args = {
  size: 'large',
  label: 'Button',
  isIcon: false
};
var Small = Template.bind({});
exports.Small = Small;
Small.args = {
  size: 'small',
  label: 'Button'
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2F0b21zL2J1dHRvbnMvQnV0dG9uLnN0b3JpZXMuanMiXSwibmFtZXMiOlsidGl0bGUiLCJjb21wb25lbnQiLCJCdXR0b24iLCJhcmdUeXBlcyIsImJhY2tncm91bmRDb2xvciIsImNvbnRyb2wiLCJUZW1wbGF0ZSIsImFyZ3MiLCJQcmltYXJ5IiwiYmluZCIsInByaW1hcnkiLCJsYWJlbCIsImlzSWNvbiIsIlNlY29uZGFyeSIsIkxhcmdlIiwic2l6ZSIsIlNtYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7ZUFFZTtBQUNiQSxFQUFBQSxLQUFLLEVBQUUsZUFETTtBQUViQyxFQUFBQSxTQUFTLEVBQUVDLGNBRkU7QUFHYkMsRUFBQUEsUUFBUSxFQUFFO0FBQ1JDLElBQUFBLGVBQWUsRUFBRTtBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWDtBQURUO0FBSEcsQzs7O0FBUWYsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRDtBQUFBLHNCQUFVLGdDQUFDLGNBQUQsRUFBWUEsSUFBWixDQUFWO0FBQUEsQ0FBakI7O0FBRU8sSUFBTUMsT0FBTyxHQUFHRixRQUFRLENBQUNHLElBQVQsQ0FBYyxFQUFkLENBQWhCOztBQUNQRCxPQUFPLENBQUNELElBQVIsR0FBZTtBQUNiRyxFQUFBQSxPQUFPLEVBQUUsSUFESTtBQUViQyxFQUFBQSxLQUFLLEVBQUUsUUFGTTtBQUdiQyxFQUFBQSxNQUFNLEVBQUU7QUFISyxDQUFmO0FBUU8sSUFBTUMsU0FBUyxHQUFHUCxRQUFRLENBQUNHLElBQVQsQ0FBYyxFQUFkLENBQWxCOztBQUNQSSxTQUFTLENBQUNOLElBQVYsR0FBaUI7QUFDZkksRUFBQUEsS0FBSyxFQUFFO0FBRFEsQ0FBakI7QUFLTyxJQUFNRyxLQUFLLEdBQUdSLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLEVBQWQsQ0FBZDs7QUFDUEssS0FBSyxDQUFDUCxJQUFOLEdBQWE7QUFDWFEsRUFBQUEsSUFBSSxFQUFFLE9BREs7QUFFWEosRUFBQUEsS0FBSyxFQUFFLFFBRkk7QUFHWEMsRUFBQUEsTUFBTSxFQUFFO0FBSEcsQ0FBYjtBQU1PLElBQU1JLEtBQUssR0FBR1YsUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFkOztBQUNQTyxLQUFLLENBQUNULElBQU4sR0FBYTtBQUNYUSxFQUFBQSxJQUFJLEVBQUUsT0FESztBQUVYSixFQUFBQSxLQUFLLEVBQUU7QUFGSSxDQUFiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9CdXR0b24nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRpdGxlOiAnL0F0b21zL2J1dHRvbicsXG4gIGNvbXBvbmVudDogQnV0dG9uLFxuICBhcmdUeXBlczoge1xuICAgIGJhY2tncm91bmRDb2xvcjogeyBjb250cm9sOiAnY29sb3InIH0sXG4gIH0sXG59O1xuXG5jb25zdCBUZW1wbGF0ZSA9IChhcmdzKSA9PiA8QnV0dG9uIHsuLi5hcmdzfSAvPjtcblxuZXhwb3J0IGNvbnN0IFByaW1hcnkgPSBUZW1wbGF0ZS5iaW5kKHt9KTtcblByaW1hcnkuYXJncyA9IHtcbiAgcHJpbWFyeTogdHJ1ZSxcbiAgbGFiZWw6ICdCdXR0b24nLFxuICBpc0ljb246IGZhbHNlLFxufTtcblxuXG5cbmV4cG9ydCBjb25zdCBTZWNvbmRhcnkgPSBUZW1wbGF0ZS5iaW5kKHt9KTtcblNlY29uZGFyeS5hcmdzID0ge1xuICBsYWJlbDogJ0J1dHRvbicsXG59O1xuXG5cbmV4cG9ydCBjb25zdCBMYXJnZSA9IFRlbXBsYXRlLmJpbmQoe30pO1xuTGFyZ2UuYXJncyA9IHtcbiAgc2l6ZTogJ2xhcmdlJyxcbiAgbGFiZWw6ICdCdXR0b24nLFxuICBpc0ljb246IGZhbHNlLFxufTtcblxuZXhwb3J0IGNvbnN0IFNtYWxsID0gVGVtcGxhdGUuYmluZCh7fSk7XG5TbWFsbC5hcmdzID0ge1xuICBzaXplOiAnc21hbGwnLFxuICBsYWJlbDogJ0J1dHRvbicsXG59O1xuIl19