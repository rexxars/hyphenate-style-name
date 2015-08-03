'use strict';

var test = require('tape');
var hyphenateStyleName = require('../');

test('hyphenates regular css', function(t) {
    testSet([
        ['backgroundColor', 'background-color'],
        ['fontSize', 'font-size'],
        ['color', 'color'],
        ['borderTopLeftRadius', 'border-top-left-radius']
    ], t);
});

test('hyphenates vendor prefixes correctly', function(t) {
    testSet([
        ['MozTransition', '-moz-transition'],
        ['msTransition', '-ms-transition'],
        ['WebkitTransition', '-webkit-transition']
    ], t);
});

function testSet(dataSet, t) {
    dataSet.forEach(function(set) {
        t.equal(
            hyphenateStyleName(set[0]),
            set[1],
            set[0] + ' should convert to ' + set[1]
        );
    });

    t.end();
}
