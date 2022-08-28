import { SVGProps } from "react";

const CinemaFlat = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 9.5C19 11.433 17.433 13 15.5 13C13.567 13 12 11.433 12 9.5C12 7.567 13.567 6 15.5 6C17.433 6 19 7.567 19 9.5Z"
      fill="white"
    />
    <path
      d="M14.5 14C13.1193 14 12 15.1193 12 16.5V21.5C12 22.8807 13.1193 24 14.5 24H22.5C23.8807 24 25 22.8807 25 21.5V16.5C25 15.1193 23.8807 14 22.5 14H14.5Z"
      fill="white"
    />
    <path
      d="M7.04688 14.8631V23.1893C7.04688 23.8575 7.85473 24.1921 8.32721 23.7197L10.796 21.2509C10.9366 21.1103 11.0156 20.9195 11.0156 20.7206V17.3124C11.0156 17.1125 10.9358 16.9208 10.7939 16.78L8.3251 14.3307C7.85178 13.8611 7.04688 14.1963 7.04688 14.8631Z"
      fill="white"
    />
    <path
      d="M22.5 13C23.8807 13 25 11.8807 25 10.5C25 9.11929 23.8807 8 22.5 8C21.1193 8 20 9.11929 20 10.5C20 11.8807 21.1193 13 22.5 13Z"
      fill="white"
    />
  </svg>
);

export default CinemaFlat;
