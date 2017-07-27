//few features of JavaScript 6 or ES6
let my = 10
my =    'fine'

if (true) {
    let my = 20
}
console.log(my)

let calc = () => 45 * 45 // lambda expressio
console.log(calc())

let multi = () => {
    // whatever your code is 
    return () => {
        console.log(`It is returning`)
    } // clojoure 
}
let otherFn = multi()
otherFn()

function fetchData(xyz) {
    console.log('Hi 1')
    xyz()
}

function fetchData(xyz) {
    console.log('Hi 2')
    xyz()
}

fetchData(multi)

let str = `
    This is android.com
    welcome to ${my}
`