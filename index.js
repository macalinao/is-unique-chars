var isUniqueChars = module.exports = function(string) {
  var used = [];
  for (var i = 0; i < string.length; i++) {
    var c = string.charAt(i);
    if (used.indexOf(c) !== -1) return false;
    used.push(c);
  }
  return true;
};
