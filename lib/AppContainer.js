"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _link = _interopRequireDefault(require("@mixspa/core/lib/link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppContainer = function AppContainer(_ref) {
  var baseUrl = _ref.baseUrl,
      children = _ref.children;
  var history = (0, _reactRouterDom.useHistory)();
  (0, _react.useEffect)(function () {
    var listener = _link.default.onLink(function (url) {
      if (url.startsWith(baseUrl)) {
        history.push(url.substring(baseUrl.length));
      }
    });

    return function () {
      return _link.default.offLink(listener);
    };
  });
  return children;
};

AppContainer.propTypes = {
  baseUrl: _propTypes.default.string,
  children: _propTypes.default.node
};
AppContainer.defaultProps = {
  baseUrl: ''
};
var _default = AppContainer;
exports.default = _default;