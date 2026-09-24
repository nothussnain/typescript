export {};
// class UserAccount {
//   name: string;
//   id: number;
//   constructor(name: string, id: number) {
//     this.name = name;
//     this.id = id;
//   }
// }
// const user: UserAccount = {
//   name: "ali",
//   id: 2,
// };
// let userName: string;
// userName = "ali";
// console.log(userName);
// interface Getlength{
//   user: number[]
// }:number;
// function getlength:Getlength {
//   return user.length;
// }
// let user = [2, 4, 6, 1];
// console.log(getlength(user));
interface User {
  yourname: string;
  rollno: number;
  id: number | null;
}
// function info(user: User):string {
//   return user.yourname;
// }
let user: User = {
  yourname: "hussnain",
  rollno: 22,
  id: null,
};
function newfun(user: string | string[]) {
  return user.length;
}
let yourname = "hussnain";
console.log(user.yourname);
let name = ["hussnain", "ali"];
console.log(newfun(name));
function wrapInArray(Obj: string | string[]) {
  if (Obj !== "string") {
    return [Obj];
  }
  return Obj;
}
let Obj = "ali";
console.log(wrapInArray(Obj));
interface Point {
  x: number;
  y: number;
  z: number;
}
function logPoint(p: Point) {
  return p.x + p.y;
}
class VirtualPoint {
  x: number;
  y: number;
  z: number;
  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}
let point = new VirtualPoint(23, 51, 12);
console.log(logPoint(point));
