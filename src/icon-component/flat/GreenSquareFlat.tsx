import { SVGProps } from "react";

const GreenSquareFlat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 4C2 2.89543 2.89543 2 4 2H28C29.1046 2 30 2.89543 30 4V28C30 29.1046 29.1046 30 28 30H4C2.89543 30 2 29.1046 2 28V4Z"
      fill="#00D26A"
    />
  </svg>
);

export default GreenSquareFlat;
