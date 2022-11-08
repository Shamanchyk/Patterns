"use strict";
class FirstOrder {
    createHamburger() {
        return new FirstOrderHamburger();
    }
    createPotato() {
        return new FirstOrderPotato();
    }
    createWater() {
        return new FirstOrderWater();
    }
    createResult() {
        return new FirstOrderResult();
    }
}
class SecondOrder {
    createHamburger() {
        return new SecondOrderHamburger();
    }
    createPotato() {
        return new SecondOrderPotato();
    }
    createWater() {
        return new SecondOrderWater();
    }
    createResult() {
        return new SecondOrderResult();
    }
}
class FirstOrderHamburger {
    mcHamburger() {
        return 'Біг Тейсті';
    }
}
class SecondOrderHamburger {
    mcHamburger() {
        return 'Біг Мак';
    }
}
class FirstOrderPotato {
    mcPotato() {
        return 'Велика картопля';
    }
}
class SecondOrderPotato {
    mcPotato() {
        return 'Маленька картопля';
    }
}
class FirstOrderWater {
    mcWater() {
        return 'Coca-cola';
    }
}
class SecondOrderWater {
    mcWater() {
        return 'Pepsi';
    }
}
class FirstOrderResult {
    mcResult(collaborator, collaborator2, collaborator3) {
        const result1 = collaborator.mcHamburger;
        const result2 = collaborator2.mcPotato;
        const result3 = collaborator3.mcWater;
        return `Отже, ваше замовлення: ${result1}, ${result2}, ${result3}.`;
    }
}
class SecondOrderResult {
    mcResult(collaborator, collaborator2, collaborator3) {
        const result1 = collaborator.mcHamburger;
        const result2 = collaborator2.mcPotato;
        const result3 = collaborator3.mcWater;
        return `Отже, ваше замовлення: ${result1}, ${result2}, ${result3}.`;
    }
}
function ClientOrder(factory) {
    const hamburger = factory.createHamburger();
    const potato = factory.createPotato();
    const water = factory.createWater();
    const result = factory.createResult();
    /* console.log(hamburger.mcHamburger());
    console.log(potato.mcPotato());
    console.log(water.mcWater()); */
    console.log(result.mcResult(hamburger, potato, water));
}
ClientOrder(new FirstOrder());
ClientOrder(new SecondOrder());
