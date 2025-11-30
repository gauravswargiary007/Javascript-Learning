// *************** COMBINING OBJECTS ***************

const obj1 = { 1: "a", 2: "b"};
const obj2 = { 1: "c", 2: "d"};

// const obj3 = {obj1, obj2};          // this will combine the object and will give the value in object form i.e. { obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'c', '2': 'd' } }
// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = {...obj1, ...obj2};
console.log(obj3);