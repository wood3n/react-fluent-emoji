import { SVGProps } from "react";

const DiamondSuitFlat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.3784 2.77202L4.52279 14.5547C3.82574 15.3841 3.82574 16.6134 4.52279 17.4528L14.3784 29.2355C15.2303 30.2548 16.7697 30.2548 17.6216 29.2355L27.4772 17.4528C28.1743 16.6234 28.1743 15.3941 27.4772 14.5547L17.6216 2.77202C16.7697 1.74266 15.2303 1.74266 14.3784 2.77202Z"
      fill="#F8312F"
    />
  </svg>
);

export default DiamondSuitFlat;
