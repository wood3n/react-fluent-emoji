import { SVGProps } from "react";

const AntennaBarsFlat = (props: SVGProps<SVGSVGElement>) => (
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
      d="M23.87 27H26.12C26.61 27 27 26.61 27 26.13V5.88C27 5.39 26.61 5 26.13 5H23.88C23.39 5 23 5.39 23 5.88V26.12C23 26.61 23.39 27 23.87 27Z"
      fill="white"
    />
    <path
      d="M20.12 27H17.87C17.39 27 17 26.61 17 26.12V9.88C17 9.39 17.39 9 17.88 9H20.13C20.61 9 21 9.39 21 9.88V26.13C21 26.61 20.61 27 20.12 27Z"
      fill="white"
    />
    <path
      d="M11.88 27H14.12C14.61 27 15 26.61 15.01 26.13V14.88C15.01 14.39 14.61 14 14.13 14H11.88C11.39 14 11 14.39 11 14.88V26.12C11 26.61 11.39 27 11.88 27Z"
      fill="white"
    />
    <path
      d="M5.88 27H8.12C8.61 27 9 26.61 9 26.13V20.88C9 20.39 8.61 20 8.13 20H5.88C5.39 20 5 20.39 5 20.87V26.12C5 26.61 5.39 27 5.88 27Z"
      fill="white"
    />
  </svg>
);

export default AntennaBarsFlat;
