function pigIt(str) {
	return str
		.split(' ')
		.map((word) =>
			/[a-z]/i.test(word.charAt(0))
				? word.substr(1) + word.charAt(0) + 'ay'
				: word
		)
		.join(' ');
}

pigIt('Pig latin is cool !');
