import { SVGProps } from "react";

const BriefcaseFlat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 15H30V28C30 29.1046 29.1046 30 28 30H4C2.89543 30 2 29.1046 2 28V15Z"
      fill="#8C5543"
    />
    <path
      d="M11.1 9H4C2.89543 9 2 9.89543 2 11V15C2 17.2091 3.79086 19 6 19H26C28.2091 19 30 17.2091 30 15V11C30 9.89543 29.1046 9 28 9H20.9C20.4367 6.71776 18.419 5 16 5C13.581 5 11.5633 6.71776 11.1 9ZM13.1707 9C13.5825 7.83481 14.6938 7 16 7C17.3062 7 18.4175 7.83481 18.8293 9H13.1707Z"
      fill="#6D4534"
    />
    <path
      d="M13 19L16 18L19 19V21C19 21.5523 18.5523 22 18 22H14C13.4477 22 13 21.5523 13 21V19Z"
      fill="#D3883E"
    />
    <path
      d="M13 18C13 17.4477 13.4477 17 14 17H18C18.5523 17 19 17.4477 19 18V19H13V18Z"
      fill="#E19747"
    />
  </svg>
);

export default BriefcaseFlat;
