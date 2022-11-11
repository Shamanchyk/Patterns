interface InMcMenu{
    hamburger(): void;
    potato(): void;
    water(): void;
    iceCream(): void;
}


class McMenu implements InMcMenu{

    public mcMenu: OderMcMenu;

    constructor(){
        this.mcMenu = new OderMcMenu();
    }

    public reset(): void {
        this.mcMenu = new OderMcMenu();
    }

    public hamburger(): void {
        this.mcMenu.parts.push('Гамбургер')
    }

    public potato(): void {
        this.mcMenu.parts.push('Картопля')
    }

    public water(): void {
        this.mcMenu.parts.push('Напій')
    }

    public iceCream(): void {
        this.mcMenu.parts.push('Морозиво')
    }
    
    public getProduct(): OderMcMenu {
        const result = this.mcMenu;
        this.reset();
        return result;
    }
     
}

class OderMcMenu{
    public parts: string[] = [];

    public listParts(): void {
        console.log(`Отже, ваше замовлення: ${this.parts.join(', ')}\n`);
    }
}

class Director {
    private builder: InMcMenu;

    constructor(builder: InMcMenu) {
        this.builder = builder;
    }

    public setBuilder(builder: InMcMenu): void {
        this.builder = builder;
    }

    public buildMinimalViableProduct(): void {
        this.builder.hamburger();
    }

    public buildFullFeaturedProduct(): void {
        this.builder.hamburger();
        this.builder.potato();
        this.builder.water();
    }
}

function clientCode(director: Director) {
    const builder = new McMenu();
    director.setBuilder(builder);

    console.log('Вибрати лише гаммбургер:');
    director.buildMinimalViableProduct();
    builder.getProduct().listParts();

    console.log('Скласти повноцінне МакМеню:');
    director.buildFullFeaturedProduct();
    builder.getProduct().listParts();

    console.log('Складіть МакМеню на свій смак:');
    builder.hamburger();
    builder.iceCream();
    builder.getProduct().listParts();
}

const director = new Director();
console.log(clientCode(director)); 
