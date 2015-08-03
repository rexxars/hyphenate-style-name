'use strict';

var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;

function hyphenateStyleName(string) {
    return hyphenate(string).replace(msPattern, '-ms-');
}

function hyphenate(string) {
    return string.replace(uppercasePattern, '-$1').toLowerCase();
}

module.exports = hyphenateStyleName;
