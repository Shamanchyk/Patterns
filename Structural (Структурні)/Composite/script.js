"use strict";
class McMenu {
    setParent(parent) {
        this.parent = parent;
    }
    getParent() {
        return this.parent;
    }
    add(component) { }
    remove(component) { }
    isComposite() {
        return false;
    }
}
class Hamburger extends McMenu {
    operation() {
        return 'Hamburger';
    }
}
class Potato extends McMenu {
    operation() {
        return 'Big potato';
    }
}
class Water extends McMenu {
    operation() {
        return 'Coca-cola';
    }
}
class Composite extends McMenu {
    constructor() {
        super(...arguments);
        this.children = [];
    }
    add(component) {
        this.children.push(component);
        component.setParent(this);
    }
    remove(component) {
        const componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1);
        component.setParent(null);
    }
    isComposite() {
        return true;
    }
    operation() {
        const results = [];
        for (const child of this.children) {
            results.push(child.operation());
        }
        return `Order (${results.join(' and ')})`;
    }
}
function clientCode(component) {
    console.log(`RESULT: ${component.operation()}`);
}
const mcMenu = new Composite();
mcMenu.add(new Hamburger());
const mcMenu2 = new Composite();
mcMenu2.add(new Hamburger());
mcMenu2.add(new Potato());
const mcMenu3 = new Composite();
mcMenu3.add(new Hamburger());
mcMenu3.add(new Water());
mcMenu.add(mcMenu2);
mcMenu.add(mcMenu3);
console.log(clientCode(mcMenu));
