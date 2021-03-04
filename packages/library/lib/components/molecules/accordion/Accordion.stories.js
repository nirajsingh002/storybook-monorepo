"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionMolecules = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Accordion = _interopRequireDefault(require("./Accordion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: '/Molecules/accordion',
  component: _Accordion["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_Accordion["default"], args);
};

var AccordionMolecules = Template.bind({});
exports.AccordionMolecules = AccordionMolecules;
AccordionMolecules.args = {
  label: '',
  activeState: false,
  accordionData: [{
    head: 'Accordion Head 1',
    panel: [{
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
  }, {
    head: 'Accordion Head 2',
    panel: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }]
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9hY2NvcmRpb24vQWNjb3JkaW9uLnN0b3JpZXMuanMiXSwibmFtZXMiOlsidGl0bGUiLCJjb21wb25lbnQiLCJBY2NvcmRpb24iLCJUZW1wbGF0ZSIsImFyZ3MiLCJBY2NvcmRpb25Nb2xlY3VsZXMiLCJiaW5kIiwibGFiZWwiLCJhY3RpdmVTdGF0ZSIsImFjY29yZGlvbkRhdGEiLCJoZWFkIiwicGFuZWwiLCJpZCIsIm5hbWUiLCJhZ2UiLCJlbWFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7O2VBRWU7QUFDYkEsRUFBQUEsS0FBSyxFQUFFLHNCQURNO0FBRWJDLEVBQUFBLFNBQVMsRUFBRUM7QUFGRSxDOzs7QUFLZixJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxJQUFEO0FBQUEsc0JBQVUsZ0NBQUMscUJBQUQsRUFBZUEsSUFBZixDQUFWO0FBQUEsQ0FBakI7O0FBRU8sSUFBTUMsa0JBQWtCLEdBQUdGLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLEVBQWQsQ0FBM0I7O0FBQ1BELGtCQUFrQixDQUFDRCxJQUFuQixHQUEwQjtBQUN4QkcsRUFBQUEsS0FBSyxFQUFFLEVBRGlCO0FBRXhCQyxFQUFBQSxXQUFXLEVBQUUsS0FGVztBQUd4QkMsRUFBQUEsYUFBYSxFQUFFLENBQUM7QUFBQ0MsSUFBQUEsSUFBSSxFQUFFLGtCQUFQO0FBQTJCQyxJQUFBQSxLQUFLLEVBQUUsQ0FDaEQ7QUFBRUMsTUFBQUEsRUFBRSxFQUFFLENBQU47QUFBU0MsTUFBQUEsSUFBSSxFQUFFLE9BQWY7QUFBd0JDLE1BQUFBLEdBQUcsRUFBRSxFQUE3QjtBQUFpQ0MsTUFBQUEsS0FBSyxFQUFFLGlCQUF4QztBQUEyRCxnQkFBVTtBQUFyRSxLQURnRCxFQUVoRDtBQUFFSCxNQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFBQSxJQUFJLEVBQUUsS0FBZjtBQUFzQkMsTUFBQUEsR0FBRyxFQUFFLEVBQTNCO0FBQStCQyxNQUFBQSxLQUFLLEVBQUUsZUFBdEM7QUFBdUQsZ0JBQVU7QUFBakUsS0FGZ0QsRUFHaEQ7QUFBRUgsTUFBQUEsRUFBRSxFQUFFLENBQU47QUFBU0MsTUFBQUEsSUFBSSxFQUFFLE1BQWY7QUFBdUJDLE1BQUFBLEdBQUcsRUFBRSxFQUE1QjtBQUFnQ0MsTUFBQUEsS0FBSyxFQUFFLGdCQUF2QztBQUF5RCxnQkFBVTtBQUFuRSxLQUhnRCxFQUloRDtBQUFFSCxNQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFBQSxJQUFJLEVBQUUsTUFBZjtBQUF1QkMsTUFBQUEsR0FBRyxFQUFFLEVBQTVCO0FBQWdDQyxNQUFBQSxLQUFLLEVBQUUsZ0JBQXZDO0FBQXlELGdCQUFVO0FBQW5FLEtBSmdEO0FBQWxDLEdBQUQsRUFLWjtBQUFDTCxJQUFBQSxJQUFJLEVBQUUsa0JBQVA7QUFBMkJDLElBQUFBLEtBQUssRUFBRTtBQUFsQyxHQUxZO0FBSFMsQ0FBMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gJy4vQWNjb3JkaW9uJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0aXRsZTogJy9Nb2xlY3VsZXMvYWNjb3JkaW9uJyxcbiAgY29tcG9uZW50OiBBY2NvcmRpb24sXG59O1xuXG5jb25zdCBUZW1wbGF0ZSA9IChhcmdzKSA9PiA8QWNjb3JkaW9uIHsuLi5hcmdzfSAvPjtcblxuZXhwb3J0IGNvbnN0IEFjY29yZGlvbk1vbGVjdWxlcyA9IFRlbXBsYXRlLmJpbmQoe30pO1xuQWNjb3JkaW9uTW9sZWN1bGVzLmFyZ3MgPSB7XG4gIGxhYmVsOiAnJyxcbiAgYWN0aXZlU3RhdGU6IGZhbHNlLFxuICBhY2NvcmRpb25EYXRhOiBbe2hlYWQ6ICdBY2NvcmRpb24gSGVhZCAxJywgcGFuZWw6IFtcbiAgICB7IGlkOiAxLCBuYW1lOiAnV2FzaWYnLCBhZ2U6IDIxLCBlbWFpbDogJ3dhc2lmQGVtYWlsLmNvbScsICdpbWdTcmMnOiBcIi9pbWFnZXMvc2VhcmNoSWNvbi5wbmdcIn0sXG4gICAgeyBpZDogMiwgbmFtZTogJ0FsaScsIGFnZTogMTksIGVtYWlsOiAnYWxpQGVtYWlsLmNvbScsICdpbWdTcmMnOiBcIi9pbWFnZXMvc2VhcmNoSWNvbi5wbmdcIn0sXG4gICAgeyBpZDogMywgbmFtZTogJ1NhYWQnLCBhZ2U6IDE2LCBlbWFpbDogJ3NhYWRAZW1haWwuY29tJywgJ2ltZ1NyYyc6IFwiL2ltYWdlcy9zZWFyY2hJY29uLnBuZ1wifSxcbiAgICB7IGlkOiA0LCBuYW1lOiAnQXNhZCcsIGFnZTogMjUsIGVtYWlsOiAnYXNhZEBlbWFpbC5jb20nLCAnaW1nU3JjJzogXCIvaW1hZ2VzL3NlYXJjaEljb24ucG5nXCJ9XG4gXX0sIHtoZWFkOiAnQWNjb3JkaW9uIEhlYWQgMicsIHBhbmVsOiBcIkxvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhcyBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXAgaW50byBlbGVjdHJvbmljIHR5cGVzZXR0aW5nLCByZW1haW5pbmcgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLiBJdCB3YXMgcG9wdWxhcmlzZWQgaW4gdGhlIDE5NjBzIHdpdGggdGhlIHJlbGVhc2Ugb2YgTGV0cmFzZXQgc2hlZXRzIGNvbnRhaW5pbmcgTG9yZW0gSXBzdW0gcGFzc2FnZXMsIGFuZCBtb3JlIHJlY2VudGx5IHdpdGggZGVza3RvcCBwdWJsaXNoaW5nIHNvZnR3YXJlIGxpa2UgQWxkdXMgUGFnZU1ha2VyIGluY2x1ZGluZyB2ZXJzaW9ucyBvZiBMb3JlbSBJcHN1bS5cIn1dLFxufTtcblxuIl19