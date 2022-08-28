import { SVGProps } from "react";

const EnvelopeWithArrowFlat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x={1} y={8} width={30} height={22} rx={1.5} fill="#B4ACBC" />
    <rect x={2} y={10} width={28} height={18} rx={1} fill="#CDC4D6" />
    <path
      d="M30 26.4L17.029 18.6174C16.3956 18.2374 15.6044 18.2374 14.971 18.6174L2 26.4V28C2 28.5523 2.44771 29 3 29L29 29C29.5523 29 30 28.5523 30 28V26.4Z"
      fill="#E1D8EC"
    />
    <path
      d="M2 12.7662V11H30V12.7662L17.5435 20.2401C16.5934 20.8101 15.4066 20.8101 14.4565 20.2401L2 12.7662Z"
      fill="#998EA4"
    />
    <path
      d="M2 11.6V10C2 9.44772 2.44772 9 3 9H29C29.5523 9 30 9.44772 30 10V11.6L17.029 19.3826C16.3956 19.7626 15.6044 19.7626 14.971 19.3826L2 11.6Z"
      fill="#F3EEF8"
    />
    <path
      d="M18.9402 3.47001V10.57C18.9402 10.73 19.0702 10.85 19.2202 10.85H20.2002C20.8202 10.85 21.1502 11.59 20.7302 12.05L16.7202 16.46C16.4402 16.77 15.9502 16.77 15.6602 16.46L11.6402 12.05C11.2202 11.59 11.5502 10.85 12.1702 10.85H13.1502C13.3102 10.85 13.4302 10.72 13.4302 10.57V3.47001C13.4302 3.21001 13.6402 3.00001 13.9002 3.00001H18.4802C18.7302 3.00001 18.9402 3.21001 18.9402 3.47001Z"
      fill="#F92F60"
    />
  </svg>
);

export default EnvelopeWithArrowFlat;
