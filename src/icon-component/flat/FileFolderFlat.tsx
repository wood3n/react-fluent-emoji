import { SVGProps } from "react";

const FileFolderFlat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.385 7.39062L12.9075 4.915C12.3219 4.32875 11.5275 4 10.6987 4H4.125C2.95125 4 2 4.95125 2 6.125V13.5H12.985H30V10.1375C30 8.96375 29.0488 8.0125 27.875 8.0125H16.8875C16.3237 8.0125 15.7838 7.78875 15.385 7.39062Z"
      fill="#FFB02E"
    />
    <path
      d="M27.875 30H4.125C2.95125 30 2 29.0545 2 27.8878V13.1122C2 11.9455 2.95125 11 4.125 11H27.875C29.0488 11 30 11.9455 30 13.1122V27.8878C30 29.0545 29.0488 30 27.875 30Z"
      fill="#FCD53F"
    />
  </svg>
);

export default FileFolderFlat;
