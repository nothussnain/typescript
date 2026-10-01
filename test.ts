export {};
// function greet(name: string): string {
//   return `ello ${name}`;
// }
// let student = [1, 2, 3, 4, 5];
// type Values = "dark" | "light" | "system" | "blue";
// const val1: Values = "dark";
// const val2: Values = "light";
// const val3: Values = "system";
// const val4: Values = "blue";

// let a = 5;
// let b = 7;
// function printing(): string | boolean {
//   if (a === b) {;
//     return "hello";
//   } else {
//     return true;
//   }
// }
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
// enum codereview {
//   name = "hussnain",
//   rollno = 32,
// }
// function checkpayment(status: codereview): string | number {
//   return status;
// }
// console.log(checkpayment(codereview.name));
// function getValue<T>(val: T): T {
//   return val;
// }
// let fullname = getValue<string>("hussnain");
// console.log(fullname);
// function chectvalue<type>(value: type[]): type {
//   return value[0];
// }
// let mynumber = [3, 2, 5];
// let newnumber = chectvalue<number>(mynumber);
// console.log(newnumber);
// interface apiResponse<t> {
//   success: boolean;
//   data: t;
// }
// const response1: apiResponse<string> = {
//   success: true,
//   data: "found",
// };
// console.log(response1);
// const response2: apiResponse<{
//   name: string;
//   rollno: number;
// }> = {
//   success: true,
//   data: {
//     name: "hussnain",
//     rollno: 32,
//   },
// };
// console.log(response2);
// interface hasId {
//   id: number;
//   name: string;
// }
// function print<t extends hasId>(val: t) {
//   return val.id + val.name;
// }
// console.log(
//   print({
//     name: "hussnain",
//     id: 2,
//   }),
// );
// function printData<t extends { length: number }>(val: t) {
//   return val.length;
// }
// console.log(printData([1, 2, 4, 5]));
// class Student {
//   mname: string;
//   rollno: number;
// }
// let student1 = new Student();
// student1.mname = "husssnain";
// student1.rollno = 21;
// function getValue(val: number): number {
//   return val;
// }
// function getVal<t>(val:t):t{
//   return val
// }
// let output=getVal<string>("hussnain");
// type Length = {
//   length: number;
// };
// function identity<type extends Length>(val: type): number {
//   console.log(val.length);
//   return val.length;
// }

// console.log(identity(val));
// function identity<type>(val:type):type{
//   return val;
// }
// let user:<type>(val:type)=>type=identity
// let val :Valuetype = [1, 2, 4, 5,];
// type Valuetype=Array<number>
// function loggingIdentity(val: number[]): number[]{

//   console.log(val.length)
//   return val;
// }
// console.log(loggingIdentity([1,2,45]))
// function loggingIdentity<type>(val:Array<type>):Array<type>{
//   console.log(val.length);
//   return val;
// }
// interface Identity<input> {
//   (arg: Array<input>): Array<input>;
// }
// function getidentity<type>(arg: Array<type>): Array<type> {
//   return arg;
// }
// let myidentity: Identity<number> = getidentity;
// let result1 = myidentity([21, 3]);
// interface Lengthwise{
//   length:number;
// }
// function getDat<type extends Lengthwise>(arg:type):type|number{
//   return arg.length;
// }
// let myDate:<type extends Lengthwise>(arg:type)=>type|number=getDat;
// let result1=myDate<number[]>([1,2,3])
// class Properties<numtype> {
//   zeroValue: numtype;
//   add: (x: numtype, y: numtype) => numtype;
//   constructor(zeroValue: numtype, add: (x: numtype, y: numtype) => numtype) {
//     this.zeroValue = zeroValue;
//     this.add = add;
//   }
// }
// let GenerateNumber = new Properties<number>(0, function (x, y) {
//   return x + y;
// });
// console.log(GenerateNumber.add(GenerateNumber.zeroValue, 3));
// interface Lengthwise {
//   length: number;
//   age: number;
// }
// function getLength<type extends Lengthwise>(arg: type): type | number {
//   return arg.age;
// }
// let mylength: <input extends Lengthwise>(arg: input) => input | number =
//   getLength;
// console.log(mylength({ length: 12, age: 11 }));
// function logMessage(message: string = "hussnain i hate u"): void {
//   console.log(message);
// }
// logMessage();
// interface Datatype {
//   name: string;
//   rollno: number;
// }
// function gatherData<type extends Datatype>(val: type): type | number | string {
//   return val.name;
// }
// let user1 = gatherData({ name: "husnsain", rollno: 21 });
// function getData<type, key extends keyof type>(obj: type, key: key) {
//   return obj[key];
// }
// let y = { y: 3, j: 1 };
// console.log(y, "j");
// function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
//   return obj[key];
// }

// let x = { a: 1, b: 2, c: 3, d: 4 };

// console.log(getProperty(x, "a"));
// function create<type>(arg: { new (): type }): type {
//   return new arg();
// }
// class BeeKeeper {
//   hasMask: boolean = true;
// }
// class ZooKeeper {
//   nametag: string = "haris rauf criketer";
// }
// class Animal {
//   legs: number = 4;
// }
// class Bee extends Animal {
//   legs = 6;
//   keeper: BeeKeeper = new BeeKeeper();
// }

// class loin extends Animal {
//   legs = 4;
//   keeper: ZooKeeper = new ZooKeeper();
// }
// function create<type extends Animal>(A: new () => type): type {
//   return new A();
// }
// console.log(create(loin).keeper.nametag);
// class beeKeeper {
//   hasMask: boolean = true;
// }
// class zooKeeper {
//   nameTag: string = "Babar rizwan";
// }
// class Animal {
//   legs: number = 4;
// }
// class Bee extends Animal {
//   legs = 6;
//   keeper: beeKeeper = new beeKeeper();
// }
// class Lion extends Animal {
//   legs = 10;
//   keeper: zooKeeper = new zooKeeper();
// }
// function createinstance<type extends Animal>(arg: new () => type): type {
//   return new arg();
// }
// console.log(createinstance(Lion).keeper.nameTag);
// interface Producer<T>{
//   make ():T;
// }
// interface Producer<T>{
//   consume:(arg:T)=>void;
// }
// interface Animalproducer{
//   make():Animal;
// }
// interface catProduce{
//   make():Cat;
// }
// interface Foo<out t>[
// consume:(arg:t)=>void;
// ]

// interface prouducer<in out t>{
//   make():t;
// }
// const p:prouducer<string|number>={
//   make() :number{
//     return 42;
//   }
// }
// interface Consumer<in T>{
//   consume:(arg:T)=>void;
// }
// interface ProducerL<out T>{
//   make():T;
// }
// interface ProducerConsumer<in out T>{
//   consume:(arg:T)=>void;
//   make():T
// }
// interface Mypro {
//   name: string;
//   rollno: number;
// }

// type User={
//   name:string;
//   rollno:number;
// }
// type data=<type>(a:type,b:type)=>type
// enum userResponse {
//   Yes = 1,
//   No = 0,
// }
// function response(user: string, message: userResponse): void {}
// console.log(response("caroline", userResponse.No));
// enum fileaccess {
//   none = 0,
//   read = 1 << 1,
//   write = 1 << 2,
//   readWrite = read | write,
//   G = "123".length,
// }
// enum property {
//   Circle,
//   square,
// }
// interface Circle {
//   shape: property.Circle;
// }
// interface Square {
//   shape: property.square;
// }
// let c: Square = {
//   shape: property.square,
// };
// enum f {
//   foo,
//   joo,
// }
// function data(x: f) {
//   if (x !== f.foo) {
//   }
// }
// enum values {
//   X,
//   Y,
//   Z,
// }
// function getvalues(arg: { X: number }): number {
//   return arg.X;
// }
// console.log(getvalues(values));
// enum LogLevel {
//   Error,
//   Warn,
//   True,
//   False,
// }
// type LogDetail = keyof typeof LogLevel;
// function print(key:LogDetail, message: string) {
//   const num = LogLevel[key];
//   if (num <= LogLevel.True) {
//     console.log("the key=", key);
//     console.log("the num=", num);
//     console.log("the message=", message);
//   }
// }
// print("Error", "this is the message");
// enum Reverse {
//   A,
//   B,
//   C,
// }
// let a=Reverse.A;
// let nameofA=Reverse[a]
