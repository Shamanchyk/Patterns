"use strict";
class Account {
    constructor(balance) {
        this.name = '';
        this.balance = balance;
    }
    pay(orderPrice) {
        if (this.canPay(orderPrice)) {
            console.log(`Paid ${orderPrice} using ${this.name}`);
        }
        else if (this.incomer) {
            console.log(`Cannot pay using ${this.name}`);
            this.incomer.pay(orderPrice);
        }
        else {
            console.log('Unfortunately, not enough money');
        }
    }
    canPay(amount) {
        return this.balance >= amount;
    }
    setNext(account) {
        this.incomer = account;
    }
}
;
class MasterCard extends Account {
    constructor(balance) {
        super(balance);
        this.name = 'MasterCard';
        this.balance = balance;
    }
}
;
class Visa extends Account {
    constructor(balance) {
        super(balance);
        this.name = 'Visa';
        this.balance = balance;
    }
}
;
class ApplePay extends Account {
    constructor(balance) {
        super(balance);
        this.name = 'ApplePay';
        this.balance = balance;
    }
}
;
const masterCard = new MasterCard(50);
const visa = new Visa(100);
const applePay = new ApplePay(150);
masterCard.setNext(visa);
visa.setNext(applePay);
masterCard.pay(80);
