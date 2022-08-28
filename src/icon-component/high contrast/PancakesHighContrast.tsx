import { SVGProps } from "react";

const PancakesHighContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.8971 3.42255L17.2105 1.83266C16.4631 1.38945 15.5469 1.38943 14.7996 1.83266L12.1129 3.42255H10.5924C6.95106 3.42255 4.01001 6.3736 4.01001 10.0049C4.01001 10.1417 4.01418 10.2776 4.02239 10.4123L4.01071 10.4157V12.9766C4.01071 13.215 4.02337 13.4505 4.04805 13.6824C2.17146 15.4459 1 17.9517 1 20.7293C1 26.0633 5.31909 30.3824 10.6531 30.3824H21.3469C26.6746 30.3824 31 26.1524 31 20.7293C31 17.9059 29.8298 15.4019 27.9552 13.6507C27.9777 13.4291 27.9893 13.2041 27.9893 12.9766V10.4157L27.9762 10.4119C27.9844 10.2773 27.9886 10.1416 27.9886 10.0049C27.9986 6.3736 25.0475 3.42255 21.4162 3.42255H19.8971ZM21.0379 4.42255H21.4162C24.4958 4.42255 26.997 6.92581 26.9886 10.0021V10.0049C26.9886 13.0849 24.4942 15.5872 21.4062 15.5872H20.0863V16.3777C20.0863 17.3703 19.2644 18.172 18.2688 18.1581L18.2617 18.158C17.2643 18.1299 16.5153 17.2917 16.5153 16.3277V15.5872H15.3546V19.5589H21.4069C24.5694 19.5589 27.2037 17.3329 27.8418 14.3686C27.9397 14.8224 27.9906 15.2938 27.9893 15.7775C27.9893 19.4088 25.0482 22.3599 21.4069 22.3599H10.5931C6.96176 22.3599 4.01071 19.4188 4.01071 15.7775C4.01071 15.2972 4.06217 14.8288 4.1599 14.3775C4.80207 17.3434 7.44135 19.5589 10.5931 19.5589H11.7837V15.5872H10.5924C7.51236 15.5872 5.01001 13.0929 5.01001 10.0049C5.01001 6.92489 7.50433 4.42255 10.5924 4.42255H10.9692C10.8754 4.61417 10.8192 4.82026 10.8004 5.02853C10.7958 5.05591 10.7934 5.08406 10.7934 5.11277V7.21352L10.7935 7.23852C9.93633 7.81025 9.37244 8.78607 9.37244 9.89542C9.37244 11.3401 10.3327 12.5682 11.6545 12.957L11.659 12.9583C12.3354 13.1642 12.7837 13.7929 12.7837 14.4871V20.2991C12.7837 20.7543 13.1331 21.1159 13.5547 21.1297C13.9979 21.1339 14.3546 20.7759 14.3546 20.3491V14.6771C14.3546 13.8008 15.0586 13.0967 15.935 13.0967C16.8113 13.0967 17.5153 13.8008 17.5153 14.6771V16.3277C17.5153 16.7829 17.8648 17.1444 18.2863 17.1583C18.7296 17.1625 19.0863 16.8045 19.0863 16.3777V14.5371C19.0863 13.8311 19.5482 13.1857 20.2558 12.9941L20.2617 12.9925C21.6351 12.6384 22.6469 11.3845 22.6475 9.90668C22.6417 8.79314 22.0741 7.81667 21.2165 7.24333L21.2167 7.21352V5.11277C21.2167 5.08109 21.2138 5.05011 21.2081 5.02007C21.1878 4.81473 21.131 4.61168 21.0379 4.42255ZM11.7934 6.7658L14.7996 8.5448C15.5451 8.98702 16.4716 8.98967 17.2117 8.54405L20.2167 6.76578V7.21352C20.2167 7.44844 20.1001 7.69005 19.8604 7.83444L19.8593 7.83515L16.7007 9.70424L16.6971 9.70646C16.2771 9.95991 15.7436 9.96189 15.3093 9.70426L12.1482 7.83356L12.1428 7.83044C11.913 7.69829 11.7934 7.46295 11.7934 7.21352V6.7658ZM15.3098 2.69271C15.7427 2.43588 16.2673 2.43588 16.7003 2.69271L19.8593 4.5621L19.8604 4.56277C20.1067 4.71114 20.2252 4.96414 20.2163 5.21881C20.208 5.45497 20.0906 5.6794 19.8632 5.813L19.8619 5.8138L16.7007 7.68445L16.697 7.68668C16.2771 7.94012 15.7436 7.94211 15.3093 7.68447L12.1497 5.81467C11.9212 5.67704 11.8036 5.45054 11.794 5.21583C11.7835 4.95908 11.902 4.70831 12.1468 4.56446L15.3098 2.69271ZM4.01071 16.9207V18.7386C4.01071 22.3799 6.96176 25.3209 10.5931 25.3209H21.4069C25.0482 25.3209 27.9893 22.3698 27.9893 18.7386V16.8798C28.6326 18.0035 29 19.3149 29 20.7293C29 25.0353 25.5826 28.3824 21.3469 28.3824H10.6531C6.42366 28.3824 3 24.9587 3 20.7293C3 19.3431 3.36764 18.0427 4.01071 16.9207Z"
      fill="#212121"
    />
  </svg>
);

export default PancakesHighContrast;
