"use strict";
class OrderMcMenu {
    constructor() {
        this.selectMcMenu = new SelectMcMenu(this);
        this.payOrder = new PayOrder(this);
        this.waitOrder = new WaitOrder(this);
        this.setState(this.waitOrder);
    }
    setState(state) {
        this.currentState = state;
    }
    getState() {
        return this.currentState;
    }
}
class SelectMcMenu {
    constructor(orderMcMenu) {
        this.orderMcMenu = orderMcMenu;
    }
    mcMenu() {
        console.log('Виберіть McMenu:');
        this.orderMcMenu.setState(this.orderMcMenu.selectMcMenu);
    }
    typePayOrder() { }
    cancelOrder() { }
    saveCheck() { }
    orderCook() { }
    orderDone() { }
}
class PayOrder {
    constructor(orderMcMenu) {
        this.orderMcMenu = orderMcMenu;
    }
    typePayOrder() {
        console.log('Виберіть тип оплати:');
        this.orderMcMenu.setState(this.orderMcMenu.payOrder);
    }
    cancelOrder() {
        console.log('Відминити замовлення:');
        this.orderMcMenu.setState(this.orderMcMenu.payOrder);
    }
    mcMenu() { }
    saveCheck() { }
    orderCook() { }
    orderDone() { }
}
class WaitOrder {
    constructor(orderMcMenu) {
        this.orderMcMenu = orderMcMenu;
    }
    saveCheck() {
        console.log('Дякую за замовлення, зберігайте, будь ласка, чек!');
        this.orderMcMenu.setState(this.orderMcMenu.waitOrder);
    }
    orderCook() {
        console.log('Ваше замовлення готується)');
        this.orderMcMenu.setState(this.orderMcMenu.waitOrder);
    }
    orderDone() {
        console.log('Ваше замовлення готове, покажіть ваш чек.');
        this.orderMcMenu.setState(this.orderMcMenu.waitOrder);
    }
    mcMenu() { }
    typePayOrder() { }
    cancelOrder() { }
}
let orderMcMenu = new OrderMcMenu();
console.log(`Зробіть замовлення: ${orderMcMenu.getState().constructor.name}`);
orderMcMenu.getState().cancelOrder();
console.log(`Зробіть замовлення: ${orderMcMenu.getState().constructor.name}`);
let orderMcMenu2 = new OrderMcMenu();
console.log(`New Зробіть замовлення: ${orderMcMenu2.getState().constructor.name}`);
orderMcMenu2.getState().mcMenu();
orderMcMenu2.getState().typePayOrder();
orderMcMenu2.getState().saveCheck();
orderMcMenu2.getState().orderCook();
orderMcMenu2.getState().orderDone();
