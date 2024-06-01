// True Conditions

// Condition 1: Equality
let a = 10;
let b = 10;
let result1 = (a === b);
console.log(result1); // true

// Condition 2: Greater Than
let c = 15;
let d = 10;
let result2 = (c > d);
console.log(result2); // true

// Condition 3: Logical AND
let e = 10;
let f = 20;
let g = 30;
let result3 = (e < f && f < g);
console.log(result3); // true

// Condition 4: Membership
let lst = [1, 2, 3, 4, 5];
let result4 = lst.includes(3);
console.log(result4); // true


// Condition 5: Checking Length
let str1 = "hello";
let result5 = (str1.length === 5);
console.log(result5); // true


// False Conditions

// Condition 6: Inequality
let h = 10;
let i = 10;
let result6 = (h !== i);
console.log(result6); // false

// Condition 7: Less Than
let j = 15;
let k = 20;
let result7 = (j > k);
console.log(result7); // false

//Condition 8: Logical OR
let l = 10;
let m = 5;
let n = 30;
let result8 = (l < m || m > n);
console.log(result8); // false

// Condition 9: String Comparison
let str2 = "hello";
let str3 = "world";
let result9 = (str2 === str3);
console.log(result9); // false

// Condition 10: Logical NOT
let o = 10;
let result10 = !(o === 10);
console.log(result10); // false
