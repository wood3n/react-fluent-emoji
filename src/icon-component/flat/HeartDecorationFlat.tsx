import { SVGProps } from "react";

const HeartDecorationFlat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 6C2 3.79086 3.79086 2 6 2H26C28.2091 2 30 3.79086 30 6V26C30 28.2091 28.2091 30 26 30H6C3.79086 30 2 28.2091 2 26V6Z"
      fill="#8D65C5"
    />
    <path
      d="M19.24 9.05004C17.41 9.37004 16 11.54 16 11.54C16 11.54 14.59 9.38004 12.76 9.06004C8.23 8.26004 6.36 12.24 7.11 15.19C8.46 20.45 16 25.05 16 25.05C16 25.05 23.54 20.45 24.89 15.18C25.65 12.23 23.78 8.26004 19.24 9.05004Z"
      fill="#F4F4F4"
    />
  </svg>
);

export default HeartDecorationFlat;
