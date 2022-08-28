import { SVGProps } from "react";

const SpeechBalloonHighContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M30.3607 12.7026C28.4967 9.75575 23.8616 4 16 4C8.13837 4 3.50329 9.75575 1.63935 12.7026C0.744461 14.1175 0.744463 15.8825 1.63936 17.2974C2.5077 18.6702 3.94483 20.6044 6.00001 22.3015V26.5017C6.00001 27.6235 7.18622 28.3483 8.18438 27.8365L12.5342 25.6063C13.6148 25.8582 14.7701 26 16 26C23.8616 26 28.4967 20.2442 30.3607 17.2974C31.2556 15.8825 31.2555 14.1175 30.3607 12.7026ZM16 6C22.7902 6 26.9033 10.978 28.6704 13.7717C29.1523 14.5337 29.1523 15.4663 28.6704 16.2282C26.9033 19.022 22.7902 24 16 24C14.8 24 13.689 23.8457 12.6629 23.5782L12.2938 23.482L8.00001 25.6835V21.3345L7.61569 21.0342C5.59373 19.4544 4.17565 17.5658 3.32962 16.2283C2.84771 15.4663 2.84771 14.5337 3.32962 13.7718C5.09669 10.978 9.20985 6 16 6Z"
      fill="#212121"
    />
  </svg>
);

export default SpeechBalloonHighContrast;
