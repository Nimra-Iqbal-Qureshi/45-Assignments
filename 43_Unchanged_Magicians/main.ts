let magicians:string[]=["Harry Houdini","David Copperfield","Uri Geller","David Blaine"];

function arrayCopy(copy:string[]){
   return [...copy]  
}

let copy=arrayCopy(magicians)

function make_greet(arr:string[]) {
    for (let i = 0; i < arr.length; i++) {
        copy[i]=`The great ${arr[i]}.`
        
    }
}

make_greet(copy)

function show_magician(arr:string[]) {
   return arr
    }
    
 console.log("orignal array:",show_magician(magicians));
 

 console.log("Modified copy array:",show_magician(copy));
 
