"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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

var IntersectionObserverComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IntersectionObserverComponent, _React$Component);

  function IntersectionObserverComponent() {
    _classCallCheck(this, IntersectionObserverComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(IntersectionObserverComponent).apply(this, arguments));
  }

  _createClass(IntersectionObserverComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          root = _this$props.root,
          threshold = _this$props.threshold,
          onVisible = _this$props.onVisible;

      if (this.io) {
        register(root, threshold, this.io, onVisible);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return _react.default.createElement("div", {
        ref: function ref(io) {
          _this.io = io;
        }
      }, this.props.children);
    }
  }]);

  return IntersectionObserverComponent;
}(_react.default.Component);

var create = function create(root, threshold) {
  var intersectionOptions = {
    threshold: [threshold]
  };

  if (root) {
    intersectionOptions.root = document.querySelector(root);
  } // This handles when an element is visible.
  // If its observed we asume it has a visible function and we call it in a crude way.


  if (window.IntersectionObserver) {
    return new IntersectionObserver(function (entries) {
      var _this2 = this;

      entries.forEach(function (entry) {
        if (entry.isIntersecting && entry.intersectionRatio > 0) {
          if (typeof entry.target.__intersectionObserverInfo.onVisible === 'function') {
            entry.target.__intersectionObserverInfo.onVisible();

            delete entry.target.__intersectionObserverInfo.onVisible;
          }

          _this2.unobserve(entry.target);
        }
      });
    }, intersectionOptions);
  }

  return {
    observe: function observe(target) {
      if (target) {
        if (typeof target.__intersectionObserverInfo.onVisible === 'function') {
          target.__intersectionObserverInfo.onVisible();

          delete target.__intersectionObserverInfo.onVisible;
        }
      }
    }
  };
};

var intersectionObserverList = {};

var register = function register(root) {
  var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : .5;
  var element = arguments.length > 2 ? arguments[2] : undefined;
  var onVisible = arguments.length > 3 ? arguments[3] : undefined;
  var key = "".concat(root ? root : 'root', "-").concat(threshold);
  var intersectionObserver = intersectionObserverList[key] = intersectionObserverList[key] || create(root, threshold);

  if (!element.__intersectionObserverInfo) {
    element.__intersectionObserverInfo = {
      onVisible: onVisible
    };
    intersectionObserver.observe(element);
  }
};

IntersectionObserverComponent.propTypes = {
  children: _propTypes.default.node,
  element: _propTypes.default.object,
  onVisible: _propTypes.default.func,
  threshold: _propTypes.default.number,
  root: _propTypes.default.string
};
var _default = IntersectionObserverComponent;
exports.default = _default;