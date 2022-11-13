"use strict";
class Bike {
    operation() {
        return 'Сьогодні поїду на тренування на Велосипеді';
    }
}
class Car {
    operation() {
        return 'Сьогодні поїду на тренування на Автомобілі';
    }
}
class Bus {
    operation() {
        return 'Сьогодні поїду на тренування на Автобусі';
    }
}
class Client {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    operationStrategy() {
        return this.strategy.operation();
    }
}
const bike = new Client(new Bike());
const car = new Client(new Car());
const bus = new Client(new Bus());
console.log(bike.operationStrategy());
console.log(car.operationStrategy());
console.log(bus.operationStrategy());
