//it might be a number it might be a string but you not sure it can be euther of the two now insted
//of using nay it is highly recommend that you try to use union type
//Union is type of two or three or more types of data that you can include into variable or in an array

// "|" 

let score:number|string = 33

//both are valid
score =44
score="55"

type  User = {
    name:string
    id:number
}
type  Admin = {
    UserName:string
    id:number
}

let Rohit : User| Admin = {name:"Rohit", id:334};

Rohit = {UserName:"RK", id:334}


// function getDbid(id:number| string){
//     console.log(`Db id is${id}`)
// }
getDbid(3)
getDbid("3")

function getDbid(id:number| string){
    //Property 'toLowerCase' does not exist on type 'string | number'.
  //Property 'toLowerCase' does not exist on type 'number
        // id.toLowerCase() 
        if(typeof id ==="string"){
            id.toLowerCase
        }
}

//array

const data:number[] = [1,2,3] 

//you can add both string and number at a same time

const data3: (string| number)[]= ["1","2",3]

//you can either go with string or number 
const data2:string[] | number[] = ["1","2"]

export{}
