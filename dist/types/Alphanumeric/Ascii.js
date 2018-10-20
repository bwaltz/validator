'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isAscii = require('validator/lib/isAscii');

var _isAscii2 = _interopRequireDefault(_isAscii);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (string) {
    return (0, _isAscii2.default)(string);
};