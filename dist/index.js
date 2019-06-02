"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRawbIntersectionObserver = _interopRequireDefault(require("react-rawb-intersection-observer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ProgressiveLoadable = function ProgressiveLoadable(LoadableComponent) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    threshold: .3
  };

  var Progressive =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Progressive, _React$Component);

    function Progressive(props, context) {
      var _this;

      _classCallCheck(this, Progressive);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Progressive).call(this, props, context));
      _this.state = {
        load: process.title !== 'browser'
      };
      return _this;
    }

    _createClass(Progressive, [{
      key: "visible",
      value: function visible() {
        this.setState({
          load: true
        });
      }
    }, {
      key: "render",
      value: function render() {
        var content = null;

        if (this.state.load) {
          content = _react.default.createElement(LoadableComponent, this.props);
        } else {
          content = _react.default.createElement("div", {
            dangerouslySetInnerHTML: {
              __html: ''
            }
          });
        }

        return _react.default.createElement(_reactRawbIntersectionObserver.default, {
          root: ".main-content",
          onVisible: this.visible.bind(this),
          threshold: options.threshold
        }, content);
      }
    }]);

    return Progressive;
  }(_react.default.Component);

  return Progressive;
};

var _default = ProgressiveLoadable;
exports.default = _default;