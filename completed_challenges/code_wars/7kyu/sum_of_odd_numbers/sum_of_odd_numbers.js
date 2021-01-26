let test =[13, 15, 17, 19]

function rowSumOddNumbers(n) {
    let j = 0;
    for(let i = n-1; i>=0; i -= 1 ){
        j+=i
    }
    j= j*2 +1
    let results = j*n;
    console.log(results);
    for(let i = 0; i < n; i++){
        results += i*2
    }
    // console.log(results);
}

rowSumOddNumbers(5)
