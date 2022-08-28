import { SVGProps } from "react";

const DownArrowFlat = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 7C14.4477 7 14 7.44772 14 8V17.75C14 17.8881 13.888 18 13.75 18H10.6872C9.78698 18 9.34515 19.0964 9.99382 19.7206L15.3066 24.8328C15.6938 25.2054 16.3062 25.2054 16.6933 24.8328L22.0061 19.7206C22.6548 19.0964 22.213 18 21.3127 18L18.25 18C18.1119 18 18 17.8881 18 17.75V8C18 7.44772 17.5523 7 17 7H15Z"
      fill="white"
    />
  </svg>
);

export default DownArrowFlat;
