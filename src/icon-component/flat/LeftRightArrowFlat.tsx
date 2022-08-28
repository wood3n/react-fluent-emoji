import { SVGProps } from "react";

const LeftRightArrowFlat = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.16724 16.6934C5.79468 16.3062 5.79468 15.6938 6.16724 15.3067L11.2795 9.99388C11.9036 9.34521 13 9.78704 13 10.6873L13 13.75C13 13.8881 13.112 14 13.25 14L18.75 14C18.8881 14 19 13.8881 19 13.75L19 10.6873C19 9.78704 20.0964 9.34521 20.7206 9.99388L25.8328 15.3067C26.2054 15.6938 26.2054 16.3062 25.8328 16.6934L20.7206 22.0062C20.0964 22.6549 19 22.213 19 21.3128V18.25C19 18.112 18.8881 18 18.75 18H13.25C13.112 18 13 18.112 13 18.25L13 21.3128C13 22.213 11.9036 22.6549 11.2795 22.0062L6.16724 16.6934Z"
      fill="white"
    />
  </svg>
);

export default LeftRightArrowFlat;
