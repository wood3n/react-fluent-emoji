import { SVGProps } from "react";

const PButtonFlat = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.9609 9.5C10.9609 8.67157 11.6325 8 12.4609 8H18C20.853 8 23.0703 10.0675 23.0703 13C23.0703 14.4117 22.5477 15.6801 21.5999 16.5929C20.6574 17.5007 19.3789 17.9766 18 17.9766H14.2109C14.0729 17.9766 13.9609 18.0885 13.9609 18.2266V23.5156C13.9609 24.3441 13.2894 25.0156 12.4609 25.0156C11.6325 25.0156 10.9609 24.3441 10.9609 23.5156V9.5ZM13.9609 14.7266C13.9609 14.8646 14.0729 14.9766 14.2109 14.9766H18C18.6857 14.9766 19.1924 14.7465 19.5189 14.4321C19.8401 14.1227 20.0703 13.6529 20.0703 13C20.0703 11.8033 19.2762 11 18 11H14.2109C14.0729 11 13.9609 11.1119 13.9609 11.25V14.7266Z"
      fill="white"
    />
  </svg>
);

export default PButtonFlat;