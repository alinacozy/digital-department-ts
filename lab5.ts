//вариант 3

const data: string[] = []

const record = (param: string) => {
    setTimeout(() => {
        data.pop();
        console.log('Record: ' + param + ' removed!');
    }, 10000);
    data.push(param);
    console.log('Record: ' + param + ' added!');
}

record("alina");
record("alina2");


// Реализуйте на ваш выбор функцию, которая возвращает функцию,
// которая в свою в свою очередь пишет результат в консоль некоторую
// строку. Вызвать данные функции, показав принцип работы замыканий.

function createFunction(x: string) {
    console.log("Создаем функцию которая печатает: " + x);
    return (y: string) => console.log("Вызвали функцию, созданную с помощью замыкания: " + x +" "+ y);
}

const printHello=createFunction("Hello");
printHello("Alina");
printHello("world");

const printHi=createFunction("Hi");
printHi("Alina");
printHi("world");