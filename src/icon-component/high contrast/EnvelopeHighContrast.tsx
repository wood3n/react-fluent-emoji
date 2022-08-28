import { SVGProps } from "react";

const EnvelopeHighContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 7.01C1 5.89772 1.89772 5 3.01 5H29C30.1088 5 31 5.90421 31 7.01V25C31 26.1088 30.0958 27 28.99 27H3.01C1.89771 27 1 26.1023 1 24.99V7.01ZM3.00038 7.00506C3.00027 7.00559 3 7.00713 3 7.01V7.5015L15.3261 15.3559C15.7389 15.6179 16.2612 15.618 16.6739 15.3559L29 7.51114V7.01C29 7.00713 28.9997 7.0055 28.9996 7.00478L28.9991 7.00309C28.9987 7.00223 28.998 7.00109 28.997 7H3.01C3.00713 7 3.00559 7.00027 3.00506 7.00038L3.0041 7.00065C3.00381 7.00078 3.00304 7.00118 3.00211 7.00211C3.00118 7.00304 3.00078 7.00381 3.00065 7.0041L3.00038 7.00506ZM29 9.88183L18.9528 16.2762L29 22.6707V9.88183ZM16.9905 17.3981C16.3465 17.604 15.6538 17.604 15.0098 17.3981L3.08002 25H28.935L16.9905 17.3981ZM13.0487 16.2762L3 9.87303V22.6795L13.0487 16.2762Z"
      fill="#212121"
    />
  </svg>
);

export default EnvelopeHighContrast;