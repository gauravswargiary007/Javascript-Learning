let score = 400;                      
console.log(score);                         
console.log(typeof(score));                     // Number datatype

const score1 = Number(100);
console.log(score1);    
console.log(typeof(score1));                    // Number datatype

console.log(score.toString());                  // score of Number datatype is converted into String i.e a copy of the score is created and converted into String not the original value
console.log(typeof(score));                     // here the score will remain number as it is defined as Number datatype earlier
// score = score.toString();                       // the original score of Number datatype is converted into String
// console.log(typeof(score));                     // string


// we can apply string properties after conversion
console.log(score.toString().length);           // length is print
console.log(score.toString()[2]);               // value of index 2 is print