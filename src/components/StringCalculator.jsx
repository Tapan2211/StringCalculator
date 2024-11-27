import { useState } from "react";
import { add } from "../utils/stringCalculator";
import styles from "./StringCalculator.module.css";

const StringCalculator = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    const calculate = () => {
        try {
            setError("");
            const sum = add(input);
            setResult(sum);
        } catch (err) {
            setResult(null);
            setError(err.message);
        }
    };

    return (
        <div className={styles.calculator}>
            <h1 className={styles.title}>String Calculator</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter numbers"
                className={styles.input}
            />
            <button onClick={calculate} className={styles.button}>
                Calculate
            </button>
            {result !== null && <p className={styles.result}>Result: {result}</p>}
            {error && <p className={styles.error}>{error}</p>}
        </div>
    );
};

export default StringCalculator;
