import { SVGProps } from "react";

const StopButtonHighContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.5 8C8.67157 8 8 8.67157 8 9.5V22.5C8 23.3284 8.67157 24 9.5 24H22.5C23.3284 24 24 23.3284 24 22.5V9.5C24 8.67157 23.3284 8 22.5 8H9.5Z"
      fill="#212121"
    />
    <path
      d="M6 1C3.23858 1 1 3.23858 1 6V26C1 28.7614 3.23858 31 6 31H26C28.7614 31 31 28.7614 31 26V6C31 3.23858 28.7614 1 26 1H6ZM3 6C3 4.34315 4.34315 3 6 3H26C27.6569 3 29 4.34315 29 6V26C29 27.6569 27.6569 29 26 29H6C4.34315 29 3 27.6569 3 26V6Z"
      fill="#212121"
    />
  </svg>
);

export default StopButtonHighContrast;
