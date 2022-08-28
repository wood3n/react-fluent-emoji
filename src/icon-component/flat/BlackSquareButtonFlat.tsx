import { SVGProps } from "react";

const BlackSquareButtonFlat = (props: SVGProps<SVGSVGElement>) => (
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
      fill="black"
    />
    <path
      d="M5 7C5 5.89543 5.89543 5 7 5H25C26.1046 5 27 5.89543 27 7V25C27 26.1046 26.1046 27 25 27H7C5.89543 27 5 26.1046 5 25V7Z"
      fill="#F4F4F4"
    />
  </svg>
);

export default BlackSquareButtonFlat;
