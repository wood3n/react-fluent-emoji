import { SVGProps } from "react";

const FlowerPlayingCardsHighContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 7C8 5.89543 8.89543 5 10 5H22C23.1046 5 24 5.89543 24 7V19.1138C23.4688 19.0389 22.9243 19 22.3699 19C20.9615 19 19.6178 19.2509 18.3906 19.706C17.1348 16.9476 14.0752 15 10.5 15C9.62994 15 8.79042 15.1153 8 15.3296V7ZM20.5 10.5C20.5 12.9853 18.4853 15 16 15C13.5147 15 11.5 12.9853 11.5 10.5C11.5 8.01472 13.5147 6 16 6C18.4853 6 20.5 8.01472 20.5 10.5Z"
      fill="#212121"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 4C5 2.89543 5.89543 2 7 2H25C26.1046 2 27 2.89543 27 4V28C27 29.1046 26.1046 30 25 30H7C5.89543 30 5 29.1046 5 28V4ZM7 6C7 4.89543 7.89543 4 9 4H23C24.1046 4 25 4.89543 25 6V26C25 27.1046 24.1046 28 23 28H9C7.89543 28 7 27.1046 7 26V6Z"
      fill="#212121"
    />
  </svg>
);

export default FlowerPlayingCardsHighContrast;
