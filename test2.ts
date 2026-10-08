// interface User {
//   id: number;
//   name: string;
//   email: string;
//   isVerified: boolean;
//   role: "developer" | "admin" | "tester";
// }
// const user: User = {
//   id: 101,
//   name: "Haider",
//   email: "haider@gmail.com",
//   isVerified: true,
//   role: "developer",
// };
// function getuserDetail(arg: string, arg2: string) {
//   return [arg, arg2];
// }
// console.log(getuserDetail(user.name, user.role));
// type User = {
//   id: number;
//   name: string;
// };
// function getData<t>(data: t): t {
//   console.log(typeof data);
//   return data;
// }
// let user: User = {
//   id: 12,
//   name: "hussnain",
// };
// console.log(getData<User>(user));
// enum paymentStatus {
//   PENDING = "pending",
//   SUCCESS = "success",
//   FAILED = "failed",
// }
// console.log(paymentStatus.SUCCESS);
