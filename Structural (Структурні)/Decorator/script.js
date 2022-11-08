"use strict";
class OrderMcMenu {
    hamburger() {
        return 'Чізбургер';
    }
    potato() {
        return 'Велика картопля';
    }
    water() {
        return 'Кава';
    }
    iceCream() {
        return 'Макфлурі';
    }
}
class Decorator {
    constructor(mcMenu) {
        this.mcMenu = mcMenu;
    }
    hamburger() {
        return this.mcMenu.hamburger();
    }
    potato() {
        return this.mcMenu.potato();
    }
    water() {
        return this.mcMenu.water();
    }
    iceCream() {
        return this.mcMenu.iceCream();
    }
}
class FirstOrder extends Decorator {
    operation() {
        return `Отже, ваше замовлення: ${super.hamburger()}, ${super.potato()}, ${super.water()}`;
    }
}
class SecondOrder extends Decorator {
    operation() {
        return `Отже, ваше замовлення: ${super.hamburger()}, ${super.potato()}, ${super.water()}, ${super.iceCream()}`;
    }
}
let myOrder = new OrderMcMenu();
console.log(myOrder);
let myOrder2 = new FirstOrder(myOrder);
console.log(myOrder2.operation());
let myOrder3 = new SecondOrder(myOrder);
console.log(myOrder3.operation());
