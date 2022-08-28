import { SVGProps } from "react";

const FastForwardButtonHighContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17 15.0377L10.6934 8.9692C10.0581 8.35788 9 8.80811 9 9.68977L9 22.3102C9 23.1919 10.0581 23.6421 10.6934 23.0308L17 16.9622V22.3102C17 23.1919 18.0581 23.6421 18.6934 23.0308L25.2512 16.7206C25.66 16.3272 25.66 15.6728 25.2512 15.2794L18.6934 8.9692C18.0581 8.35788 17 8.80811 17 9.68977V15.0377Z"
      fill="#212121"
    />
    <path
      d="M1 6C1 3.23858 3.23858 1 6 1H26C28.7614 1 31 3.23858 31 6V26C31 28.7614 28.7614 31 26 31H6C3.23858 31 1 28.7614 1 26V6ZM6 3C4.34315 3 3 4.34315 3 6V26C3 27.6569 4.34315 29 6 29H26C27.6569 29 29 27.6569 29 26V6C29 4.34315 27.6569 3 26 3H6Z"
      fill="#212121"
    />
  </svg>
);

export default FastForwardButtonHighContrast;
