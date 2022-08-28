import { SVGProps } from "react";

const StopButtonFlat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 6C2 3.79086 3.79086 2 6 2H26C28.2091 2 30 3.79086 30 6V26C30 28.2091 28.2091 30 26 30H6C3.79086 30 2 28.2091 2 26V6Z"
      fill="#00A6ED"
    />
    <path
      d="M8 9.5C8 8.67157 8.67157 8 9.5 8H22.5C23.3284 8 24 8.67157 24 9.5V22.5C24 23.3284 23.3284 24 22.5 24H9.5C8.67157 24 8 23.3284 8 22.5V9.5Z"
      fill="white"
    />
  </svg>
);

export default StopButtonFlat;
