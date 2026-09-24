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
    let val = p.x + p.y + p.z;
    return val * 2 - 2 + 3;
}
class VirtualPoint {
    x;
    y;
    z;
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
let point = new VirtualPoint(23, 51, 12);
console.log(logPoint(point));
export {};
