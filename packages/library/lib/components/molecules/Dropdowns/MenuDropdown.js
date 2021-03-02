"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuDropdown = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./menu-dropdown.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var MenuDropdown = function MenuDropdown(_ref) {
  var MenuItems = _ref.MenuItems,
      toggleMenu = _ref.toggleMenu,
      SubMenuItems = _ref.SubMenuItems,
      subMenuselected = _ref.subMenuselected,
      props = _objectWithoutProperties(_ref, ["MenuItems", "toggleMenu", "SubMenuItems", "subMenuselected"]);

  var selectedClass = subMenuselected ? 'selectedItem' : '';
  var toggleMainMenu = toggleMenu ? 'menuOpened' : 'test';
  var MainMenu = MenuItems.map(function (mainItem, index) {
    return /*#__PURE__*/_react["default"].createElement("button", {
      className: "dropbtn",
      key: index.toString()
    }, mainItem);
  });
  var SubMenu = SubMenuItems.map(function (subItem, index) {
    return /*#__PURE__*/_react["default"].createElement("a", {
      href: "#",
      key: index.toString(),
      className: selectedClass
    }, subItem);
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown ".concat(toggleMainMenu)
  }, MainMenu, /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown-content"
  }, SubMenu));
};

exports.MenuDropdown = MenuDropdown;
MenuDropdown.propTypes = {
  /**
   * Menu Item text
   */
  MenuItems: _propTypes["default"].array,

  /**
   * Menu Item toggle
   */
  toggleMenu: _propTypes["default"].bool,

  /**
   * Sub-Menu Item text
   */
  SubMenuItems: _propTypes["default"].array,

  /**
   * Sub-Menu Item toggle
   */
  subMenuselected: _propTypes["default"].bool
};
MenuDropdown.defaultProps = {
  MenuItems: ["Home"],
  toggleMainMenu: true,
  SubMenuItems: ["List 1", "List 2"],
  selected: false
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9Ecm9wZG93bnMvTWVudURyb3Bkb3duLmpzIl0sIm5hbWVzIjpbIk1lbnVEcm9wZG93biIsIk1lbnVJdGVtcyIsInRvZ2dsZU1lbnUiLCJTdWJNZW51SXRlbXMiLCJzdWJNZW51c2VsZWN0ZWQiLCJwcm9wcyIsInNlbGVjdGVkQ2xhc3MiLCJ0b2dnbGVNYWluTWVudSIsIk1haW5NZW51IiwibWFwIiwibWFpbkl0ZW0iLCJpbmRleCIsInRvU3RyaW5nIiwiU3ViTWVudSIsInN1Ykl0ZW0iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsImJvb2wiLCJkZWZhdWx0UHJvcHMiLCJzZWxlY3RlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVPLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQXdFO0FBQUEsTUFBckVDLFNBQXFFLFFBQXJFQSxTQUFxRTtBQUFBLE1BQTFEQyxVQUEwRCxRQUExREEsVUFBMEQ7QUFBQSxNQUE5Q0MsWUFBOEMsUUFBOUNBLFlBQThDO0FBQUEsTUFBaENDLGVBQWdDLFFBQWhDQSxlQUFnQztBQUFBLE1BQVpDLEtBQVk7O0FBQ3BHLE1BQU1DLGFBQWEsR0FBR0YsZUFBZSxHQUFHLGNBQUgsR0FBb0IsRUFBekQ7QUFDQSxNQUFNRyxjQUFjLEdBQUdMLFVBQVUsR0FBRyxZQUFILEdBQWtCLE1BQW5EO0FBQ0UsTUFBTU0sUUFBUSxHQUFHUCxTQUFTLENBQUNRLEdBQVYsQ0FBYyxVQUFDQyxRQUFELEVBQVdDLEtBQVg7QUFBQSx3QkFDN0I7QUFBUSxNQUFBLFNBQVMsRUFBQyxTQUFsQjtBQUE0QixNQUFBLEdBQUcsRUFBRUEsS0FBSyxDQUFDQyxRQUFOO0FBQWpDLE9BQW9ERixRQUFwRCxDQUQ2QjtBQUFBLEdBQWQsQ0FBakI7QUFHQSxNQUFNRyxPQUFPLEdBQUdWLFlBQVksQ0FBQ00sR0FBYixDQUFpQixVQUFDSyxPQUFELEVBQVVILEtBQVY7QUFBQSx3QkFDL0I7QUFBRyxNQUFBLElBQUksRUFBQyxHQUFSO0FBQVksTUFBQSxHQUFHLEVBQUVBLEtBQUssQ0FBQ0MsUUFBTixFQUFqQjtBQUFtQyxNQUFBLFNBQVMsRUFBRU47QUFBOUMsT0FDR1EsT0FESCxDQUQrQjtBQUFBLEdBQWpCLENBQWhCO0FBS0Esc0JBQ0U7QUFBSyxJQUFBLFNBQVMscUJBQWNQLGNBQWQ7QUFBZCxLQUNHQyxRQURILGVBRUU7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQW1DSyxPQUFuQyxDQUZGLENBREY7QUFNRCxDQWpCTTs7O0FBbUJQYixZQUFZLENBQUNlLFNBQWIsR0FBeUI7QUFDdkI7QUFDRjtBQUNBO0FBQ0VkLEVBQUFBLFNBQVMsRUFBRWUsc0JBQVVDLEtBSkU7O0FBS3ZCO0FBQ0Y7QUFDQTtBQUNFZixFQUFBQSxVQUFVLEVBQUVjLHNCQUFVRSxJQVJDOztBQVN2QjtBQUNGO0FBQ0E7QUFDRWYsRUFBQUEsWUFBWSxFQUFFYSxzQkFBVUMsS0FaRDs7QUFhdkI7QUFDRjtBQUNBO0FBQ0ViLEVBQUFBLGVBQWUsRUFBRVksc0JBQVVFO0FBaEJKLENBQXpCO0FBb0JBbEIsWUFBWSxDQUFDbUIsWUFBYixHQUE0QjtBQUMxQmxCLEVBQUFBLFNBQVMsRUFBRSxDQUFDLE1BQUQsQ0FEZTtBQUUxQk0sRUFBQUEsY0FBYyxFQUFFLElBRlU7QUFHMUJKLEVBQUFBLFlBQVksRUFBRSxDQUFDLFFBQUQsRUFBVyxRQUFYLENBSFk7QUFJMUJpQixFQUFBQSxRQUFRLEVBQUU7QUFKZ0IsQ0FBNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgXCIuL21lbnUtZHJvcGRvd24uY3NzXCI7XG5cbmV4cG9ydCBjb25zdCBNZW51RHJvcGRvd24gPSAoeyBNZW51SXRlbXMsIHRvZ2dsZU1lbnUsIFN1Yk1lbnVJdGVtcywgc3ViTWVudXNlbGVjdGVkLCAuLi5wcm9wcyB9KSA9PiB7XG5jb25zdCBzZWxlY3RlZENsYXNzID0gc3ViTWVudXNlbGVjdGVkID8gJ3NlbGVjdGVkSXRlbScgOiAnJztcbmNvbnN0IHRvZ2dsZU1haW5NZW51ID0gdG9nZ2xlTWVudSA/ICdtZW51T3BlbmVkJyA6ICd0ZXN0JztcbiAgY29uc3QgTWFpbk1lbnUgPSBNZW51SXRlbXMubWFwKChtYWluSXRlbSwgaW5kZXgpID0+IChcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRyb3BidG5cIiBrZXk9e2luZGV4LnRvU3RyaW5nKCl9PnttYWluSXRlbX08L2J1dHRvbj5cbiAgKSk7XG4gIGNvbnN0IFN1Yk1lbnUgPSBTdWJNZW51SXRlbXMubWFwKChzdWJJdGVtLCBpbmRleCkgPT4gKFxuICAgIDxhIGhyZWY9XCIjXCIga2V5PXtpbmRleC50b1N0cmluZygpfSBjbGFzc05hbWU9e3NlbGVjdGVkQ2xhc3N9PlxuICAgICAge3N1Ykl0ZW19XG4gICAgPC9hPlxuICApKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGRyb3Bkb3duICR7dG9nZ2xlTWFpbk1lbnV9YH0+XG4gICAgICB7TWFpbk1lbnV9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnRcIj57U3ViTWVudX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbk1lbnVEcm9wZG93bi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBNZW51IEl0ZW0gdGV4dFxuICAgKi9cbiAgTWVudUl0ZW1zOiBQcm9wVHlwZXMuYXJyYXksXG4gIC8qKlxuICAgKiBNZW51IEl0ZW0gdG9nZ2xlXG4gICAqL1xuICB0b2dnbGVNZW51OiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIFN1Yi1NZW51IEl0ZW0gdGV4dFxuICAgKi9cbiAgU3ViTWVudUl0ZW1zOiBQcm9wVHlwZXMuYXJyYXksXG4gIC8qKlxuICAgKiBTdWItTWVudSBJdGVtIHRvZ2dsZVxuICAgKi9cbiAgc3ViTWVudXNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cblxuTWVudURyb3Bkb3duLmRlZmF1bHRQcm9wcyA9IHtcbiAgTWVudUl0ZW1zOiBbXCJIb21lXCJdLFxuICB0b2dnbGVNYWluTWVudTogdHJ1ZSxcbiAgU3ViTWVudUl0ZW1zOiBbXCJMaXN0IDFcIiwgXCJMaXN0IDJcIl0sXG4gIHNlbGVjdGVkOiBmYWxzZSxcbn07XG4iXX0=