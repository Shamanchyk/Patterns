"use strict";
class McMenu {
    constructor() {
        this.reset();
    }
    reset() {
        this.mcMenu = new OderMcMenu();
    }
    hamburger() {
        this.mcMenu.parts.push('Гамбургер');
    }
    potato() {
        this.mcMenu.parts.push('Картопля');
    }
    water() {
        this.mcMenu.parts.push('Напій');
    }
    iceCream() {
        this.mcMenu.parts.push('Морозиво');
    }
    getProduct() {
        const result = this.mcMenu;
        this.reset();
        return result;
    }
}
class OderMcMenu {
    constructor() {
        this.parts = [];
    }
    listParts() {
        console.log(`Отже, ваше замовлення: ${this.parts.join(', ')}\n`);
    }
}
class Director {
    setBuilder(builder) {
        this.builder = builder;
    }
    buildMinimalViableProduct() {
        this.builder.hamburger();
    }
    buildFullFeaturedProduct() {
        this.builder.hamburger();
        this.builder.potato();
        this.builder.water();
    }
}
function clientCode(director) {
    const builder = new McMenu();
    director.setBuilder(builder);
    console.log('Вибрати лише гаммбургер:');
    director.buildMinimalViableProduct();
    builder.getProduct().listParts();
    console.log('Скласти повноцінне МакМеню:');
    director.buildFullFeaturedProduct();
    builder.getProduct().listParts();
    console.log('Складіть МакМеню на свій смак:');
    builder.hamburger();
    builder.iceCream();
    builder.getProduct().listParts();
}
const director = new Director();
console.log(clientCode(director));
