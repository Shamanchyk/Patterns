interface AbstractMcMenu{

    createHamburger(): AbstractHamburger;
    createPotato(): AbstractPotato;
    createWater(): AbstractWater;
    createResult(): AbstractResult;

}

class FirstOrder implements AbstractMcMenu{
    public createHamburger(): AbstractHamburger {
        return new FirstOrderHamburger();
    }

    public createPotato(): AbstractPotato{
        return new FirstOrderPotato();
    }

    public createWater(): AbstractWater{
        return new FirstOrderWater();
    }

    public createResult(): AbstractResult {
        return new FirstOrderResult();
    }
}

class SecondOrder implements AbstractMcMenu{
    public createHamburger(): AbstractHamburger {
        return new SecondOrderHamburger();
    }

    public createPotato(): AbstractPotato{
        return new SecondOrderPotato();
    }

    public createWater(): AbstractWater{
        return new SecondOrderWater();
    }

    public createResult(): AbstractResult {
        return new SecondOrderResult();
    }
}


interface AbstractHamburger{
    mcHamburger(): string;
}

interface AbstractPotato{
    mcPotato(): string;
}

interface AbstractWater{
    mcWater(): string;
}
interface AbstractResult{
    mcResult(collaborator: AbstractHamburger, collaborator2: AbstractPotato, collaborator3: AbstractWater): string;
}


class FirstOrderHamburger implements AbstractHamburger{
    public mcHamburger(): string {
        return 'Біг Тейсті'
    }
}

class SecondOrderHamburger implements AbstractHamburger{
    public mcHamburger(): string {
        return 'Біг Мак'
    }
}

class FirstOrderPotato implements AbstractPotato{
    public mcPotato(): string {
        return 'Велика картопля'
    }
}

class SecondOrderPotato implements AbstractPotato{
    public mcPotato(): string {
        return 'Маленька картопля'
    }
}

class FirstOrderWater implements AbstractWater{
    public mcWater(): string {
        return 'Coca-cola'
    }
}

class SecondOrderWater implements AbstractWater{
    public mcWater(): string {
        return 'Pepsi'
    }
}

class FirstOrderResult implements AbstractResult{
    public mcResult(collaborator: AbstractHamburger, collaborator2: AbstractPotato, collaborator3: AbstractWater): string {

        const result1 = collaborator.mcHamburger;
        const result2 = collaborator2.mcPotato;
        const result3 = collaborator3.mcWater;

        return `Отже, ваше замовлення: ${result1}, ${result2}, ${result3}.`
    }
}

class SecondOrderResult implements AbstractResult{
    public mcResult(collaborator: AbstractHamburger, collaborator2: AbstractPotato, collaborator3: AbstractWater): string {

        const result1 = collaborator.mcHamburger;
        const result2 = collaborator2.mcPotato;
        const result3 = collaborator3.mcWater;

        return `Отже, ваше замовлення: ${result1}, ${result2}, ${result3}.`
    }
}

function ClientOrder(factory: AbstractMcMenu){
    const hamburger = factory.createHamburger();
    const potato = factory.createPotato();
    const water = factory.createWater();
    const result = factory.createResult();

    /* console.log(hamburger.mcHamburger());
    console.log(potato.mcPotato());
    console.log(water.mcWater()); */
    console.log(result.mcResult(hamburger, potato, water))
}

ClientOrder(new FirstOrder());
ClientOrder(new SecondOrder());



