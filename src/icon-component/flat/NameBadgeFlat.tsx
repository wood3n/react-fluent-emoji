import { SVGProps } from "react";

const NameBadgeFlat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 5.27576C15.877 5.27576 15.6367 5.4023 15.5 5.49996C15.4292 5.55056 15.2976 5.62352 15.2344 5.69394L11.744 9.67156C11.3467 10.114 10.6533 10.114 10.256 9.67156L7.28249 6.36066C6.91254 5.94874 6.27541 5.91347 5.89227 6.31315C3.48142 8.8281 2 12.241 2 16C2 23.732 8.26801 30 16 30C23.732 30 30 23.732 30 16C30 12.241 28.5186 8.8281 26.1077 6.31316C25.7246 5.91347 25.0875 5.94874 24.7175 6.36066L21.744 9.67156C21.3467 10.114 20.6533 10.114 20.256 9.67156L16.77 5.69394C16.7068 5.62352 16.5757 5.54288 16.5 5.49996C16.3828 5.43355 16.123 5.27576 16 5.27576Z"
      fill="#F92F60"
    />
    <path
      d="M6 17C6 16.4477 6.44772 16 7 16H25C25.5523 16 26 16.4477 26 17V19C26 19.5523 25.5523 20 25 20H7C6.44772 20 6 19.5523 6 19V17Z"
      fill="white"
    />
  </svg>
);

export default NameBadgeFlat;
