'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Alphanumeric = require('./types/Alphanumeric');

var _Alphanumeric2 = _interopRequireDefault(_Alphanumeric);

var _Email = require('./types/Email');

var _Email2 = _interopRequireDefault(_Email);

var _Boolean = require('./types/Boolean');

var _Boolean2 = _interopRequireDefault(_Boolean);

var _Regex = require('./types/Regex');

var _Regex2 = _interopRequireDefault(_Regex);

var _Number = require('./types/Number');

var _Number2 = _interopRequireDefault(_Number);

var _Date = require('./types/Date');

var _Date2 = _interopRequireDefault(_Date);

var _errors = require('./errors');

var _errors2 = _interopRequireDefault(_errors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validatorMatch = {
    alphanumeric: _Alphanumeric2.default,
    phoneNumber: _Alphanumeric.phoneNumber,
    ascii: _Alphanumeric.Ascii,
    email: _Email2.default,
    integer: _Number2.default,
    decimal: _Number.decimal,
    boolean: _Boolean2.default,
    date: _Date2.default,
    date_mm_dd_yyyy: _Date.MMDDYYYY
};

/**
    validator('testuser@gmail.com', {
        types: ['alphanumeric', 'email'],
        min: 1,
        max: 255,
        regex: '',
    })
 */
// types

exports.default = function (input, validatorSettings) {
    var pass = true;
    var errors = {};

    if (validatorSettings.types.includes('regex') && 'regex' in validatorSettings) {
        if (!(0, _Regex2.default)(input, validatorSettings.regex)) {
            pass = false;
            errors.regex = _errors2.default.regex;
        }
    } else {
        validatorSettings.types.forEach(function (type) {
            if (!validatorMatch[type](input)) {
                pass = false;
                errors[type] = _errors2.default[type];
            }
        });
    }

    var minMaxError = 'Must be between ' + validatorSettings.min + ' and ' + validatorSettings.max + ' ' + (typeof input === 'string' ? 'characters long' : '');
    if (validatorSettings.min > input.toString().length) {
        pass = false;
        errors.min = minMaxError;
    }

    if (validatorSettings.max < input.toString().length) {
        pass = false;
        errors.max = minMaxError;
    }

    if (pass) {
        return {
            status: 'pass'
        };
    }

    return {
        status: 'fail',
        errors: errors
    };
};