"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _progressiveLoadable.default;
  }
});
Object.defineProperty(exports, "cleanLoadableTags", {
  enumerable: true,
  get: function get() {
    return _cleanLoadableTags.default;
  }
});
exports.ProgressiveLoadableExtractor = void 0;

var _react = _interopRequireDefault(require("react"));

var _progressiveLoadable = _interopRequireDefault(require("./progressive-loadable"));

var _cleanLoadableTags = _interopRequireDefault(require("./clean-loadable-tags"));

var _progressiveLoadableExtractor = _interopRequireDefault(require("./progressive-loadable-extractor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressiveLoadableExtractor = function ProgressiveLoadableExtractor(_ref) {
  var extractor = _ref.extractor,
      children = _ref.children;
  return _react.default.createElement(_progressiveLoadableExtractor.default.Provider, {
    value: extractor
  }, children);
};

exports.ProgressiveLoadableExtractor = ProgressiveLoadableExtractor;