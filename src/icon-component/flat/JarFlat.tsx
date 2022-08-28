import { SVGProps } from "react";

const JarFlat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22 5.00001L16 3.85864L10 5.00001V6.00001L16 7.39407L22 6.00001V5.00001Z"
      fill="#9B9B9B"
    />
    <path
      d="M7.89474 6C6.29602 6 5 7.22588 5 8.73809L5 27.2619C5 28.7741 6.29602 30 7.89474 30H24.1053C25.704 30 27 28.7741 27 27.2619V8.73809C27 7.22588 25.704 6 24.1053 6H7.89474Z"
      fill="#AEDDFF"
    />
    <path
      d="M8 3.5C8 2.67157 8.67157 2 9.5 2H22.5C23.3284 2 24 2.67157 24 3.5V3.5C24 4.32843 23.3284 5 22.5 5H9.5C8.67157 5 8 4.32843 8 3.5V3.5Z"
      fill="#BEBEBE"
    />
    <rect x={22} y={8} width={2} height={20} rx={1} fill="white" />
    <path
      d="M9.99881 14C9.44718 14 9 14.4477 9 15V20C9 20.5523 9.44718 21 9.99881 21H22.0012C22.5528 21 23 20.5523 23 20V15C23 14.4477 22.5528 14 22.0012 14H9.99881Z"
      fill="#9B9B9B"
    />
  </svg>
);

export default JarFlat;
