type User={
   readonly _id:string
   name:string
   email:string
   isActive:boolean 
   //its an optional
   creditCard?:number
}

let myUser : User = {
    _id:"12345",
    name:"Rohit",
    email: "h@h.com",
    isActive:false
}
myUser.email = "h@gmail.com"
//cannot assign to '_id' because it is a read-only property.
// myUser._id = "asa"

function creatUSer(user:User){

}


type cardNumber = {
    cardNumber: string
}
type cardDate = {
    cardDate:string
}

//it's helpful because we are joing the existing types in one and we can add multiple type using curly brackets
type cardDetails  = cardNumber & cardDate & {
    cvv:number
}



export {}