// ECMAScript 6

//------------ Default Params -------------- 

// Antes de ECMAScript
function newFunction(name,age,country){
    var name = name || 'Caleb Flores'
    var age = age || 22
    var country = country || 'HN'
    console.log(name, age, country)
}

newFunction()
newFunction('Iris Villela', 21, 'HN')

// ES6
function newFunction2(name = 'Iris Villela', age = 21, country='HN'){
    console.log(name, age, country)
}

newFunction2()
newFunction2('Caleb Flores', 22, 'AG')

//------------ Concatenación --------------

var hello = 'Hello'
var world = 'World'

// Antes de ECMAScript
var epicPharse = hello + ' ' + world

console.log(epicPharse)

// ES6
var epicPharse2 = `${hello} ${world}`

console.log(epicPharse2)

//------------ Multilinea --------------

// Antes de ECMAScript
var Lorem = 'esta es una frase epica \nesta es otra frase epica'

console.log(Lorem)

// ES6
var Lorem2 = `Esta es una frase epica
esta es otra frase epicaaa...`

console.log(Lorem2)

//------------ Destructuración de Elementos --------------

// Antes de ECMAScript
var person = {
    name : 'Caleb',
    age : 22,
    country : 'HN'
}

console.log(person.name, person.age)

// ES6
var { name } = person

console.log(name)

//------------ Spread Operator --------------

// ES6
var team1 = ['Caleb', 'Iris', 'Acsa']
var team2 = ['Karina', 'Bryan', 'Yadira']

var education = ['Paola', ...team1, ...team2]

console.log(education)

//------------ LET & CONST --------------

// Antes de ECMAScript
{
    var globalVar = 'Variable Global VAR'
}

console.log(globalVar)

// ES6
{
    let globalLet   = 'Variable bloque let'
    console.log(globalLet)
}

// Antes de ECMAScript
var a = 'var si'
a = 'Modifica el valor'
console.log(a)

// ES6
const b = 'Const no cambia su valor'
console.log(b)

//------------ Objetos --------------
let name = 'Caleb Flores'
let age = 22

// ECMAScript5
objt = {name: name, age: age}
console.log(objt)

// ES6
objt2 = {name,age}
console.log(objt2)

//------------ Arrow Functions --------------
const names = [
    {name : 'caleb Flores', age : 22},
    {name : 'Iris Villela', age : 21}
]

// ECMAScript5
let listOfName = names.map(function(item){
    return `${item.name} ${item.age}`
})
console.log(listOfName)

// ES6
const listOfName2 = names.map(item => item.name)
console.log(listOfName2)

const listOfName3 = names.map(({name, age}) => `${name} ${age}`)
console.log(listOfName3)

const square = num => num * num

//------------ Promisses --------------
//antes se realizaban con callbacks 

// ES6

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!!')
        }else {
            reject('Ups!!')
        }
    })
}

helloPromise()
    .then(resolve => console.log(resolve))
    .catch(error => console.log(error))

//------------ Clases --------------

class  calculator {
    constructor(params) {
        this.ValueA = 0
        this.ValueB = 0 
    }

    sum(ValueA, ValueB){
        this.ValueA = ValueA
        this.ValueB = ValueB

        return this.ValueA + this.ValueB
    }
}

const cal = new calculator()

console.log(cal.sum(5,6))
