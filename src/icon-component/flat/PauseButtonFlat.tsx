import { SVGProps } from "react";

const PauseButtonFlat = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 9C11.4477 9 11 9.44772 11 10V22C11 22.5523 11.4477 23 12 23H14C14.5523 23 15 22.5523 15 22V10C15 9.44772 14.5523 9 14 9H12Z"
      fill="white"
    />
    <path
      d="M18 9C17.4477 9 17 9.44772 17 10V22C17 22.5523 17.4477 23 18 23H20C20.5523 23 21 22.5523 21 22V10C21 9.44772 20.5523 9 20 9H18Z"
      fill="white"
    />
  </svg>
);

export default PauseButtonFlat;
