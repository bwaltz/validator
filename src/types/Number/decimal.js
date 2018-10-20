import isDecimal from 'validator/lib/isDecimal';

export default string => {
    return isDecimal(string);
};
