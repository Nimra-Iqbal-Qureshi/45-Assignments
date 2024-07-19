let currentUser:string[]=["Admin","Zahid","Shahid","Asad","Ahmed"];

let newUser:string[]=["admin","Rafaqat","shahid","liaqat","Ahsan"];

let lowercase=[];

for(let i=0; i<currentUser.length; i++){
lowercase.push(currentUser[i].toLowerCase())
}

for (let j= 0; j < newUser.length; j++) {
   if(lowercase.includes(newUser[j])){
    console.log(`${newUser[j]} is not available.`);
   }else{
   console.log(`${newUser[j]} is available.`);
   }
}

