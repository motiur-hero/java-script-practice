
/**var marks = [12, 33, 85, 45, 62, 78, 98, 55];
var max = marks[0];
for(var i = 0; i < marks.length; i++){

      var element = marks[i];
        if(element > max){

            max = element;
        }
}
console.log("The highest value is : ", max);
*/


function getarraySum(numbers){

  var sum = 0;
  for(var i = 0; i < numbers.length; i++){
       var element = numbers[i];
      sum = sum + element;
}
return sum;
}
var numbers = [12,52,11,22,33,55,];

var result = getarraySum(numbers);
var total = getarraySum([1, 22,14,5,36,8,]);
console.log(" The total sum is:", result);
console.log(" The total sum is:", total);


var friends = ["Alu", "Bulu", "culu", "dulu", "fulu"];
var allNames = "";
for(var i = 0; i< friends.length;i++){
    var name = friends[i];
    allNames = allNames + name;
;
}
console.log(allNames);