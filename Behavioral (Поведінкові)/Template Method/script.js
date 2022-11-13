"use strict";
class Taxi {
    templateMethod() {
        this.departurePoint();
        this.deliveryPoint();
        this.hook1();
        this.paymentMethod();
        this.driverSearch();
        this.yourCar();
    }
    departurePoint() {
        console.log('Виберіть пункт відправлення.');
    }
    deliveryPoint() {
        console.log('Виберіть пункт доставлення.');
    }
    hook1() { }
}
class Uklon extends Taxi {
    paymentMethod() {
        console.log('Uklon: Виберіть спосіб оплати.');
    }
    driverSearch() {
        console.log('Uklon: Пошук водія вже відбувся.');
    }
    yourCar() {
        console.log('Uklon: Ваш автомобіль.');
    }
}
class Bolt extends Taxi {
    paymentMethod() {
        console.log('Bolt: Виберіть спосіб оплати.');
    }
    driverSearch() {
        console.log('Bolt: Пошук водія вже відбувся.');
    }
    yourCar() {
        console.log('Bolt: Ваш автомобіль.');
    }
}
function executeTemplateMethod(abstractClass) {
    abstractClass.templateMethod();
}
console.log('Якщо вам потрібне швидке таксі, заповнюйте ці дані:');
executeTemplateMethod(new Uklon());
console.log('');
console.log('Якщо вам потрібне швидке таксі, заповнюйте ці дані:');
executeTemplateMethod(new Bolt());
