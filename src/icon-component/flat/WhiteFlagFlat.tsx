import { SVGProps } from "react";

const WhiteFlagFlat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.02777 6C2.47549 6 2.02777 6.44772 2.02777 7V25C2.02777 25.5523 2.47549 26 3.02777 26H29.0278C29.5801 26 30.0278 25.5523 30.0278 25V7C30.0278 6.44772 29.5801 6 29.0278 6H3.02777Z"
      fill="#9B9B9B"
    />
    <path d="M3.02777 7H29.0278V25H3.02777V7Z" fill="white" />
  </svg>
);

export default WhiteFlagFlat;
