function validParentheses(parens) {
	if (!/\(\)/.test(parens)) {
		return parens ? false : true;
	}
	const regex = /\(\)/gi;
	parens = parens.replace(regex, '');
	return validParentheses(parens);
}
