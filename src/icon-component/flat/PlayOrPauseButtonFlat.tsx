import { SVGProps } from "react";

const PlayOrPauseButtonFlat = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.3429 15.3103C15.7109 15.6965 15.7109 16.3035 15.3429 16.6898L9.47405 22.8505C8.85145 23.5041 7.75 23.0634 7.75 22.1607V9.83929C7.75 8.93665 8.85145 8.49598 9.47405 9.14954L15.3429 15.3103Z"
      fill="white"
    />
    <path
      d="M17 9.50002C17 9.22387 17.2239 9.00002 17.5 9.00002H19.5C19.7761 9.00002 20 9.22387 20 9.50002V22.5C20 22.7762 19.7761 23 19.5 23H17.5C17.2239 23 17 22.7762 17 22.5V9.50002Z"
      fill="white"
    />
    <path
      d="M21.5 9.00002C21.2239 9.00002 21 9.22387 21 9.50002V22.5C21 22.7762 21.2239 23 21.5 23H23.5C23.7761 23 24 22.7762 24 22.5V9.50002C24 9.22387 23.7761 9.00002 23.5 9.00002H21.5Z"
      fill="white"
    />
  </svg>
);

export default PlayOrPauseButtonFlat;
