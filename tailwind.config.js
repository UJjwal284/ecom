// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            keyframes: {
                marquee: {
                    "0%": {transform: "translateX(0%)"},
                    "100%": {transform: "translateX(-100%)"},
                },
                heartbeat: {
                    "0%, 100%": {transform: "scale(1)"},
                    "14%": {transform: "scale(1.1)"},
                    "28%": {transform: "scale(1)"},
                    "42%": {transform: "scale(1.2)"},
                    "70%": {transform: "scale(1)"},
                },
            },
            animation: {
                heartbeat: "heartbeat 2s ease-in-out infinite",
                marquee: 'marquee 15s linear infinite',
            },
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
