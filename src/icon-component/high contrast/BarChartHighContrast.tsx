import { SVGProps } from "react";

const BarChartHighContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 1C3.23858 1 1 3.23858 1 6V26C1 28.7614 3.23858 31 6 31H26C28.7614 31 31 28.7614 31 26V6C31 3.23858 28.7614 1 26 1H6ZM3 6C3 4.34315 4.34315 3 6 3H26C27.6569 3 29 4.34315 29 6V26C29 27.3062 28.1652 28.4175 27 28.8293V7.20899C27 6.53955 26.4527 6 25.7736 6H22.2264C21.5473 6 21 6.53955 21 7.20899V29H19V18.2137C19 17.5417 18.4527 17 17.7736 17H14.2264C13.5473 17 13 17.5417 13 18.2137V29H11V10.2135C11 9.54155 10.4527 9 9.77365 9H6.22635C5.5473 9 5 9.54155 5 10.2135V28.8293C3.83481 28.4175 3 27.3062 3 26V6Z"
      fill="#212121"
    />
  </svg>
);

export default BarChartHighContrast;
