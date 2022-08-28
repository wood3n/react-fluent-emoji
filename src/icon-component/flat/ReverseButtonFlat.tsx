import { SVGProps } from "react";

const ReverseButtonFlat = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.5 16.866C7.83333 16.4811 7.83333 15.5189 8.5 15.134L20.5 8.20578C21.1667 7.82088 22 8.302 22 9.0718V22.9282C22 23.698 21.1667 24.1791 20.5 23.7942L8.5 16.866Z"
      fill="white"
    />
  </svg>
);

export default ReverseButtonFlat;
