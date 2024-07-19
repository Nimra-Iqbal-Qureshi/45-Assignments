var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians = ["Harry Houdini", "David Copperfield", "Uri Geller", "David Blaine"];
function arrayCopy(copy) {
    return __spreadArray([], copy, true);
}
var copy = arrayCopy(magicians);
function make_greet(arr) {
    for (var i = 0; i < arr.length; i++) {
        copy[i] = "The great ".concat(arr[i], ".");
    }
}
make_greet(copy);
function show_magician(arr) {
    return arr;
}
console.log("orignal array:", show_magician(magicians));
console.log("Modified copy array:", show_magician(copy));
