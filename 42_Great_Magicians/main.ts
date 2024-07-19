let magicians:string[]=["Harry Houdini","David Copperfield","Uri Geller","David Blaine"];

function make_greet(magicianArray:string[]) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicians[i]=`The great ${magicianArray[i]}.`
        
    }
}


make_greet(magicians)
console.log(magicians);
