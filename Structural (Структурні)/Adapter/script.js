"use strict";
class Uah {
    cashUah() {
        return 'Маємо гривні';
    }
}
class Dollar {
    cashDollar() {
        return 'Хочемо отримати долари';
    }
}
class Convector extends Uah {
    constructor(dollar) {
        super();
        this.dollar = dollar;
    }
    cashUah() {
        this.dollar.cashDollar();
        return 'Конвертуємо гривні в долари';
    }
}
const dollar = new Dollar();
const adapter = new Convector(dollar);
console.log(adapter.cashUah());
