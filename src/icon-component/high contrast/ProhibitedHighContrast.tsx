import { SVGProps } from "react";

const ProhibitedHighContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.95 2C8.26 2 2 8.26 2 15.95C2 23.64 8.26 29.9 15.95 29.9C23.64 29.9 29.9 23.65 29.9 15.95C29.9 8.25 23.65 2 15.95 2ZM26.89 15.95C26.89 18.42 26.06 20.7 24.67 22.53L9.37 7.24C11.2 5.85 13.48 5.02 15.95 5.02C21.98 5.01 26.89 9.92 26.89 15.95ZM5.01 15.95C5.01 13.47 5.85 11.19 7.24 9.36L22.54 24.66C20.7 26.05 18.42 26.89 15.95 26.89C9.92 26.89 5.01 21.98 5.01 15.95Z"
      fill="#212121"
    />
  </svg>
);

export default ProhibitedHighContrast;
