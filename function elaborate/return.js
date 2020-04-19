


function evenify(num) {
    var result;
    if (num %2 ==0) {
       result =  num;
    }
    else{
        result = num*2;
    }
    return result;
}
var result = evenify(13);
var square = result*result;
console.log('result', square)


function evenify_all(nums) {
    var even_array =[];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
       var result = evenify(num);
       even_array.push(result);
    }
    return even_array;
}
var nums = [10,11,12,13];
var evenSum = evenify_all(nums);
console.log(evenSum)