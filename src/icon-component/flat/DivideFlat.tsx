import { SVGProps } from "react";

const DivideFlat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 11C18.2091 11 20 9.20914 20 7C20 4.79086 18.2091 3 16 3C13.7909 3 12 4.79086 12 7C12 9.20914 13.7909 11 16 11Z"
      fill="#635994"
    />
    <path
      d="M2 16.4999C2 14.8199 3.38 13.4399 5.06 13.4399H26.91C28.6 13.4399 29.97 14.8199 29.97 16.4999C29.97 18.1899 28.59 19.5599 26.91 19.5599H5.06C3.38 19.5699 2 18.1899 2 16.4999Z"
      fill="#635994"
    />
    <path
      d="M20 26C20 28.2091 18.2091 30 16 30C13.7909 30 12 28.2091 12 26C12 23.7909 13.7909 22 16 22C18.2091 22 20 23.7909 20 26Z"
      fill="#635994"
    />
  </svg>
);

export default DivideFlat;
