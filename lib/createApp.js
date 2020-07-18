"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactDom = _interopRequireDefault(require("react-dom"));

var _app = _interopRequireDefault(require("@mixspa/core/lib/app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createApp = function createApp(tag, _render) {
  _app.default.define({
    tag: tag,
    render: function render(el) {
      _reactDom.default.render(_render(el.getAttributes()), el);
    },
    unmount: function unmount(el) {
      _reactDom.default.unmountComponentAtNode(el);
    }
  });
};

var _default = createApp;
exports.default = _default;