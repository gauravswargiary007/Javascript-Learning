// methods in js

// method to convet string to uppercase str_name.toUpperCase();
let str1 = "Tony Stark";
let newstr1 = str1.toUpperCase();
console.log(str1);
console.log(newstr1);

// method to convert to lowercase str_name.toLowerCase()
let str2 = "LEARNING JAVASCRIPT";
let newstr2 = str2.toLowerCase();
console.log(str2);
console.log(newstr2);

// to trim spaces in both ends str_name.trim();
let str3 = "    hello world !      ";
let newstr3 = str3.trim();
console.log(str3);
console.log(newstr3);

// to slice a specific part from a string str_name(start_index, end_index)
let str4 = "the xingho";
let newstr4 = str4.slice(0, 6);
console.log(str4);
console.log(newstr4);

// to join a string i.e concatination str_name1.concat(str_name2)
let str5 = "java";
let str6 = "script";
console.log(str5.concat(str6));

// to replace characters str_name.replace("search_val", "new_val");
let str7 = "hello tony stark";
let newstr7 = str7.replace("tony stark", "don");
console.log(str7);
console.log(newstr7);

// to find a specific character in the string
let str8 = "welcome xingho";
let newstr8 = str8.charAt(9);
console.log(str8);
console.log(newstr8);

// to find if it includes the value of not
console.log(str8.includes('c'));