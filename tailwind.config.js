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
      screens: {
        ssm: "425px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        Cormorant: ["Cormorant", "serif"],
        montserratAlter: ["Montserrat Alternates", "sans-serif"],
        worksans: ["Work Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        playFairDisplay: ["Playfair Display", "serif"],
        hindVadodara: ["Hind Vadodara", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/common/componentsBg.png')",
        homeGradient: "url('/assets/common/line.png')",
        homeLineGradient: "url('/assets/common/Line_Gradient.svg')",
        "details-back": "url('/assets/common/detailsback.png')",
        "nft-back": "url('/assets/crypto/nft_back.png')",
        "landing-back": "url('/assets/advocate/background_landing.png')",
        "chooseus-back": "url('/assets/advocate/chooseus_back.png')",
        "cat-one": "url('/assets/advocate/cat_one.png')",
        "popular-back": "url('/assets/advocate/popular_lawyer_back.png')",
        "cat-one": "url('/assets/advocate/cat_one.png')",
        "cat-two": "url('/assets/advocate/cat_two.png')",
        "cat-three": "url('/assets/advocate/cat_three.png')",
        "home-back": "url('/assets/common/home-back.png')",
        footerBg:
          "linear-gradient(85.88deg, #547FDD 1.67%, #365CCE 50.99%, #2D3C7B 95.8%)",

        "bg-linear":
          "linear-gradient(180deg, rgba(162, 89, 255, 0) 0%, #A259FF 100%)",
        contactBtn:
          "linear-gradient(270.09deg, #32439B 0.1%, #365CCE 45.15%, #547FDD 95.78%)",
      },
      colors: {
        themeColor: "#1e3a8a",
        borderColor: "#75A0E5",
      },
    },
    boxShadow: {
      componentcard: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      subcard: "0px 0px 15px rgba(0, 0, 0, 0.1)",
      pupularCard: "0px 0px 20px rgba(0, 0, 0, 0.2)",
    },
    container: {
      padding: {
        // DEFAULT: "1rem",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
