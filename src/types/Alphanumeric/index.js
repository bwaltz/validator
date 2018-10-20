export { default as phoneNumber } from './phoneNumber';
export { default as Ascii } from './Ascii';
import isAlphanumeric from 'validator/lib/isAlphanumeric';

export default string => {
    return isAlphanumeric(string, 'en-US');
};
