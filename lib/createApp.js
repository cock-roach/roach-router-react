"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactDom = _interopRequireDefault(require("react-dom"));

var _core = _interopRequireDefault(require("@mixspa/core"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createApp = function createApp(tag, _render) {
  _core.default.define({
    tag: tag,
    render: function render(parentEl) {
      _reactDom.default.render(_render(), parentEl);
    },
    unmount: function unmount(parentEl) {
      _reactDom.default.unmountComponentAtNode(parentEl);
    }
  });
};

var _default = createApp;
exports.default = _default;