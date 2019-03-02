"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _reactRouterDom = require("react-router-dom");

var _core = _interopRequireDefault(require("@mixspa/core"));

var _EventLink = _interopRequireDefault(require("./EventLink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('EventLink', function () {
  var clickMock;
  var eventMock;
  var eventLink;
  beforeEach(function () {
    clickMock = jest.fn();
    _core.default.emit = jest.fn();
    eventMock = {
      target: {
        getAttribute: jest.fn(function () {
          return '/test';
        })
      }
    };
  });
  describe('#render', function () {
    beforeEach(function () {
      eventLink = (0, _enzyme.shallow)(_react.default.createElement(_EventLink.default, {
        to: "/test"
      }, "Hello"));
    });
    it('should render a hello message', function () {
      expect(eventLink.find(_reactRouterDom.Link).children().text()).toBe('Hello');
    });
    it('should link to test', function () {
      expect(eventLink.find(_reactRouterDom.Link).prop('to')).toBe('/test');
    });
    it('should emit event when click event', function () {
      eventLink.simulate('click', eventMock);
      expect(_core.default.emit).toHaveBeenCalledWith('mixspa:url:changed', '/test');
    });
  });
  describe('#on click', function () {
    beforeEach(function () {
      eventLink = (0, _enzyme.shallow)(_react.default.createElement(_EventLink.default, {
        to: "/test",
        onClick: clickMock
      }, "Hello"));
    });
    it('should emit event when click event', function () {
      eventLink.simulate('click', eventMock);
      expect(_core.default.emit).toHaveBeenCalledWith('mixspa:url:changed', '/test');
    });
    it('should invoke click callback when click event', function () {
      eventLink.simulate('click', eventMock);
      expect(clickMock).toHaveBeenCalledWith(eventMock);
    });
  });
});