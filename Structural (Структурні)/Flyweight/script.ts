class Flyweight {
    private sharedState: any;
    constructor(sharedState: any) {
        this.sharedState = sharedState;
    }

    // JSON.stringify()перетворює значення JavaScript на рядок JSON
    public operation(uniqueState: string[]): void {
        const shared = JSON.stringify(this.sharedState);
        const unique = JSON.stringify(uniqueState);
        console.log(`Flyweight:Displaying shared (${shared}) and unique (${unique}) state. `)
    }
}


class McFactory {
    private flyweights: { [key: string]: Flyweight } = <any>{};
    constructor(initialFlyweights: string[][]) {
        for (const state of initialFlyweights) {
            this.flyweights[this.getKey(state)] = new Flyweight(state);
        }
    }

    private getKey(state: string[]): string{
        return state.join('_')
    }

    public getFlyweight(sharedState: string[]): Flyweight {
        const key = this.getKey(sharedState);
        if (!(key in this.flyweights)) {
            console.log('McFactory: Can\'t find a flyweight, creating new one.');
            this.flyweights[key] = new Flyweight(sharedState);
        } else {
            console.log('McFactory: Reusing existing flyweight.');
        }
        return this.flyweights[key];
    }

    // Object.keys повертає масив імен властивостей даного об'єкта
    public listFlyweights(): void {
        const count = Object.keys(this.flyweights).length;
        console.log(`\nMcFactory: I have ${count} flyweights:`);
        for (const key in this.flyweights) {
            console.log(key);
        }
    }
}

const mcFactory = new McFactory([
    ['БігМак', 'Велика картопля', 'Coca-cola'],
    ['Чізбургер', 'Маленька картопля', 'Pepsi'],
    ['БігТейсті','Середня картопля', 'Sprite'],
]);

mcFactory.listFlyweights();

function addToDatabase(mc: McFactory, order: string, ham: string, potato: string,
    water: string) {
    console.log('\nClient: Adding a McMenu to database.');
    const flyweight = mc.getFlyweight([ham, potato, water]);
    flyweight.operation([order]);
}

addToDatabase(mcFactory, '111', 'Макчікен', 'Маленька картопля', 'Pepsi');
addToDatabase(mcFactory, '122', 'Гамбургер', 'Велика картопля', 'Sprite');
addToDatabase(mcFactory, '133', 'Макчікен', 'Маленька картопля', 'Pepsi');

mcFactory.listFlyweights();