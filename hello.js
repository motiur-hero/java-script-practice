
var name = "soma akter";
var bananaPrice = 12;
var age = 20;

console.log( name,age);


var test = (10>9);
console.log(bananaPrice,test);





var friendsAge = [15,12,20,35,48];


console.log(friendsAge);
console.log(friendsAge[4]);
friendsAge[1]= 25;
console.log(friendsAge);

var position = friendsAge.indexOf(48);
console.log(position);
console.log(friendsAge.indexOf(15));



var friendsAge = [10,20,15,20,25,30,];
friendsAge.push(50);
friendsAge.push(60);
friendsAge.push(70);
friendsAge.pop();
friendsAge.shift();
friendsAge.unshift(100);
console.log(friendsAge);
var citrus = friendsAge.slice(2,4);

console.log(citrus);

