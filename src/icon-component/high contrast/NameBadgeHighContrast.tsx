import { SVGProps } from "react";

const NameBadgeHighContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.5 5.49996C15.6367 5.4023 15.877 5.27576 16 5.27576C16.11 5.27576 16.3293 5.4019 16.4583 5.47608C16.4736 5.48487 16.4876 5.49293 16.5 5.49996C16.5757 5.54288 16.7068 5.62352 16.77 5.69394L20.256 9.67156C20.6533 10.114 21.3467 10.114 21.744 9.67156L24.7175 6.36066C25.0875 5.94874 25.7246 5.91347 26.1077 6.31316C28.5186 8.8281 30 12.241 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16C2 12.241 3.48142 8.8281 5.89227 6.31315C6.27541 5.91347 6.91254 5.94874 7.28249 6.36066L10.256 9.67156C10.6533 10.114 11.3467 10.114 11.744 9.67156L15.2344 5.69394C15.2794 5.64383 15.359 5.59242 15.4267 5.54871C15.4541 5.531 15.4796 5.51455 15.5 5.49996ZM7 16C6.44772 16 6 16.4477 6 17V19C6 19.5522 6.44772 20 7 20H25C25.5523 20 26 19.5522 26 19V17C26 16.4477 25.5523 16 25 16H7Z"
      fill="#212121"
    />
  </svg>
);

export default NameBadgeHighContrast;