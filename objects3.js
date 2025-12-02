// *************** COMBINING OBJECTS ***************

const obj1 = { 1: "a", 2: "b"};
const obj2 = { 1: "c", 2: "d"};
// const obj3 = {obj1, obj2};                   // this will combine the object and will give the value in object form i.e. { obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'c', '2': 'd' } }
// const obj3 = Object.assign({}, obj1, obj2);  // ussing the assign method and the object will overwrite
const objres1 = {...obj1, ...obj2};             // the objects will overwrite as the key values are sam ein both the object and one object cannot have same key value
console.log("with same key value in different object: ", objres1);

const obj3 = { 1: "a", 2: "b"};
const obj4 = { 3: "c", 4: "d"};
const objres2 = Object.assign({}, obj3, obj4);  // using the aassign method {} --> target, obj2, obj3 --> source
//const objres2 = {...obj3, ...obj4};           // merged using the split("...variable") operator
console.log("with different key value in differnt objects: ", objres2);
