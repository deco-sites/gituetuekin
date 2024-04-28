import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    fontFamily: {
      "clash-display":"Clash-Display"
    },
    extend: {
      animation: {
        sliding: "sliding 30s linear infinite",
        fadeInOut: "fade 1.5s ease-in-out infinite alternate",
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fade: {
          "0%": { opacity: "0.9" },
          "100%": { opacity: "1" },
        },
      },
      
    },
  },
};
