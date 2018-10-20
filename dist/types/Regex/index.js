"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (string, expression) {
    var regex = RegExp(decodeURIComponent(expression));
    return regex.test(string);
};