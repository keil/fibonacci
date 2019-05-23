let fibonacci = (function() {

  let map = new Map();

  let fibonacci = function(n) {
    // TODO test for numbers
    if(n==0) return 0;
    else if(n==1) return 1;
    else return calculate(n-1)+calculate(n-2);
  }

  let calculate = function(n) {
    if(!map.has(n)) map.set(n, fibonacci(n));
    return map.get(n);
  }

  return calculate;

})();

module.exports = fibonacci;
