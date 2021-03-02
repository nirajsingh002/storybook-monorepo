"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rows = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _TableRow = require("./TableRow");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: '/Molecules/TableRow',
  component: _TableRow.TableRow
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_TableRow.TableRow, args);
};

var Rows = Template.bind({});
exports.Rows = Rows;
Rows.args = {
  label: '',
  panelData: [{
    id: 1,
    name: 'Wasif',
    age: 21,
    email: 'wasif@email.com',
    'imgSrc': "/images/searchIcon.png"
  }, {
    id: 2,
    name: 'Ali',
    age: 19,
    email: 'ali@email.com',
    'imgSrc': "/images/searchIcon.png"
  }, {
    id: 3,
    name: 'Saad',
    age: 16,
    email: 'saad@email.com',
    'imgSrc': "/images/searchIcon.png"
  }, {
    id: 4,
    name: 'Asad',
    age: 25,
    email: 'asad@email.com',
    'imgSrc': "/images/searchIcon.png"
  }]
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy90YWJsZVJvdy9UYWJsZVJvdy5zdG9yaWVzLmpzIl0sIm5hbWVzIjpbInRpdGxlIiwiY29tcG9uZW50IiwiVGFibGVSb3ciLCJUZW1wbGF0ZSIsImFyZ3MiLCJSb3dzIiwiYmluZCIsImxhYmVsIiwicGFuZWxEYXRhIiwiaWQiLCJuYW1lIiwiYWdlIiwiZW1haWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7OztlQUVlO0FBQ2JBLEVBQUFBLEtBQUssRUFBRSxxQkFETTtBQUViQyxFQUFBQSxTQUFTLEVBQUVDO0FBRkUsQzs7O0FBS2YsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRDtBQUFBLHNCQUFVLGdDQUFDLGtCQUFELEVBQWNBLElBQWQsQ0FBVjtBQUFBLENBQWpCOztBQUVPLElBQU1DLElBQUksR0FBR0YsUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFiOztBQUNQRCxJQUFJLENBQUNELElBQUwsR0FBWTtBQUNWRyxFQUFBQSxLQUFLLEVBQUUsRUFERztBQUVWQyxFQUFBQSxTQUFTLEVBQUUsQ0FDVDtBQUFFQyxJQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTQyxJQUFBQSxJQUFJLEVBQUUsT0FBZjtBQUF3QkMsSUFBQUEsR0FBRyxFQUFFLEVBQTdCO0FBQWlDQyxJQUFBQSxLQUFLLEVBQUUsaUJBQXhDO0FBQTJELGNBQVU7QUFBckUsR0FEUyxFQUVUO0FBQUVILElBQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNDLElBQUFBLElBQUksRUFBRSxLQUFmO0FBQXNCQyxJQUFBQSxHQUFHLEVBQUUsRUFBM0I7QUFBK0JDLElBQUFBLEtBQUssRUFBRSxlQUF0QztBQUF1RCxjQUFVO0FBQWpFLEdBRlMsRUFHVDtBQUFFSCxJQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTQyxJQUFBQSxJQUFJLEVBQUUsTUFBZjtBQUF1QkMsSUFBQUEsR0FBRyxFQUFFLEVBQTVCO0FBQWdDQyxJQUFBQSxLQUFLLEVBQUUsZ0JBQXZDO0FBQXlELGNBQVU7QUFBbkUsR0FIUyxFQUlUO0FBQUVILElBQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNDLElBQUFBLElBQUksRUFBRSxNQUFmO0FBQXVCQyxJQUFBQSxHQUFHLEVBQUUsRUFBNUI7QUFBZ0NDLElBQUFBLEtBQUssRUFBRSxnQkFBdkM7QUFBeUQsY0FBVTtBQUFuRSxHQUpTO0FBRkQsQ0FBWiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFRhYmxlUm93IH0gZnJvbSAnLi9UYWJsZVJvdyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGl0bGU6ICcvTW9sZWN1bGVzL1RhYmxlUm93JyxcbiAgY29tcG9uZW50OiBUYWJsZVJvdyxcbn07XG5cbmNvbnN0IFRlbXBsYXRlID0gKGFyZ3MpID0+IDxUYWJsZVJvdyB7Li4uYXJnc30gLz47XG5cbmV4cG9ydCBjb25zdCBSb3dzID0gVGVtcGxhdGUuYmluZCh7fSk7XG5Sb3dzLmFyZ3MgPSB7XG4gIGxhYmVsOiAnJyxcbiAgcGFuZWxEYXRhOiBbXG4gICAgeyBpZDogMSwgbmFtZTogJ1dhc2lmJywgYWdlOiAyMSwgZW1haWw6ICd3YXNpZkBlbWFpbC5jb20nLCAnaW1nU3JjJzogXCIvaW1hZ2VzL3NlYXJjaEljb24ucG5nXCJ9LFxuICAgIHsgaWQ6IDIsIG5hbWU6ICdBbGknLCBhZ2U6IDE5LCBlbWFpbDogJ2FsaUBlbWFpbC5jb20nLCAnaW1nU3JjJzogXCIvaW1hZ2VzL3NlYXJjaEljb24ucG5nXCJ9LFxuICAgIHsgaWQ6IDMsIG5hbWU6ICdTYWFkJywgYWdlOiAxNiwgZW1haWw6ICdzYWFkQGVtYWlsLmNvbScsICdpbWdTcmMnOiBcIi9pbWFnZXMvc2VhcmNoSWNvbi5wbmdcIn0sXG4gICAgeyBpZDogNCwgbmFtZTogJ0FzYWQnLCBhZ2U6IDI1LCBlbWFpbDogJ2FzYWRAZW1haWwuY29tJywgJ2ltZ1NyYyc6IFwiL2ltYWdlcy9zZWFyY2hJY29uLnBuZ1wiIH1cbiBdXG59O1xuXG4iXX0=