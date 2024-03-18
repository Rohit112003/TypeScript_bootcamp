var User = {
    name: "Rohit",
    email: "rohit@gmail.com",
    isActive: true
};
function creatUSer(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
creatUSer({ name: "Rohit", isPaid: false });
//the first curly bracket after colon is return type object 
function createCourse(_a) {
    var name = _a.name, isPaid = _a.isPaid, _b = _a.add, add = _b === void 0 ? false : _b;
    return { name: "reactjs", isPaid: 399 };
    // function body
}
