import { SVGProps } from "react";

const PauseButtonHighContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 10C11 9.44772 11.4477 9 12 9H14C14.5523 9 15 9.44772 15 10V22C15 22.5523 14.5523 23 14 23H12C11.4477 23 11 22.5523 11 22V10Z"
      fill="#212121"
    />
    <path
      d="M18 9C17.4477 9 17 9.44772 17 10V22C17 22.5523 17.4477 23 18 23H20C20.5523 23 21 22.5523 21 22V10C21 9.44772 20.5523 9 20 9H18Z"
      fill="#212121"
    />
    <path
      d="M1 6C1 3.23858 3.23858 1 6 1H26C28.7614 1 31 3.23858 31 6V26C31 28.7614 28.7614 31 26 31H6C3.23858 31 1 28.7614 1 26V6ZM6 3C4.34315 3 3 4.34315 3 6V26C3 27.6569 4.34315 29 6 29H26C27.6569 29 29 27.6569 29 26V6C29 4.34315 27.6569 3 26 3H6Z"
      fill="#212121"
    />
  </svg>
);

export default PauseButtonHighContrast;
