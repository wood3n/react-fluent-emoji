import { SVGProps } from "react";

const PigNoseFlat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M30 21.79C29.89 14.17 23.66 9 16 9C8.34 9 2.11 14.17 2 21.79C2 21.86 2 21.93 2 22C2 26.42 5.58 30 10 30H22C26.42 30 30 26.42 30 22C30 21.93 30 21.86 30 21.79Z"
      fill="#FF8687"
    />
    <path
      d="M10 16C8.34315 16 7 17.3431 7 19V23C7 24.6569 8.34315 26 10 26C11.6569 26 13 24.6569 13 23V19C13 17.3431 11.6569 16 10 16Z"
      fill="#1C1C1C"
    />
    <path
      d="M22 16C20.3431 16 19 17.3431 19 19V23C19 24.6569 20.3431 26 22 26C23.6569 26 25 24.6569 25 23V19C25 17.3431 23.6569 16 22 16Z"
      fill="#1C1C1C"
    />
  </svg>
);

export default PigNoseFlat;
