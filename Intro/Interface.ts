interface User{
    readonly dbId:number
    email:string,
    userId:number,
    googleId?:string
    startTrial():string
    getCoupon(couponmae:string):number
}

const hitesh:User = {dbId:22,email:"h@hmail.com", userId:22211,
startTrial : ()=>{
    return "trail Started"
},
getCoupon:(name:"Rohit")=>{return 10}
}

hitesh.email = "h@hc.com"
