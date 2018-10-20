export default string => {
    var regex = RegExp('^(yes|no|true|false|t|f|1|0)$', 'gi');

    if (regex.test(string)) {
        return true;
    }

    return typeof string === 'boolean';
};
