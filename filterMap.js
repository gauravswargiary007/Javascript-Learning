const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Calculation = (itterator) => {
    for(let i = 0; i < itterator.length; i++) {
        if(i > 4) {
            console.log(itterator[i]);
        }
    }
}
Calculation(array);



// using filter method
const newArray1 = array.filter((itterator) => itterator > 4);
console.log(newArray1)

const newArray2 = array.filter( (itterator) => {
    return itterator > 4
});

console.log(newArray2);