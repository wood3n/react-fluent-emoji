import { SVGProps } from "react";

const MonorailHighContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M30 7C22.3696 8.19939 15.1892 11.5823 9.29882 16.8206L2.85845 22.551C1.12835 24.0887 2.18841 27 4.47854 27H2V30H30L30 7ZM11 19C10.177 19 9.37067 18.929 8.58668 18.7928L9.96355 17.5677C14.1765 13.8211 19.064 11.0486 24.303 9.37454C22.466 14.9642 17.2043 19 11 19ZM15.9017 25.269C17.7353 23.2328 20.6483 21.9921 23.7998 22H29V26H15.2443L15.9017 25.269ZM9 25H7C6.45 25 6 24.55 6 24C6 23.45 6.45 23 7 23H9C9.55 23 10 23.45 10 24C10 24.56 9.55 25 9 25Z"
      fill="#212121"
    />
  </svg>
);

export default MonorailHighContrast;
