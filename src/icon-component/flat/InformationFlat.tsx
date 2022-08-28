import { SVGProps } from "react";

const InformationFlat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x={2} y={2} width={28} height={28} rx={4} fill="#00A6ED" />
    <path
      d="M16 9.97119C17.0925 9.97119 17.9781 9.08554 17.9781 7.99304C17.9781 6.90054 17.0925 6.01489 16 6.01489C14.9075 6.01489 14.0219 6.90054 14.0219 7.99304C14.0219 9.08554 14.9075 9.97119 16 9.97119Z"
      fill="white"
    />
    <path
      d="M17.6102 13.7179C17.6102 12.7514 16.8267 11.9679 15.8602 11.9679C14.8937 11.9679 14.1102 12.7514 14.1102 13.7179L14.1102 24.3084C14.1102 25.2749 14.8937 26.0584 15.8602 26.0584C16.8267 26.0584 17.6102 25.2749 17.6102 24.3084L17.6102 13.7179Z"
      fill="white"
    />
  </svg>
);

export default InformationFlat;