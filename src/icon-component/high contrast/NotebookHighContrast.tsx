import { SVGProps } from "react";

const NotebookHighContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.5 6C12.9477 6 12.5 6.44772 12.5 7V9C12.5 9.55228 12.9477 10 13.5 10H18.5C19.0523 10 19.5 9.55228 19.5 9V7C19.5 6.44772 19.0523 6 18.5 6H13.5Z"
      fill="#212121"
    />
    <path
      d="M4.5 3.02885V28.5C4.5 29.6151 5.42135 30.5 6.53409 30.5H25.9659C26.8453 30.5 27.601 29.9498 27.8829 29.17L28.1251 28.5H24V27.5H28V4C28 2.34315 26.6569 1 25 1H6.5C5.38649 1 4.5 1.91737 4.5 3.02885ZM23 28.5H7.04545C6.74611 28.5 6.52273 28.2656 6.52273 28C6.52273 27.7344 6.74611 27.5 7.04545 27.5H23V28.5ZM9 25V3H23V25H9ZM24 25V3H25C25.5523 3 26 3.44772 26 4V25H24Z"
      fill="#212121"
    />
  </svg>
);

export default NotebookHighContrast;
