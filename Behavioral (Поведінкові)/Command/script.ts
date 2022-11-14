class Faststone {
    scan(): void {
        console.log('Відсканувати файд...')
    }
    print(): void {
        console.log('Роздрукувати файл...')
    }
    save(): void {
        console.log('Зберегти файл...')
    }
}


interface Command {
    execute(): void;
}

class ScanCommand implements Command {
    public faststone: Faststone;
    constructor(faststone: Faststone) {
        this.faststone = faststone;
    }
    execute(): void {
        this.faststone.scan();
    }
}

class PrintCommand implements Command {
    public faststone: Faststone;
    constructor(faststone: Faststone) {
        this.faststone = faststone;
    }
    execute(): void {
        this.faststone.print();
    }
}

class SaveCommand implements Command {
    public faststone: Faststone;
    constructor(faststone: Faststone) {
        this.faststone = faststone;
    }
    execute(): void {
        this.faststone.save();
    }
}



class Employee {
    public scan: Command;
    public print: Command;
    public save: Command;
    constructor (scan: Command,print: Command,save: Command) {
        this.scan = scan;
        this.print = print;
        this.save = save;
    }

    setScan(): void {
        this.scan.execute();
    }
    setPrint(): void {
        this.print.execute();
    }
    setSave(): void {
        this.save.execute();
    }

}

const faststone: Faststone = new Faststone();
const employee: Employee = new Employee(
    new ScanCommand(faststone),
    new PrintCommand(faststone),
    new SaveCommand(faststone)
);
employee.setScan();
employee.setPrint();
employee.setSave();