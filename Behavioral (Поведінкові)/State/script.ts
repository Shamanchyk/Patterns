interface State{
    orderMcMenu: OrderMcMenu;
    mcMenu(): void;
    typePayOrder(): void;
    cancelOrder(): void;
    saveCheck(): void;
    orderCook(): void;
    orderDone(): void;
}

class OrderMcMenu{
    public selectMcMenu: State;
    public payOrder: State;
    public waitOrder: State;
    public currentState!: State;
    
    public constructor(){
        this.selectMcMenu = new SelectMcMenu(this);
        this.payOrder = new PayOrder(this);
        this.waitOrder = new WaitOrder(this);
        this.setState(this.waitOrder);
    }

    public setState(state: State) {
        this.currentState = state;
    }
    public getState(): State {
        return this.currentState;
    }
}

class SelectMcMenu implements State{
    orderMcMenu: OrderMcMenu;
    
    constructor(orderMcMenu: OrderMcMenu) {
        this.orderMcMenu = orderMcMenu;
    }

    public mcMenu(): void {
        console.log('Виберіть McMenu:')
        this.orderMcMenu.setState(this.orderMcMenu.selectMcMenu);
    }

    typePayOrder(): void{ }
    cancelOrder(): void{ }
    saveCheck(): void{ }
    orderCook(): void{ }
    orderDone(): void{ }
}

class PayOrder implements State{
    orderMcMenu: OrderMcMenu;
    
    constructor(orderMcMenu: OrderMcMenu) {
        this.orderMcMenu = orderMcMenu;
    }

    typePayOrder(): void{
        console.log('Виберіть тип оплати:')
        this.orderMcMenu.setState(this.orderMcMenu.payOrder);
    }
    cancelOrder(): void{
        console.log('Відминити замовлення:')
        this.orderMcMenu.setState(this.orderMcMenu.payOrder);
    }
    mcMenu(): void {}
    saveCheck(): void{}
    orderCook(): void{}
    orderDone(): void{}
}

class WaitOrder implements State{
    orderMcMenu: OrderMcMenu;
    
    constructor(orderMcMenu: OrderMcMenu) {
        this.orderMcMenu = orderMcMenu;
    }

    saveCheck(): void{
        console.log('Дякую за замовлення, зберігайте, будь ласка, чек!')
        this.orderMcMenu.setState(this.orderMcMenu.waitOrder);
    }
    orderCook(): void{
        console.log('Ваше замовлення готується)')
        this.orderMcMenu.setState(this.orderMcMenu.waitOrder);
    }
    orderDone(): void{
        console.log('Ваше замовлення готове, покажіть ваш чек.')
        this.orderMcMenu.setState(this.orderMcMenu.waitOrder);
    }

    mcMenu(): void {}
    typePayOrder(): void{}
    cancelOrder(): void{}
}
    

let orderMcMenu = new OrderMcMenu();
console.log(`Зробіть замовлення: ${<any> orderMcMenu.getState().constructor.name}`);
orderMcMenu.getState().cancelOrder();
console.log(`Зробіть замовлення: ${<any> orderMcMenu.getState().constructor.name}`);
let orderMcMenu2 = new OrderMcMenu();
console.log(`New Зробіть замовлення: ${<any> orderMcMenu2.getState().constructor.name}`);
orderMcMenu2.getState().mcMenu();
orderMcMenu2.getState().typePayOrder();
orderMcMenu2.getState().saveCheck();
orderMcMenu2.getState().orderCook();
orderMcMenu2.getState().orderDone();