import { SVGProps } from "react";

const FlagInHoleFlat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M30 24C30 27.3137 23.732 30 16 30C8.26801 30 2 27.3137 2 24C2 20.6863 8.26801 18 16 18C23.732 18 30 20.6863 30 24Z"
      fill="#44911B"
    />
    <path
      d="M15 23.5C15 24.3284 13.2091 25 11 25C8.79086 25 7 24.3284 7 23.5C7 22.6716 8.79086 22 11 22C13.2091 22 15 22.6716 15 23.5Z"
      fill="#212121"
    />
    <path
      d="M11 2C11.5523 2 12 2.44772 12 3V23.5H10V3C10 2.44772 10.4477 2 11 2Z"
      fill="#FFDEA7"
    />
    <path
      d="M23.25 23.5C23.25 24.4665 22.4665 25.25 21.5 25.25C20.5335 25.25 19.75 24.4665 19.75 23.5C19.75 22.5335 20.5335 21.75 21.5 21.75C22.4665 21.75 23.25 22.5335 23.25 23.5Z"
      fill="white"
    />
    <path
      d="M12 3L19.5 6C19.96 6.19 19.96 6.82 19.5 7L12 10V3Z"
      fill="#F8312F"
    />
  </svg>
);

export default FlagInHoleFlat;
