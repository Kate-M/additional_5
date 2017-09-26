module.exports = function check(str, bracketsConfig) {

  function isPair(bracketsConfig, cOpen, cClosed) {
    for (var i = 0; i < bracketsConfig.length; i++) {
      if (cOpen == bracketsConfig[i][0] && cClosed == bracketsConfig[i][1])
        return true;
    }
    return false;
  }

  function isOpen(bracketsConfig, c) {
    for (var i = 0; i < bracketsConfig.length; i++) {
      if (c == bracketsConfig[i][0]) return true;
    }
    return false;
  }

  function isClosed(bracketsConfig, c) {
    for (var i = 0; i < bracketsConfig.length; i++) {
      if (c == bracketsConfig[i][1]) return true;
    }
    return false;
  }

  var arr = str.split("");
  var newBrackets = [];

  for (var i = 0; i < arr.length; i++) {
    if (isOpen(bracketsConfig, arr[i]) && isClosed(bracketsConfig, arr[i])) {
      var lastbracket = newBrackets.pop();
      if (lastbracket != arr[i]) {
        if (lastbracket)
          newBrackets.push(lastbracket);
        newBrackets.push(arr[i]);
      }
      continue;
    }

    if (isOpen(bracketsConfig, arr[i])) {
      newBrackets.push(arr[i]);
    }

    if (isClosed(bracketsConfig, arr[i])) {
      var x = newBrackets.pop();

      if (!isPair(bracketsConfig, x, arr[i]))
        return false;
    }
  }
  return newBrackets.length == 0;


}