//  Creating Objects:

// make an empty oject and then add to it:
var developer = {}
developer.language = "Go";
developer.age = 21;

console.log(developer)

// all at once:
var developerTwo = {
  language: "JS",
  age: 21
};

console.log(developerTwo);

// another way of initializing an object:
var developerThree = new Object();
developerThree.language = "Python";
developerThree.age = 21;

console.log(developerThree);
