export {};
interface Lengthwise {
  length: number;
}
function mywork<type extends Lengthwise>(arg: type): number {
  console.log(arg.length);
  return arg.length;
}
console.log(mywork({ length: 12 }));
type stringarray = Array<string>;
type boolarray = Array<boolean>;
type numberarray = Array<number>;
interface Backpack<type> {}
