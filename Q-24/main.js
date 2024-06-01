// True Conditions
// Condition 1: String Equality
var str1 = "Ayesha Nssir";
var str2 = "Ayesha Nssir";
var result1 = (str1 === str2);
console.log(result1); // true
// Condition 2: Array Length Comparison
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6, 7];
var result2 = (arr2.length > arr1.length);
console.log(result2); // true
// Condition 3: Object Property Comparison
var obj1 = { name: "Alice", age: 25 };
var obj2 = { name: "Bob", age: 30 };
var result3 = (obj1.age < obj2.age);
console.log(result3); // true
// Condition 4: Type Checking
var num = 100;
var result4 = (typeof num === "number");
console.log(result4); // true
// Condition 5: String Contains Substring
var mainStr = "Hello, World!";
var subStr = "World";
var result5 = mainStr.includes(subStr);
console.log(result5); // true
// Condition 6: String Inequality
var str3 = "Ayesha";
var str4 = "Nasir";
var result6 = (str3 === str4);
console.log(result6); // false
// Condition 7: Array Element Check
var arr3 = [10, 20, 30];
var result7 = arr3.includes(40);
console.log(result7); // false
// Condition 8: Object Property Equality
var obj3 = { name: "Charlie", age: 35 };
var obj4 = { name: "Charlie", age: 40 };
var result8 = (obj3.age === obj4.age);
console.log(result8); // false
// Condition 9: Type Checking
var bool = true;
var result9 = (typeof bool === "string");
console.log(result9); // false
// Condition 10: String Does Not Contain Substring
var mainStr2 = "Welcome to the future!";
var subStr2 = "past";
var result10 = mainStr2.includes(subStr2);
console.log(result10); // false
