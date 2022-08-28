import { SVGProps } from "react";

const BlueBookFlat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M8 26H27V4C27 2.89543 26.1046 2 25 2H8V26Z" fill="#00A6ED" />
    <path d="M6 27H27V29H6V27Z" fill="#D3D3D3" />
    <path
      d="M6.5 2C5.67157 2 5 2.67157 5 3.5V28H6C6 27.4477 6.44772 27 7 27H8V2H6.5Z"
      fill="#0074BA"
    />
    <path
      d="M6.5 26C5.67157 26 5 26.6716 5 27.5V28.5C5 29.3284 5.67157 30 6.5 30H25.5C26.1531 30 26.7087 29.5826 26.9146 29H7C6.44772 29 6 28.5523 6 28C6 27.4477 6.44772 27 7 27H27V26H6.5Z"
      fill="#0074BA"
    />
  </svg>
);

export default BlueBookFlat;