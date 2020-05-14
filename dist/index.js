"use strict";

var applyFn = function applyFn(action) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  console.log(require("./" + action));
  //babel-env
  require("./" + action).apply(undefined, args);
};
module.exports = applyFn;