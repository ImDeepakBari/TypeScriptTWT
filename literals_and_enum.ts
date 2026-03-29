// literals in Ts are : 
// String Literal
// Number Literal
// Boolean Literal

// creating custom literal
let direction : "north"| "south" | "east" | "west";

direction = "east"
// direction = "hello" // this will throw error as it can have only defined literal types

let responseCode : 200 | 400| 302 ;
responseCode = 400; 


// enums: Stands for enumeration
enum Size{
    Small,
    Medium,
    large
    
};

var size: Size = 0;
var mySize: Size = Size.Medium;

if (2 === Size.large){
    console.log(`My size is equal to : ${Size.large}`)

}