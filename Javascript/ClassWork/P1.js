// i= 109
// if(i>120){
//     console.log("i is greater")
// }
// else if(i==109) {
//     console.log("i is equal")
// }
// else{
//     console.log('i is smaller')
// }

// i=109;
// switch(i){
//     case 109: console.log("109"); break;
//     case 209: console.log("102");break;
// }

// a=[10,20,'hello',true,9.3]
// for(i=a.length-1;i>=0;i--){
//     console.log(a[i])
// }

// a=[10,20,7,4,19,21,24,3];
// for(i=0;i<a.length;i++){
//     if(a[i]%2==0){
//         console.log(a[i])
//     }
// }

// max=a[0];
// for(i=1;i<a.length;i++){
//     if(max<a[i]){
//         max=a[i];
//     }
// }
// console.log(max)


// a=[[10,20,30],[9,4],[7,2,4,8]];
// for(i=0;i<a.length;i++){
//     for(j=0;j<a[i].length;j++){
//         console.log(a[i][j]);
//     }
// }

// function  show(){
//     console.log("hellow world")
// }
// show();

// function add(a,b){
//     return a+b;
// }
// result= add(4,5)
// console.log(result)
// student = { id:101, name:"Ramesh", phone:"8888111", marks:93 };
// console.log(student)
// console.log(student.id)
// console.log(student.name)
// student = { id:101, name:"Ramesh", phone:"8888111", marks:93, hobbies:["music","sports"] };
// console.log(student)
// console.log(student.hobbies)
// student = { 
//     id:101, 
//     name:"Ramesh", 
//     phone:"8888111", 
//     marks:93, 
//     hobbies:["music","sports"],
//     address:{ houseNo:'A/123', street:'High Street' , city:'Pune', state:'MH', pincode:'12345'} 
//  };

//  console.log(student.address.houseNo)
//  console.log(student.address.street)

// students=[{ 
//     id:101, 
//     name:"Ramesh", 
//     phone:"8888111", 
//     marks:93, 
//     hobbies:["music","sports"],
//     address:{ houseNo:'A/123', street:'High Street' , city:'Pune', state:'MH', pincode:'12345'} 
//  },
//  { 
//     id:102, 
//     name:"Vikram", 
//     phone:"997722", 
//     marks:75, 
//     hobbies:["music","sports","dance"],
//     address:{ houseNo:'A/123', street:'High Street' , city:'Pune', state:'MH', pincode:'12345'} 
//  },
//  { 
//     id:103, 
//     name:"Rani", 
//     phone:"90988900", 
//     marks:91, 
//     hobbies:["painting","singing"],
//     address:{ houseNo:'A/123', street:'High Street' , city:'Pune', state:'MH', pincode:'12345'} 
//  }]

//  console.log(students);
//  console.log(students[i].id)

//  topper = student[0];
//  for(i=1; i<student.length;i++){
//     if(topper.mark < student[i].marks){
//         topper= student[i];
//     }
//  }
// console.log(topper)

// lower=students[0]
// for(i=1;i<students.length;i++){
//     if(lower.mark>students[i].marks)
//         {
//             lower=students[i];
//         }
// }
// console.log(lower)


// a = [10,20,30]
// b = [45,87,12,14]

// c= [...a,...b]
// console.log(c)
// function show (...arg){
//     console.log(arg);
// }
// show(3,5);

// function demo(args)
// {
//     console.log(args)
//     args();
// }
// demo(function(){
//     console.log("hello world")
// });


// const a = (a,b) =>{
//     console.log(a+b)
// }
// const s = a(2,3);


// const a = (a,b) =>{
//     return a+b
// }
// const s = a(2,3);
// console.log(s)




// const a = (a,b) => a+b

// const s = a(2,3);
// console.log(s)

//===========================================================================================================
// Description
// The filter() method creates a new array filled with
// elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.

// var arr = [10,3,7,18,6,5,8,4,9];
// const evenarray=arr.filter((item)=>{
//    return item%2==0
// });
// console.log(evenarray)

// const ages = [32, 33, 16, 40];
// const a =ages.filter((ages)=>{
//     return ages>30;
// })
// console.log(a);

// const ages = [32, 33, 16, 40];
// const a=ages.filter((ages)=>ages>30);
// console.log(a)


// var arr = [10,3,7,18,6,5,8,4,9];
// const evenarray=arr.filter(item=>item%2==0);
// console.log(evenarray)
//=================================================================

//ForEach
// Description
// The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.
// it does not return any array 
// foreach methos is nothing return

//  var arr = [10,3,7,18,6,5,8,4,9];
//  arr.forEach((item)=>{
//     console.log(item)
//  });
//  console.log()

// const fruits = ["apple", "orange", "cherry"];
// fruits.forEach((i,j)=>{
//   console.log(i,j)
// });
//==================================================================

//MAP
Description
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.


//  var arr = [10,3,7,18,6,5,8,4,9];
//  var a= arr.map((item)=>{
//       return 2*item;
//  })
// console.log(a)

// var arr = [10,3,7,18,6,5,8,4,9];
// var a= arr.map(item=> 2*item);
// console.log(a)
















