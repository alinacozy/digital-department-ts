//вариант 3

let sum = (a1: number, a2: number, a3: number) => {
    return a1 + a2 + a3;
};
console.log(sum(1, 2, 1));

let a: number = 5;
let b: string = "Hello";
let c: boolean = true;
const d: any[] = [1, true, 3, "4", 5];
enum Pets {
    Kitten = "Котенок",
    Puppy = "Щенок",
    Fish = "Рыбка",
    Wolf = 5,
}

interface Entity {
    id: number;
}

interface ToJsonStringify extends Entity {
    e1?: number;
    e2: string;
}

const dat: ToJsonStringify = {
    id: 3,
    e1: 12345,
    e2: "Поле 2",
}

const result = JSON.stringify(dat);
console.log(result);

