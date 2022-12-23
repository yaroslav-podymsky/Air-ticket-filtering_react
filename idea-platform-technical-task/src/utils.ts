export function getDate(date: string) {
	return (
		new Date(date)
			.toLocaleString(undefined, {
				day: "numeric",
				month: "short",
				year: "numeric",
			})
			.replaceAll(".", "")
			.replace(/г/g, ", ") +
		new Date(date)
			.toLocaleString(undefined, {
				weekday: "short",
			})
			.toString()[0]
			.toLocaleUpperCase() +
		new Date(date)
			.toLocaleString(undefined, {
				weekday: "short",
			})
			.toString()[1]
	);
}
export function formatPrice(str: string) {
	const charsPrise = str.split("");
	const strWithSpaces = charsPrise.reduceRight((acc, char, i) => {
		const spaceOrNothing = (str.length - i) % 3 === 0 ? " " : "";
		return spaceOrNothing + char + acc;
	}, "");

	return strWithSpaces[0] === " " ? strWithSpaces.slice(1) : strWithSpaces;
}

export function endDefinition(value: number) {
	if (value === 1 || value === 21) return `${value} пересадка `;
	else if (
		value === 2 ||
		value === 3 ||
		value === 4 ||
		value === 22 ||
		value === 23 ||
		value === 24
	) {
		return `${value} пересадки`;
	} else return `${value} пересадок`;
}
