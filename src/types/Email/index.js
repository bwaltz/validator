import isEmail from 'validator/lib/isEmail';

export default string => {
    return isEmail(string);
};
