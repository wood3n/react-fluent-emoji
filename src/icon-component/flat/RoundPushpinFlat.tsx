import { SVGProps } from "react";

const RoundPushpinFlat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.93 29.92C15.37 29.92 14.92 29.47 14.92 28.91V15.94H16.95V28.9C16.94 29.47 16.49 29.92 15.93 29.92Z"
      fill="#D3D3D3"
    />
    <path
      d="M15.93 17.86C20.3096 17.86 23.86 14.3096 23.86 9.93C23.86 5.55038 20.3096 2 15.93 2C11.5504 2 8 5.55038 8 9.93C8 14.3096 11.5504 17.86 15.93 17.86Z"
      fill="#F70A8D"
    />
    <path
      d="M16.5 5.41001C15.46 6.45001 15.41 8.07001 16.38 9.04001C17.35 10.01 18.98 9.96001 20.01 8.92001C21.05 7.88001 21.1 6.26001 20.13 5.29001C19.16 4.32001 17.53 4.37001 16.5 5.41001Z"
      fill="white"
    />
  </svg>
);

export default RoundPushpinFlat;
