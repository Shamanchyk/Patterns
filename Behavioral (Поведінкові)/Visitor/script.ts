interface Restaurant {
    restaurant(visitor: Visitor): void;
}

class McDonalds implements Restaurant {
    public restaurant(visitor: Visitor): void {
        visitor.visitMcDonalds(this);
    }
    public restaurantMcDonalds(): string {
        return 'Ваше замовлення в McDonalds:';
    }
}
class KFC implements Restaurant {
    public restaurant(visitor: Visitor): void {
        visitor.visitKFC(this);
    }
    public restaurantKFC(): string {
        return 'Ваше замовлення в KFC:';
    }
}

interface Visitor {
    visitMcDonalds(mcDonalds: McDonalds): void;
    visitKFC(kFC: KFC): void;
}

class OrderFirst implements Visitor {
    public visitMcDonalds(mcDonalds: McDonalds): void {
        console.log(`${mcDonalds.restaurantMcDonalds()} БігМак меню.`);
    }
    public visitKFC(kFC: KFC): void {
        console.log(`${kFC.restaurantKFC()} пекучі крильця.`);
    }
}

class OrderSecond implements Visitor {
    public visitMcDonalds(mcDonalds: McDonalds): void {
        console.log(`${mcDonalds.restaurantMcDonalds()} БігТейсті меню.`);
    }
    public visitKFC(kFC: KFC): void { }
}


function clientCode(components: Restaurant[], visitor: Visitor) {
    for (const component of components) {
        component.restaurant(visitor);
    }
}

const components = [
    new McDonalds(),
    new KFC(),
];

const visitor1 = new OrderFirst();
clientCode(components, visitor1);
console.log('');

const visitor2 = new OrderSecond();
clientCode(components, visitor2);