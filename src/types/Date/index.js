import moment from 'moment';

export { default as MMDDYYYY } from './mmddyyyy';

export default input => {
    if (moment.isMoment(input)) {
        return true;
    }

    var d = moment(input, 'D/M/YYYY');
    if (d == null || !d.isValid()) return false;

    return (
        input.indexOf(d.format('D/M/YYYY')) >= 0 ||
        input.indexOf(d.format('DD/MM/YYYY')) >= 0 ||
        input.indexOf(d.format('D/M/YY')) >= 0 ||
        input.indexOf(d.format('DD/MM/YY')) >= 0
    );
};
