"use strict";
class PaymentCash {
    operationPaymentMethod() {
        return 'Розрахунок готівкою';
    }
}
class PaymentCard {
    operationPaymentMethod() {
        return 'Розрахунок карткою';
    }
}
class DeliveryMethod {
    constructor(paymentMethod) {
        this.paymentMethod = paymentMethod;
    }
    operationDeliveryMethod() {
        const result = this.paymentMethod.operationPaymentMethod();
        return `${result}`;
    }
}
class NovaPoshta extends DeliveryMethod {
    operationDeliveryMethod() {
        const result = this.paymentMethod.operationPaymentMethod();
        return `Нова пошта: ${result}`;
    }
}
class UkrPoshta extends DeliveryMethod {
    operationDeliveryMethod() {
        const result = this.paymentMethod.operationPaymentMethod();
        return `Укр пошта: ${result}`;
    }
}
function clientCode(deliveryMethod) {
    console.log(deliveryMethod.operationDeliveryMethod());
}
let paymentCash = new PaymentCash();
let deliveryMethod = new NovaPoshta(paymentCash);
clientCode(deliveryMethod);
console.log('');
paymentCash = new PaymentCard();
deliveryMethod = new UkrPoshta(paymentCash);
clientCode(deliveryMethod);
