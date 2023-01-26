var arr2d = [ 
    [2, 5, 8],
    [3, 6, 1],
    [5, 7, 7] 
];

function isPresent2d(arr2d, value){
    // we need to run all the lenght arr2d  
    for (var i=0; i<arr2d.length; i++){
        // we need to run all the lenght value 
        for (var j=0; j<arr2d[i].length; j++){ 
        if (arr2d[i][j]==value){
            return true;
        }
    }
}
return false;
}
console.log(isPresent2d(arr2d,10));
// console.log(arr2d[0][2]);

// We can console.log the `8` in this array if we
// console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array
// complete the following function
function flatten(arr2d) 
{
    var flat = [];
    // your code here
    for (var i=0; i<arr2d.length; i++)
    {
        for (var j=0; j<arr2d[i].length; j++)
        { 
            flat.push(arr2d[i][j]);
        }
    
    }
    return flat;
}
var result = flatten( [[2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]


