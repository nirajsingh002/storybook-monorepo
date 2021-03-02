"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionMolecules = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Accordion = require("./Accordion");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: '/Molecules/accordion',
  component: _Accordion.Accordion
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_Accordion.Accordion, args);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9hY2NvcmRpb24vQWNjb3JkaW9uLnN0b3JpZXMuanMiXSwibmFtZXMiOlsidGl0bGUiLCJjb21wb25lbnQiLCJBY2NvcmRpb24iLCJUZW1wbGF0ZSIsImFyZ3MiLCJBY2NvcmRpb25Nb2xlY3VsZXMiLCJiaW5kIiwibGFiZWwiLCJhY3RpdmVTdGF0ZSIsImFjY29yZGlvbkRhdGEiLCJoZWFkIiwicGFuZWwiLCJpZCIsIm5hbWUiLCJhZ2UiLCJlbWFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7O2VBRWU7QUFDYkEsRUFBQUEsS0FBSyxFQUFFLHNCQURNO0FBRWJDLEVBQUFBLFNBQVMsRUFBRUM7QUFGRSxDOzs7QUFLZixJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxJQUFEO0FBQUEsc0JBQVUsZ0NBQUMsb0JBQUQsRUFBZUEsSUFBZixDQUFWO0FBQUEsQ0FBakI7O0FBRU8sSUFBTUMsa0JBQWtCLEdBQUdGLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLEVBQWQsQ0FBM0I7O0FBQ1BELGtCQUFrQixDQUFDRCxJQUFuQixHQUEwQjtBQUN4QkcsRUFBQUEsS0FBSyxFQUFFLEVBRGlCO0FBRXhCQyxFQUFBQSxXQUFXLEVBQUUsS0FGVztBQUd4QkMsRUFBQUEsYUFBYSxFQUFFLENBQUM7QUFBQ0MsSUFBQUEsSUFBSSxFQUFFLGtCQUFQO0FBQTJCQyxJQUFBQSxLQUFLLEVBQUUsQ0FDaEQ7QUFBRUMsTUFBQUEsRUFBRSxFQUFFLENBQU47QUFBU0MsTUFBQUEsSUFBSSxFQUFFLE9BQWY7QUFBd0JDLE1BQUFBLEdBQUcsRUFBRSxFQUE3QjtBQUFpQ0MsTUFBQUEsS0FBSyxFQUFFLGlCQUF4QztBQUEyRCxnQkFBVTtBQUFyRSxLQURnRCxFQUVoRDtBQUFFSCxNQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFBQSxJQUFJLEVBQUUsS0FBZjtBQUFzQkMsTUFBQUEsR0FBRyxFQUFFLEVBQTNCO0FBQStCQyxNQUFBQSxLQUFLLEVBQUUsZUFBdEM7QUFBdUQsZ0JBQVU7QUFBakUsS0FGZ0QsRUFHaEQ7QUFBRUgsTUFBQUEsRUFBRSxFQUFFLENBQU47QUFBU0MsTUFBQUEsSUFBSSxFQUFFLE1BQWY7QUFBdUJDLE1BQUFBLEdBQUcsRUFBRSxFQUE1QjtBQUFnQ0MsTUFBQUEsS0FBSyxFQUFFLGdCQUF2QztBQUF5RCxnQkFBVTtBQUFuRSxLQUhnRCxFQUloRDtBQUFFSCxNQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFBQSxJQUFJLEVBQUUsTUFBZjtBQUF1QkMsTUFBQUEsR0FBRyxFQUFFLEVBQTVCO0FBQWdDQyxNQUFBQSxLQUFLLEVBQUUsZ0JBQXZDO0FBQXlELGdCQUFVO0FBQW5FLEtBSmdEO0FBQWxDLEdBQUQsRUFLWjtBQUFDTCxJQUFBQSxJQUFJLEVBQUUsa0JBQVA7QUFBMkJDLElBQUFBLEtBQUssRUFBRTtBQUFsQyxHQUxZO0FBSFMsQ0FBMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBBY2NvcmRpb24gfSBmcm9tICcuL0FjY29yZGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGl0bGU6ICcvTW9sZWN1bGVzL2FjY29yZGlvbicsXG4gIGNvbXBvbmVudDogQWNjb3JkaW9uLFxufTtcblxuY29uc3QgVGVtcGxhdGUgPSAoYXJncykgPT4gPEFjY29yZGlvbiB7Li4uYXJnc30gLz47XG5cbmV4cG9ydCBjb25zdCBBY2NvcmRpb25Nb2xlY3VsZXMgPSBUZW1wbGF0ZS5iaW5kKHt9KTtcbkFjY29yZGlvbk1vbGVjdWxlcy5hcmdzID0ge1xuICBsYWJlbDogJycsXG4gIGFjdGl2ZVN0YXRlOiBmYWxzZSxcbiAgYWNjb3JkaW9uRGF0YTogW3toZWFkOiAnQWNjb3JkaW9uIEhlYWQgMScsIHBhbmVsOiBbXG4gICAgeyBpZDogMSwgbmFtZTogJ1dhc2lmJywgYWdlOiAyMSwgZW1haWw6ICd3YXNpZkBlbWFpbC5jb20nLCAnaW1nU3JjJzogXCIvaW1hZ2VzL3NlYXJjaEljb24ucG5nXCJ9LFxuICAgIHsgaWQ6IDIsIG5hbWU6ICdBbGknLCBhZ2U6IDE5LCBlbWFpbDogJ2FsaUBlbWFpbC5jb20nLCAnaW1nU3JjJzogXCIvaW1hZ2VzL3NlYXJjaEljb24ucG5nXCJ9LFxuICAgIHsgaWQ6IDMsIG5hbWU6ICdTYWFkJywgYWdlOiAxNiwgZW1haWw6ICdzYWFkQGVtYWlsLmNvbScsICdpbWdTcmMnOiBcIi9pbWFnZXMvc2VhcmNoSWNvbi5wbmdcIn0sXG4gICAgeyBpZDogNCwgbmFtZTogJ0FzYWQnLCBhZ2U6IDI1LCBlbWFpbDogJ2FzYWRAZW1haWwuY29tJywgJ2ltZ1NyYyc6IFwiL2ltYWdlcy9zZWFyY2hJY29uLnBuZ1wifVxuIF19LCB7aGVhZDogJ0FjY29yZGlvbiBIZWFkIDInLCBwYW5lbDogXCJMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnkncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLiBJdCBoYXMgc3Vydml2ZWQgbm90IG9ubHkgZml2ZSBjZW50dXJpZXMsIGJ1dCBhbHNvIHRoZSBsZWFwIGludG8gZWxlY3Ryb25pYyB0eXBlc2V0dGluZywgcmVtYWluaW5nIGVzc2VudGlhbGx5IHVuY2hhbmdlZC4gSXQgd2FzIHBvcHVsYXJpc2VkIGluIHRoZSAxOTYwcyB3aXRoIHRoZSByZWxlYXNlIG9mIExldHJhc2V0IHNoZWV0cyBjb250YWluaW5nIExvcmVtIElwc3VtIHBhc3NhZ2VzLCBhbmQgbW9yZSByZWNlbnRseSB3aXRoIGRlc2t0b3AgcHVibGlzaGluZyBzb2Z0d2FyZSBsaWtlIEFsZHVzIFBhZ2VNYWtlciBpbmNsdWRpbmcgdmVyc2lvbnMgb2YgTG9yZW0gSXBzdW0uXCJ9XSxcbn07XG5cbiJdfQ==