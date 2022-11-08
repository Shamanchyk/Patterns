class McMenu{

    public hamburger: string;
    public potato: string;
    public water: string;

    constructor(hamburger: string, potato: string, water: string){
        this.hamburger = hamburger;
        this.potato = potato;
        this.water = water;
    }

    getResult(){
        return new McMenu (this.hamburger, this.potato, this.water)
    }
}

const mcMenu = new McMenu('Чізбургер', 'Велика картопля', 'Coca-cola')

const mcMenu2 = mcMenu.getResult();
mcMenu2.hamburger = 'Біг Тейсті';

const mcMenu3 = mcMenu.getResult();
mcMenu3.potato = 'Маленька картопля';
mcMenu3.water = 'Pepsi';

console.log(mcMenu2);
console.log(mcMenu3);
