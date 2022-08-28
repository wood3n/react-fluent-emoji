import { SVGProps } from "react";

const FastUpButtonFlat = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#00A6ED"
    />
    <path
      d="M16.7206 6.74882C16.3272 6.33999 15.6728 6.33999 15.2794 6.74882L8.96919 13.3066C8.35787 13.9419 8.80811 15 9.68977 15H15.0377L8.96919 21.3066C8.35787 21.9419 8.80811 23 9.68977 23L22.3102 23C23.1919 23 23.6421 21.9419 23.0308 21.3066L16.9622 15H22.3102C23.1919 15 23.6421 13.9419 23.0308 13.3066L16.7206 6.74882Z"
      fill="white"
    />
  </svg>
);

export default FastUpButtonFlat;
