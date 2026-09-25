interface StudentType {
  name: string;
  age: number;
  company: string;
}

const students: StudentType[] = [
  {
    name: "Haider",
    age: 22,
    company: "codek",
  },
  {
    name: "Hussnain",
    age: 22,
    company: "codek",
  },
];
function same(students: StudentType[], search: string) {
  return students.filter(
    (val) => val.name.toLowerCase() === search.toLowerCase(),
  );
}
console.log(same(students, "Hussnain"));
