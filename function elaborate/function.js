
function evenify_all(friendAge){
    for (let i = 0; i < friendAge.length; i++) {
        const age = friendAge[i];
        if (age %2 == 0) {
            console.log(age, ': is even number')
        }
        else{
            console.log(age, ": is odd number")
        }
    }
}

nums = [1,2,3,4,];
evenify_all(nums);


friendAge = [10,11,12,13,14];
evenify_all(friendAge)