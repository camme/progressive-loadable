"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRawbIntersectionObserver = _interopRequireDefault(require("react-rawb-intersection-observer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// import ProgressiveLoadableExtractorContext from './progressive-loadable-extractor';
var ProgressiveLoadable = function ProgressiveLoadable(LoadableComponent) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    threshold: .3
  };

  var Progressive = function Progressive(props) {
    // const context = useContext(ProgressiveLoadableExtractorContext);
    var _useState = (0, _react.useState)(!process.browser),
        _useState2 = _slicedToArray(_useState, 2),
        load = _useState2[0],
        setLoad = _useState2[1];

    var visible = function visible() {
      console.log('show', LoadableComponent);
      setLoad(true);
    };

    var content = null;

    if (load) {
      content = _react.default.createElement(LoadableComponent, props);
    } else {
      content = _react.default.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: ''
        }
      });
    }

    return _react.default.createElement(_reactRawbIntersectionObserver.default, {
      root: ".main-content",
      onVisible: visible,
      threshold: options.threshold
    }, content);
  };

  return Progressive;
};

var _default = ProgressiveLoadable;
exports.default = _default;