import { SVGProps } from "react";

const BrownSquareHighContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M28 1C29.6569 1 31 2.34315 31 4V28C31 29.6569 29.6569 31 28 31H4C2.34315 31 1 29.6569 1 28V4C1 2.34315 2.34315 1 4 1H28ZM29 4C29 3.44772 28.5523 3 28 3H26.0017L29 5.99825V4ZM29 6.70536L25.2946 3H21.0017L29 10.9983V6.70536ZM29 11.7054L20.2946 3H16.0017L29 15.9983V11.7054ZM29 16.7054L15.2946 3H11.0017L29 20.9983V16.7054ZM29 21.7054L10.2946 3H6.00175L29 25.9983V21.7054ZM29 26.7054L5.29464 3H4C3.44772 3 3 3.44772 3 4V4.99825L27.0017 29H28C28.5523 29 29 28.5523 29 28V26.7054ZM26.2946 29L3 5.70536V9.99825L22.0017 29H26.2946ZM21.2946 29L3 10.7054V14.9983L17.0017 29H21.2946ZM16.2946 29L3 15.7054V19.9983L12.0017 29H16.2946ZM11.2946 29L3 20.7054V24.9983L7.00175 29H11.2946ZM6.29464 29L3 25.7054V28C3 28.5523 3.44772 29 4 29H6.29464Z"
      fill="#212121"
    />
  </svg>
);

export default BrownSquareHighContrast;
