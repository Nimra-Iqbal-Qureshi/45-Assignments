var personName = "asad Iqbal qureshi";
console.log(personName.toLowerCase(), "in lowercase.");
console.log(personName.toUpperCase(), "in upper case.");
console.log(personName.split(" ").map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); }).join(" "), "in title case.");
