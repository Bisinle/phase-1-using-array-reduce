const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

let totalBatteries =  batteryBatches.reduce((sum,item)=>{
    console.log(item);

    return sum += item
},0)

console.log(totalBatteries);