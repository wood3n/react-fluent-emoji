import { SVGProps } from "react";

const DownwardsButtonHighContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.866 22.5C16.4811 23.1667 15.5189 23.1667 15.134 22.5L8.20577 10.5C7.82087 9.83333 8.302 9 9.0718 9H22.9282C23.698 9 24.1791 9.83333 23.7942 10.5L16.866 22.5Z"
      fill="#212121"
    />
    <path
      d="M6 1C3.23858 1 1 3.23858 1 6V26C1 28.7614 3.23858 31 6 31H26C28.7614 31 31 28.7614 31 26V6C31 3.23858 28.7614 1 26 1H6ZM3 6C3 4.34315 4.34315 3 6 3H26C27.6569 3 29 4.34315 29 6V26C29 27.6569 27.6569 29 26 29H6C4.34315 29 3 27.6569 3 26V6Z"
      fill="#212121"
    />
  </svg>
);

export default DownwardsButtonHighContrast;