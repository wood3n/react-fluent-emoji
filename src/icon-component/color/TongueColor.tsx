import { SVGProps } from "react";

const TongueColor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M30 7C30 14.73 23.73 21 16 21C8.27 21 2 14.73 2 7H16H30Z"
      fill="#89029C"
    />
    <path
      d="M19.3125 12.0625H12.8125C11.7344 12.0625 8.01562 12.6562 8.01562 14.9688V22.9375C8.01562 25.3438 10.0625 30 16 30C21.9375 30 24 25.3438 24 22.9375V14.9688C24 12.8125 20.8438 12.0625 19.3125 12.0625Z"
      fill="#F92F60"
    />
  </svg>
);

export default TongueColor;