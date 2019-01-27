var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};

function hyphenateStyleName(string) {
    if (string in cache) {
        return cache[string];
    }
    cache[string] = string
      .replace(uppercasePattern, '-$&')
      .toLowerCase()
      .replace(msPattern, '-ms-');
    return cache[string];
}

export default hyphenateStyleName;
