/***********************************************/
/* 1. What is the output of the following code */
/***********************************************/

/*
function outerFunc() {
  let a = 10;

  function innerFunc() {
    console.log(a);
  }
  return innerFunc;
}

let innerFunc = outerFunc();
innerFunc();
 */

/***********************************************/
/* 2. What is the output of the following code */
/***********************************************/
/*
(function (a) {
  return (function (b) {
    console.log(a);
  })(1);
})(0);
*/

/***********************************************/
/* 3. What is the output of the following code */
/***********************************************/
/* 
let count = 0;

(function () {
  if (count === 0) {
    let count = 1;
    console.log(count);
  }
  console.log(count);
})();
*/

/***********************************************/
/* 4. What is the output of the following code */
/***********************************************/

function createCounter() {
  let i = 0;
  return function () {
    i++;
    return i;
  };
}

let increase1 = createCounter();
let increase2 = createCounter();

console.log(increase1());
console.log(increase1());

console.log(increase2());
console.log(increase2());
