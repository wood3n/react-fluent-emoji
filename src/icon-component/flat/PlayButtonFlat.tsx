import { SVGProps } from "react";

const PlayButtonFlat = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#00A6ED"
    />
    <path
      d="M23.5 15.134C24.1667 15.5189 24.1667 16.4811 23.5 16.866L11.5 23.7942C10.8333 24.1791 10 23.698 10 22.9282L10 9.0718C10 8.302 10.8333 7.82088 11.5 8.20578L23.5 15.134Z"
      fill="white"
    />
  </svg>
);

export default PlayButtonFlat;
