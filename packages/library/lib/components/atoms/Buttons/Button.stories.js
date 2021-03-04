"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Small = exports.Large = exports.Secondary = exports.Primary = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: '/Atoms/button',
  component: _["default"],
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_["default"], args);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2F0b21zL2J1dHRvbnMvQnV0dG9uLnN0b3JpZXMuanMiXSwibmFtZXMiOlsidGl0bGUiLCJjb21wb25lbnQiLCJCdXR0b24iLCJhcmdUeXBlcyIsImJhY2tncm91bmRDb2xvciIsImNvbnRyb2wiLCJUZW1wbGF0ZSIsImFyZ3MiLCJQcmltYXJ5IiwiYmluZCIsInByaW1hcnkiLCJsYWJlbCIsImlzSWNvbiIsIlNlY29uZGFyeSIsIkxhcmdlIiwic2l6ZSIsIlNtYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7ZUFFZTtBQUNiQSxFQUFBQSxLQUFLLEVBQUUsZUFETTtBQUViQyxFQUFBQSxTQUFTLEVBQUVDLFlBRkU7QUFHYkMsRUFBQUEsUUFBUSxFQUFFO0FBQ1JDLElBQUFBLGVBQWUsRUFBRTtBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWDtBQURUO0FBSEcsQzs7O0FBUWYsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRDtBQUFBLHNCQUFVLGdDQUFDLFlBQUQsRUFBWUEsSUFBWixDQUFWO0FBQUEsQ0FBakI7O0FBRU8sSUFBTUMsT0FBTyxHQUFHRixRQUFRLENBQUNHLElBQVQsQ0FBYyxFQUFkLENBQWhCOztBQUNQRCxPQUFPLENBQUNELElBQVIsR0FBZTtBQUNiRyxFQUFBQSxPQUFPLEVBQUUsSUFESTtBQUViQyxFQUFBQSxLQUFLLEVBQUUsUUFGTTtBQUdiQyxFQUFBQSxNQUFNLEVBQUU7QUFISyxDQUFmO0FBUU8sSUFBTUMsU0FBUyxHQUFHUCxRQUFRLENBQUNHLElBQVQsQ0FBYyxFQUFkLENBQWxCOztBQUNQSSxTQUFTLENBQUNOLElBQVYsR0FBaUI7QUFDZkksRUFBQUEsS0FBSyxFQUFFO0FBRFEsQ0FBakI7QUFLTyxJQUFNRyxLQUFLLEdBQUdSLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLEVBQWQsQ0FBZDs7QUFDUEssS0FBSyxDQUFDUCxJQUFOLEdBQWE7QUFDWFEsRUFBQUEsSUFBSSxFQUFFLE9BREs7QUFFWEosRUFBQUEsS0FBSyxFQUFFLFFBRkk7QUFHWEMsRUFBQUEsTUFBTSxFQUFFO0FBSEcsQ0FBYjtBQU1PLElBQU1JLEtBQUssR0FBR1YsUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFkOztBQUNQTyxLQUFLLENBQUNULElBQU4sR0FBYTtBQUNYUSxFQUFBQSxJQUFJLEVBQUUsT0FESztBQUVYSixFQUFBQSxLQUFLLEVBQUU7QUFGSSxDQUFiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0aXRsZTogJy9BdG9tcy9idXR0b24nLFxuICBjb21wb25lbnQ6IEJ1dHRvbixcbiAgYXJnVHlwZXM6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHsgY29udHJvbDogJ2NvbG9yJyB9LFxuICB9LFxufTtcblxuY29uc3QgVGVtcGxhdGUgPSAoYXJncykgPT4gPEJ1dHRvbiB7Li4uYXJnc30gLz47XG5cbmV4cG9ydCBjb25zdCBQcmltYXJ5ID0gVGVtcGxhdGUuYmluZCh7fSk7XG5QcmltYXJ5LmFyZ3MgPSB7XG4gIHByaW1hcnk6IHRydWUsXG4gIGxhYmVsOiAnQnV0dG9uJyxcbiAgaXNJY29uOiBmYWxzZSxcbn07XG5cblxuXG5leHBvcnQgY29uc3QgU2Vjb25kYXJ5ID0gVGVtcGxhdGUuYmluZCh7fSk7XG5TZWNvbmRhcnkuYXJncyA9IHtcbiAgbGFiZWw6ICdCdXR0b24nLFxufTtcblxuXG5leHBvcnQgY29uc3QgTGFyZ2UgPSBUZW1wbGF0ZS5iaW5kKHt9KTtcbkxhcmdlLmFyZ3MgPSB7XG4gIHNpemU6ICdsYXJnZScsXG4gIGxhYmVsOiAnQnV0dG9uJyxcbiAgaXNJY29uOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBjb25zdCBTbWFsbCA9IFRlbXBsYXRlLmJpbmQoe30pO1xuU21hbGwuYXJncyA9IHtcbiAgc2l6ZTogJ3NtYWxsJyxcbiAgbGFiZWw6ICdCdXR0b24nLFxufTtcbiJdfQ==