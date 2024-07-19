"use strict";
function storecarInfo(manufacture, modelNumber, ...extraOption) {
    let carInfo = Object.assign({ manufacture,
        modelNumber }, Object.assign({}, ...extraOption));
    return carInfo;
}
let ans1 = storecarInfo("Toyota", "2024");
console.log(ans1);
let ans = storecarInfo("Honda", "2023", { color: "Black" }, { features: ["navigation", "power window"] });
console.log(ans);
