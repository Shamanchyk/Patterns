"use strict";
class CreateMackMenu {
    someOperation() {
        const mackMenu = this.factoryMethod();
        return `Отже, ваше замовлення: ${mackMenu.hamburger}, ${mackMenu.potato}, ${mackMenu.water}, ${mackMenu.iceCream}.`;
    }
}
class firstMackMenu extends CreateMackMenu {
    factoryMethod() {
        return new firstOrder();
    }
}
class secondMackMenu extends CreateMackMenu {
    factoryMethod() {
        return new secondOrder();
    }
}
class firstOrder {
    hamburger() {
        return 'Один чізбургер';
    }
    potato() {
        return 'велика картопля';
    }
    water() {
        return 'Coca-cola';
    }
}
class secondOrder {
    hamburger() {
        return 'Один бігмак.';
    }
    potato() {
        return 'маленька картопля';
    }
    water() {
        return 'Pepsi';
    }
    iceCream() {
        return `макфлурі`;
    }
}
function clientOrder(creator) {
    console.log(creator.someOperation());
}
clientOrder(new firstMackMenu());
clientOrder(new secondMackMenu());
