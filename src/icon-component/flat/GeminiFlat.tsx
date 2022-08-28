import { SVGProps } from "react";

const GeminiFlat = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#8D65C5"
    />
    <path
      d="M25.44 24.14C24.01 23.44 22.53 22.9 21 22.54V9.45996C22.53 9.09996 24.01 8.55996 25.44 7.85996C25.94 7.61996 26.14 7.01996 25.9 6.51996C25.66 6.01996 25.06 5.81996 24.56 6.05996C21.88 7.37996 19 8.03996 16 8.03996C13 8.03996 10.12 7.36996 7.44 6.05996C6.94 5.81996 6.35 6.01996 6.1 6.51996C5.86 7.01996 6.06 7.60996 6.56 7.85996C7.99 8.55996 9.47 9.08996 11 9.45996V22.54C9.47 22.9 7.99 23.44 6.56 24.14C6.06 24.38 5.86 24.98 6.1 25.48C6.34 25.98 6.94 26.18 7.44 25.94C10.12 24.62 13 23.96 16 23.96C19 23.96 21.88 24.63 24.56 25.94C24.7 26.01 24.85 26.04 25 26.04C25.37 26.04 25.72 25.83 25.9 25.48C26.14 24.98 25.94 24.39 25.44 24.14ZM13 22.17V9.82996C13.99 9.96996 14.99 10.04 16 10.04C17.01 10.04 18.01 9.96996 19 9.82996V22.16C18.01 22.02 17.01 21.95 16 21.95C14.99 21.96 13.99 22.03 13 22.17Z"
      fill="white"
    />
  </svg>
);

export default GeminiFlat;