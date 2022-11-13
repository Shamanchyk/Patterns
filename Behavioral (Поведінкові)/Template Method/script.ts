abstract class Taxi {
    public templateMethod(): void {
        this.departurePoint();
        this.deliveryPoint();
        this.hook1();
        this.paymentMethod();
        this.driverSearch();
        this.yourCar();
    }
    protected departurePoint(): void {
        console.log('Виберіть пункт відправлення.');
    }
    protected deliveryPoint(): void {
        console.log('Виберіть пункт доставлення.');
    }

    protected abstract paymentMethod(): void;
    protected abstract driverSearch(): void;
    protected abstract yourCar(): void;

    protected hook1(): void { }

}

class Uklon extends Taxi{

    protected paymentMethod(): void {
        console.log('Uklon: Виберіть спосіб оплати.')
    }

    protected driverSearch(): void {
        console.log('Uklon: Пошук водія вже відбувся.')
    }

    protected yourCar(): void {
        console.log('Uklon: Ваш автомобіль.')
    }

}

class Bolt extends Taxi{

    protected paymentMethod(): void {
        console.log('Bolt: Виберіть спосіб оплати.')
    }

    protected driverSearch(): void {
        console.log('Bolt: Пошук водія вже відбувся.')
    }

    protected yourCar(): void {
        console.log('Bolt: Ваш автомобіль.')
    }

}

function executeTemplateMethod(abstractClass: Taxi) {
    abstractClass.templateMethod();
}
console.log('Якщо вам потрібне швидке таксі, заповнюйте ці дані:');
executeTemplateMethod(new Uklon());
console.log('');
console.log('Якщо вам потрібне швидке таксі, заповнюйте ці дані:');
executeTemplateMethod(new Bolt());