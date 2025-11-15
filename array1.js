let array = [1, 2, 3, 5 ,6, 7 ,8, 2];
let heroes = ["ironman", "thor", "hulk", "captain America"];
console.log(array);
console.log(heroes);
for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
for(let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

// changing array elements using indices
array[2] = 10;
console.log("after the element changed: ", array);

//looping in array
let cities = ["assam", "delhi", "hyderabad", "mumbai", "sikkim", "arunachal"];
for (let item of cities) {
    console.log(item.toUpperCase());
} 

// properties

//  length of array
let fruits = ["apple", "grapes", "pinapple", "banana", "orange"];
console.log(fruits.length);

//  convert array to string
console.log(array.toString());
console.log(heroes.toString());
console.log(cities.toString());
console.log(fruits.toString());

//  to return the value itself
console.log(fruits.valueOf());

//accessing array elements using indices
console.log(array[2], array[5]);
console.log(heroes[1], heroes[3]);