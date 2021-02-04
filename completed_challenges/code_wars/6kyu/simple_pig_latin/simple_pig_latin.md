# Simple Pig Latin
[Challenge Link](https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript)

## Challenge Instructions

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples

```
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
```

author: user2505876

## Though Process
My thought process on this one was pretty simple. Get the string into a format where each word or punctuation is its own element. Check whether each indiviaual element is a word or punctation. If the element is a word put the first character at the end of the word and then ad "ay". If the element is punctuation, do nothing. Convert the eneirty of elements back into a string and return that string.

## My Solution

```javascript
function pigIt(str) {
	return str.split(" ").map((word) =>
		/[a-z]/i.test(word.charAt(0))
			? word.substr(1) + word.charAt(0) + 'ay'
			: word
	).join(" ");
}
```

To start off I turned the string into an array by spiting at every space. In this problem all the test strings had spaces after the last word and before the punctuation. Such as :
```
'Hello world !'
```
If that was not the case and the punctuation directly followed the word this method would not work. Such as for: 

 ```
 'Hello world!'
 
 or

'Hi, My name is Fred."
 ```

 Once everything was in an array it looked something like this
 ```
 ['Hello', 'world', '!'];
 ```

Now we can use the map function return a new array with changes to each element. We use a regex expression to test if the first character of each word is a letter. If it is we use substr and concatenation to refactor the word. If not we just return the punctuation. 


### Time complexity 
We are looping through an array we created which is based on the length of words is a string. For each word added to the string our array grows proportionally making are complexity O(n).

### Space complexity
Similar to time. As we increase the input string our array increases proportionally making are complexity O(n).