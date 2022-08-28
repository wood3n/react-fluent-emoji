import { SVGProps } from "react";

const WarningFlat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.839 5.6675L2.17899 27.5975C1.66899 28.4875 2.30899 29.6075 3.33899 29.6075H28.659C29.689 29.6075 30.329 28.4975 29.819 27.5975L17.159 5.6675C16.639 4.7775 15.359 4.7775 14.839 5.6675Z"
      fill="#FFB02E"
    />
    <path
      d="M14.599 21.4975C14.599 22.2675 15.219 22.8975 15.999 22.8975C16.779 22.8975 17.399 22.2675 17.399 21.4875V12.3275C17.399 11.5575 16.779 10.9275 15.999 10.9275C15.229 10.9275 14.599 11.5475 14.599 12.3275V21.4975Z"
      fill="black"
    />
    <path
      d="M17.399 25.4775C17.399 26.2507 16.7722 26.8775 15.999 26.8775C15.2258 26.8775 14.599 26.2507 14.599 25.4775C14.599 24.7043 15.2258 24.0775 15.999 24.0775C16.7722 24.0775 17.399 24.7043 17.399 25.4775Z"
      fill="black"
    />
  </svg>
);

export default WarningFlat;
