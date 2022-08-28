import { SVGProps } from "react";

const JarHighContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23 8C22.4477 8 22 8.44772 22 9V27C22 27.5523 22.4477 28 23 28C23.5523 28 24 27.5523 24 27V9C24 8.44771 23.5523 8 23 8Z"
      fill="#212121"
    />
    <path
      d="M9.99881 14H21V21H9.99881C9.44718 21 9 20.5523 9 20V15C9 14.4477 9.44718 14 9.99881 14Z"
      fill="#212121"
    />
    <path
      d="M8 2.5C8 1.67157 8.67157 1 9.5 1H22.5C23.3284 1 24 1.67157 24 2.5C24 3.32843 23.3284 4 22.5 4H22V5H24.1053C26.2031 5 28 6.62191 28 8.73809V27.2619C28 29.3781 26.2031 31 24.1053 31H7.89474C5.79688 31 4 29.3781 4 27.2619V8.73809C4 6.62191 5.79688 5 7.89474 5H10V4H9.5C8.67157 4 8 3.32843 8 2.5ZM7.89474 7C6.79516 7 6 7.82986 6 8.73809V27.2619C6 28.1701 6.79516 29 7.89474 29H24.1053C25.2048 29 26 28.1701 26 27.2619V8.73809C26 7.82986 25.2048 7 24.1053 7H7.89474Z"
      fill="#212121"
    />
  </svg>
);

export default JarHighContrast;