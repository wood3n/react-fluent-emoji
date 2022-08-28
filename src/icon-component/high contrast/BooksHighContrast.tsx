import { SVGProps } from "react";

const BooksHighContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.5 23C2.67157 23 2 22.3284 2 21.5V6C2 4.89543 2.89543 4 4 4H15C16.1046 4 17 4.89543 17 6V7H21C22.1046 7 23 7.89543 23 9V11H28C29.1046 11 30 11.8954 30 13V28H16.5C16.2239 28 16 28.2239 16 28.5C16 28.7761 16.2239 29 16.5 29H29.9146C29.7087 29.5826 29.1531 30 28.5 30H16.5C15.6716 30 15 29.3284 15 28.5V26H9.5C8.67157 26 8 25.3284 8 24.5V23H3.5ZM16.9146 22C16.7087 22.5826 16.1531 23 15.5 23H22V9C22 8.44772 21.5523 8 21 8H17V21H3.5C3.22386 21 3 21.2239 3 21.5C3 21.7761 3.22384 22 3.49998 22H16.9146ZM9 23H9.5C9.32468 23 9.15639 23.0301 9 23.0854V23ZM16 20V6C16 5.44772 15.5523 5 15 5H5V20H16ZM16 26V27.0854C16.1564 27.0301 16.3247 27 16.5 27H29V13C29 12.4477 28.5523 12 28 12H23V24H9.5C9.22386 24 9 24.2239 9 24.5C9 24.7761 9.22384 25 9.49998 25H22.9146C22.7087 25.5826 22.1531 26 21.5 26H16Z"
      fill="#212121"
    />
  </svg>
);

export default BooksHighContrast;