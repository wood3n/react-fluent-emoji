import { SVGProps } from "react";

const SnowmanWithoutSnowHighContrast = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.5572 1.03481C12.6815 1.01141 12.8063 0.999996 12.9299 1C13.196 0.999962 13.4582 1.05276 13.7015 1.15395C14.0269 1.28907 14.3169 1.50961 14.536 1.80164C14.6297 1.92631 14.7091 2.06207 14.772 2.20646L14.78 2.22489L15.289 3.41258L15.54 3.30493C15.9 3.14493 16.32 3.31493 16.48 3.68493C16.5423 3.83034 16.5494 3.98783 16.5106 4.13374C20.5104 4.61759 23.62 8.02285 23.62 12.1548C23.62 13.2267 23.4052 14.1273 22.9613 14.8488C23.6094 15.4228 24.1906 16.071 24.6917 16.7799L25.5234 16.053C25.5212 16.0339 25.52 16.0145 25.52 15.9948V13.5748C25.52 13.2987 25.7439 13.0748 26.02 13.0748C26.2962 13.0748 26.52 13.2987 26.52 13.5748V15.1819L27.611 14.2284C27.8189 14.0467 28.1348 14.0679 28.3165 14.2758C28.4982 14.4837 28.477 14.7996 28.2691 14.9813L25.9081 17.0449H27.02C27.2962 17.0449 27.52 17.2688 27.52 17.5449C27.52 17.8211 27.2962 18.0449 27.02 18.0449H25.4658C26.2793 19.5965 26.74 21.3622 26.74 23.2349C26.74 24.7787 26.4259 26.087 25.8056 27.1697C25.1832 28.2561 24.288 29.0532 23.2261 29.6262C21.1471 30.7481 18.381 31.0349 15.54 31.0349C12.6989 31.0349 9.93288 30.7481 7.85383 29.6262C6.79197 29.0532 5.89673 28.2561 5.2743 27.1697C4.65406 26.087 4.33997 24.7787 4.33997 23.2349C4.33997 21.3582 4.80262 19.5889 5.61936 18.0349H3.94995C3.67381 18.0349 3.44995 17.8111 3.44995 17.5349C3.44995 17.2588 3.67381 17.0349 3.94995 17.0349H5.10046L2.75092 14.9813C2.543 14.7996 2.52177 14.4837 2.70349 14.2758C2.88522 14.0679 3.20109 14.0467 3.40901 14.2284L4.5 15.182V13.5748C4.5 13.2987 4.72386 13.0748 5 13.0748C5.27614 13.0748 5.5 13.2987 5.5 13.5748V15.9948C5.5 16.0145 5.49886 16.034 5.49665 16.0531L6.36538 16.8124C6.86738 16.0968 7.45082 15.4426 8.10204 14.8635C7.66071 14.1382 7.44995 13.2323 7.44995 12.1548C7.44995 10.2153 8.13026 8.43862 9.26461 7.04823C9.2056 6.98791 9.15618 6.91627 9.12003 6.83493C8.97003 6.47493 9.13003 6.04493 9.50003 5.89493L9.76659 5.78063L9.25997 4.605C9.15454 4.36079 9.09833 4.09818 9.09456 3.83221C9.09079 3.56624 9.13954 3.30214 9.23801 3.05504C9.24833 3.02914 9.25918 3.00348 9.27054 2.97807C9.46995 2.5299 9.83216 2.15328 10.32 1.94489L12.13 1.16489C12.1462 1.15797 12.1624 1.15127 12.1787 1.1448C12.3012 1.09584 12.428 1.05906 12.5572 1.03481ZM10.563 5.1L14.247 3.519L13.911 2.73561L10.1866 4.22537L10.563 5.1ZM21.62 12.1548C21.62 8.79895 18.8895 6.07483 15.53 6.07483C12.1713 6.07483 9.44995 8.78803 9.44995 12.1548C9.44995 13.3482 9.77757 13.9106 10.1631 14.2321L11.0165 14.9439C12.1802 15.2401 13.6603 15.2397 15.2872 15.2392H15.2872L15.6651 15.2392C17.3171 15.2395 18.835 15.2399 20.0283 14.9335L20.8979 14.2137C21.2913 13.8881 21.62 13.3273 21.62 12.1548ZM24.74 23.2349C24.74 20.8118 23.8018 18.606 22.2667 16.9611C22.0654 17.3916 21.7913 17.7451 21.4556 18.0349H21.54V23.3849C21.54 23.4406 21.5331 23.4945 21.52 23.546V24.5349C21.52 24.7949 21.3 25.0249 21.03 25.0249C20.76 25.0249 20.54 24.8049 20.54 24.5349V24.0349H19.5301V24.5349C19.5301 24.7949 19.3101 25.0249 19.0401 25.0249C18.7701 25.0249 18.55 24.8049 18.55 24.5349V24.0349H17.52V24.5249C17.52 24.7949 17.3 25.0149 17.03 25.0149C16.76 25.0149 16.54 24.7949 16.54 24.5249V23.5814C16.5205 23.5195 16.51 23.4535 16.51 23.3849V19.3078C16.1928 19.316 15.869 19.3193 15.54 19.3193C12.4288 19.3193 9.78141 19.031 8.8133 16.961C7.27813 18.6059 6.33997 20.8118 6.33997 23.2349C6.33997 24.5061 6.59712 25.4553 7.00969 26.1755C7.42008 26.8918 8.01921 27.4429 8.8036 27.8661C10.4171 28.7367 12.751 29.0349 15.54 29.0349C18.3289 29.0349 20.6629 28.7367 22.2763 27.8661C23.0607 27.4429 23.6598 26.8918 24.0702 26.1755C24.4828 25.4553 24.74 24.5061 24.74 23.2349ZM19.6899 11.1348L15.6299 10.7148C15.1799 10.7148 14.8199 11.0748 14.8199 11.5248C14.8199 11.9748 15.1799 12.3348 15.6299 12.3348L19.6899 11.9148C19.9099 11.9148 20.0899 11.7348 20.0899 11.5148C20.0899 11.2948 19.9099 11.1348 19.6899 11.1348ZM14 8.5C14 8.22386 14.2239 8 14.5 8C14.7761 8 15 8.22386 15 8.5V9.5C15 9.77614 14.7761 10 14.5 10C14.2239 10 14 9.77614 14 9.5V8.5ZM17 8.5C17 8.22386 17.2239 8 17.5 8C17.7761 8 18 8.22386 18 8.5V9.5C18 9.77614 17.7761 10 17.5 10C17.2239 10 17 9.77614 17 9.5V8.5Z"
      fill="#212121"
    />
  </svg>
);

export default SnowmanWithoutSnowHighContrast;
