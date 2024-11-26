function add(numbers) {
    if (!numbers) return 0;

    // Check for custom delimiter
    let delimiter = /,|\n/; // Default delimiters
    if (numbers.startsWith("//")) {
        const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
        if (delimiterMatch) {
            delimiter = new RegExp(delimiterMatch[1]);
            numbers = numbers.split("\n").slice(1).join("\n"); // Remove delimiter line
        }
    }

    // Split numbers and parse them
    const numberArray = numbers.split(delimiter).map(Number);
    const negatives = numberArray.filter((n) => n < 0);

    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return numberArray.reduce((sum, num) => sum + num, 0);
}

export default add;
