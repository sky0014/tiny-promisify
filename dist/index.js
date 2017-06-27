"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = promisify;
function promisify(func) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      const cb = (err, result) => {
        if (err) reject(err);else resolve(result);
      };
      func(...args, cb);
    });
  };
}