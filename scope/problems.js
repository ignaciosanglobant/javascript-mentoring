/************************************************/
/* 1. What is the outcome of the following code */
/************************************************/
/*
var a = 10;

function foo() {
  console.log(a);
}
foo();
 */

/************************************************/
/* 2. What is the outcome of the following code */
/************************************************/
/*
var a = 10;

function foo() {
  var a = 20;
  console.log(a);
}

a = 30;

foo();
 */

/************************************************/
/* 3. What is the outcome of the following code */
/************************************************/

/*
var a = 10;
function foo() {
  console.log(a);
}

function bar() {
  var a = 20;
  foo();
}

bar();
 */

/************************************************/
/* 4. What is the outcome of the following code */
/************************************************/

/*
var a = 10;

function bar() {
  var a = 20;

  function foo() {
    console.log(a);
  }

  foo();
}

bar();
*/
