import isAscii from 'validator/lib/isAscii';

export default string => {
    return isAscii(string);
};
