/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/assets/common/headerback.svg')",
        "details-back": "url('/assets/common/detailsback.png')",
        "nft-back": "url('/assets/crypto/nft_back.png')",
        "landing-back": "url('/assets/advocate/background_landing.png')",
        "chooseus-back": "url('/assets/advocate/chooseus_back.png')",
        "cat-one": "url('/assets/advocate/cat_one.png')",
        "popular-back": "url('/assets/advocate/popular_lawyer_back.png')",
        "cat-one": "url('/assets/advocate/cat_one.png')",
        "cat-two": "url('/assets/advocate/cat_two.png')",
        "cat-three": "url('/assets/advocate/cat_three.png')",
        "home-back": "url('/assets/common/homeback.png')",
        "component-back": "url('/assets/common/bgdetailsection.png')",

        "bg-linear":
          "linear-gradient(180deg, rgba(162, 89, 255, 0) 0%, #A259FF 100%)",
      },
      colors: {
        themeColor: "#1e3a8a",
      },
    },
    boxShadow: {
      componentcard: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      subcard: "0px 0px 15px rgba(0, 0, 0, 0.1)",
    },
    container: {
      padding: {
        // DEFAULT: "1rem",
      },
    },
  },
  plugins: [],
};
