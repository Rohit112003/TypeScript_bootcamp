type User ={
    name:String;
    email:string;
    isActive:boolean;
    credicardDetails?:number

}
function creatUser(user:User): User{
    return {name: user.name,
         email : user.email ,isActive:user.isActive}
    
}
creatUser({name: "Rohit", email : "rohitk79739@gmail.com" ,isActive:true})


type cardNumber = {
 cardnumber: Number
}
type cardDate = {
    cardDates:string
}

type cardDetails = cardNumber & cardDate & {
    cvv:number
}

function Mycard(user:cardDetails): cardDetails{
    return ({cardnumber:user.cardnumber, cardDates:user.cardDates, cvv: user.cvv});

}

Mycard({cardnumber:12345, cardDates:"11/06/2003", cvv:123})