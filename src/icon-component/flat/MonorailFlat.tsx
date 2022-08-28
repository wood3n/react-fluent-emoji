import { SVGProps } from "react";

const MonorailFlat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M30 27H3C2.44772 27 2 27.4477 2 28V30H30V27Z" fill="#D3D3D3" />
    <path
      d="M30 7C28.1802 7.28605 26.3859 7.6963 24.6287 8.2263C20.5 11 20.4855 11.011 16 15L7.37991 18.528L2.85845 22.551C1.12835 24.0887 2.18841 27 4.47854 27H13L28 25.5L30 21V7Z"
      fill="#0074BA"
    />
    <path
      d="M9 25H7C6.45 25 6 24.55 6 24C6 23.45 6.45 23 7 23H9C9.55 23 10 23.45 10 24C10 24.56 9.55 25 9 25Z"
      fill="#F8312F"
    />
    <path
      d="M15.1584 24.6L13 27H30V21H23.8023C20.4002 20.9915 17.2037 22.3286 15.1584 24.6Z"
      fill="#E6E6E6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.6263 8.22705C23.1691 14.4034 17.6214 19 11 19C9.74831 19 8.53496 18.8358 7.38037 18.5276L9.29883 16.8206C13.7837 12.8322 19.0164 9.9194 24.6263 8.22705Z"
      fill="#26C9FC"
    />
  </svg>
);

export default MonorailFlat;
