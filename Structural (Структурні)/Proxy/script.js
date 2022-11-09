"use strict";
class ProcessPayment {
    paymentDone() {
        console.log('Оплата виконана');
    }
    paymentNotDone() {
        console.log('Оплата не виконана');
    }
}
class ProxyPayment {
    constructor(processPayment) {
        this.processPayment = processPayment;
    }
    paymentDone() {
        if (this.moneyOnCard()) {
            this.processPayment.paymentDone();
        }
    }
    moneyOnCard() {
        console.log('На карточці достатньо коштів');
        return true;
    }
    paymentNotDone() {
        this.processPayment.paymentNotDone();
    }
}
function clientCode(payment) {
    payment.paymentDone();
    payment.paymentNotDone();
}
console.log('Оплата напряму:');
const processPayment = new ProcessPayment();
clientCode(processPayment);
console.log('');
console.log('Оплата через клас ProxyPayment:');
const proxyPayment = new ProxyPayment(processPayment);
clientCode(proxyPayment);
