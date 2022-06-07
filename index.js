"use strict";
// let array=[2,5,6,10,22,44,1,3];
// const a=arr.sort((a,b)=>a-b)
// console.log(a)

// let arr = [2, 5, 6, 10, 22, 44, 1, 3];
// let cart = [];
// const b=arr.pop()
// console.log(arr)

// let array=[2,5,6,10,22,44,1,3];
// const c=arr.push(4)
// console.log(array)

// const index=arr.findIndex((elem,index)=>index===3);//индексы
// console.log(index);

// const before=arr.slice(0,index)
// console.log(before);

// const after=arr.slice(index+1)
// console.log(after);

// const newArr=[...before,...after]
// console.log(newArr);

// const Newbefore = arr.slice(0, 5);
// console.log(Newbefore);
// const Newafter = arr.slice(-2);
// console.log(Newafter);
// const newArr = [...Newbefore, 77,...Newafter];
// console.log(newArr);

// const element = arr.find((elem) => elem === 22);
// const newArr = [...cart, element];
// const element1 = arr.find((elem) => elem === 3);
// const newArr2 = [...newArr, element1];
// console.log(newArr2);

// let cart = [];
// const object = [
//   { name: "Uson", active: false },
//   { name: "Asan", active: false },
//   { name: "Hasan", active: false },
//   { name: "Husan", active: false },
//   { name: "Marat", active: false },
// ];
// // const obj=object.find((elem)=>elem.name==='Asan');
// // const newName=[...cart,obj];
// // const obj1=object.find((elem)=>elem.name==='Husan');
// // const newName1=[...newName,obj1];
// // console.log(newName1);

// const index = object.findIndex((elem) => (elem.name = "Hasan"));
// const newItem = {
//   ...object[index],
//   name: (object[index].name = "Aibek"),
//   active: (object[index].active = true),
// };
// const before = object.slice(0, index);
// const after = object.slice(index + 1);
// const newArr = [...before, newItem, ...after];
// // console.log(newArr);
// console.log(newItem);

// newArr
//   .filter((e) => {
//     return e.active === false;
//   })
//   .map((e, i) => {
//     return console.log(e.name);
//   });


let arr = [8, 9, 10, 22, 33, 10];
function myFync (arr, a) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i]+arr[j]===a && i!=j) {
        console.log(arr[i],arr[j]);
      }
    }
  }
  }

myFync(arr,20);




