export const MobileViewLogo = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="256"
      height="256"
      viewBox="0 0 256 256"
    >
      <path
        fill={props.fill || "black"}
        d="M176 20H80a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h96a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20ZM68 60h120v136H68Zm12-32h96a12 12 0 0 1 12 12v12H68V40a12 12 0 0 1 12-12Zm96 200H80a12 12 0 0 1-12-12v-12h120v12a12 12 0 0 1-12 12Z"
      />
    </svg>
  );
};
export const TabletViewLogo = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="256"
      height="256"
      viewBox="0 0 256 256"
    >
      <path
        fill={props.fill || "black"}
        d="M192 28H64a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20ZM52 68h152v120H52Zm12-32h128a12 12 0 0 1 12 12v12H52V48a12 12 0 0 1 12-12Zm128 184H64a12 12 0 0 1-12-12v-12h152v12a12 12 0 0 1-12 12Z"
      />
    </svg>
  );
};
export const DesktopViewLogo = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="256"
      height="256"
      viewBox="0 0 256 256"
    >
      <path
        fill={props.fill || "black"}
        d="M208 44H48a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h76v24H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8h-28v-24h76a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20ZM48 52h160a12 12 0 0 1 12 12v84H36V64a12 12 0 0 1 12-12Zm160 136H48a12 12 0 0 1-12-12v-20h184v20a12 12 0 0 1-12 12Z"
      />
    </svg>
  );
};

export const ShareSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 256 256"
    >
      <path
        fill="currentColor"
        d="m226.83 106.83l-48 48a4 4 0 0 1-5.66-5.66L214.34 108H165a92 92 0 0 0-89.11 69a4 4 0 0 1-3.89 3a3.87 3.87 0 0 1-1-.13a4 4 0 0 1-2.87-4.87A99.93 99.93 0 0 1 165 100h49.36l-41.19-41.17a4 4 0 0 1 5.66-5.66l48 48a4 4 0 0 1 0 5.66ZM192 212H40a4 4 0 0 1-4-4V88a4 4 0 0 0-8 0v120a12 12 0 0 0 12 12h152a4 4 0 0 0 0-8Z"
      />
    </svg>
  );
};
