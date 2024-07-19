var guestList = ["Asad", "Shahid", "Zahid", "Salar"];
// for (let i=0; i < guestList.length; i++) {
//     console.log("Dear Mr. " + guestList[i] + ",\nIt is our pleasure to invite you on a dinner.\nThank You.");    
// };
// console.log("\nGood News! We find big table so we are inviting 3 more guests.");
// guestList.unshift("Salim");
// guestList.splice(2,0,"Rafaqat");
// guestList.push("Liaquat");
// for (let i=0; i < guestList.length; i++) {
//     console.log("Dear Mr. " + guestList[i] + ",\nIt is our pleasure to invite you on a dinner.\nThank You.");
// }
console.log("Sorry we cannot arrange big table, Only 2 guest will be invited.");
//removing guest except 2 guest
console.log("Sorry Mr:".concat(guestList[2], ",you are not invited for dinner."));
console.log("Sorry Mr:".concat(guestList[3], ",you are not invited for dinner."));
guestList.length = 2;
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear Mr. " + guestList[i] + ",\nYou are still invited for a dinner.\nThank You.");
}
//remove all guest
guestList.splice(0, 2);
console.log(guestList);
