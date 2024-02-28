export namespace Transport {
    export enum Documents {
        Passport = "Паспорт",
        BirthCertificate = "Свидетельство о рождении"
    }

    export interface IOwner {
        surname: string;
        name: string;
        patronymic: string;
        birthDate: Date;
        typeOfDocument: Documents;
        serialNumber: string;
        numberOfDocument: string;

        printInformation: () => void;
    }


    export interface IVehicle {
        brand: string;
        model: string;
        yearOfProduction: number;
        vinNumber: number;
        registeredNumber: number;
        owner: IOwner;

        printInformation: () => void;
    }

    export class Vehicle implements IVehicle {
        private _brand: string;
        private _model: string;
        private _yearOfProduction: number;
        private _vinNumber: number;
        private _registeredNumber: number;
        private _owner: IOwner;

        get brand(): string {
            return this._brand;
        }

        set brand(br: string) {
            this._brand = br;
        }

        get model(): string {
            return this._model;
        }

        set model(m: string) {
            this._model = m;
        }
        get yearOfProduction(): number {
            return this._yearOfProduction;
        }

        set yearOfProduction(year: number) {
            this._yearOfProduction = year;
        }
        get vinNumber(): number {
            return this._vinNumber;
        }

        set vinNumber(num: number) {
            this._vinNumber = num;
        }
        get registeredNumber(): number {
            return this._registeredNumber;
        }

        set registeredNumber(num: number) {
            this._registeredNumber = num;
        }
        get owner(): IOwner {
            return this._owner;
        }

        set owner(ow: IOwner) {
            this._owner = ow;
        }

        constructor(
            brand: string,
            model: string,
            yearOfProduction: number,
            vinNumber: number,
            registeredNumber: number,
            owner: IOwner
        ) {
            this._brand = brand;
            this._model = model;
            this._yearOfProduction = yearOfProduction;
            this._vinNumber = vinNumber;
            this._registeredNumber = registeredNumber;
            this._owner = owner;
        }

        printInformation(): void {
            console.log(this.brand + " " + this.model + " " + this.yearOfProduction + " " + this.vinNumber + " " + this.registeredNumber);
        }
    }

    export class Owner {
        private _surname: string;
        private _name: string;
        private _patronymic: string;
        private _birthDate: Date;
        private _typeOfDocument: Documents;
        private _serialNumber: string;
        private _numberOfDocument: string;

        get surname(): string {
            return this._surname;
        }
        get name(): string {
            return this._name;
        }
        get patronymic(): string {
            return this._patronymic;
        }
        get birthDate(): Date {
            return this._birthDate;
        }
        get typeOfDocument(): Documents {
            return this._typeOfDocument;
        }
        get serialNumber(): string {
            return this._serialNumber;
        }
        get numberOfDocument(): string {
            return this._numberOfDocument;
        }

        set surname(value: string) {
            this._surname = value;
        }
        set name(value: string) {
            this._name = value;
        }
        set patronymic(value: string) {
            this._patronymic = value;
        }
        set birthDate(value: Date) {
            this._birthDate = value;
        }
        set typeOfDocument(value: Documents) {
            this._typeOfDocument = value;
        }
        set serialNumber(value: string) {
            this._serialNumber = value;
        }
        set numberOfDocument(value: string) {
            this._numberOfDocument = value;
        }

        constructor(
            surname: string,
            name: string,
            patronymic: string,
            birthDate: Date,
            typeOfDocument: Documents,
            serialNumber: string,
            numberOfDocument: string
        ) {
            this._surname = surname;
            this._name = name;
            this._patronymic = patronymic;
            this._birthDate = birthDate;
            this._typeOfDocument = typeOfDocument;
            this._serialNumber = serialNumber;
            this._numberOfDocument = numberOfDocument;
        }

        printInformation(): void {
            console.log(this.surname + ' ' + this.name + ' ' + this.patronymic + ' ' + this.birthDate + ' ' +
                this.typeOfDocument + ' ' + this.serialNumber + ' ' + this.numberOfDocument);
        }
    }

    export enum BodyType {
        Sedan = "Седан",
        Coupe = "Купе",
        Hatchback = "Хэтчбэк"
    }

    export enum AutoClass {
        A, B, C, D, E, F, J, M, S
    }

    export interface ICar extends IVehicle {
        bodyType: BodyType;
        autoClass: AutoClass;
    }

    // Создайте декоратор, выполняющий блокировку изменения прототипа
    // класса автомобиль. Необходимо проверить, осталась ли возможность
    // добавления сторонних полей в объект после введения декоратора
    // (проверка работоспособности).

    function sealed(constructor: Function) {
        console.log("sealed decorator");
        Object.seal(constructor);
        Object.seal(constructor.prototype);
    }

    // Реализуйте декоратор метода, выполняющий преобразование
    // возвращаемой строки с некими сведениями об объекте класса
    // Автомобиль, заменяя все буквы на ЗАГЛАВНЫЕ.

    function capitalLetters(target: Object, method: string, descriptor:PropertyDescriptor) {

        let originalMethod = descriptor.value;
        descriptor.value = function () {
            let returnValue = originalMethod.apply(this, []);
            return returnValue.toUpperCase();
        }
    }


    @sealed
    export class Car extends Vehicle implements ICar {
        private _bodyType: BodyType;
        private _autoClass: AutoClass;

        get bodyType(): BodyType {
            return this._bodyType;
        }
        get autoClass(): AutoClass {
            return this._autoClass;
        }

        set bodyType(value: BodyType) {
            this._bodyType = value;
        }
        set autoClass(value: AutoClass) {
            this._autoClass = value;
        }

        constructor(
            brand: string,
            model: string,
            yearOfProduction: number,
            vinNumber: number,
            registeredNumber: number,
            owner: IOwner,
            bodyType: BodyType,
            autoClass: AutoClass
        ) {
            super(brand, model, yearOfProduction, vinNumber, registeredNumber, owner);
            this._bodyType = bodyType;
            this._autoClass = autoClass;
        }

        @capitalLetters
        toString(): string{
            return this.brand + " " + this.model + " " + this.yearOfProduction + " " + this.vinNumber + " " +
            this.registeredNumber + " " + this.bodyType + " " + this.autoClass;
        }

        printInformation(): void {
            console.log(this.toString());
        }
    }

    export interface IMotorbike extends IVehicle {
        frameType: string;
        forSport: boolean;
    }

    export class Motorbike extends Vehicle implements IMotorbike {
        private _frameType: string;
        private _forSport: boolean;

        get frameType(): string {
            return this._frameType;
        }
        get forSport(): boolean {
            return this._forSport;
        }

        set frameType(frameType: string) {
            this._frameType = frameType;
        }
        set forSport(forSport: boolean) {
            this._forSport = forSport;
        }

        constructor(
            brand: string,
            model: string,
            yearOfProduction: number,
            vinNumber: number,
            registeredNumber: number,
            owner: IOwner,
            frameType: string,
            forSport: boolean
        ) {
            super(brand, model, yearOfProduction, vinNumber, registeredNumber, owner);
            this._frameType = frameType;
            this._forSport = forSport;
        }

        printInformation(): void {
            console.log(this.brand + " " + this.model + " " + this.yearOfProduction + " " + this.vinNumber + " " +
                this.registeredNumber + " " + this.frameType + ", For Sport: " + this.forSport);
        }
    }


    export interface IVehicleStorage<T extends IVehicle> {
        dateOfCreation: Date;
        storage: T[];

        getAll: () => T[];
        printAll: () => void;
    }

    export class VehicleStorage<T extends IVehicle> implements IVehicleStorage<T>{
        private readonly _dateOfCreation: Date;
        private _storage: T[];

        get dateOfCreation(): Date {
            return this._dateOfCreation;
        }
        get storage(): T[] {
            return this._storage;
        }

        set storage(value: T[]) {
            this._storage = value;
        }

        constructor(storage: T[]) {
            this._dateOfCreation = new Date();
            this._storage = storage;
        }

        getAll(): T[] {
            return this._storage;
        };

        printAll(): void {
            this._storage.forEach(element => {
                element.printInformation();
            });
        }
    }
}
