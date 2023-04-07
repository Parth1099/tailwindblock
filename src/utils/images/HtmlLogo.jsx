import React from "react";

const HtmlLogo = ({ className }) => {
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
      <g filter="url(#filter0_d_135_2370)">
        <path
          d="M25.0068 14H27.3512V16.3162H29.4962V14H31.8405V21.0113H29.4962V18.6648H27.3512V21.0113H25.009L25.0068 14ZM34.9215 16.3248H32.8588V14H39.3307V16.3248H37.2658V21.0113H34.9215V16.3248ZM40.3577 14H42.8017L44.3053 16.4635L45.8068 14H48.2508V21.0113H45.9173V17.536L44.3053 20.0298H44.2642L42.65 17.5382V21.0113H40.3577V14ZM49.4165 14H51.763V18.6952H55.0563V21.0135H49.4165V14Z"
          fill="#F1F5FD"
        />
      </g>
      <g filter="url(#filter1_d_135_2370)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.933 61.8227L20.5 24.2202H59.5L55.0648 61.8184L39.9783 66.0001L24.933 61.8227ZM33.8965 41.2394L33.4762 36.516H51.1237L51.5353 31.9054H28.4387L29.6823 45.8522H45.6658L45.1307 51.8322L39.987 53.2232H39.9827L34.8477 51.8365L34.5183 48.1597H29.886L30.5317 55.4007L39.9783 58.0224L49.4402 55.4007L50.5928 42.4787L50.7055 41.2415H33.8965V41.2394Z"
          fill="#F1F5FD"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_135_2370"
          x="15.0068"
          y="4"
          width="50.0498"
          height="27.0134"
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
            result="effect1_dropShadow_135_2370"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_135_2370"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_135_2370"
          x="10.5"
          y="14.2202"
          width="59"
          height="61.7798"
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
            result="effect1_dropShadow_135_2370"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_135_2370"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default HtmlLogo;
