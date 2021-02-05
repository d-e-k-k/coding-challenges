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

console.log(lookAndSaySequence('14', 1));
