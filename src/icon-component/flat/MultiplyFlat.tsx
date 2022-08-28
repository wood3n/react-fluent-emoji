import { SVGProps } from "react";

const MultiplyFlat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.2225 2.8925C6.0325 1.7025 4.0825 1.7025 2.8925 2.8925C1.7025 4.0925 1.7025 6.0325 2.8925 7.2325L11.6405 15.9765L2.9025 24.7225C1.7125 25.9125 1.7125 27.8625 2.9025 29.0525C4.0925 30.2425 6.0425 30.2425 7.2325 29.0525L15.9735 20.3075L24.7125 29.0425C25.9025 30.2325 27.8525 30.2325 29.0425 29.0425C30.2325 27.8525 30.2325 25.9025 29.0425 24.7125L20.3045 15.9745L29.0525 7.2225C30.2425 6.0325 30.2425 4.0825 29.0525 2.8925C27.8525 1.7025 25.9025 1.7025 24.7125 2.8925L15.9715 11.6415L7.2225 2.8925Z"
      fill="#635994"
    />
  </svg>
);

export default MultiplyFlat;
