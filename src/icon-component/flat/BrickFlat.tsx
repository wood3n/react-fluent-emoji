import { SVGProps } from "react";

const BrickFlat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 5C2 3.34315 3.34315 2 5 2H27C28.6569 2 30 3.34315 30 5V27C30 28.6569 28.6569 30 27 30H5C3.34315 30 2 28.6569 2 27V5Z"
      fill="#D3D3D3"
    />
    <path
      d="M2 15H14C14.5523 15 15 14.5523 15 14V10C15 9.44772 14.5523 9 14 9H2V15Z"
      fill="#FF6723"
    />
    <path
      d="M2 23V17H6C6.55228 17 7 17.4477 7 18V22C7 22.5523 6.55228 23 6 23H2Z"
      fill="#FF6723"
    />
    <path
      d="M15 30V26C15 25.4477 14.5523 25 14 25H2V27C2 28.6569 3.34315 30 5 30H15Z"
      fill="#FF6723"
    />
    <path
      d="M30 25H18C17.4477 25 17 25.4477 17 26V30H27C28.6569 30 30 28.6569 30 27V25Z"
      fill="#FF6723"
    />
    <path
      d="M30 17V23H26C25.4477 23 25 22.5523 25 22V18C25 17.4477 25.4477 17 26 17H30Z"
      fill="#FF6723"
    />
    <path
      d="M30 9H18C17.4477 9 17 9.44772 17 10V14C17 14.5523 17.4477 15 18 15H30V9Z"
      fill="#FF6723"
    />
    <path
      d="M25 2V6C25 6.55228 25.4477 7 26 7H30V5C30 3.34315 28.6569 2 27 2H25Z"
      fill="#FF6723"
    />
    <path
      d="M9 2V6C9 6.55228 9.44772 7 10 7H22C22.5523 7 23 6.55228 23 6V2H9Z"
      fill="#FF6723"
    />
    <path
      d="M7 2H5C3.34315 2 2 3.34315 2 5V7H6C6.55228 7 7 6.55228 7 6V2Z"
      fill="#FF6723"
    />
    <path
      d="M10 17C9.44772 17 9 17.4477 9 18V22C9 22.5523 9.44772 23 10 23H22C22.5523 23 23 22.5523 23 22V18C23 17.4477 22.5523 17 22 17H10Z"
      fill="#FF6723"
    />
  </svg>
);

export default BrickFlat;