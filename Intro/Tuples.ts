// in thsi we can easily reverse the odder like ["hc", 1] something like that
//consst user: (string|number)[] = [1,"hc"]

//But in tuples
//tuple is to make sure that even not just what is the array even the order of the array really matters in the case of tuples
//the array must be length of 3 not more than that
let tUser: [string,number,boolean]

tUser = ["Rk", 1234,true]

type User = [number,string]

const newUser:User = [112,"example@google.com"]

newUser[1] = "hc.com"


export {}