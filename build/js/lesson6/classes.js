"use strict";
//CLASSES
//inside classes properties and methods are called 'members'
class Coder {
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Dave = new Coder('Dave', 'Rock', 42);
console.log(Dave.getAge());
// console.log(Dave.age)
// console.log(Dave.lang)
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev('Mac', 'Sara', 'LoFi', 25);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy', 'Les Paul');
console.log(Page.play('strums'));
////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Tony = new Peeps('Tony');
const Tina = new Peeps('Tina');
console.log(Tina.id);
console.log(Tony.id);
console.log(John.id);
console.log(Peeps.count);
////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    // setters cannot return a value so return must be empty
    set data(value) {
        //If a band name is added that is not a string function throws an error
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const MyBands = new Bands();
MyBands.data = ['Tony Bony', 'A Band'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'Big Band'];
console.log(MyBands.data);
MyBands.data = ['Another One'];
