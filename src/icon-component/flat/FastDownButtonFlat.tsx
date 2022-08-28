import { SVGProps } from "react";

const FastDownButtonFlat = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.0377 17L8.96919 10.6934C8.35787 10.0581 8.80811 9 9.68977 9H22.3102C23.1919 9 23.6421 10.0581 23.0308 10.6934L16.9622 17H22.3102C23.1919 17 23.6421 18.0581 23.0308 18.6934L16.7206 25.2512C16.3272 25.66 15.6728 25.66 15.2794 25.2512L8.96919 18.6934C8.35787 18.0581 8.80811 17 9.68977 17H15.0377Z"
      fill="white"
    />
  </svg>
);

export default FastDownButtonFlat;
