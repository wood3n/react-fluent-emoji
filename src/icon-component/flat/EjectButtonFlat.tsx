import { SVGProps } from "react";

const EjectButtonFlat = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.6867 9.6488C16.3013 9.28467 15.6987 9.28467 15.3133 9.6488L8.3016 16.2731C7.644 16.8944 8.08368 18 8.98834 18H23.0116C23.9163 18 24.356 16.8944 23.6984 16.2731L16.6867 9.6488Z"
      fill="white"
    />
    <path
      d="M8 22.5C8 22.7761 8.22385 23 8.5 23H23.5C23.7761 23 24 22.7761 24 22.5V20.5C24 20.2239 23.7761 20 23.5 20H8.5C8.22385 20 8 20.2239 8 20.5V22.5Z"
      fill="white"
    />
  </svg>
);

export default EjectButtonFlat;
