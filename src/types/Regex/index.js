export default (string, expression) => {
    var regex = RegExp(decodeURIComponent(expression));
    return regex.test(string);
};
