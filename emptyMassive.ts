type TPerson = { name: string; age: number };
const persons: TPerson[] = [
  { name: "Roman", age: 24 },
  { name: "Anton", age: 0 },
];
persons.push({ name: "Vlad", age: 22 });
// console.log(persons);

type TError = { name: string; age: number }; // я не совсем понял третье задание,
//по этому я решил сделать якобы массив в который я добавляюю человека ошибку так как ему не может быть 0 лет
const fakePerson: TError[] = [];
fakePerson.push(persons[1]);
// console.log(fakePerson);

type TChecking = { name: string; check: boolean };
type TTime = { frequence: number; length: number };

const smoker: TChecking[] = [{ name: "Oleg", check: true }];
const duration: TTime[] = [{ frequence: 5, length: 10 }];
const dossier: (TChecking | TTime)[] = [...smoker, ...duration];

for (const item of dossier) {
  let info: string;
  if ("name" in item) {
    const { name, check } = item;
    info = `Имя сотрудника: ${name}, Курит?: ${check}`;
  } else {
    const { frequence, length } = item;
    info = `сколько раз в день?: ${frequence}, как долго?: ${length}`;
  }
  console.log(info);
}
