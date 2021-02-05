# Look and Say Sequence Generator
![gif](4wtv6q.gif)
[Challenge Link](https://www.codewars.com/kata/592421cb7312c23a990000cf/train/javascript)

## Challenge Instructions

The look and say sequence is a sequence in which each number is the result of a "look and say" operation on the previous element.

Considering for example the classical version startin with "1": ["1", "11", "21, "1211", "111221", ...]. You can see that the second element describes the first as "1(times number)1", the third is "2(times number)1" describing the second, the fourth is "1(times number)2(and)1(times number)1" and so on.

Your goal is to create a function which takes a starting string (not necessarily the classical "1", much less a single character start) and return the nth element of the series.

### Examples

```
lookAndSaySequence("1", 1)   === "1"
lookAndSaySequence("1", 3)   === "21"
lookAndSaySequence("1", 5)   === "111221"
lookAndSaySequence("22", 10) === "22"
lookAndSaySequence("14", 2)  === "1114"
```

Trivia: "22" is the only element that can keep the series constant.

<details>
<summary>Tags</summary>
<br>

- FUNDAMENTALS
- SEQUENCES
- ARRAYS
- CONSTRUCTORS
- BASIC LANGUAGE FEATURES 
- STRINGS 
- REGULAR EXPRESSIONS
- DECLARATIVE PROGRAMMING
- ADVANCED LANGUAGE FEATURES
- NUMBERS
</details>

Author: GiacomoSorbi

## Though Process

Originally I had two different ideas to solve this challenge.<br><br>

### Option 1
Iterate from N1 all the way to Nx generating each value from the previous. So if we start with:



```
input: ("1",5)
```
we would need to generate all the intermediate values between N1 and N5. For example : 


```
n1 = 1
n2 = 11
n3 = 21
n4 = 1211
n5 = 111221
```
This method works but requires iteration through every n value to calculate the next. If we were looking for the sequence at n= 10,000. We would have to do 10,000 iterations. A possibly more efficient solution for large n values, could be option 2 but I stuck with option one.

<br><br>

### Option 2
Implementing the underlying mathematical expression. There is a expression that can take us from our input values to our output values. Well at least I think there is something close. Ask [John Conway](https://www.youtube.com/watch?v=ea7lJkEhytA), maybe he knows the answer......


## My Solution

This is not a pretty solution but it gets the job done.

```js
function lookAndSaySequence(firstElement, n) {
    if(n === 1) return firstElement
    let answer = '';
	while (n > 1) {
		answer = '';
		while (firstElement) {
			const pattern = `^${firstElement[0]}+`;
			const regex = new RegExp(pattern);
			const match = firstElement.match(regex);
			const convertedSection = `${match[0].length.toString()}${match[0].charAt(
				0
			)}`;
			answer = `${answer}${convertedSection}`;
			firstElement = firstElement.replace(regex, '');
		}
		n -= 1;
	
		firstElement = answer;
	}
	return answer;
}
```

The heart of the iteration method is converting one number to the next in the sequence. This could be accomplished many different ways. I chose to use regular expressions. The work horse of this function is the inner while loop:


```js
answer = '';
		while (firstElement) {
			const pattern = `^${firstElement[0]}+`;
			const regex = new RegExp(pattern);
			const match = firstElement.match(regex);
			const convertedSection = `${match[0].length.toString()}${match[0].charAt(
				0
			)}`;
			answer = `${answer}${convertedSection}`;
			firstElement = firstElement.replace(regex, '');
		}
```
High level, this loop grabs the first character from firstElement and then uses regex match to find out how many of those are in a row at the start of firstElement. So if we have:

```
111233
```
the pattern starts at

```js
/^1+/
```
When we use this in the match method we are returned:
```js
111
```

Then we can push the length of that match "3" and the first character of that match "1" to the answer string. So at this point the answer string would look like;
```
31
```
After we add to the answer string we remove this same pattern match from the firstElement string. So now firstElement looks like:

```
233
```

Now we go to the next iteration of the while loop and continue this until we have removed all the characters from firstElement.


Once this while loop has reached its base case we reassign firstElement to answer, clear out answer, and run the parent loop until we have reached our target n value.


### Time complexity 
This solution has nested while loops so we are at least at 0(n^2) time complexity. Inside the inner most while loop we also have a nested regex match function which has O(n) complexity for basic string patterns. So it looks like our final complexity is 0(n^3)

### Space complexity 
Space complexity should be linear because we are only storing answer and firstElement at any time. These are directly proportional to the original input giving us 0(n) space complexity.