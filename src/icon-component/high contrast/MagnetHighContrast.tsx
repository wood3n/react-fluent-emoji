import { SVGProps } from "react";

const MagnetHighContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 1C8.26772 1 2 7.26772 2 15V29.06C2 30.1323 2.86771 31 3.94 31H10.06C11.1323 31 12 30.1323 12 29.06V15.06C12 12.8403 13.7757 11.0158 15.9573 11L15.9608 10.9999C18.1819 10.976 20 12.7841 20 15V29.06C20 30.1323 20.8677 31 21.94 31H28.06C29.1323 31 30 30.1323 30 29.06V15C30 7.26772 23.7323 1 16 1ZM4 23H10V29H4V23ZM22 23H28V29H22V23Z"
      fill="#212121"
    />
  </svg>
);

export default MagnetHighContrast;
