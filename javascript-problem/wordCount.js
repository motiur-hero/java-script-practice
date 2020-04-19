var speech = "i am  a good person. idont  snor at night.";
var count = 0;

for(var i = 0; i < speech.length; i++){
    var char = speech[i];

    if( char == " " && speech[i-1] != " "){
        count++;

    }
    
}
count++;
//console.log(count)


var sentence = "I am hardworking. I am serious. I am sure I will do it";
var count = 0;
for(var i = 0; i < sentence.length; i++){
    var letter = sentence[i];
    if(letter== "a"){
        count++;
    }

console.log(count)