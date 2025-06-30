//CLASSES

//inside classes properties and methods are called 'members'

class Coder {
 
    constructor(
        public name: string,
        readonly music: string, 
        private age: number,
        protected lang: string = 'Typescript'
    ){
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge() {
            return `Hello, I'm ${this.age}`
    }
}

const Dave = new Coder('Dave', 'Rock', 42)
console.log(Dave.getAge())
// console.log(Dave.age)
// console.log(Dave.lang)

class WebDev extends Coder {
    constructor(
        public computer: string, 
        name: string, 
        music: string, 
        age: number,  
    ) {
        super(name, music, age)
        this.computer = computer
    }

    public getLang() {
        return `I write ${this.lang}`
    }
}

const Sara = new WebDev('Mac', 'Sara', 'LoFi', 25)
console.log(Sara.getLang())
// console.log(Sara.age)
// console.log(Sara.lang)

////////////////////////////////////////////

interface Musician {
    name: string, 
    instrument: string, 
    play(action: string): string
}

class Guitarist implements Musician {
    name: string
    instrument: string

    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }

    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Page = new Guitarist('Jimmy', 'Les Paul')
console.log(Page.play('strums'))

////////////////////////////////////////

class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }

    public id: number
    
    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}

const John = new Peeps('John')
const Tony = new Peeps('Tony')
const Tina = new Peeps('Tina')

console.log(Tina.id)
console.log(Tony.id)
console.log(John.id)
console.log(Peeps.count)

////////////////////////////////////

class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[]{
        return this.dataState
    }
// setters cannot return a value so return must be empty
    public set data (value: string[]) {
        //If a band name is added that is not a string function throws an error
        if(Array.isArray(value) && value.every(el => typeof el === 'string')){
            this.dataState = value
            return
        } else throw new Error('Param is not an array of strings')
    }
}

const MyBands = new Bands()
MyBands.data = ['Tony Bony', 'A Band']
console.log(MyBands.data)
MyBands.data = [...MyBands.data, 'Big Band']
console.log(MyBands.data)
MyBands.data = ['Another One']