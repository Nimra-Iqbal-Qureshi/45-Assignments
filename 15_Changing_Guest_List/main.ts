let guestList:string[]=["Asad","Shahid","Zahid"];

for (let i=0; i < guestList.length; i++) {
    console.log("Dear Mr. " + guestList[i] + ",\nIt is our pleasure to invite you on a dinner.\nThank You.");   
};

console.log(`\n Mr ${guestList[2]} is not comming for dinner.`);

guestList.splice(2,1,"Imran") 
    
for (let i=0;i<guestList.length;i++) {
    console.log("Dear Mr. " + guestList[i] + ",\nIt is our pleasure to invite you on a dinner.\nThank You.");  
}    





// let absentGuest:string="Asad";
// let newGuest:string="Imran";

// guestList[0]=newGuest;

// for (let i=0; i < guestList.length; i++) {
//     console.log("Dear Mr. " + guestList[i] + ",\nIt is our pleasure to invite you on a dinner.\nThank You.");
    
// };

// console.log(`Mr ${absentGuest}, is not comming for dinner.`);

