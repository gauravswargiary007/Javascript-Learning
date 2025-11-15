// Maps ****************************************

const map = new Map()
map.set('IN', 'india')
map.set('USA', 'united state of america')
map.set('FR', 'france')

// console.log(map);

for(const key of map) {     // itterabel but gives an array
    console.log(key);
}

// above gives an array structure so destructure of array
for(const [key, value] of map) {        // destructuring if array
    console.log(key, value);
}

for(const itterate in map) {        // not itterable using for in
    console.log(itterate);
}


// forEach loop *******************************************

const arr = ["red", "blue", "green", "yellow"];
arr.forEach(function(itteratorName) {
    console.log(itteratorName);
});

// using arrow function -- forEach

const array = ["html", "css", "js", "react", "java", "springboot"];
array.forEach((itteratorName) => {
    console.log(itteratorName);
});

array.forEach(function(itteratorName, index, arr){
    console.log(itteratorName, index, arr);
});

const language = {
    l1: "js",
    l2: "html",
    l3: "css",
    l4: "react",
    l5: "java",
    l6: "springboot"
};
array.forEach((itteratorName) => {      // objects are not accessebe using forEach there for anothe function is    used to access
    console.log(itteratorName);
});

// objects in array
const newArray = [
    {
        l1:"html",
        l2:"css"
    },
    {
        l1:"javascript",
        l2:"java"
    },
    {
        l1:"springboot",
        l2:"mongoDB"
    }
];

newArray.forEach(function(itterator) {
    console.log(itterator.l1);
});

