// const User ={
//     name:"Rohit",
//     email:"rohit@gmail.com",
//     isActive:true
// }
function creatUSer({name:string, isPaid:boolean,}){

}

creatUSer({name:"Rohit", isPaid:false})


//the first curly bracket after colon is return type object 
function createCourse({ name, isPaid, add = false }: { name: string, isPaid: boolean, add?: boolean }){
    // function body
    return {name:"reactjs", isPaid:399}
}

//type allias
//type can help me creating my own dataTypes

type User = {
    name:string;
    email:string;
    isActive:boolean; 
}

//we can also do the property of mystring is string only but it's has a new name or new dataType with same string property
type myString = string;

function createUser(user:User){

}

createUser({name:'', email:'', isActive:true})


export {}



