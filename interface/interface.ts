interface User {
    readonly dbId :number
    email : string,
    userId: number,
    googleId?:string,
    // startTrail:()=> string,
    //in function afetr colon value are return type in the below  the funvtion the return type is string
    // this function don't want to know what logi you are putting in but in the end it should return a string
    startTrail():string,
    getCoupon(couponName:string):number

} 
//reopening of interfcae
interface User{
    githubToken?:string
}

interface Admin extends User {
    role:"admin" | "employee" | "learner"
}


const Rohit:Admin = {role:"employee",email :"rohitk@gmail.com", userId:123, dbId:223,
//it is not neccesary to pass same name as function argument name
startTrail:()=>{return "trail started"} , getCoupon:(name:"hey")=>{return 10}};

Rohit.email = "r@rk.com"
