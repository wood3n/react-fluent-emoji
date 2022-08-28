import { SVGProps } from "react";

const MagnetFlat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 23V29.06C11 29.58 10.58 30 10.06 30H3.94C3.42 30 3 29.58 3 29.06V23L7.02759 20.8479L11 23Z"
      fill="#D3D3D3"
    />
    <path
      d="M29 23V29.06C29 29.58 28.58 30 28.06 30H21.94C21.42 30 21 29.58 21 29.06V23L24.9896 20.8479L29 23Z"
      fill="#D3D3D3"
    />
    <path
      d="M11 23V15.06C11 12.31 13.2 10.02 15.95 10C18.73 9.97 21 12.23 21 15V23H29V15C29 7.82 23.18 2 16 2C8.82 2 3 7.82 3 15V23H11Z"
      fill="#F8312F"
    />
  </svg>
);

export default MagnetFlat;