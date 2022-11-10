interface PaymentMethod{

        operationPaymentMethod(): string;

}

class PaymentCash implements PaymentMethod{

    public operationPaymentMethod(): string {
        return 'Розрахунок готівкою'
    }

}

class PaymentCard implements PaymentMethod{

    public operationPaymentMethod(): string {
        return 'Розрахунок карткою'
    }

}

class DeliveryMethod{

    protected paymentMethod: PaymentMethod;

    constructor(paymentMethod: PaymentMethod){
        this.paymentMethod = paymentMethod;
    }

    public operationDeliveryMethod(): string{
        const result = this.paymentMethod.operationPaymentMethod();
        return `${result}`
    }

}

class NovaPoshta extends DeliveryMethod{
    public operationDeliveryMethod(): string{
        const result = this.paymentMethod.operationPaymentMethod();
        return `Нова пошта: ${result}`
    }
}

class UkrPoshta extends DeliveryMethod{
    public operationDeliveryMethod(): string{
        const result = this.paymentMethod.operationPaymentMethod();
        return `Укр пошта: ${result}`
    }
}

function clientCode(deliveryMethod: DeliveryMethod) {

    console.log(deliveryMethod.operationDeliveryMethod());

}

let paymentCash = new PaymentCash();
let deliveryMethod = new NovaPoshta(paymentCash);
clientCode(deliveryMethod)

console.log('')

paymentCash = new PaymentCard();
deliveryMethod = new UkrPoshta(paymentCash);
clientCode(deliveryMethod)