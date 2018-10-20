export { default as decimal } from './decimal';
import isInt from 'validator/lib/isInt';

export default string => {
    return isInt(string.toString());
};
