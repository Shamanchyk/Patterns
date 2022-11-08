class Market{
    private static instance: Market;

    private constructor(){}

    public static getInstance(): Market{
        if(!Market.instance){
            Market.instance = new Market();
        }

        return Market.instance;
    }
}

    function auditMarket() {

        const audit1 = Market.getInstance();
        const audit2 = Market.getInstance();

        if(audit1===audit2){
            console.log('Market work')
        } else console.log('Market failed')
    }

    auditMarket();
