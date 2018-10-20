'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MMDDYYYY = undefined;

var _mmddyyyy = require('./mmddyyyy');

Object.defineProperty(exports, 'MMDDYYYY', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_mmddyyyy).default;
    }
});

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (input) {
    if (_moment2.default.isMoment(input)) {
        return true;
    }

    var d = (0, _moment2.default)(input, 'D/M/YYYY');
    if (d == null || !d.isValid()) return false;

    return input.indexOf(d.format('D/M/YYYY')) >= 0 || input.indexOf(d.format('DD/MM/YYYY')) >= 0 || input.indexOf(d.format('D/M/YY')) >= 0 || input.indexOf(d.format('DD/MM/YY')) >= 0;
};