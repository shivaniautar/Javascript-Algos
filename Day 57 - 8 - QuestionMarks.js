
  /**
   * @param {string} str
   * @return {boolean}
   * Are there 2 digits separated by exactly 3 question marks that sum to 10?
   */
  
  function questionMarks(str) {
    // your code here
  }
  
  parseInt('s') // returns NaN
  parseInt('5') // returns 5
  isNaN(NaN) // returns true
  isNaN(parseInt('9')) // returns false
  
  console.log(questionMarks('aa6?9')); // should log false
  console.log(questionMarks('acc?7??sss?3rr1??????5')); // should log true
  console.log(questionMarks('?3?d?dad?7??????3')); // should log true
  console.log(questionMarks('7??????3')); // should log false