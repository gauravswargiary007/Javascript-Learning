// Name = "Tony Stark";
// value = 2345;
// x = null;
// price = 66665363.442

// console.log(Name);
// console.log(value);
// console.log(x);
// console.log(price);

// varialbles declared above will work but should not be practiced as it is not fully correct

let Name = "Tony Stark";
const designation = "Iron Man";
let movies = "3";
let x;      // undefined i.e memory will be assigned to x but the value is not defined

// const designation = "Captain America";   this is not allowed as once const is declared it cannot be redeclared or updated
const y = null;     // const y; this will show error because const cannot undefined

console.table([Name, designation, movies, x, y]);       // console.table([variableName1, variableName2, ..]); gives all the variables in tabluer form
