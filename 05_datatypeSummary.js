// Premitive ----> 7 Types
/* string, number, boolean, null, undefined,symbol, BigInt

Non Premetive (Reference) ----> 3 type
 Array , Object , Function   */

 const score = 100;
 const scorevalue = 100.3;
 const isLoggedId = true;
 const outSideTemp = null;
 let userEmailId;

 const id = Symbol('123');
 const anotherId = Symbol('123');
 //console.log(id == anotherId);
 const bigNumber = 1223323131313n;



 //Array object function
 const heroes=["shaktiman","naagraj" , "dogo"];

 let myObj = {
    name : "ashu",
    age: "22",
 }

 const myfunction = function(){
    console.log("hello world");
 }


/****************PREMITIVE DATA TYPE OF */


 /*console.log(typeof score);
 console.log(typeof scorevalue);
 console.log(typeof isLoggedId);
 console.log(typeof outSideTemp);
 console.log(typeof userEmailId);
 console.log(typeof bigNumber);*/


 //+++++++++++++++++++++++++++++++++++++++++++++++++

 // Stack (Premitive) , Heap (Non-Premitive)

 let myYoutubename = "journeywithashu"

 let anonthername = myYoutubename
 anothername = "ashu"

 console.log(myYoutubename);
 console.log(anothername);

 let userOne={
    email : "ashu@gmail.com",
    upi : "user@ybl",
 }

 let userTwo = userOne

 userTwo.email = "journeywithashu@gmail.com"

 console.log(userOne.email);
 console.log(userTwo.email);
 




