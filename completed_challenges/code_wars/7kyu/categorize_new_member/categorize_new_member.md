
[Challenge Link](https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa)



<details>
<summary>Challenge Instructions</summary>
<br>

The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better t*he player the lower the handicap.

### **Input**
Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Note for F#: The input will be of (int list list) which is a List<List>

### **Example Input**
```
[[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
```
### **Output**
Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

### **Example Output**
```
["Open", "Open", "Senior", "Open", "Open", "Senior"]
```

</details>

<details>
<summary>Thought Process</summary>
<br>
The thought process is that you are either in the "Open" or "Senior" category. Whenever you only have two options. You can solve for one and assign everything else to the other. For example, to check if someone is older than 18 we do not have to check if they are both younger than 18 and older than 18. They have to be one or the other. So if we get "false" returned from a function that checks if someone is older than 18 we no they are younger than 18 by default. The same logic can apply here. If someone is at least 55 years old and has a handicap greater than 7, they are a "Senior" if not, they are "Open". <br><br>

*if edge cases exist such as test cases where someone is 1000 yrs old or a handicap is above or below the possible limit -2 to 26 you may need to write more explicit conditionals instead of relying on the else statement*
</details>

<details>
<summary>Solutions</summary>
<br>
### Here was my first solution:

```js
function openOrSenior(data) {
	let statusArr = [];

	for (let i = 0; i < data.length; i++) {
		if ((data[i][1] > 7) &&  (data[i][0] >= 55)) {
			statusArr.push('Senior');
		} else {
			statusArr.push('Open');
		}
	}
	return statusArr;
}
```

This solution simply iterates over the array elements and checks if a member is both older than 55 and has a handicap greater than 7. If so it pushes "Senior" to the status array else pushes "Open". 

Time Complexity: 0(n)
Space Complexity: 0(n)
Readability: Okay

### Option 2
A shorter solution with the same time complexity could be:

```js
function openOrSenior(data) {
    return data.map(array => (array[0] >= 55 && array[1] >7 ? "Senior": "Open"))
}
```

The map function, iterates and array and returns a new array based on the include function. In this case we are returning each element according to the nested ternary. If 55 or older and handicap > 7 return the true expression form the ternary If false return the false expression. 

### Option 2 Plus

The above is a good option but we can make it even more readable by renaming the function parameter and deconstructing the array in the map function with more semantic options.
 

 ```js
 function openOrSenior(memberData) {
	return memberData.map(([age, handicap]) =>
		age >= 55 && handicap > 7 ? 'Senior' : 'Open'
	);
}
 ```

We can rename data to memberData and deconstruct the array to increase readability.


</details>