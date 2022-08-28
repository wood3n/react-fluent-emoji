import { SVGProps } from "react";

const WhiteSquareButtonHighContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 7C6 6.44772 6.44771 6 7 6H25C25.5523 6 26 6.44771 26 7V25C26 25.5523 25.5523 26 25 26H7C6.44772 26 6 25.5523 6 25V7Z"
      fill="#212121"
      stroke="#212121"
      strokeWidth={2}
    />
  </svg>
);

export default WhiteSquareButtonHighContrast;
