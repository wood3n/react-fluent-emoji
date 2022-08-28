import { SVGProps } from "react";

const WhiteCircleFlat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.0555 1.5C8.04741 1.5 1.55554 7.99187 1.55554 16C1.55554 24.0081 8.04741 30.5 16.0555 30.5C24.0637 30.5 30.5555 24.0081 30.5555 16C30.5555 7.99187 24.0637 1.5 16.0555 1.5Z"
      fill="#9B9B9B"
    />
    <path
      d="M2.55554 16C2.55554 8.54416 8.5997 2.5 16.0555 2.5C23.5114 2.5 29.5555 8.54416 29.5555 16C29.5555 23.4558 23.5114 29.5 16.0555 29.5C8.5997 29.5 2.55554 23.4558 2.55554 16Z"
      fill="white"
    />
  </svg>
);

export default WhiteCircleFlat;