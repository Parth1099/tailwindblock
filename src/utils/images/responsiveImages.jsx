export const MobileViewLogo = (props) => {
  return (
    <svg
      width="15"
      height="24"
      viewBox="0 0 15 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="12.5714"
        height="22"
        rx="2"
        stroke={props.stroke || "black"}
        strokeOpacity="0.8"
        strokeWidth="2"
      />
      <path
        d="M4.14258 5.14258L10.4283 5.14258"
        stroke={props.stroke || "black"}
        strokeOpacity="0.8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
export const TabletViewLogo = (props) => {
  return (
    <svg
      width="24"
      height="15"
      viewBox="0 0 24 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="23"
        y="1"
        width="12.5714"
        height="22"
        rx="2"
        transform="rotate(90 23 1)"
        stroke={props.stroke || "black"}
        strokeOpacity="0.8"
        strokeWidth="2"
      />
      <path
        d="M18.8574 4.14258L18.8574 10.4283"
        stroke={props.stroke || "black"}
        strokeOpacity="0.8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
export const DesktopViewLogo = (props) => {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 2C1 1.44772 1.44772 1 2 1H21C21.5523 1 22 1.44772 22 2V17C22 17.5523 21.5523 18 21 18H2C1.44771 18 1 17.5523 1 17V2Z"
        stroke={props.stroke || "black"}
        strokeWidth="2"
      />
      <line
        x1="12"
        y1="19"
        x2="12"
        y2="22"
        stroke={props.stroke || "black"}
        strokeWidth="2"
      />
      <line
        x1="23"
        y1="13.75"
        x2="1"
        y2="13.75"
        stroke={props.stroke || "black"}
        strokeWidth="1.5"
      />
      <path
        d="M16 22H8"
        stroke={props.stroke || "black"}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
