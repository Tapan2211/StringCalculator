import { useState } from "react";
import styles from "../styles/StringCalculator.module.css";

const StringCalculator = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    const add = (numbers) => {
        try {
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
        } catch (err) {
            setError(err.message);
            return null;
        }
    };

    const handleCalculate = () => {
        setError(""); // Clear previous error
        const sum = add(input);
        setResult(sum);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>String Calculator</h1>
            <input
                type="text"
                placeholder="Enter numbers"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className={styles.input}
            />
            <button onClick={handleCalculate} className={styles.button}>
                Calculate
            </button>
            {error && <p className={styles.error}>{error}</p>}
            {result !== null && <p className={styles.result}>Result: {result}</p>}
        </div>
    );
};

export default StringCalculator;
