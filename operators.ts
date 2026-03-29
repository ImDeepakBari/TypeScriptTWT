// ?

const myArray = [{name: "Deepak"}, {name: "jane"}, {name: "TataElaxi"}]

const result = myArray.pop()?.name

// Here result can be of string or undefined datatypes
// This is checking if "myArray.pop()" is of undefined type or not
// ? this will check the datatypes and then move forward 
// IF it is undefined then result will be stop wont go futher in operation

const myA = [[{name:"terminator"}]]
const el = myA.pop()!.pop()!.name
// here ! will explicitly define datatype eg string here.
// forcefully assiging types

