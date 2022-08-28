import { SVGProps } from "react";

const BlackLargeSquareHighContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 1C2.34315 1 1 2.34315 1 4V28C1 29.6569 2.34315 31 4 31H28C29.6569 31 31 29.6569 31 28V4C31 2.34315 29.6569 1 28 1H4Z"
      fill="#212121"
    />
  </svg>
);

export default BlackLargeSquareHighContrast;
