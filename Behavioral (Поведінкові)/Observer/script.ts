interface Instagram {
    subscribe(observer: Observer): void;
    unSubscribe(observer: Observer): void;
    notify(): void;
}
class ProfileInstagram implements Instagram {
    private observers: Observer[] = [];

    public subscribe(observer: Observer): void {
        console.log('Instagram: На вас підписався користувач...');
        this.observers.push(observer);
    }
    public unSubscribe(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Instagram: Від вас відписався користувач...');
        }

        this.observers.splice(observerIndex, 1);
        console.log('Instagram: Ви втратили одного підписника.');
    }
    public notify(): void {
        console.log('Instagram: Вам написав ваш підписник...');
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
    public newMessage(): void {
        console.log('Instagram: Ви маєте не прочитане повідомлення.');
        this.notify();
    }
}

interface Observer  {
    update(instagram: Instagram): void;
}
class ConcreteObserver1 implements Observer  {
    public update(instagram: Instagram): void {
            console.log('ConcreteSubscriber1: Сподобалось ваше Reels.');
    }
}

class ConcreteObserver2 implements Observer  {
    public update(instagram: Instagram): void {
            console.log('ConcreteSubscriber2: Сподобалось ваше Reels.');
    }
}

const instagram = new ProfileInstagram();

const subscriber1 = new ConcreteObserver1();
instagram.subscribe(subscriber1);

const subscriber2 = new ConcreteObserver1();
instagram.subscribe(subscriber2);

instagram.newMessage();

instagram.unSubscribe(subscriber2);