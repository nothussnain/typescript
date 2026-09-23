// function info(user: User):string {
//   return user.yourname;
// }
let user = {
    yourname: "hussnain",
    rollno: 22,
    id: null,
};
function newfun(user) {
    return user.length;
}
let yourname = "hussnain";
console.log(user.yourname);
let name = ["hussnain", "ali"];
console.log(newfun(name));
function wrapInArray(Obj) {
    if (Obj !== "string") {
        return [Obj];
    }
    return Obj;
}
let Obj = "ali";
console.log(wrapInArray(Obj));
function logPoint(p) {
    return p.x + p.y;
}
class VirtualPoint {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
let point = new VirtualPoint(23, 51);
console.log(logPoint(point));
export {};
