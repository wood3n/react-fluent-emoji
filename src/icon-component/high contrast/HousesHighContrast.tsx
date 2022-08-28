import { SVGProps } from "react";

const HousesHighContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.68104 13.3697L5.67539 13.3754C4.94062 14.1102 4.92567 15.3114 5.68571 16.0498C6.30363 16.65 7.26359 16.7669 8 16.3218V19.2001C8.83377 19.4796 9.54102 20.0361 10 20.7678V16.02C10 15.46 10.46 15 11.02 15H14.98C15.54 15 16 15.46 16 16.02V23.0261C15.906 23.009 15.8082 23 15.7078 23H11.9396C11.9471 23.0365 11.9539 23.0733 11.9599 23.1103C11.9735 23.168 11.983 23.23 11.9864 23.2959C11.9902 23.3238 11.9925 23.3478 11.9941 23.3666C12.0002 23.4392 12 23.5069 12 23.5322L12 23.537C12 23.6948 11.9863 23.8495 11.96 24H20.04C20.0137 23.8495 20 23.6948 20 23.537L20 23.5323C20 23.507 19.9998 23.4392 20.0059 23.3666C20.0075 23.3478 20.0098 23.3239 20.0136 23.2959C20.017 23.23 20.0265 23.168 20.0401 23.1103C20.2053 22.0913 20.9417 21.2706 21.8941 20.9478C22.5051 19.8386 23.667 19.0859 25 19.0069V18.1271L25 18.1255C24.9998 18.12 24.9992 18.1008 25 18.0714V16.3294C25.2268 16.4546 25.4739 16.5299 25.7251 16.5553C25.8665 16.435 26.0252 16.3335 26.1982 16.2553C26.5437 15.6869 27.103 15.2529 27.7731 15.0808C27.9092 14.4823 27.7531 13.827 27.2623 13.3482L27.2593 13.3452L19.0057 5.21406C19.0312 5.09124 19.1392 5 19.27 5H20.71C20.85 5 20.97 5.12 20.97 5.27V6.31417L23.1326 4.1825C23.1326 4.1725 23.1426 4.1725 23.1426 4.1725C23.3826 3.9425 23.7626 3.9425 23.9926 4.1725L30.2826 10.3725C30.5126 10.6025 30.5326 10.9825 30.2926 11.2125C30.0526 11.4425 29.6726 11.4425 29.4426 11.2125L28.9825 10.7595V15.0621C29.4581 15.1682 29.8849 15.405 30.2237 15.7324L30.23 15.7385L30.2362 15.7447C30.7051 16.214 31 16.866 31 17.5853C31 17.8716 30.9499 18.143 30.8744 18.385L30.8715 18.394L30.8686 18.4029C30.7806 18.667 30.6525 18.9125 30.49 19.1317V27C30.49 28.3807 29.3707 29.5 27.99 29.5H4C2.61929 29.5 1.5 28.3807 1.5 27V19.1181C1.34224 18.9024 1.21756 18.6615 1.13144 18.4029L1.12846 18.394L1.12565 18.385C1.0501 18.143 1 17.8716 1 17.5853C1 16.866 1.29491 16.2139 1.76378 15.7447L1.76998 15.7385L1.77628 15.7324C2.11093 15.409 2.53139 15.1741 3 15.0661V10.7623L2.5225 11.2325C2.2825 11.4625 1.9025 11.4625 1.6725 11.2325C1.4425 11.0025 1.4425 10.6225 1.6725 10.3925L4 8.09825V5.27C4 5.12 4.12 5 4.27 5H5.71C5.85 5 5.97 5.12 5.97 5.27V6.15639L7.9725 4.1825C7.9725 4.1725 7.9825 4.1725 7.9825 4.1725C8.2225 3.9425 8.6025 3.9425 8.8325 4.1725L11.9271 7.22279L5.68104 13.3697ZM3 16.1103C2.8021 16.1882 2.62298 16.3048 2.47118 16.4515C2.42005 16.5027 2.37233 16.5573 2.32841 16.6149C2.12256 16.8849 2 17.2214 2 17.5853C2 17.7559 2.03008 17.9264 2.0802 18.087C2.21053 18.4783 2.4812 18.7993 2.84211 18.99V19H5.52882C5.80952 18.8094 6 18.4883 6 18.1271C6 18.087 6 18.0569 5.98998 18.0268V17.9967C5.93985 17.5853 5.65915 17.2441 5.2782 17.1237C5.16792 17.0936 5.06767 17.0134 5.01754 16.903C4.75689 16.3712 4.21554 16 3.58396 16C3.37796 16 3.18112 16.039 3 16.1103ZM29.6759 16.6205C29.6308 16.5608 29.5816 16.5043 29.5288 16.4515C29.3726 16.3005 29.1873 16.1814 28.9825 16.1035C28.8062 16.0365 28.6154 16 28.416 16C27.7845 16 27.2431 16.3712 26.9825 16.903C26.9323 17.0134 26.8321 17.0936 26.7218 17.1237C26.3409 17.2441 26.0602 17.5853 26.01 17.9967V18.0268C26 18.0569 26 18.087 26 18.1271C26 18.4883 26.1905 18.8094 26.4712 19H29.1579V18.99C29.5188 18.7993 29.7895 18.4783 29.9198 18.087C29.9699 17.9264 30 17.7559 30 17.5853C30 17.5627 29.9995 17.5402 29.9986 17.5179C29.9846 17.1824 29.8664 16.8728 29.6759 16.6205ZM25 20.0093C24.0024 20.0889 23.1518 20.6753 22.7282 21.5093C22.6408 21.6944 22.466 21.8241 22.2621 21.8796C21.6019 22.0833 21.1068 22.6481 21.0194 23.3241C21.0097 23.3426 21.0097 23.3611 21.0194 23.3704C21 23.4167 21 23.4815 21 23.537C21 23.6968 21.0226 23.8522 21.0648 24C21.1839 24.4174 21.4596 24.7743 21.8252 25H26.534C27.165 24.6852 27.6408 24.1481 27.8544 23.4907C27.9515 23.2222 28 22.9444 28 22.6481C28 21.9167 27.6893 21.2407 27.1748 20.7593C26.6699 20.2963 25.9903 20 25.233 20C25.1546 20 25.0768 20.0031 25 20.0093ZM10.9352 24C10.9774 23.8522 11 23.6968 11 23.537C11 23.4815 11 23.4167 10.9806 23.3704C10.9903 23.3611 10.9903 23.3426 10.9806 23.3241C10.9662 23.2127 10.9407 23.1043 10.9052 23C10.7551 22.5587 10.4258 22.1915 10 21.9834C9.91616 21.9424 9.82857 21.9076 9.73786 21.8796C9.53398 21.8241 9.35922 21.6944 9.27184 21.5093C8.9995 20.9732 8.55079 20.5394 8 20.2768C7.62794 20.0993 7.2093 20 6.76699 20C6.00971 20 5.3301 20.2963 4.82524 20.7593C4.31068 21.2407 4 21.9167 4 22.6481C4 22.9444 4.04854 23.2222 4.14563 23.4907C4.35922 24.1481 4.83495 24.6852 5.46602 25H10.1748C10.5404 24.7743 10.8161 24.4174 10.9352 24ZM14.88 19.44C14.88 19.197 14.683 19 14.44 19C14.197 19 14 19.197 14 19.44C14 19.683 14.197 19.88 14.44 19.88C14.683 19.88 14.88 19.683 14.88 19.44Z"
      fill="#212121"
    />
    <path
      d="M6.3825 14.0825C6.0325 14.4325 6.0325 14.9925 6.3825 15.3325C6.7325 15.6725 7.3025 15.6825 7.6525 15.3325L16.4825 6.6325L25.2825 15.3025C25.6325 15.6525 26.2025 15.6525 26.5525 15.3025C26.9025 14.9525 26.9125 14.4025 26.5625 14.0625L17.1225 4.7625C16.7725 4.4125 16.2025 4.4125 15.8525 4.7625C15.8525 4.7625 15.8425 4.7625 15.8425 4.7725L6.3825 14.0825Z"
      fill="#212121"
    />
    <path
      d="M21.4286 19H18.5714C18.2506 19 18 18.7393 18 18.4286V15.5714C18 15.2506 18.2607 15 18.5714 15H21.4286C21.7494 15 22 15.2607 22 15.5714V18.4286C22 18.7494 21.7494 19 21.4286 19Z"
      fill="#212121"
    />
  </svg>
);

export default HousesHighContrast;
