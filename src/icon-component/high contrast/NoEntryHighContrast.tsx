import { SVGProps } from "react";

const NoEntryHighContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30ZM7 14H25C25.5523 14 26 14.4477 26 15V17C26 17.5523 25.5523 18 25 18H7C6.44772 18 6 17.5523 6 17V15C6 14.4477 6.44772 14 7 14Z"
      fill="#212121"
    />
  </svg>
);

export default NoEntryHighContrast;
