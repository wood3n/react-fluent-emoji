import { SVGProps } from "react";

const CheckMarkButtonFlat = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#00D26A"
    />
    <path
      d="M13.242 23C12.8588 23 12.4757 22.8566 12.183 22.5692L6.43855 16.9278C5.85382 16.3535 5.85382 15.422 6.43855 14.8477C7.02329 14.2735 7.97186 14.2735 8.55659 14.8477L13.242 19.4491L23.4434 9.43069C24.0281 8.85644 24.9767 8.85644 25.5614 9.43069C26.1462 10.0049 26.1462 10.9365 25.5614 11.5107L14.301 22.5692C14.009 22.8566 13.6252 23 13.242 23Z"
      fill="#F4F4F4"
    />
  </svg>
);

export default CheckMarkButtonFlat;
