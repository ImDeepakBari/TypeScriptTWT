

// function add(x, y){
//     return x,y
// }

// Above code will throw error as it type is not defiend in function parameter

function addNum(x:number, y :number){
    return x + y
}

console.log(addNum(30, 2))

// defining optional paramter in function
function makeName(firstname: string, lastname:string, middlename?: string){
    return firstname + " "+lastname 
}
const myname = makeName("Deepak", "bari")
console.log(myname)


function sumAllNum(...numbers: number[]){
    return numbers

}
console.log(sumAllNum())
console.log(sumAllNum(1, 4,10 ,5))
console.log(sumAllNum(1, 4,10 ,5, 3, 5, 56, 6,77, 87))