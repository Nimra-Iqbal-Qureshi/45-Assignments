// Tests for equality and inequality with strings
let fruit:string="Apple"
console.log("Equality Test with strings:","Apple"==="Apple" );
console.log("InEquality Test with strings:",fruit!="Apple" );

// Tests using the lower case function
console.log("Lower case function Test","ASAD".toLowerCase()==="asad");

// Numerical tests involving equality and inequality,
let digit:number=20;
console.log("Equality Test with number:",20===20);
console.log("InEquality Test with number:",digit!=20);

// greater than and less than,
console.log('Greater than test:',digit > 10);
console.log('less than test:',10 < 45);

// greater than or equal to,
console.log("Greater than and equal to",20 >= 20);

// and less than or equal to
console.log("less than and equal to",8 <= 8);

// Tests using "and" and "or" operators
console.log("And operator test",20 < 10 && 23 < 20);
console.log("Or operator test",10===10 || 23 > 20);

// Test whether an item is in a array
let subjects:string[]=["Urdu","English","Math","Computer"]
console.log("Test Engling in Subjects Array:", subjects.includes("English"));

// Test whether an item is not in a array
console.log("Test Chemistry in Subjects Array:", !(subjects.includes("Chemistry")));







