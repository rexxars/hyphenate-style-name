/* eslint-disable no-var, prefer-template */
var uppercasePattern = /[A-Z]/g
var msPattern = /^ms-/
var cache = new Map()

function toHyphenLower(match) {
  return '-' + match.toLowerCase()
}

function hyphenateStyleName(name) {
  if (cache.has(name)) {
    return cache.get(name)
  }

  var hName = name.replace(uppercasePattern, toHyphenLower)
  var value = msPattern.test(hName) ? '-' + hName : hName
  cache.set(name, value)
  return value
}

export default hyphenateStyleName
