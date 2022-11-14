"use strict";
class Faststone {
    scan() {
        console.log('Відсканувати файд...');
    }
    print() {
        console.log('Роздрукувати файл...');
    }
    save() {
        console.log('Зберегти файл...');
    }
}
class ScanCommand {
    constructor(faststone) {
        this.faststone = faststone;
    }
    execute() {
        this.faststone.scan();
    }
}
class PrintCommand {
    constructor(faststone) {
        this.faststone = faststone;
    }
    execute() {
        this.faststone.print();
    }
}
class SaveCommand {
    constructor(faststone) {
        this.faststone = faststone;
    }
    execute() {
        this.faststone.save();
    }
}
class Employee {
    constructor(scan, print, save) {
        this.scan = scan;
        this.print = print;
        this.save = save;
    }
    setScan() {
        this.scan.execute();
    }
    setPrint() {
        this.print.execute();
    }
    setSave() {
        this.save.execute();
    }
}
const faststone = new Faststone();
const employee = new Employee(new ScanCommand(faststone), new PrintCommand(faststone), new SaveCommand(faststone));
employee.setScan();
employee.setPrint();
employee.setSave();
