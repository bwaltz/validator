'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decimal = undefined;

var _decimal = require('./decimal');

Object.defineProperty(exports, 'decimal', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_decimal).default;
    }
});

var _isInt = require('validator/lib/isInt');

var _isInt2 = _interopRequireDefault(_isInt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (string) {
    return (0, _isInt2.default)(string.toString());
};