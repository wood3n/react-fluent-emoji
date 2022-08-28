import { SVGProps } from "react";

const WhiteFlagHighContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 7C1 5.89543 1.89543 5 3 5H29C30.1046 5 31 5.89543 31 7V25C31 26.1046 30.1046 27 29 27H3C1.89543 27 1 26.1046 1 25V7ZM29 7L3 7V25H29V7Z"
      fill="#212121"
    />
  </svg>
);

export default WhiteFlagHighContrast;
