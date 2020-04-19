function callback(name, age, tusk) {
    console.log("hello", name)
    console.log("Your age", age)
    tusk()
    
}

function handwash() {
    console.log("wash your hand with soap")
    
}
function shower() {
    console.log("take shower")
    
}

callback("rahim uddin", 15, handwash)