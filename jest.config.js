export default {
    testEnvironment: "jsdom", // Required for DOM-based testing
    transform: {
        "^.+\\.(js|jsx)$": ["babel-jest", { presets: ["@babel/preset-env", "@babel/preset-react"] }],
    },
    moduleNameMapper: {
        "\\.(css|scss|less)$": "identity-obj-proxy", // Mock styles for testing
    },
    testMatch: ["**/__tests__/**/*.(js|jsx)", "**/?(*.)+(test).(js|jsx)"], // Match test files
};
