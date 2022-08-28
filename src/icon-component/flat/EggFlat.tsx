import { SVGProps } from "react";

const EggFlat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.3312 2C13.7612 2 11.3512 3.28 9.91117 5.4L9.78117 5.59C6.91117 9.82 5.61117 14.92 6.10117 20L6.18117 20.8C6.68117 26.01 11.0612 29.98 16.2912 29.98C21.5412 29.98 25.9212 25.99 26.4012 20.76L26.4912 19.83C26.9712 14.71 25.6312 9.58 22.7112 5.35C21.2612 3.26 18.8812 2 16.3312 2Z"
      fill="#F3AD61"
    />
  </svg>
);

export default EggFlat;
