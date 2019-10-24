"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var cleanLoadableTags = function cleanLoadableTags(tags, stats, original) {
  var parsed = original;
  tags.forEach(function (tag) {
    var chunk = stats.namedChunkGroups[tag];
    chunk.assets.forEach(function (asset) {
      var re = new RegExp("<script.*?".concat(asset, ".*?$"), 'mg');
      parsed = parsed.replace(re, '');
    });
    chunk.chunks.forEach(function (chunkName) {
      chunkName = typeof chunkName === 'string' ? '"' + chunkName + '"' : chunkName;
      var re = new RegExp(",".concat(chunkName, ","), 'mg');
      parsed = parsed.replace(re, '');
      re = new RegExp(",".concat(chunkName, "\\]"), 'mg');
      parsed = parsed.replace(re, ']');
      re = new RegExp("\\[".concat(chunkName, ","), 'mg');
      parsed = parsed.replace(re, '[');
      re = new RegExp("\\[".concat(chunkName, "\\]"), 'mg');
      parsed = parsed.replace(re, '[]');
    });
  });
  return parsed;
};

var _default = cleanLoadableTags;
exports.default = _default;