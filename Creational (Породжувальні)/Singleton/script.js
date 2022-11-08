"use strict";
class Market {
    constructor() { }
    static getInstance() {
        if (!Market.instance) {
            Market.instance = new Market();
        }
        return Market.instance;
    }
}
function auditMarket() {
    const audit1 = Market.getInstance();
    const audit2 = Market.getInstance();
    if (audit1 === audit2) {
        console.log('Market work');
    }
    else
        console.log('Market failed');
}
auditMarket();
