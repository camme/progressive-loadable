"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ProgressiveLoadableConsumer = exports.ProgressiveLoadableProvider = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var context = {
  extractor: function extractor() {}
};

var ProgressiveLoadableContext = _react.default.createContext(context);

var ProgressiveLoadableProvider = ProgressiveLoadableContext.Provider;
exports.ProgressiveLoadableProvider = ProgressiveLoadableProvider;
var ProgressiveLoadableConsumer = ProgressiveLoadableContext.Consumer;
exports.ProgressiveLoadableConsumer = ProgressiveLoadableConsumer;
var _default = ProgressiveLoadableContext;
exports.default = _default;