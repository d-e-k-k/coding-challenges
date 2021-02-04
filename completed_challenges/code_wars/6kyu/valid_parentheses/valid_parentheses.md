# Valid Parentheses

[Challenge Link](https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript)

## Challenge Instructions

Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples

```
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
```

Constraints

```
0 <= input.length <= 100
```

## Though Process
Originially we had two different ideas.

1. Create a counter that increments up for open parentheses and down for close parentheses. This would handle simple cases but looked like it might false on something like 
```
()())(
```
The counter method would think this has 3 ( and 3 ). This is true but they are not in the right order.

2. Option 2 was to use recursion to recursively remove "()". Each time a "()" is removed it should condense until there is no more "()" left. If anything is left the parentheses are not balanced

## My Solution

```js
function validParentheses(parens) {
	if (!/\(\)/.test(parens)) {
		return parens ? false : true;
	}
	const regex = /\(\)/gi;
	parens = parens.replace(regex, '');
	return validParentheses(parens);
}
```

### Regex
Regex or regular expression are an extremely powerful tool. Anything you can do with regular expressions you can do without them but often is can be simpler and more semantic to use regex. In this case we were looking for "()". Without regex we could find this by iterating over the string. We could use i as the index and say we found a "()" if string[i] === "(" and string[i+1] === ")" then we could splice out from i through i+1 and continue. Nothing wrong with that but its a little messy and less semantic. In our case we use regex and some different methods to accomplish the same task. The pattern we searched for is a "()". Parentheses in regex are special characters so in order to use these as plain characters we have to escape them with a "\". So are pattern used to find a "()" is 

```
\(\)
```
So a full expresion would look like this /expresion/ or

```js
/\(\)/
```

### Base Case

We decided to go the recursive route. We first need to establish a base case, when to exit the recursive loop. When there are no more "()" we can stop recursion. We will either have nothing left or unbalance parentheses.<br><br>Once the base case is met, if the return value has any length then it is unbalanced or false. If the return is empty or a length of 0 then it will return truthy and therefore balanced


### General Or Action Case

If we have not met the base case that means we still have "()" left in the input. We use the replace regex method to replace any "()" with and empty string or "". This essentially turns the replace method into a delete method. After this we call the function again. The function then checks if it has met the base case. If it has, then we run the evaluations inside the base case. If not it will run the Action case again until it eventually does meet the base case. 

### Time complexity 
I believe the regex complexity is only O(n) for this expression but I could be wrong on that. I will update this if I find otherwise.

### Space complexity
We are only storing the original string and then resising it on every recursion smaller and smaller. Still our size is proportinal to the original input so I believe this is O(n) as well.