import { SVGProps } from "react";

const BlackSquareButtonHighContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 1C2.79086 1 1 2.79086 1 5V27C1 29.2091 2.79086 31 5 31H27C29.2091 31 31 29.2091 31 27V5C31 2.79086 29.2091 1 27 1H5ZM5 7C5 5.89543 5.89543 5 7 5H25C26.1046 5 27 5.89543 27 7V25C27 26.1046 26.1046 27 25 27H7C5.89543 27 5 26.1046 5 25V7Z"
      fill="#212121"
    />
  </svg>
);

export default BlackSquareButtonHighContrast;
