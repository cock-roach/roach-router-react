"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _context10 = _interopRequireDefault(require("@mixspa/core/lib/context"));

var _createApp = _interopRequireDefault(require("./createApp"));

var _AppLoader = _interopRequireDefault(require("./AppLoader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

describe('AppLoader', function () {
  var Loader = function Loader() {
    return /*#__PURE__*/_react.default.createElement("span", {
      "data-testid": "test-loader"
    }, "Loading Bar");
  };

  var ErrorMessage = function ErrorMessage() {
    return /*#__PURE__*/_react.default.createElement("span", {
      "data-testid": "test-error"
    }, "Load error");
  };

  var app = {
    id: 'test-id',
    tag: 'test-app'
  };
  beforeAll(function () {
    (0, _createApp.default)('test-app', function (props) {
      return /*#__PURE__*/_react.default.createElement("div", {
        "data-testid": "test-app"
      }, "Test App ", props['data-test']);
    });
    _context10.default.getApp = jest.fn().mockReturnValue(app);
  });
  describe('#load success', function () {
    var loadPromise;
    beforeEach(function () {
      loadPromise = new Promise(function (resolve) {
        return resolve(app);
      });

      app.load = function () {
        return loadPromise;
      };
    });
    it('should render loading string', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _render, container;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _render = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_AppLoader.default, {
                appId: "test-id",
                "data-test": "Hello"
              })), container = _render.container;
              expect(container).toHaveTextContent('Loading');
              _context.next = 4;
              return (0, _react2.act)(function () {
                return loadPromise;
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    it('should render loading callback', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var _render2, getByTestId;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _render2 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_AppLoader.default, {
                appId: "test-id",
                renderLoading: function renderLoading() {
                  return /*#__PURE__*/_react.default.createElement(Loader, null);
                },
                "data-test": "Hello"
              })), getByTestId = _render2.getByTestId;
              expect(getByTestId('test-loader')).toHaveTextContent('Loading Bar');
              _context2.next = 4;
              return (0, _react2.act)(function () {
                return loadPromise;
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
    it('should render loaded app', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var _render3, getByTestId;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _render3 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_AppLoader.default, {
                appId: "test-id",
                "data-test": "Hello"
              })), getByTestId = _render3.getByTestId;
              _context3.next = 3;
              return (0, _react2.act)(function () {
                return loadPromise;
              });

            case 3:
              expect(getByTestId('test-app')).toHaveTextContent('Test App Hello');

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));
  });
  describe('#load error', function () {
    var loadPromise;
    var mockOnError;
    beforeEach(function () {
      mockOnError = jest.fn();
      loadPromise = new Promise(function (resolve, reject) {
        return reject(new Error('load app error'));
      });

      app.load = function () {
        return loadPromise;
      };
    });
    it('should invoke error callback when load error', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_AppLoader.default, {
                appId: "test-id",
                onError: mockOnError
              }));
              _context5.next = 3;
              return (0, _react2.act)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return expect(loadPromise).rejects.toThrow('load app error');

                      case 2:
                        expect(mockOnError).toHaveBeenCalled();

                      case 3:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              })));

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })));
    it('should render load error', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
      var _render4, container;

      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _render4 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_AppLoader.default, {
                appId: "test-id",
                "data-test": "Hello"
              })), container = _render4.container;
              _context7.next = 3;
              return (0, _react2.act)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        _context6.next = 2;
                        return expect(loadPromise).rejects.toThrow('load app error');

                      case 2:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6);
              })));

            case 3:
              expect(container).toHaveTextContent('Load error');

            case 4:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    })));
    it('should render load error render callback', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
      var _render5, getByTestId;

      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _render5 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_AppLoader.default, {
                appId: "test-id",
                "data-test": "Hello",
                renderError: function renderError() {
                  return /*#__PURE__*/_react.default.createElement(ErrorMessage, null);
                }
              })), getByTestId = _render5.getByTestId;
              _context9.next = 3;
              return (0, _react2.act)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        _context8.next = 2;
                        return expect(loadPromise).rejects.toThrow('load app error');

                      case 2:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8);
              })));

            case 3:
              expect(getByTestId('test-error')).toHaveTextContent('Load error');

            case 4:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    })));
  });
});