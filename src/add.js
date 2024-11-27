function add(numbers) {
    if (!numbers) return 0; // Case for empty input

    let delimiter = ",";
    let numStr = numbers;

    // Check for custom delimiter
    if (numbers.startsWith("//")) {
        const delimiterDeclaration = numbers.split("\n")[0];
        delimiter = delimiterDeclaration.slice(2); // Extract delimiter
        numStr = numbers.slice(numbers.indexOf("\n") + 1); // Remaining string
    }

    // Replace all delimiters (default and custom) with a comma
    const normalizedStr = numStr.replace(new RegExp(`[${delimiter}\n]`, "g"), ",");

    // Split numbers by comma and process
    const numArray = normalizedStr.split(",").filter(Boolean); // Remove empty entries

    // Parse numbers and handle exceptions
    const negatives = [];
    const parsedNumbers = numArray.map((num) => {
        const parsed = parseInt(num, 10);
        if (isNaN(parsed)) return 0;
        if (parsed < 0) negatives.push(parsed);
        return parsed;
    });

    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
    }

    // Sum of all numbers
    return parsedNumbers.reduce((sum, num) => sum + num, 0);
}

export default add;
