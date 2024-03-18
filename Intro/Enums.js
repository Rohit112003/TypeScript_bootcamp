//Enums allow developers to define a collection of related values with more readable and semantic code. Enums are helpful when you have a fixed set of values that a variable can take.
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
// Using the enum
var backgroundColor = Color.Blue;
console.log(backgroundColor);
