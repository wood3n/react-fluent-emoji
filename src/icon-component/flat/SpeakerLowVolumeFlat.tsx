import { SVGProps } from "react";

const SpeakerLowVolumeFlat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.01223 23H3.80282C2.80707 23 2 22.153 2 21.1079V10.8921C2 9.84705 2.80707 9 3.80282 9H8.01223L19 13C20.6569 13 22 14.3431 22 16C22 17.6569 20.6569 19 19 19L8.01223 23Z"
      fill="#B4ACBC"
    />
    <path
      d="M16.6106 26.8309L7.99756 23.0011L7.99758 9.01942L16.0474 5.23153C17.1704 4.70349 19.0356 5.2552 19.0356 6.49651V25.3045C19.0356 26.5512 17.7343 27.3705 16.6106 26.8309Z"
      fill="#CDC4D6"
    />
  </svg>
);

export default SpeakerLowVolumeFlat;