var variable = "Global level Variable";

let myObject = {
  variable: "Object level Variable",

  arrowFunction: () => {
    console.log(this.variable);
  },

  regularFunction: function () {
    console.log(this.variable);
  },
};

myObject.arrowFunction();
myObject.regularFunction();
