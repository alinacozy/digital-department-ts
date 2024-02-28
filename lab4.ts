import {Transport} from "./transport";
import IOwner=Transport.IOwner;
import Owner=Transport.Owner;
import IVehicle=Transport.IVehicle;
import Vehicle=Transport.Vehicle;
import ICar=Transport.ICar;
import IMotorbike=Transport.IMotorbike;
import Car=Transport.Car;
import Motorbike=Transport.Motorbike;
import IVehicleStorage=Transport.IVehicleStorage;
import VehicleStorage=Transport.VehicleStorage;
import Documents=Transport.Documents;
import BodyType=Transport.BodyType;
import AutoClass=Transport.AutoClass;

const alina: Owner = new Owner("Королева", "Алина", "Вячеславовна", new Date("2004-07-23"), Documents.Passport, "0000", "000000");
const alinaCar: Car = new Car("Лада", "Малиновая", 2020, 5, 3453, alina, BodyType.Sedan, AutoClass.C);
const alinaMotorbike: Motorbike = new Motorbike("Yamaha", "Быстрая", 2023, 34, 3284, alina, "Хорошая", false);
const alinaVehicle: Vehicle = new Vehicle("BMW", "Велосипед", 2020, 56, 136, alina);


const alinaVehicles: VehicleStorage<Vehicle> = new VehicleStorage([alinaCar, alinaMotorbike, alinaVehicle]);
const alinaCars: VehicleStorage<Car> = new VehicleStorage([alinaCar]);
alinaVehicles.printAll();