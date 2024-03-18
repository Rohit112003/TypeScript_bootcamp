let score:number | string = 33;

score = "44"

type User = {
    name:string;
    id:number
}
type Admin= {
    userName:string;
    id:number
}

let Rohit : User | Admin = {name:"Rohit" , id:334}

Rohit = {userName:"Rk", id:334}


// function getDbId(id:number| string){
//     console.log(`DB id is ${id}`);
// }

getDbId(12344);
getDbId("1234")

function getDbId(id:number| string){
    if(typeof id ==='string'){

        id.toLowerCase();
    }
    if(typeof id ==='number'){
        id = id+2;
    }
}


//union with arrays
//this syntax dont work because typeScript dont support this 
// const data : number[] | string [] = [1,2,35,5,"4"]
//to work on array we can use  normal brackets
const data :( number | string)[] = [1,3,5,"5"]

//this can only have a value 3.14 no assignment can be possible
let pi:3.14 = 3.14;


let seatAllotment:"aisle"| "middle" | "window"
seatAllotment = "middle";