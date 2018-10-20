import validator from './index.js';
import errors from './errors';
import moment from 'moment';

describe('validator()', () => {
    it('Should should return pass for valid email', () => {
        let settings = {
            types: ['email'],
            min: 1,
            max: 255,
        };
        expect(validator('foo@test.com', settings)).toEqual({
            status: 'pass',
        });
    });

    it('Should should return pass for valid alphanumeric', () => {
        let settings = {
            types: ['alphanumeric'],
            min: 1,
            max: 255,
        };
        expect(validator('ffff', settings)).toEqual({
            status: 'pass',
        });
    });

    it('Should should return pass for valid ascii', () => {
        let settings = {
            types: ['ascii'],
            min: 1,
            max: 255,
        };
        expect(validator('Somewhere over the rainbow!!! f859430T$%%#$@*)68751', settings)).toEqual({
            status: 'pass',
        });
    });

    it('Should should return fail for invalid email', () => {
        let settings = {
            types: ['email'],
            min: 1,
            max: 255,
        };
        expect(validator('example@emailcom', settings)).toEqual({
            status: 'fail',
            errors: {
                email: errors.email,
            },
        });
    });

    it('Should should return pass for valid date (mm/dd/yyyy)', () => {
        let settings = {
            types: ['date_mm_dd_yyyy'],
            min: 1,
            max: 255,
        };
        expect(validator('09/02/1947', settings)).toEqual({
            status: 'pass',
        });
    });

    it('Should should return fail for invalid date (mm/dd/yyyy)', () => {
        let settings = {
            types: ['date_mm_dd_yyyy'],
            min: 1,
            max: 255,
        };

        expect(validator('0g9/0p2/194790', settings)).toEqual({
            status: 'fail',
            errors: {
                date_mm_dd_yyyy: errors.date_mm_dd_yyyy,
            },
        });
    });

    it('Should should return pass for valid boolean', () => {
        let settings = {
            types: ['boolean'],
            min: 1,
            max: 255,
        };

        expect(validator('false', settings)).toEqual({
            status: 'pass',
        });
    });

    it('Should should return pass for valid phone number', () => {
        let settings = {
            types: ['phoneNumber'],
            min: 1,
            max: 255,
        };

        expect(validator('207-342-9041', settings)).toEqual({
            status: 'pass',
        });
    });

    it('Should should return pass for valid integer', () => {
        let settings = {
            types: ['integer'],
            min: 1,
            max: 255,
        };

        expect(validator('11', settings)).toEqual({
            status: 'pass',
        });
    });

    it('Should should return pass for valid decimal', () => {
        let settings = {
            types: ['decimal'],
            min: 1,
            max: 255,
        };

        expect(validator('21.0111', settings)).toEqual({
            status: 'pass',
        });
    });

    it('Should should return fail for max test', () => {
        let settings = {
            types: ['alphanumeric'],
            min: 1,
            max: 12,
        };

        expect(validator('fdsafdsafsdafafdsfdsafdsafdsa', settings)).toEqual({
            status: 'fail',
            errors: {
                max: `Must be between ${settings.min} and ${settings.max} characters long`,
            },
        });
    });

    it('Should should return pass for valid regex type', () => {
        let settings = {
            types: ['regex'],
            min: 1,
            max: 255,
            regex: '%5E%5Ba-zA-Z0-9%5Cs_.%2C%3F!%22%27%5C%2F%24%40%5D%2B%24',
        };

        expect(validator('1 is the lonliest number!', settings)).toEqual({
            status: 'pass',
        });
    });

    it('Should should return pass for valid date', () => {
        let settings = {
            types: ['date'],
            min: 1,
            max: 255,
        };

        expect(validator(moment(), settings)).toEqual({
            status: 'pass',
        });
    });

    it('Should should return fail for invalid date', () => {
        let settings = {
            types: ['date'],
            min: 1,
            max: 255,
        };

        expect(validator('foo', settings)).toEqual({
            status: 'fail',
            errors: {
                date: 'Must be a valid date',
            },
        });
    });
});
