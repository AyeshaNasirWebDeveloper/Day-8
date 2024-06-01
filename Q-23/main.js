// True Conditions
// Condition 1: Equality
var a = 10;
var b = 10;
var result1 = (a === b);
console.log(result1); // true
// Condition 2: Greater Than
var c = 15;
var d = 10;
var result2 = (c > d);
console.log(result2); // true
// Condition 3: Logical AND
var e = 10;
var f = 20;
var g = 30;
var result3 = (e < f && f < g);
console.log(result3); // true
// Condition 4: Membership
var lst = [1, 2, 3, 4, 5];
var result4 = lst.includes(3);
console.log(result4); // true
// Condition 5: Checking Length
var str1 = "hello";
var result5 = (str1.length === 5);
console.log(result5); // true
// False Conditions
// Condition 6: Inequality
var h = 10;
var i = 10;
var result6 = (h !== i);
console.log(result6); // false
// Condition 7: Less Than
var j = 15;
var k = 20;
var result7 = (j > k);
console.log(result7); // false
//Condition 8: Logical OR
var l = 10;
var m = 5;
var n = 30;
var result8 = (l < m || m > n);
console.log(result8); // false
// Condition 9: String Comparison
var str2 = "hello";
var str3 = "world";
var result9 = (str2 === str3);
console.log(result9); // false
// Condition 10: Logical NOT
var o = 10;
var result10 = !(o === 10);
console.log(result10); // false
