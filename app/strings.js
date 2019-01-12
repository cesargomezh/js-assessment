stringsAnswers = {
  /**
   * Reduces a string by removing letters that repeat more than amount times.
   *
   * Example: reduceString('aaaabbb', 1) should reduce to 'ab'
   * Example: reduceString('aaaabbb', 2) should reduce to 'aabb'
   *
   * @param {String} str - String that is to be reduced
   * @param {Number} amount - The maximum number of adjacent repeated letters in the result string.
   * @returns {String} A string with no more than amount number of repeated letters.
   */
  reduceString: function reduceString(str, amount) {
    const copyStr = [];
    let previousChar;
    let count = 0;
    for (let i = 0; i < str.length; i += 1) {
      if (str[i] === previousChar || !previousChar) {
        if (count < amount) {
          copyStr.push(str[i]);
          count += 1;
        }
      } else {
        copyStr.push(str[i]);
        count = 1;
      }
      previousChar = str[i];
    }
    return copyStr.join('');
  },

  /**
   * Reverses a string of text
   *
   * Example: reverseString('abc') should be 'cba'
   *
   * @param {String} str - a string of text to be reversed
   * @returns {String} The original string of text str reversed.
   */
  reverseString: function reverseString(str) {
    return str.split('').reverse().join('');
  },
};
