import { SVGProps } from "react";

const RainbowFlagHighContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 5C1.89543 5 1 5.89543 1 7V25C1 26.1046 1.89543 27 3 27H29C30.1046 27 31 26.1046 31 25V7C31 5.89543 30.1046 5 29 5H3ZM3 9V12H29V9H3ZM29 16H3V20H29V16ZM29 23H3V25H29V23Z"
      fill="black"
    />
  </svg>
);

export default RainbowFlagHighContrast;
