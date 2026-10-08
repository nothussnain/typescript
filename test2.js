"use strict";
// interface User {
//   id: number;
//   name: string;
//   email: string;
//   isVerified: boolean;
//   role: "developer" | "admin" | "tester";
// }
function getData(data) {
    console.log(typeof data);
    return data;
}
let user = {
    id: 12,
    name: "hussnain",
};
console.log(getData(user));
var paymentStatus;
(function (paymentStatus) {
    paymentStatus["PENDING"] = "pending";
    paymentStatus["SUCCESS"] = "success";
    paymentStatus["FAILED"] = "failed";
})(paymentStatus || (paymentStatus = {}));
console.log(paymentStatus.SUCCESS);
