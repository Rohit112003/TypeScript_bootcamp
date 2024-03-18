"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myUser = {
    _id: "12345",
    name: "Rohit",
    email: "h@h.com",
    isActive: false
};
myUser.email = "h@gmail.com";
//cannot assign to '_id' because it is a read-only property.
// myUser._id = "asa"
function creatUSer(user) {
}
