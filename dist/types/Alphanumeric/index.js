'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ascii = exports.phoneNumber = undefined;

var _phoneNumber = require('./phoneNumber');

Object.defineProperty(exports, 'phoneNumber', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_phoneNumber).default;
    }
});

var _Ascii = require('./Ascii');

Object.defineProperty(exports, 'Ascii', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_Ascii).default;
    }
});

var _isAlphanumeric = require('validator/lib/isAlphanumeric');

var _isAlphanumeric2 = _interopRequireDefault(_isAlphanumeric);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (string) {
    return (0, _isAlphanumeric2.default)(string, 'en-US');
};