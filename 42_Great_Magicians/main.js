var magicians = ["Harry Houdini", "David Copperfield", "Uri Geller", "David Blaine"];
function make_greet(magicianArray) {
    for (var i = 0; i < magicianArray.length; i++) {
        magicians[i] = "The great ".concat(magicianArray[i], ".");
    }
}
make_greet(magicians);
console.log(magicians);
