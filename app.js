var myObject = {
  name: "Lovelace",
  func: function() {
      var self = this;
      console.log("outer func:  this.name = " + this.name);
      console.log("outer func:  self.name = " + self.name);

      (function() {
          console.log("inner func:  this.name = " + this.name);
          console.log("inner func:  self.name = " + self.name);
      }());
  }
};
myObject.func();
//This function will display LoveLace which is the value of func and it is a closure.
// func is a property which holds a function.All the console statements in func will display lovelace apart from the third one because after
// reasigning  this to a variable called self, the only way to access name outside the outer function
//is using self and to access the value of a property of an object we use keyword this

