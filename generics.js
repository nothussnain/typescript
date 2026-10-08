"use strict";
// export {};
// interface Lengthwise {
//   length: number;
// }
// function mywork<type extends Lengthwise>(arg: type): number {
//   console.log(arg.length);
//   return arg.length;
// }
// console.log(mywork({ length: 12 }));
// type stringarray = Array<string>;
// type boolarray = Array<boolean>;
// type numberarray = Array<number>;
// interface Backpack<type>{
//   add:(obj:type)=>type;
//   get:()=>type;
// }
// declare const backpack:Backpack<string>;
// let object=backpack.get();
// backpack.add("backpack")
// function gentype<type>(val:type):type{
//   return val;
// }
// let myidentity:<type>(val:type)=>type=gentype;
// interface Myidentity<type>{
//   (arg:type):type;
// }
// let myidentity2:Myidentity<string>=gentype;
// class User<type> {
//   zerovalue: type;
//   add: (x: type, y: type) => type;
//   constructor(name: type, add: (x: type, y: type) => type) {
//     this.zerovalue = name;
//     this.add = add;
//   }
// }
// let User1 = new User(2, (x, y) => {
//   return x + y;
// });
// console.log(User1.zerovalue);
// type fun={
//   (arg:number):number
// }
// function mydata(arg:number){
// return arg
// }
// interface Usertype<data:string> {
//   id: number;
//   status: "success" | "error";
//   statuscode: number;
//   data?: data;
// };
// type userresponse = Usertype;
// let variable: userresponse = {
//   id: 23,
//   status: "success",
//   statuscode: 213,
// };
// console.log(variable);
// type property=(a:number,b:number)=>number;
// interface Property{
//     (a:number,b:number):number;
// }
// function fun():Property{
//     let function
// }
// enum User {
//   Yes = 22,
//   no = "h",
// }
// console.log(User.no);
var response;
(function (response) {
    response[response["yes"] = 0] = "yes";
    response[response["no"] = 1] = "no";
})(response || (response = {}));
function userdata(arg, msg) {
    return arg.filter((val) => val === msg);
}
console.log(userdata([1, 2, 3, 4], response.no));
