function greet(name: string): string {
  return `ello ${name}`;
}
let student = [1, 2, 3, 4, 5];
type Values = "dark" | "light" | "system" | "blue";
const val1: Values = "dark";
const val2: Values = "light";
const val3: Values = "system";
const val4: Values = "blue";

let a = 5;
let b = 7;
function printing(): string | boolean {
  if (a === b) {
    return "hello";
  } else {
    return true;
  }
}
// enums
// generics
// function identity<type>(arg:Array<type>):Array<type>{
//   let num=arg.length;
//   return arg;
// }
// let output=identity<string>("string")
// function identity<type>(arg: type): type {
//   return arg;
// }
// let myidentity: <type>(arg: type) => type = identity;
// function identity<type>(arg:type):type{
// return arg;
// }
// let myidentity:<input>(arg:input)=>input=identity
// interface Genrericindentity<type>{
//   (arg:type):type;
// }
// function identity<type>(arg:type):type{
//   return arg;
// }
// let myidentity:Genrericindentity<number>=identity
// class GenericNumber<NumType>{
//   zeroValue:NumType;
//   add:(x:NumType,y:NumType)=>NumType;
// }
// let myGenerateNumber=new GenericNumber<string>();
// myGenerateNumber.zeroValue="";
// myGenerateNumber.add=function(x,y){
//   return x+y;
// };
// console.log(myGenerateNumber.add(myGenerateNumber.zeroValue,"name"));
// interface Lengthwise{
//   length:number;
// }
// function indentity<type extends Lengthwise>(arg:type):type{
// console.log(arg.length);
// return arg;
// }
// indentity({length:10,value:3})
// function getProperty<type,key extends keyof type>(obj:type,key:key){
//   return obj[key];
// }
// let x={a:1,b:2,c:3,d:4}
// getProperty(x,"a");
// getProperty(x,"i")
// function create<type>(c:{new():type}):type{
//   return new c();
// }
// class BeeKeeper {
//   hasMask: boolean = true;
// }
// class ZooKeeper {
//   nametag: string = "mikle";
// }
// class Animal {
//   numlegs: number = 4;
// }
// class Bee extends Animal {
//   numlegs: number = 6;
//   keeper: BeeKeeper = new BeeKeeper();
// }
// class Loin extends Animal {
//   keeper: ZooKeeper = new ZooKeeper();
// }
// function create<A extends Animal>(c: new () => A): A {
//   return new c();
// }
// create(Loin).keeper.nametag;
// create(Bee).keeper.hasMask;
