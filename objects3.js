// *************** COMBINING OBJECTS ***************

const obj1 = { 1: "a", 2: "b"};
const obj2 = { 1: "c", 2: "d"};
// const obj3 = {obj1, obj2};                   // this will combine the object and will give the value in object form i.e. { obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'c', '2': 'd' } }
// const obj3 = Object.assign({}, obj1, obj2);  // ussing the assign method and the object will overwrite
const objres1 = {...obj1, ...obj2};             // the objects will overwrite as the key values are same in both the object and one object cannot have same key value
console.log("with same key value in different object: ", objres1);

const obj3 = { 1: "a", 2: "b"};
const obj4 = { 3: "c", 4: "d"};
const objres2 = Object.assign({}, obj3, obj4);  // using the aassign method {} --> target, obj2, obj3 --> source
//const objres2 = {...obj3, ...obj4};           // merged using the spread("...variable") operator
console.log("with different key value in differnt objects: ", objres2);

const newobj = {5: 1, 6: 2};
const merge = {...objres2, ...newobj};
console.log(merge);
console.log(typeof newobj[5]);

// *************** ARRAY OF OBJECTS ***************

/* not correct way of declaring array of objects
const array = [
    object1 = { id: 11, name: "qqq" },
    object2 = { id: 22, name: "www" },
    object3 = { id: 33, name: "eee" },
    object4 = { id: 44, name: "rrr" }
];
console.log(array);
*/

const array = [
    { id: 11, name: "qqq", isLogedin: "true" },
    { id: 22, name: "www", isLogedin: "false" },
    { id: 33, name: "eee", isLogedin: "false" },
    { id: 44, name: "rrr", isLogedin: "true" }
];
console.log(array);

/*
for(let i = 0; i < array.length; i++) {
    console.log(array);
};
*/

// accessing array of objects
console.log(array[0]);
console.log(array[1].id);
console.log(array[2].name);

// changing value of the array objects
array[0].name = "ladago";
console.log(array[0].name);

// some object prototype
console.log(Object.keys(array[0]));
console.log(Object.values(array[2]));
console.log(Object.entries(array[3]));
console.log(array[1].hasOwnProperty("isLogedin"));
console.log(array[2].hasOwnProperty("isLogedout"));
