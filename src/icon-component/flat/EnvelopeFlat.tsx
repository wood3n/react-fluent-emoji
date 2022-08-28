import { SVGProps } from "react";

const EnvelopeFlat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x={1} y={5} width={30} height={22} rx={1.5} fill="#B4ACBC" />
    <rect x={2} y={7} width={28} height={18} rx={1} fill="#CDC4D6" />
    <path
      d="M30 23.4001L17.029 15.6175C16.3956 15.2375 15.6044 15.2375 14.971 15.6175L2 23.4001V25.0001C2 25.5524 2.44771 26.0001 3 26.0001L29 26.0001C29.5523 26.0001 30 25.5524 30 25.0001V23.4001Z"
      fill="#E1D8EC"
    />
    <path
      d="M2 9.76619V8H30V9.76619L17.5435 17.2401C16.5934 17.8101 15.4066 17.8101 14.4565 17.2401L2 9.76619Z"
      fill="#998EA4"
    />
    <path
      d="M2 8.6V7C2 6.44772 2.44772 6 3 6H29C29.5523 6 30 6.44772 30 7V8.6L17.029 16.3826C16.3956 16.7626 15.6044 16.7626 14.971 16.3826L2 8.6Z"
      fill="#F3EEF8"
    />
  </svg>
);

export default EnvelopeFlat;
