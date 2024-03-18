import { ObjectId } from 'bson';

function addTwo(num:number):number{
    return num+2
}

function getUpper(val:string){
    return val.toUpperCase()
}


//The any type is a powerful way to work with existing JavaScript, allowing you to gradually opt-in and opt-out of type checking during compilation.
function signUpUser(name:string , email:string, password:string){

}

let loginUser = (name:string,email:string,isPaid:boolean=false)=>{
//defualtValue
}

signUpUser("h","a","v")
addTwo(5)
getUpper("Rohit")
loginUser("h","h@h.com",);

//so in this i can't use :string because it's returning both boolean and string
function getValue(myVal:number){
    if(myVal>5){
        return true;
    }
    return "200 ok"
}

function getHello():string {
    return "HI"
}

const newHello = (s:string):string=>{
    return "Quick Hello"
}

const heros = ["thor", "spiderman","ironMan"];
// const heros = [1,2,3];

//in this scenario the map function knows it is a string value array and we don't want to specify
// we can mention the retrun type of an map so we can do like
heros.map((hero):string=>{
    return `hero is  ${hero}`
})


//in typeScript whoever using the function, he knows more about the definition of function so it's not return annything than return void
function consoleError(errMsg:string):void{
    console.log(errMsg)
}

//the never represents values which are never observed ,In a return type , this mean that the function throws an exception or terminates of the program
function handlerror(errMsg:string):never{
    throw new Error(errMsg);
}


let UseThink:string = getHello()







export {}