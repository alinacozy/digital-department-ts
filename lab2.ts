//вариант 3
//Реализовать метод, возвращающий среднее арифметическое, получаемое из массива целых чисел
let average = (data: number[]) => {
    let sum_of_elements = data[0]
    for (let i = 1; i < data.length; i++) {
        sum_of_elements += data[i];
    }
    return sum_of_elements / data.length;
};

const arr1: number[] = [1, 2, 3, 4, 5, 6, 7];
console.log("Результат вычисления среднего арифметического:", average(arr1))


//Реализовать метод, возвращающий количество значений в матрице целых чисел в заданном интервале
let count_of_numbers_inside_interval = (data: number[][], lower_border: number, upper_border: number) => {
    let count: number = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            if (data[i][j] > lower_border && data[i][j] < upper_border) {
                count++;
            }
        }
    }
    return count;
}

const matr: number[][] = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
];
console.log("Количество чисел в матрице, лежащих внутри интервала:", count_of_numbers_inside_interval(matr, 3, 10))

//Создайте кортеж, который может содержать только 2 строковых и 1 числовое значения (порядок следования: строка0,строка1, число). 
//Реализуйте метод, возвращающий строку вследующем формате: строка0 – число – строка1.

const tuple: [string, string, number] = ["Алина", "Королева", 19];
const tuple_to_string = (data: [string, string, number]) => {
    return data[0] + ' - ' + data[2] + ' - ' + data[1];
}
console.log("Результат преобразования кортежа в строку:", tuple_to_string(tuple));


//Создайте тип перечисление для типов пищевых растительных масел (рапсовое, подсолнечное и т.д.). 
//Выведите какой-либо тип масла в консоль.

enum Oil {
    Olive = "Оливковое",
    Sunflower = "Подсолнечное",
    Rapeseed = "Рапсовое",
    Soybean = "Соевое"
}
console.log(Oil.Olive)

//Реализуйте метод, который будет выводить информацию в консоль о создаваемом объекте типа Cat или Dog, 
//применяя обобщенный тип, ограниченный типом Pet.

class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    name = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
        return "Miyau!";
    }
}

const pet_speak = (pet: Pet) => {
    console.log(pet.speak());
}
const pet1: Pet = new Dog();
pet_speak(pet1);
const pet2: Pet = new Cat();
pet_speak(pet2);

/*Создайте тип с применением перечисления из 3го задания (для
использования его в качестве типа поля, для некоторых случаев
возможно его использование при реализации массива). Добавьте
собственные поля стандартных типов, корректно характеризующие ту
или иную предметную область, совпадающую с вашим типом
перечисления. Создайте объект на основе вашего типа и выведите его в
консоль в формате JSON. */

interface OilProduct {
    manufacturer: string;
    type: Oil;
    quantity: number;
}

const product1: OilProduct = {
    manufacturer: "Золотая семечка",
    type: Oil.Sunflower,
    quantity: 1,
}

const jsonProduct = JSON.stringify(product1);
console.log(jsonProduct);