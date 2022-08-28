import { SVGProps } from "react";

const FastForwardButtonFlat = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 16.9622L10.6934 23.0308C10.0581 23.6421 9 23.1919 9 22.3102V9.68974C9 8.80808 10.0581 8.35784 10.6934 8.96916L17 15.0377V9.68974C17 8.80808 18.0581 8.35784 18.6934 8.96916L25.2512 15.2794C25.66 15.6728 25.66 16.3271 25.2512 16.7205L18.6934 23.0308C18.0581 23.6421 17 23.1919 17 22.3102V16.9622Z"
      fill="white"
    />
  </svg>
);

export default FastForwardButtonFlat;