'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (string) {
    var regex = RegExp('^(yes|no|true|false|t|f|1|0)$', 'gi');

    if (regex.test(string)) {
        return true;
    }

    return typeof string === 'boolean';
};