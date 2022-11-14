"use strict";
class ProfileInstagram {
    constructor() {
        this.observers = [];
    }
    subscribe(observer) {
        console.log('Instagram: На вас підписався користувач...');
        this.observers.push(observer);
    }
    unSubscribe(observer) {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Instagram: Від вас відписався користувач...');
        }
        this.observers.splice(observerIndex, 1);
        console.log('Instagram: Ви втратили одного підписника.');
    }
    notify() {
        console.log('Instagram: Вам написав ваш підписник...');
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
    newMessage() {
        console.log('Instagram: Ви маєте не прочитане повідомлення.');
        this.notify();
    }
}
class ConcreteObserver1 {
    update(instagram) {
        console.log('ConcreteSubscriber1: Сподобалось ваше Reels.');
    }
}
class ConcreteObserver2 {
    update(instagram) {
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
