function creatUser(user) {
    return { name: user.name,
        email: user.email, isActive: user.isActive };
}
creatUser({ name: "Rohit", email: "rohitk79739@gmail.com", isActive: true });
function Mycard(user) {
    return ({ cardNumber: user.cardnumber, cardDates: user.cardDates, cbv: user.cvv });
}
Mycard({ cardnumber: 12345, cardDates: "11/06/2003", cvv: 123 });
