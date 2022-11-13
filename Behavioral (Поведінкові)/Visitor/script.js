"use strict";
class McDonalds {
    restaurant(visitor) {
        visitor.visitMcDonalds(this);
    }
    restaurantMcDonalds() {
        return 'Ваше замовлення в McDonalds:';
    }
}
class KFC {
    restaurant(visitor) {
        visitor.visitKFC(this);
    }
    restaurantKFC() {
        return 'Ваше замовлення в KFC:';
    }
}
class OrderFirst {
    visitMcDonalds(mcDonalds) {
        console.log(`${mcDonalds.restaurantMcDonalds()} БігМак меню.`);
    }
    visitKFC(kFC) {
        console.log(`${kFC.restaurantKFC()} пекучі крильця.`);
    }
}
class OrderSecond {
    visitMcDonalds(mcDonalds) {
        console.log(`${mcDonalds.restaurantMcDonalds()} БігТейсті меню.`);
    }
    visitKFC(kFC) { }
}
function clientCode(components, visitor) {
    for (const component of components) {
        component.restaurant(visitor);
    }
}
const components = [
    new McDonalds(),
    new KFC(),
];
const visitor1 = new OrderFirst();
clientCode(components, visitor1);
console.log('');
const visitor2 = new OrderSecond();
clientCode(components, visitor2);
