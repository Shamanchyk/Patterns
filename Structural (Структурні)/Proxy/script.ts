interface Payment{

    paymentDone(): void;
    paymentNotDone(): void;

}

class ProcessPayment implements Payment{

    public paymentDone(): void {
        console.log('Оплата виконана')
    }

    public paymentNotDone(): void {
        console.log('Оплата не виконана')
    }

}

class ProxyPayment implements Payment{

    private processPayment: ProcessPayment;

    constructor(processPayment: ProcessPayment){
        this.processPayment = processPayment;
    }


    public paymentDone(): void{
        if(this.moneyOnCard()){
            this.processPayment.paymentDone();
        }
    }

    private moneyOnCard(): boolean{

        console.log('На карточці достатньо коштів')

        return true;
    }

    public paymentNotDone(): void {
        this.processPayment.paymentNotDone();
    }

}

function clientCode(payment: Payment) {

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

