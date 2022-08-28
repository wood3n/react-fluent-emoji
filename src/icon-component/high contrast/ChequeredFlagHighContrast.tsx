import { SVGProps } from "react";

const ChequeredFlagHighContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M22 14H26V10H22V14Z" fill="black" />
    <path d="M22 18V22H26V18H22Z" fill="black" />
    <path
      d="M18 18V22H14V18H10V22H6V18H10V14H6V10H10V14H14V10H18V14H22V18H18ZM18 18V14H14V18H18Z"
      fill="black"
    />
    <path
      d="M3 5C1.89543 5 1 5.89543 1 7V25C1 26.1046 1.89543 27 3 27H29C30.1046 27 31 26.1046 31 25V7C31 5.89543 30.1046 5 29 5H3ZM26 7V10H29V14H26V18H29V22H26V25H22V22H18V25H14V22H10V25H6V22H3V18H6V14H3V10H6V7H10V10H14V7L18 7V10H22V7H26Z"
      fill="black"
    />
  </svg>
);

export default ChequeredFlagHighContrast;