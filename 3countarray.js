// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]


// function countSheeps(sheep) {
//     return sheep.reduce((acc,cur)=>{
//         if(cur===true){
//             return acc+1
//         }else{
//             return acc
//         }
//     },0)
//   }

//   const sheepArray = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true];
// console.log(countSheeps(sheepArray)); 

function test(num){
    return num.reduce((acc,cur)=>{
       return cur
    },0)
}

console.log(test([1,2,3,4,5]));
