var guestList = ["Asad", "Shahid", "Zahid"];
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear Mr. " + guestList[i] + ",\nIt is our pleasure to invite you on a dinner.\nThank You.");
}
;
console.log("\nGood News! We find big table so we are inviting 3 more guests.");
guestList.unshift("Salar");
guestList.splice(2, 0, "Rafaqat");
guestList.push("Liaquat");
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear Mr. " + guestList[i] + ",\nIt is our pleasure to invite you on a dinner.\nThank You.");
}
;
