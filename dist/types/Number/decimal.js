'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isDecimal = require('validator/lib/isDecimal');

var _isDecimal2 = _interopRequireDefault(_isDecimal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (string) {
    return (0, _isDecimal2.default)(string);
};