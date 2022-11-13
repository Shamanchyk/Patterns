"use strict";
class Handler {
    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }
    handle(request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    }
}
class KFC extends Handler {
    handle(request) {
        if (request === 'Гострі крильця') {
            return `KFC: у нас є ${request}, вони чудові.`;
        }
        return super.handle(request);
    }
}
class McDonalds extends Handler {
    handle(request) {
        if (request === 'Макфлурі') {
            return `McDonalds: у нас є ${request}, воно прекрасне.`;
        }
        return super.handle(request);
    }
}
class ChickenHut extends Handler {
    handle(request) {
        if (request === 'Шаурма з криветками') {
            return `ChickenHut: у нас є ${request}, вона дуже смачна.`;
        }
        return super.handle(request);
    }
}
function clientCode(handler) {
    const tasks = ['Гострі крильця', 'Макфлурі', 'Шаурма з криветками'];
    for (const task of tasks) {
        console.log(`Client: У вас є ${task}?`);
        const result = handler.handle(task);
        if (result) {
            console.log(`  ${result}`);
        }
        else {
            console.log(`  ${task} was left untouched.`);
        }
    }
}
const mcDonalds = new McDonalds();
const kfc = new KFC();
const chickenHut = new ChickenHut();
kfc.setNext(mcDonalds).setNext(chickenHut);
console.log('Chain: KFC > McDonalds > ChickenHut\n');
clientCode(kfc);
