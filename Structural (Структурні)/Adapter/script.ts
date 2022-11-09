class Uah{
    public cashUah(): string{
        return 'Маємо гривні'
    }
}

class Dollar{
    public cashDollar(): string{
        return 'Хочемо отримати долари'
    }
}

class Convector extends Uah{

    private dollar: Dollar;

    constructor(dollar: Dollar) {
        super();
        this.dollar = dollar;
    }

    public cashUah(): string {
        this.dollar.cashDollar();
        return 'Конвертуємо гривні в долари'
    }

}

const dollar = new Dollar();
const adapter = new Convector(dollar);

console.log(adapter.cashUah())
