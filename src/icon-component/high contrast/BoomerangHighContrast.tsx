import { SVGProps } from "react";

const BoomerangHighContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.26443 2.25731C3.20508 1.3164 4.52155 0.874698 5.82199 1.03079L19.3385 2.66201C24.5678 3.29803 28.6897 7.42127 29.3253 12.6607L30.9655 26.176C31.1348 27.4889 30.6745 28.8049 29.7401 29.7395C27.4596 32.0206 23.5511 31.0714 22.5859 27.9795L18.6451 15.4235C18.333 14.4341 17.5664 13.667 16.5776 13.3548L4.02409 9.41268C0.936708 8.44776 -0.0278816 4.55022 2.26443 2.25731ZM5.58339 3.01651C4.88304 2.93252 4.17874 3.17129 3.67883 3.67133C2.44983 4.90066 2.96635 6.98705 4.62033 7.50362L4.62181 7.50409L5.51988 7.7861L6.50992 3.12832L5.58339 3.01651ZM9.35338 8.98993L10.497 3.6095L9.50023 3.48921L8.39499 8.68897L9.35338 8.98993ZM14.1452 10.4947L17.1785 11.4472C18.7902 11.9557 20.0443 13.2102 20.5525 14.8221L21.5044 17.8549L27.7791 16.5212L27.3399 12.9016C26.815 8.57442 23.4127 5.17227 19.0979 4.64749L15.4809 4.21097L14.1452 10.4947ZM28.3839 21.5044L23.0085 22.647L23.3092 23.6053L28.5048 22.5009L28.3839 21.5044ZM24.2117 26.4805L24.4951 27.3836C25.0106 29.035 27.1046 29.5469 28.3257 28.3255C28.8309 27.8201 29.0709 27.1166 28.9816 26.4295L28.9806 26.4211L28.8677 25.4908L24.2117 26.4805Z"
      fill="#212121"
    />
  </svg>
);

export default BoomerangHighContrast;
