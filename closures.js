let myName = "Jonathan"

function printName() {
    console.log(myName)
}

printName()


//
function outerFunction(outerVariable) {
    const outer2 = "Hi"
    return function innerFunction(innerVariable) {
        console.log("Outer Variable: " + outerVariable)
        console.log("Inner Variable: " + innerVariable)
        console.log(outer2)
    }
}

const newFunction = outerFunction("outside")
console.log("-----------")
newFunction("inside")
console.log("-----------")
newFunction("test")
console.log("-----------")
newFunction("Johnny")

// more common real world example
function outFunction(url) {
    fetch(url).then(() => {
        console.log(url)
    })
}