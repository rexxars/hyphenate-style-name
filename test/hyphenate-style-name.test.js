/* eslint-disable id-length */
const test = require('tape')
const hyphenateStyleName = require('../')

test('hyphenates regular css', t => {
  testSet(
    [
      ['backgroundColor', 'background-color'],
      ['fontSize', 'font-size'],
      ['color', 'color'],
      ['borderTopLeftRadius', 'border-top-left-radius']
    ],
    t
  )
})

test('hyphenates vendor prefixes correctly', t => {
  testSet(
    [
      ['MozTransition', '-moz-transition'],
      ['msTransition', '-ms-transition'],
      ['WebkitTransition', '-webkit-transition']
    ],
    t
  )
})

test('delivers consistent result on multiple runs (memoized)', t => {
  testSet(
    [
      ['backgroundColor', 'background-color'],
      ['backgroundColor', 'background-color'],
      ['fontSize', 'font-size'],
      ['fontSize', 'font-size'],
      ['color', 'color'],
      ['color', 'color'],
      ['borderTopLeftRadius', 'border-top-left-radius'],
      ['borderTopLeftRadius', 'border-top-left-radius']
    ],
    t
  )
})

function testSet(dataSet, t) {
  dataSet.forEach(set => {
    t.equal(hyphenateStyleName(set[0]), set[1], `${set[0]} should convert to ${set[1]}`)
  })

  t.end()
}
