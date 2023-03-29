export class Animal {
    name;
    age;
    specie;
    constructor(name, age, specie) {
        this.name = name;
        this.age = age;
        this.specie = specie;
    }
    getInfo() {
        const { name, age, specie } = this;
        return {
            name,
            age,
            specie
        };
    }
}
export class Mammal extends Animal {
    hasFur;
    constructor(name, age, specie, hasFur) {
        super(name, age, specie);
        this.hasFur = hasFur;
    }
    getInfo() {
        const { name, age, specie } = super.getInfo();
        return {
            name,
            age,
            specie,
            hasFur: this.hasFur
        };
    }
}
export class Dog extends Mammal {
    breed;
    constructor(name, age, specie, hasFur) {
        super(name, age, specie, hasFur);
        this.specie = 'dog';
        this.breed = specie;
    }
    getInfo() {
        const { name, age, specie, hasFur } = super.getInfo();
        return {
            name,
            age,
            specie,
            hasFur,
            breed: this.breed
        };
    }
    bark() {
        return 'woof!';
    }
}
