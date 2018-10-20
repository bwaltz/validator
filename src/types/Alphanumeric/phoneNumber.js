export default string => {
    var regex = RegExp(
        '^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$'
    );
    return regex.test(string);
};
