# Array Elements Parity
[Challenge Link](https://www.codewars.com/kata/5a092d9e46d843b9db000064)
<details>
<summary>Challenge Instructions</summary>
<br>
In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

Examples:

[1, -1, 2, -2, 3] => 3

3 has no matching negative appearance

[-3, 1, 2, 3, -1, -4, -2] => -4

-4 has no matching positive appearance

[1, -1, 2, -2, 3, 3] => 3

(the only-positive or only-negative integer may appear more than once)

Good luck!
Creator: KenKamau on Code Wars
</details>

<details>
<summary>Though Process</summary>
<br>

Originally, I thought the easiest solution would be to use reduce to add all the elements of the array. I thought this would leave us with the target integer. This works so long as the target integer is not repeated multiple times. For example:

[1, -1, 2, -2, 3] => 3


```js
let arr = [1, -1, 2, -2, 3];

function solve(arr){
    return arr.reduce((a, b) => a + b)
}
// returns 3 answer is 3
```

[1, -1, 2, -2, 3, 3] => 3

```js
let arr = [1, -1, 2, -2, 3, 3];

function solve(arr){
    return arr.reduce((a, b) => a + b)
}
// returns 6, answer is 3
```

The first option works becuase 3 is only include once. When it is repeated, this algorithm false. One option would be to remove all duplicates before reducing.


[1, -1, 2, -2, 3, 3] => 3

```js
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
// returns 3 answer is 3
```

I think this is a good option.
- Readability = High
- Time Complexity = O(nlog(n))
- Space Complexity = 0(n)

*time complexity composed from sort = O(nlog(n)), sibling for loop = 0(n). Combined = O(nlog(n))(n) or O(2nlog(n)) we can then drop the coefficient and are left with O(nlog(n))*

</details>

<details>
<summary>My Solution</summary>
<br>

```js
function solve(arr){
    arr.sort((a, b) => a - b);
    for(let i = 0; i < (arr.length)/2; i++){
        if(-1*(arr[i]) !== arr[arr.length-(i+1)]){
            if(-1*(arr[i+1]) !== arr[arr.length-(i+1)]){
                return arr[arr.length - (i+1)];
            }else{
                return arr[i];
            }
        }
    }
    
};
```

Node runs on V8 so the built-in array sort method runs of a merg-sort algorithm with a O(nlog(n)) time. We then have another sibling for loop with time of 0(n/2). This for loop time condenses to 0(n) since coefficients are removed. Then combined with the sort algorithm we get O(nlog(n))*n or O(2nlog(n)) which we can once again remove the coefficient leaving us wiht O(nlog(n)). This is the same time complexity as the remove duplicates solution so it looks like either are equally valid.
</details>

#### Corrections
If there is a mistake, please leave an issue so it can be corrected. If you think the time or space complexity should be different, provide and explanation and I will get it updated!
