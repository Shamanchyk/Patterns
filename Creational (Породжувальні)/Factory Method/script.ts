abstract class CreateMcMenu{

    public abstract factoryMethod(): McMenu;

    public someOperation(): string{
        const mackMenu = this.factoryMethod();
        return `Отже, ваше замовлення: ${mackMenu.hamburger}, ${mackMenu.potato}, ${mackMenu.water}, ${mackMenu.iceCream}.`
    }
}

    class firstMackMenu extends CreateMcMenu{
        public factoryMethod(): McMenu {
            return new firstOrder();
        }
    }

    class secondMackMenu extends CreateMcMenu{
        public factoryMethod(): McMenu {
            return new secondOrder();
        }
    }

    interface McMenu{
        hamburger(): string;
        potato(): string;
        water(): string;
        iceCream?(): string;
    }

    class firstOrder implements McMenu{
        hamburger(): string{
            return 'Один чізбургер'
        }
        potato(): string{
            return 'велика картопля'
        }
        water(): string{
            return 'Coca-cola'
        }
    }

    class secondOrder implements McMenu{
        hamburger(): string{
            return 'Один бігмак.'
        }
        potato(): string{
            return 'маленька картопля'
        }
        water(): string{
            return 'Pepsi'
        }
        iceCream(): string{
            return `макфлурі`
        }
    }

    function clientOrder(creator: CreateMcMenu){
        console.log(creator.someOperation())
    }

    clientOrder(new firstMackMenu());
    clientOrder(new secondMackMenu());
