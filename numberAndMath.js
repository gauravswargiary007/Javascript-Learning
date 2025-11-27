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

/* **************** BUILT IN METHODS FOR NUMBER OBJECTS ********************** 

.toString()	Number	Converts the number to string
.toFixed()	Number	Formats number with fixed decimal digits
.valueOf()	Number	Returns the primitive value inside the Number object
.toPrecision()	Number	Formats number to a specified precision
.toExponential()	Number	Converts number to exponential format

*/

const num = new Number(7235.657765);
console.log(num);
console.log(typeof(num));

console.log(num.toString());        
console.log(num.toFixed(2));
console.log(num.valueOf());
console.log(num.toPrecision(5));            // 7235.7
console.log(num.toPrecision(4));            // 7236
console.log(num.toPrecision(3));            // 7.24e+3  7.23 are precision value and  e+3 is exponential

const num2 = new Number(33456780);
console.log(num2.toExponential());


/* ************************* MATH ******************* */

console.log(Math.abs(-4));          // Math.abs(-value) --> converts the negative value to positive and positive value keeps positive
console.log(Math.round(23.567));    // Math.round(value) --> gives the roundoff value of the value
console.log(Math.ceil(9.232));      // Math.ceil(value) --> takes the upper value i.e the ceilling value
console.log(Math.floor(9.232));     // Math.floor(value) --> takes the lower value i.e the floor value