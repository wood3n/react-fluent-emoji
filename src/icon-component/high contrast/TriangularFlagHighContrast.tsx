import { SVGProps } from "react";

const TriangularFlagHighContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 2C4.89543 2 4 2.89543 4 4V30H8V4C8 2.89543 7.10457 2 6 2Z"
      fill="#212121"
    />
    <path
      d="M27.6259 13.0562L9 20.5952V4.40476L27.6259 11.9438C28.1258 12.1462 28.1258 12.8538 27.6259 13.0562Z"
      fill="#212121"
    />
  </svg>
);

export default TriangularFlagHighContrast;
