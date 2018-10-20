'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isEmail = require('validator/lib/isEmail');

var _isEmail2 = _interopRequireDefault(_isEmail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (string) {
    return (0, _isEmail2.default)(string);
};