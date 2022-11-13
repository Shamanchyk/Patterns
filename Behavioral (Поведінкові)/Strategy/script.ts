interface Strategy{
    operation(): string;
}

class Bike implements Strategy{
    operation(): string {
        return 'Сьогодні поїду на тренування на Велосипеді'
    }
}

class Car implements Strategy{
    operation(): string {
        return 'Сьогодні поїду на тренування на Автомобілі'
    }
}

class Bus implements Strategy{
    operation(): string {
        return 'Сьогодні поїду на тренування на Автобусі'
    }
}

class Client {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }
    public operationStrategy() {
        return this.strategy.operation();
    }
}


const bike = new Client(new Bike());
const car = new Client(new Car());
const bus = new Client(new Bus());

console.log(bike.operationStrategy());
console.log(car.operationStrategy());
console.log(bus.operationStrategy());