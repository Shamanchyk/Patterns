abstract class McMenu{
    protected parent!: McMenu | null;

    public setParent(parent: McMenu | null) {
        this.parent = parent;
    }

    public getParent(): McMenu | null {
        return this.parent;
    }

    public add(component: McMenu): void { }

    public remove(component: McMenu): void { }

    public isComposite(): boolean {
        return false;
    }

    public abstract operation(): string;

}

class Hamburger extends McMenu{
    public operation(): string {
        return 'Hamburger'
    }
}

class Potato extends McMenu{
    public operation(): string {
        return 'Big potato'
    }
}

class Water extends McMenu{
    public operation(): string {
        return 'Coca-cola'
    }
}

class Composite extends McMenu {
    protected children: McMenu[] = [];

    public add(component: McMenu): void {
        this.children.push(component);
        component.setParent(this);
    }

    public remove(component: McMenu): void {
        const componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1);

        component.setParent(null);
    }

    public isComposite(): boolean {
        return true;
    }

    public operation(): string {
        const results = [];
        for (const child of this.children) {
            results.push(child.operation());
        }

        return `Order (${results.join(' and ')})`;
    }
}

function clientCode(component: McMenu) {

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

console.log(clientCode(mcMenu))