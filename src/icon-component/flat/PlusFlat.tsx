import { SVGProps } from "react";

const PlusFlat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.05 5.06C19.05 3.38 17.68 2 15.99 2C14.3 2 12.92 3.38 12.93 5.06V12.9301H5.06C3.38 12.9301 2 14.3001 2 15.9901C2 17.6701 3.38 19.0501 5.06 19.0501H12.93V26.91C12.93 28.59 14.3 29.97 15.99 29.97C17.67 29.97 19.05 28.6 19.05 26.91V19.0501H26.91C28.59 19.0501 29.97 17.6801 29.97 15.9901C29.97 14.3101 28.6 12.9301 26.91 12.9301H19.05V5.06Z"
      fill="#635994"
    />
  </svg>
);

export default PlusFlat;
