import { SVGProps } from "react";

const CircledMFlat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30Z"
      fill="#5092FF"
    />
    <path
      d="M22.4379 9.56446C22.9258 9.78883 23.2384 10.2767 23.2384 10.8137V21.5741C23.2384 22.3335 22.6228 22.9491 21.8634 22.9491C21.104 22.9491 20.4884 22.3335 20.4884 21.5741V14.0752C20.4884 13.9684 20.3631 13.9108 20.2821 13.9803L16.894 16.8846C16.3912 17.3156 15.6526 17.327 15.1368 16.9116L11.715 14.1562C11.6332 14.0904 11.5116 14.1486 11.5116 14.2536V21.5741C11.5116 22.3335 10.896 22.9491 10.1366 22.9491C9.37721 22.9491 8.7616 22.3335 8.7616 21.5741V11.1199C8.7616 10.5905 9.06547 10.1082 9.54294 9.87962C10.0204 9.65107 10.5867 9.71691 10.999 10.0489L15.8908 13.988C15.9377 14.0258 16.0048 14.0248 16.0505 13.9856L20.9685 9.76975C21.3762 9.42026 21.9501 9.34009 22.4379 9.56446Z"
      fill="white"
    />
  </svg>
);

export default CircledMFlat;
