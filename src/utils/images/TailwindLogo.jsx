import React from "react";

const TailwindLogo = ({ className }) => {
  return (
    <svg
      width="80"
      height="80"
      className={className}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="40" cy="40" r="40" fill="#F1F5FD" fillOpacity="0.12" />
      <g filter="url(#filter0_d_135_2367)">
        <path
          d="M58.75 32.9784C56.6252 32.2466 54.7496 30.9308 53.3383 29.1818C51.783 27.2331 49.8025 25.666 47.5484 24.6003C45.2943 23.5347 42.8264 22.9987 40.3333 23.0334C36.9797 22.7959 33.6597 23.8303 31.0343 25.9305C28.409 28.0308 26.6711 31.0428 26.1667 34.3668C27.1602 32.7043 28.6556 31.3999 30.4376 30.6413C32.2196 29.8826 34.1963 29.7089 36.0833 30.1451C38.2046 30.8982 40.0772 32.2217 41.495 33.9701C43.0589 35.9032 45.0431 37.4541 47.2967 38.5048C49.5503 39.5555 52.0139 40.0783 54.5 40.0334C57.8536 40.2709 61.1737 39.2366 63.799 37.1363C66.4243 35.0361 68.1622 32.0241 68.6667 28.7001C67.6911 30.3825 66.2005 31.7066 64.4149 32.4769C62.6292 33.2473 60.6432 33.4231 58.75 32.9784ZM21.9167 47.0884C24.0415 47.8203 25.9171 49.1361 27.3283 50.8851C28.8837 52.8338 30.8642 54.4009 33.1182 55.4665C35.3723 56.5322 37.8403 57.0682 40.3333 57.0334C43.687 57.2709 47.007 56.2366 49.6323 54.1363C52.2576 52.0361 53.9955 49.0241 54.5 45.7001C53.5064 47.3626 52.011 48.667 50.229 49.4256C48.4471 50.1842 46.4703 50.3579 44.5833 49.9218C42.462 49.1686 40.5895 47.8451 39.1717 46.0968C37.6036 44.1684 35.6185 42.6209 33.3659 41.5707C31.1133 40.5205 28.6518 39.9948 26.1667 40.0334C22.813 39.7959 19.493 40.8303 16.8677 42.9305C14.2424 45.0308 12.5045 48.0428 12 51.3668C12.9755 49.6844 14.4662 48.3603 16.2518 47.5899C18.0374 46.8196 20.0235 46.6437 21.9167 47.0884Z"
          fill="#F1F5FD"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_135_2367"
          x="2"
          y="13"
          width="76.667"
          height="54.0669"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_135_2367"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_135_2367"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default TailwindLogo;
