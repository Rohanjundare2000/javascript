// 1 Solution:

// console.log("Promise Started")
// var myPromise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//        resolve();
//     },3000)
// });
// console.log(myPromise)
// console.log("Promise Is In process")

// myPromise.then(() => {
//     console.log("Promise Completed");
// });

// 2: Solution:

// console.log("Promise Started")
// var myPromise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//        resolve("Promise Completed");
//     },3000)
// });
// console.log(myPromise)
// console.log("Promise Is In process")

// myPromise.then((value) => {
//     console.log(value);
// });
// ============================================

// Program 3

// console.log("Promise Started")

// var myPromise = new Promise ((resolve,reject) => {
//        setTimeout( ()=> {
//           resolve();
//        },3000)
//        setTimeout( () => {
//           reject();
//        },1000)
// })

// console.log(myPromise)
// console.log("Promise is in Excution")

// myPromise.then(()=>{
//     console.log("Promise t Completed")
// }).catch(()=>{
//     console.log("Promise c Completed")
// })

//================================================

//Program 4:

// console.log("Promise Started....!")

// var myPromise = new Promise((resolve,reject) => {
//   setTimeout(()=>{
//       resolve();
//   },3000)
// });

// console.log(myPromise)
// console.log("Promise in Excution.......!")

// myPromise.then(()=>{
//     console.log("1st Promise is completed..........!")

//     return new Promise((resolve,reject) => {
//         setTimeout( () => {
//            resolve("2 Promise is Completed.........!")
//         },6000)
//     });
// }).then( (value)=>{
//     console.log(value);
// });

// =============================00=======================

//program 5

// console.log("Program Started............!")

// const myPromise= new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve({data:"hello", error:"null"});
//     },5000)
// })
// console.log(myPromise)
// console.log("Promise in Excution.......!")

// myPromise.then((value)=>{
//     console.log(value);
//     return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         resolve("First promise chain Completed...!")
//       },2000)
//     })
// })
// .then((val)=>{
//     console.log(val)
// })

// myPromise.then((value)=>{
//      console.log(value)
//     return new Promise((resolve,reject)=>{
//        setTimeout(() => {
//         resolve("Second Promise is completed...........")
//        }, 10000);
//     })
// }).then((value) => {
//     console.log(value)
// })

//============================================================

const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10)
    }, 3000)
});

const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(20);
    }, 5000);
});

Promise.all([promise1.promise2]).then((values)=>{
    const fristvalue = values[0]
    const secondvalue = values[1]
    console.log(values)
    console.log(fristvalue, secondvalue)
    console.log(fristvalue+secondvalue)
})






