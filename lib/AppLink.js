"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = _interopRequireDefault(require("@mixspa/core"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var handleClick = function handleClick(e) {
  event.preventDefault();

  _core.default.emitLink(e.target.getAttribute('href'));
};

var AppLink = function AppLink(_ref) {
  var base = _ref.base,
      to = _ref.to,
      rest = _objectWithoutProperties(_ref, ["base", "to"]);

  return _react.default.createElement("a", _extends({
    href: base + to,
    onClick: handleClick
  }, rest));
};

AppLink.propTypes = {
  to: _propTypes.default.string.isRequired,
  base: _propTypes.default.string
};
AppLink.defaultProps = {
  base: ''
};
var _default = AppLink;
exports.default = _default;