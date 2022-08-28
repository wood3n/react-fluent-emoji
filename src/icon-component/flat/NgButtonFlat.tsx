import { SVGProps } from "react";

const NgButtonFlat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 6C2 3.79086 3.79086 2 6 2H26C28.2091 2 30 3.79086 30 6V26C30 28.2091 28.2091 30 26 30H6C3.79086 30 2 28.2091 2 26V6Z"
      fill="#00A6ED"
    />
    <path
      d="M8.60574 9.76532C8.29991 9.21956 7.66421 8.94906 7.05889 9.1071C6.45357 9.26515 6.03125 9.8119 6.03125 10.4375V21.5625C6.03125 22.3219 6.64686 22.9375 7.40625 22.9375C8.16564 22.9375 8.78125 22.3219 8.78125 21.5625V16.1825C8.78125 16.0538 8.95236 16.0091 9.01529 16.1214L12.4411 22.2347C12.747 22.7805 13.3827 23.051 13.988 22.8929C14.5933 22.7349 15.0156 22.1881 15.0156 21.5625V10.4375C15.0156 9.67811 14.4 9.0625 13.6406 9.0625C12.8812 9.0625 12.2656 9.67811 12.2656 10.4375V15.8175C12.2656 15.9462 12.0945 15.9909 12.0316 15.8786L8.60574 9.76532Z"
      fill="white"
    />
    <path
      d="M21.4259 9.0625C18.6882 9.0625 16.4688 11.2819 16.4688 14.0197V17.9644C16.4688 20.711 18.6953 22.9375 21.4418 22.9375H21.9887C23.4554 22.9375 24.807 22.1431 25.5205 20.8618C25.8555 20.2604 26.0312 19.5834 26.0312 18.895V16.6406C26.0312 15.8812 25.4156 15.2656 24.6562 15.2656H22.3495C21.5901 15.2656 20.9745 15.8812 20.9745 16.6406C20.9745 17.4 21.5901 18.0156 22.3495 18.0156H23.1562C23.2253 18.0156 23.2812 18.0716 23.2812 18.1406V18.895C23.2812 19.1151 23.225 19.3315 23.118 19.5238C22.8898 19.9335 22.4577 20.1875 21.9887 20.1875H21.4418C20.2141 20.1875 19.2188 19.1922 19.2188 17.9644V14.0197C19.2188 12.8007 20.2069 11.8125 21.4259 11.8125C22.235 11.8125 22.9792 12.2551 23.3654 12.966L23.4481 13.1181C23.8106 13.7854 24.6454 14.0325 25.3127 13.6699C25.9799 13.3074 26.227 12.4726 25.8644 11.8053L25.7818 11.6532C24.9144 10.0566 23.243 9.0625 21.4259 9.0625Z"
      fill="white"
    />
  </svg>
);

export default NgButtonFlat;