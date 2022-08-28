import { SVGProps } from "react";

const SparkleHighContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.5047 5.61578L17.209 8.00833C18.1687 11.2682 20.7182 13.8177 23.9781 14.7774L26.3706 15.4817C26.849 15.6225 26.849 16.3001 26.3706 16.441L23.9781 17.1453C20.7182 18.1049 18.1687 20.6544 17.209 23.9143L16.5047 26.3069C16.3639 26.7853 15.6863 26.7853 15.5454 26.3069L14.8411 23.9143C13.8815 20.6544 11.332 18.1049 8.07209 17.1453L5.67954 16.441C5.20114 16.3001 5.20114 15.6225 5.67954 15.4817L8.07209 14.7774C11.332 13.8177 13.8815 11.2682 14.8411 8.00833L15.5454 5.61578C15.6863 5.13737 16.3639 5.13737 16.5047 5.61578Z"
      fill="#212121"
    />
    <path
      d="M6 1C3.23858 1 1 3.23858 1 6V26C1 28.7614 3.23858 31 6 31H26C28.7614 31 31 28.7614 31 26V6C31 3.23858 28.7614 1 26 1H6ZM3 6C3 4.34315 4.34315 3 6 3H26C27.6569 3 29 4.34315 29 6V26C29 27.6569 27.6569 29 26 29H6C4.34315 29 3 27.6569 3 26V6Z"
      fill="#212121"
    />
  </svg>
);

export default SparkleHighContrast;
