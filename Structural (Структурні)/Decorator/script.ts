interface McMenu{

    hamburger(): string;
    potato(): string;
    water(): string;
    iceCream?(): string;

}

class OrderMcMenu implements McMenu{

    public hamburger(): string {
        return 'Чізбургер'
    }

    public potato(): string {
        return 'Велика картопля'
    }

    public water(): string {
        return 'Кава'
    }

    public iceCream(): string {
        return 'Макфлурі'
    }

}

class Decorator implements McMenu{

    protected mcMenu: mcMenu;
    
    constructor(mcMenu: mcMenu) {
        this.mcMenu = mcMenu;
    }

    public hamburger(): string {
        return this.mcMenu.hamburger();
    }

    public potato(): string {
        return this.mcMenu.potato();
    }

    public water(): string {
        return this.mcMenu.water();
    }

    public iceCream(): string {
        return this.mcMenu.iceCream();
    }

}

class FirstOrder extends Decorator {

    public operation(): string {
        return `Отже, ваше замовлення: ${super.hamburger()}, ${super.potato()}, ${super.water()}`;
    }
}

class SecondOrder extends Decorator {

    public operation(): string {
        return `Отже, ваше замовлення: ${super.hamburger()}, ${super.potato()}, ${super.water()}, ${super.iceCream()}`;
    }

}



let myOrder = new OrderMcMenu();
console.log(myOrder)

let myOrder2 = new FirstOrder(myOrder);
console.log(myOrder2.operation())

let myOrder3 = new SecondOrder(myOrder);
console.log(myOrder3.operation());