let arr = [1, -1, 2, -2, 3, 3];

function solve(arr){
    arr.sort((a, b) => a - b)
    console.log(arr);
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i+1]){
            arr.splice(i, 1);
            i -= 1
        }
    }
    return arr.reduce((a, b) => a + b)
}

console.log(solve(arr));