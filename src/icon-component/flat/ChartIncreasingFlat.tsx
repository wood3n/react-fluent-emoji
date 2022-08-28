import { SVGProps } from "react";

const ChartIncreasingFlat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 6C2 3.79086 3.79086 2 6 2H26C27.6999 2 29.1521 3.06033 29.7313 4.55565L29.1461 6.33236L30 7.17778V26C30 28.2091 28.2091 30 26 30H6C4.11588 30 2.53602 28.6973 2.11192 26.9435L2.78222 25.0512L2 24.3404V6Z"
      fill="#E1D8EC"
    />
    <path
      d="M10 11V21H2V22H10V30H11V22H21V30H22V22H30V21H22V11H30V10H22V2H21V10H11V2H10V10H2V11H10ZM11 11H21V21H11V11Z"
      fill="#B4ACBC"
    />
    <path
      d="M2.11995 26.9761C2.0416 26.6637 2 26.3367 2 26V24.2988L9.06209 17.3261C9.90713 16.4917 11.2618 16.4786 12.1229 17.2964L14.2711 19.3369C14.4679 19.5238 14.7779 19.5196 14.9696 19.3273L29.7216 4.53076C29.9013 4.98559 30 5.48125 30 5.99997V7.18702L16.1318 20.9016C15.2906 21.7334 13.9423 21.7512 13.0796 20.9417L10.9297 18.9247C10.7335 18.7406 10.4268 18.7448 10.2357 18.9342L2.11995 26.9761Z"
      fill="#F92F60"
    />
  </svg>
);

export default ChartIncreasingFlat;
