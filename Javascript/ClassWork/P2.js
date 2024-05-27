
// const factorial = (Number)=>{
//     var f=1;
//     for(i=1;i<=Number;i++){
//         f=f*i;
//     }
//     console.log(f)
// }
// setTimeout(factorial,1000,3);
//========================================

//Ansyn

// const factorial = (Number)=>{
//     var f=1;
//     for(i=1;i<=Number;i++){
//         f=f*i;
//     }
//     console.log(f)
// }

// var sum=0;
// const sum =(num)=>{
//     sum=sum+num
// }

// setTimeout(sum,5000,2);
// setTimeout(factorial,1000,3);

//=============================================

// sum=1;
// setTimeout((num)=>{
//     sum=sum+num
// },5000,2);
// setTimeout((Number)=>{
//     var f=1;
//     for(i=1;i<=Number;i++){
//         f=f*i;
//     }
//     console.log(f)
// },1000,3);
// ============================================
// sum=1;
// setTimeout((Number)=>{
//     var f=1;
//     for(i=1;i<=Number;i++){
//         f=f*i;
//     }
//     console.log(f)
//     setTimeout((num)=>{
//         sum=sum+num
//     },5000,2);
//     console.log(sum)
// },1000,3);
// ============================================


//Promise

// var x=5;
// var evenPromise = new Promise((resolve, reject)=>{
// if(x%2==0)
// {
//     resolve();
// }else{
//     reject();
// }
// });

// evenPromise.then(()=>{
//     console.log('No')
// }).catch(()=>{
//     console.log('No')
// });

// function even(n){
//     return new Promise((resolve,reject)=>{
//       if(n%2==0){
//         resolve();
//       }else{
//         reject();
//       }
//     });
// }
//     even(9).then(()=>{
//         console.log('no');
//     }).catch(()=>{
//         console.log('No');
//     });

//==============

// const factorial = (n) =>{
//     return new Promise((resolve,reject)=>{
//         console.log("Calculating Factorial....!")
//         setTimeout(()=>{
//           var f=1;
//           for(i=1;i<=n;i++){
//             f=f*1;
//           }
//           resolve(f);
//         }, 5000)
//     })
// }

// const square=(result)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             result1= result*result;
//             resolve(result1)
//            }, 1000);
//     })
 
// }
// const sum =(a,b)=>{
//     return new Promise((resolve,reject)=>{
//         console.log("Cal Sum")
//         setTimeout(()=>{
//             var c= a+b 
//             resolve(c)
//         },1000)
//     })
// }


// async function handlePromise(){
//     try{
//         var rs=await factorial(3)
//         await square(result)
//         await sum(res)
//         show()
//     }
//     catch(error)
//     {
//         console.log()
//     }
// }

// factorial(3).then(()=>{
//     console.log("Factorial is", result);
//     sum(result,10);
// }).then((result)=>{
//     console.log(result);
//     return square(result)
// }).then((result)=>{
//     console.log(result);
// })
// .catch(()=>{
//     console.log("Something went thing............!")
// });




////////////////////////////////////////

// const fetchIDs = () =>{
//     return new Promise ((resolve, reject)=>{
//         console.log("fetching ids........")
//         setTimeout(()=>{
//             var ids=[101,102,103]
//             if(ids.length>0){
//                 resolve(ids)
//             }else{
//                 reject("Error in fetchig id")
//             }
//         }, 5000)
//     })
// }

// const fetchdata=(id)=>{
//     return new Promise ((resolve,reject)=>{
//         console.log("fetchih data",id)
//         setTimeout(()=>{
//             var data ={
//               userId:id, name: 'anuj',phone:"800"
//             }
//             if(data){
//                    resolve(ids)
//             }else{
//                 reject()
//             }
//         })
//     })
// }
// fetchIDs()
// .then((idvalues)=>{
//   console.log("id from the server", idvalues)
// }).catch((erroe)=>{
//     console.log(erroe);
// })

//=============================================

// function evenPromise(n){
//     var a= [10,20,30]
//     return new Promise((resolve,reject)=>{
//         if(n%2==0)
//         {
//           resolve(a)
//         }else{
//             reject()
//         }
//     });
// }
// evenPromise(6).then((a)=>{
//      console.log(a)
// }).catch(()=>{
//      console.log("No")
// })
//=====================================

// function even(n){
   
//     return new Promise((resolve,reject)=>{
//         var a= [10,20,30,40]
//         if(n%2==0){
//             resolve(a);
//         }else{
//             reject(new Error('No'));
//         }
//     })
// }
// even(6).then((a)=>{
//      console.log(a)
// }).catch((error)=>{
//      console.log(error)
// });
//====================================

const fetch=()=>{
    return new Promise((resolve,reject)=>{
        console.log("fetchig.........")
        setTimeout(()=>{
            var ids=[101,102,103,104]
            if(ids>0)
            {
                resolve(ids)
            }else{
                reject()
            }
        }, 5000)
    })
}

const fetchData=(id)=>{
    return new Promise((resolve, reject)=>{
        console.log("fetchig data")
        setTimeout(()=>{
            var data={
                userId:id,
                name:"anuj",
                age:"14"
            }
            if(data){
                resolve(data);
            }else{
                reject("Error in fetching")
            }
        }, 2500)
    })
}

const Check=(age)=>{
    return new Promise((resolve, reject)=>{
        if(age>=18){
            resolve("Eligible for voting........!")
        }else{
            reject("Not Eligible...........!")
        }
    }, 1000)
}

async function handlePromise(){
    try{
        var ids= await fetch()
        console.log(ids)
        var userdata=await fetchData(ids[2])
        console.log(userdata)
        const status =await Check(userdata.age)
        console.log(status)
    }
    catch{
        console.log(error);
    }
}
handlePromise();


// fetch()
// .then((ids)=>{
//     console.log(ids)
//     return fetchData(ids[1])
// }).then((data)=>{
//     console.log(data)
//     return Check(data.age)
// }).then((status )=>{
//     console.log(status);
// }).catch((error)=>{
//     console.log(error);
// })



// ======================================

