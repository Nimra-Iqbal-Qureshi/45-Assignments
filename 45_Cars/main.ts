
function storecarInfo(manufacture:string,modelNumber:string,...extraOption:{[key:string]:any}[]){
    let carInfo={
        manufacture,
        modelNumber,
        ...Object.assign({},...extraOption)
    }
    return carInfo
    }
    let ans1=storecarInfo("Toyota","2024")
    console.log(ans1);
    
    
    let ans=storecarInfo("Honda","2023",{color:"Black"},{features:["navigation","power window"]})
    console.log(ans);
    