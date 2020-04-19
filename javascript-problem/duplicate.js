var idNo = [1,2,3,22,3,8,6,1,2,7,5,6,2,3,47,];

var uniqidNo = [];

for( var i=0; i < idNo.length; i++){

    var element = idNo[i];
    var index = uniqidNo.indexOf(element);

    if(index == -1){
        uniqidNo.push(element);

    }

}
console.log(uniqidNo);