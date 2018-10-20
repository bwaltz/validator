export default string => {
    var regex = RegExp('^(0[1-9]|1[012])([- /.])(0[1-9]|[12][0-9]|3[01])\\2(19|20)\\d\\d$');
    return regex.test(string);
};
