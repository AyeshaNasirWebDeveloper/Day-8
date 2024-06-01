// True Conditions

// Condition 1: String Equality
let str1 = "Ayesha Nssir";
let str2 = "Ayesha Nssir";
let result1 = (str1 === str2);
console.log(result1); // true

// Condition 2: Array Length Comparison
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6, 7];
let result2 = (arr2.length > arr1.length);
console.log(result2); // true

// Condition 3: Object Property Comparison
let obj1 = {name: "Alice", age: 25};
let obj2 = {name: "Bob", age: 30};
let result3 = (obj1.age < obj2.age);
console.log(result3); // true

// Condition 4: Type Checking
let num = 100;
let result4 = (typeof num === "number");
console.log(result4); // true

// Condition 5: String Contains Substring
let mainStr = "Hello, World!";
let subStr = "World";
let result5 = mainStr.includes(subStr);
console.log(result5); // true

// Condition 6: String Inequality
let str3 = "Ayesha";
let str4 = "Nasir";
let result6 = (str3 === str4);
console.log(result6); // false

// Condition 7: Array Element Check
let arr3 = [10, 20, 30];
let result7 = arr3.includes(40);
console.log(result7); // false

// Condition 8: Object Property Equality
let obj3 = {name: "Charlie", age: 35};
let obj4 = {name: "Charlie", age: 40};
let result8 = (obj3.age === obj4.age);
console.log(result8); // false

// Condition 9: Type Checking
let bool = true;
let result9 = (typeof bool === "string");
console.log(result9); // false

// Condition 10: String Does Not Contain Substring
let mainStr2 = "Welcome to the future!";
let subStr2 = "past";
let result10 = mainStr2.includes(subStr2);
console.log(result10); // false
