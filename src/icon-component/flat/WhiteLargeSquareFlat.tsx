import { SVGProps } from "react";

const WhiteLargeSquareFlat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.02783 1.5C2.64712 1.5 1.52783 2.61929 1.52783 4V28C1.52783 29.3807 2.64712 30.5 4.02783 30.5H28.0278C29.4085 30.5 30.5278 29.3807 30.5278 28V4C30.5278 2.61929 29.4085 1.5 28.0278 1.5H4.02783Z"
      fill="#9B9B9B"
    />
    <path
      d="M2.52783 4C2.52783 3.17157 3.19941 2.5 4.02783 2.5H28.0278C28.8563 2.5 29.5278 3.17157 29.5278 4V28C29.5278 28.8284 28.8563 29.5 28.0278 29.5H4.02783C3.19941 29.5 2.52783 28.8284 2.52783 28V4Z"
      fill="white"
    />
  </svg>
);

export default WhiteLargeSquareFlat;
