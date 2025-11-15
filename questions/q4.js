// take 5 elemets. every element have 10 % off. create array of final price after discount

let price = [500, 200, 678, 432, 899];
let index = 0;
let discount = 0;
for(let val of price) {
    console.log(`value at index no. ${index} is ${val}`);
    discount = val/10;
    price[index] = price[index] - discount;
    console.log(`value after discount ${price[index]}`)
    index++;
} 

console.log(price);