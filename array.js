// //Add two arrays with concat

// let arr = ['a', 'b', 'c'];
// const fruits = ['kiwi', 'apple'];
// const newFruits = arr.concat(fruits);
// console.log(newFruits);
// //Output:  [ 'a', 'b', 'c', 'kiwi', 'apple' ]


// Create an array with a list of fruits starting with 3 fruit
// with that array now do the following
// - Add a new fruit to the end of the array
// - Display the array
// - Add a new fruit to the beginning of the array
// - Display the array
// - Remove the last fruit.
// - Display the array


let fruits = ['guanabana', 'mango', 'cherries'];
fruits.push('avocado');
console.log(fruits);

//This is reg display
console.log('This is regular display:' , fruits);

//This is spread ....
console.log('This is spread display:' , ...fruits);


fruits.unshift('starfruit');
console.log(fruits);

fruits.pop();
console.log(fruits);

//Display the index of mango
let indexOfMango = fruits.indexOf('mango');
console.log(indexOfMango);

//Look for my name in array?
console.log(fruits.indexOf("Cassandra"));

//Sort the array alphabetically and display the sorted array
fruits.sort();
console.log(fruits);

const chickenEgg = ['🐔', '🥚'].sort();
console.log(`The ${chickenEgg[0]} came first!`);



