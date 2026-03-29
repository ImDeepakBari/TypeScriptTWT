//Any

let x: any = 1;

// Defining any dataypes only if not aware of which datatypes varibles will hold in future
// It will basically skip type cheking in TypeScript


// Unknown
let y : unknown = 20;
// used when uncertian of varible it will hold
// this does not skip type checking
// This will ask to assert type before perfoming any operation on varible

if (typeof y == "number"){
    const result = y * 6
    console.log(result)
}
else if(typeof x == "string"){
    console.log("Asserting to string check!!")
}

//typeCast

const result = (y as number) +1  // manually assigning it as number before operation

const newRes = (y as "string") + 11

console.log(`using assert typeof check ${result} and ${newRes}`)