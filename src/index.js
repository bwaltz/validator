// types
import alphanumeric, { phoneNumber, Ascii as ascii } from './types/Alphanumeric';
import email from './types/Email';
import boolean from './types/Boolean';
import regex from './types/Regex';
import integer, { decimal } from './types/Number';
import date, { MMDDYYYY } from './types/Date';
import defaultErrorsMessages from './errors';

const validatorMatch = {
    alphanumeric,
    phoneNumber,
    ascii,
    email,
    integer,
    decimal,
    boolean,
    date,
    date_mm_dd_yyyy: MMDDYYYY,
};

/**
    validator('testuser@gmail.com', {
        types: ['alphanumeric', 'email'],
        min: 1,
        max: 255,
        regex: '',
    })
 */
export default (input, validatorSettings) => {
    let pass = true;
    let errors = {};

    if (validatorSettings.types.includes('regex') && 'regex' in validatorSettings) {
        if (!regex(input, validatorSettings.regex)) {
            pass = false;
            errors.regex = defaultErrorsMessages.regex;
        }
    } else {
        validatorSettings.types.forEach(type => {
            if (!validatorMatch[type](input)) {
                pass = false;
                errors[type] = defaultErrorsMessages[type];
            }
        });
    }

    let minMaxError = `Must be between ${validatorSettings.min} and ${validatorSettings.max} ${
        typeof input === 'string' ? 'characters long' : ''
    }`;
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
            status: 'pass',
        };
    }

    return {
        status: 'fail',
        errors,
    };
};
