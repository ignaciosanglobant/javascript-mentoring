/*

let magicNumber = 8;

function printNumber() {
  console.log(magicNumber);
}

// magicNumber = 3;

printNumber();

function printMagicNumber() {
  const magicNumber = 2;
  console.log(magicNumber);
}

const printArrowMagicNumber = () => {
  const magicNumber = 4;
  console.log(magicNumber);
};

printMagicNumber();
printArrowMagicNumber();

//////////

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

///////////

var a = 10;

function bar() {
  var a = 20;

  function foo() {
    console.log(a);
  }

  foo();
}

bar();
