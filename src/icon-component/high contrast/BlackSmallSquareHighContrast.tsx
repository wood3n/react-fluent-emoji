import { SVGProps } from "react";

const BlackSmallSquareHighContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23 12C23 10.3431 21.6569 9 20 9H12C10.3431 9 9 10.3431 9 12V20C9 21.6569 10.3431 23 12 23L20 23C21.6569 23 23 21.6569 23 20L23 12Z"
      fill="#212121"
    />
  </svg>
);

export default BlackSmallSquareHighContrast;
