'use strict';

var _index = require('./index.js');

var _index2 = _interopRequireDefault(_index);

var _errors = require('./errors');

var _errors2 = _interopRequireDefault(_errors);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('validator()', function () {
    it('Should should return pass for valid email', function () {
        var settings = {
            types: ['email'],
            min: 1,
            max: 255
        };
        expect((0, _index2.default)('foo@test.com', settings)).toEqual({
            status: 'pass'
        });
    });

    it('Should should return pass for valid alphanumeric', function () {
        var settings = {
            types: ['alphanumeric'],
            min: 1,
            max: 255
        };
        expect((0, _index2.default)('ffff', settings)).toEqual({
            status: 'pass'
        });
    });

    it('Should should return pass for valid ascii', function () {
        var settings = {
            types: ['ascii'],
            min: 1,
            max: 255
        };
        expect((0, _index2.default)('Somewhere over the rainbow!!! f859430T$%%#$@*)68751', settings)).toEqual({
            status: 'pass'
        });
    });

    it('Should should return fail for invalid email', function () {
        var settings = {
            types: ['email'],
            min: 1,
            max: 255
        };
        expect((0, _index2.default)('example@emailcom', settings)).toEqual({
            status: 'fail',
            errors: {
                email: _errors2.default.email
            }
        });
    });

    it('Should should return pass for valid date (mm/dd/yyyy)', function () {
        var settings = {
            types: ['date_mm_dd_yyyy'],
            min: 1,
            max: 255
        };
        expect((0, _index2.default)('09/02/1947', settings)).toEqual({
            status: 'pass'
        });
    });

    it('Should should return fail for invalid date (mm/dd/yyyy)', function () {
        var settings = {
            types: ['date_mm_dd_yyyy'],
            min: 1,
            max: 255
        };

        expect((0, _index2.default)('0g9/0p2/194790', settings)).toEqual({
            status: 'fail',
            errors: {
                date_mm_dd_yyyy: _errors2.default.date_mm_dd_yyyy
            }
        });
    });

    it('Should should return pass for valid boolean', function () {
        var settings = {
            types: ['boolean'],
            min: 1,
            max: 255
        };

        expect((0, _index2.default)('false', settings)).toEqual({
            status: 'pass'
        });
    });

    it('Should should return pass for valid phone number', function () {
        var settings = {
            types: ['phoneNumber'],
            min: 1,
            max: 255
        };

        expect((0, _index2.default)('207-342-9041', settings)).toEqual({
            status: 'pass'
        });
    });

    it('Should should return pass for valid integer', function () {
        var settings = {
            types: ['integer'],
            min: 1,
            max: 255
        };

        expect((0, _index2.default)('11', settings)).toEqual({
            status: 'pass'
        });
    });

    it('Should should return pass for valid decimal', function () {
        var settings = {
            types: ['decimal'],
            min: 1,
            max: 255
        };

        expect((0, _index2.default)('21.0111', settings)).toEqual({
            status: 'pass'
        });
    });

    it('Should should return fail for max test', function () {
        var settings = {
            types: ['alphanumeric'],
            min: 1,
            max: 12
        };

        expect((0, _index2.default)('fdsafdsafsdafafdsfdsafdsafdsa', settings)).toEqual({
            status: 'fail',
            errors: {
                max: 'Must be between ' + settings.min + ' and ' + settings.max + ' characters long'
            }
        });
    });

    it('Should should return pass for valid regex type', function () {
        var settings = {
            types: ['regex'],
            min: 1,
            max: 255,
            regex: '%5E%5Ba-zA-Z0-9%5Cs_.%2C%3F!%22%27%5C%2F%24%40%5D%2B%24'
        };

        expect((0, _index2.default)('1 is the lonliest number!', settings)).toEqual({
            status: 'pass'
        });
    });

    it('Should should return pass for valid date', function () {
        var settings = {
            types: ['date'],
            min: 1,
            max: 255
        };

        expect((0, _index2.default)((0, _moment2.default)(), settings)).toEqual({
            status: 'pass'
        });
    });

    it('Should should return fail for invalid date', function () {
        var settings = {
            types: ['date'],
            min: 1,
            max: 255
        };

        expect((0, _index2.default)('foo', settings)).toEqual({
            status: 'fail',
            errors: {
                date: 'Must be a valid date'
            }
        });
    });
});