import { SVGProps } from "react";

const ComputerMouseHighContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 7C6 3.68629 8.68629 1 12 1H20C23.3137 1 26 3.68629 26 7V25C26 28.3137 23.3137 31 20 31H12C8.68629 31 6 28.3137 6 25V7ZM12 3C9.79086 3 8 4.79086 8 7V25C8 27.2091 9.79086 29 12 29H20C22.2091 29 24 27.2091 24 25V7C24 4.79086 22.2091 3 20 3H17V6C17.5523 6 18 6.44772 18 7V11C18 11.5523 17.5523 12 17 12V14C17 14.5523 16.5523 15 16 15C15.4477 15 15 14.5523 15 14V12C14.4477 12 14 11.5523 14 11V7C14 6.44772 14.4477 6 15 6V3H12Z"
      fill="#212121"
    />
  </svg>
);

export default ComputerMouseHighContrast;
