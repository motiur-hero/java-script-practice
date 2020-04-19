



function reverseString(str) {
        var reverse = "";
        for( i = 0; i< str.length; i++){

            var char = str[i];
            reverse = char + reverse;
        }
    
    
    
    return reverse;
}
var statement = reverseString("hello");
var allien = reverseString("Hello allien vai brother")

console.log(allien)