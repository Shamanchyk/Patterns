"use strict";
class Originator {
    constructor(hash) {
        this.hash = hash;
        console.log(`Originator: My original hash is: ${hash}`);
    }
    generateHash() {
        console.log('Originator: Generating new hash...');
        this.hash = this.generateRandomString(30);
        console.log(`Originator: hash has changed to: ${this.hash}`);
    }
    generateRandomString(length = 10) {
        const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return Array
            .apply(null, { length })
            .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
            .join('');
    }
    save() {
        return new ConcreteMemento(this.hash);
    }
    restore(memento) {
        this.hash = memento.getHash();
        console.log(`Originator: hash has changed to: ${this.hash}`);
    }
}
class ConcreteMemento {
    constructor(state) {
        this.hash = state;
        this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    }
    getHash() {
        return this.hash;
    }
    getName() {
        return `${this.date}_${this.hash}`;
    }
    getDate() {
        return this.date;
    }
}
class Caretaker {
    constructor(originator) {
        this.mementos = [];
        this.originator = originator;
    }
    backup() {
        console.log('\nCaretaker: Saving Originator\'s state...');
        this.mementos.push(this.originator.save());
    }
    undo() {
        if (!this.mementos.length) {
            return;
        }
        const memento = this.mementos.pop();
        console.log(`Caretaker: Restoring state to: ${memento.getName()}`);
        this.originator.restore(memento);
    }
    showHistory() {
        console.log('Caretaker: Here\'s the list of mementos:');
        for (const memento of this.mementos) {
            console.log(memento.getName());
        }
    }
}
const originator = new Originator('First hash');
const caretaker = new Caretaker(originator);
caretaker.backup();
originator.generateHash();
caretaker.backup();
originator.generateHash();
caretaker.backup();
originator.generateHash();
console.log('');
caretaker.showHistory();
console.log('\nClient: Now, let\'s rollback!\n');
caretaker.undo();
console.log('\nClient: Once more!\n');
caretaker.undo();
