import { SVGProps } from "react";

const RadioButtonHighContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={16} cy={16} r={12} stroke="#212121" strokeWidth={4} />
  </svg>
);

export default RadioButtonHighContrast;
