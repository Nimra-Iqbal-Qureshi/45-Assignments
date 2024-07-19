"use strict";
let currentUser = ["Admin", "Zahid", "Shahid", "Asad", "Ahmed"];
let newUser = ["admin", "Rafaqat", "shahid", "liaqat", "Ahsan"];
let lowercase = [];
for (let i = 0; i < currentUser.length; i++) {
    lowercase.push(currentUser[i].toLowerCase());
}
console.log(lowercase);
for (let j = 0; j < newUser.length; j++) {
    if (lowercase.includes(newUser[j])) {
        console.log(`${newUser[j]} is not available.`);
    }
    else {
        console.log(`${newUser[j]} is available.`);
    }
}
// newUser.forEach(newUserName =>{
//     let lowerCase=newUserName.toLowerCase();
// if (currentUser.map(currentUserName => currentUserName.toLowerCase()).includes(lowerCase)) {
//     console.log(`The username ${newUserName} is not available,Please try something else.`);
// } else {
//     console.log(`The username ${newUserName} is avaiable.`);
// }})
