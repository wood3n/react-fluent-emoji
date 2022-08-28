import { SVGProps } from "react";

const PersonFencingHighContrast = (props: SVGProps<SVGSVGElement>) => (
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
      d="M24.0308 5.25763L24.0806 5.30788C24.1705 5.41671 24.2183 5.49551 24.2764 5.6118C24.3381 5.7353 24.4883 5.78535 24.6118 5.72361C24.7353 5.66186 24.7854 5.51169 24.7236 5.3882C24.7118 5.3645 24.6997 5.34131 24.6873 5.31859L24.734 5.35739L24.7366 5.3552L24.6833 5.31111C24.4901 4.95842 24.3151 4.77579 23.9721 4.56525C23.8607 4.49686 23.727 4.43742 23.5957 4.37904C23.3783 4.28237 23.1674 4.18861 23.0751 4.062C23.0701 3.75252 23.1715 3.45071 23.3625 3.20712C23.5535 2.96354 23.8224 2.79297 24.1241 2.724C24.3111 2.5961 24.5277 2.51812 24.7533 2.49747C24.9789 2.47682 25.206 2.51418 25.4131 2.606H25.5131C25.8287 2.60864 26.1338 2.71988 26.3771 2.921L26.7221 3.211C26.9789 3.41671 27.1873 3.6765 27.3323 3.97188C27.4773 4.26727 27.5554 4.59099 27.5611 4.92L27.5911 7.084C27.5965 8.39484 27.1499 9.66748 26.3266 10.6875C25.5033 11.7076 24.3536 12.4126 23.0711 12.684V15.866L28.3111 26.5L30.3401 27.912C30.5848 28.0786 30.7697 28.3193 30.8675 28.5988C30.9653 28.8782 30.9709 29.1817 30.8835 29.4645C30.7961 29.7474 30.6203 29.9948 30.382 30.1704C30.1436 30.3459 29.8552 30.4404 29.5591 30.44H25.3591C25.0224 30.4395 24.6997 30.3055 24.4617 30.0674C24.2236 29.8294 24.0896 29.5067 24.0891 29.17V28.019L18.7001 19.7L14.2001 22.344L15.0911 28.83V29.17C15.0906 29.5067 14.9566 29.8294 14.7185 30.0674C14.4805 30.3055 14.1578 30.4395 13.8211 30.44H9.6211C9.32611 30.4404 9.03871 30.3465 8.80082 30.1721C8.56293 29.9977 8.387 29.7518 8.29868 29.4703C8.21037 29.1889 8.2143 28.8866 8.3099 28.6075C8.4055 28.3284 8.58776 28.0872 8.8301 27.919L10.5411 26.73L9.3361 21.325C9.24693 20.9429 9.27435 20.5429 9.41482 20.1766C9.55529 19.8103 9.80235 19.4945 10.1241 19.27L14.2361 16.293C14.0771 16.306 13.9171 16.313 13.7571 16.313C12.7376 16.3126 11.7366 16.0406 10.8571 15.525L10.5251 15.331C10.3235 15.4298 10.1005 15.4768 9.87616 15.4679C9.65183 15.459 9.43325 15.3944 9.2401 15.28L8.6101 14.906C8.29762 14.7259 8.02423 14.4853 7.80598 14.1982C7.58772 13.9111 7.429 13.5833 7.3391 13.234C7.233 12.8288 7.22123 12.4046 7.30469 11.9941C7.32499 11.8942 7.3508 11.7958 7.38191 11.6993L2.23156 8.42183C2.07742 8.32374 1.9952 8.15527 2.00015 7.98501C1.99959 7.97084 2.00061 7.95642 2.00327 7.94198C2.0117 7.86933 2.03627 7.79741 2.07817 7.73156C2.22643 7.49859 2.53547 7.42992 2.76844 7.57817L7.85887 10.8175C8.10893 10.5082 8.42353 10.2568 8.78097 10.0811C9.1569 9.89625 9.5702 9.8001 9.9891 9.8C10.4785 9.80156 10.9588 9.93267 11.3811 10.18L12.0181 10.558C12.1784 10.6524 12.3176 10.7787 12.4271 10.929C12.5367 11.0793 12.6143 11.2505 12.6551 11.432C12.685 11.5696 12.6931 11.7109 12.6791 11.851L12.9241 11.995C13.1758 12.1426 13.4623 12.2206 13.7541 12.221C14.0395 12.2226 14.3203 12.1489 14.5682 12.0074C14.8161 11.8659 15.0223 11.6616 15.1661 11.415L15.4661 10.901C15.591 10.5858 15.7561 10.288 15.9571 10.015C15.5326 9.6791 15.1899 9.2512 14.9548 8.76358C14.7198 8.27595 14.5985 7.74132 14.6001 7.2V5.59C14.6009 4.63794 14.9795 3.72512 15.6528 3.05201C16.3261 2.3789 17.239 2.00053 18.1911 2C19.1427 2.00132 20.055 2.38001 20.7278 3.05301C21.4006 3.72601 21.779 4.63837 21.7801 5.59V7.2C21.7794 7.67759 21.6842 8.15033 21.5001 8.591V8.72H21.8621C22.2913 8.72055 22.7033 8.5516 23.0086 8.2499C23.3139 7.9482 23.4876 7.53817 23.4921 7.109V7.067L23.2231 6.838C22.9365 6.59962 22.7538 6.25913 22.7137 5.88851C22.6736 5.51789 22.7791 5.14619 23.0081 4.852C23.3361 4.80228 23.8522 5.10167 24.0308 5.25763ZM18.1911 3C18.8779 3.00027 19.5366 3.27322 20.0222 3.75889C20.5079 4.24455 20.7808 4.90317 20.7811 5.59V6H18.4707V4.73C18.4707 4.01 18.0207 3.39 17.3907 3.13L17.3806 3.13004C17.6397 3.04467 17.9131 3 18.1911 3ZM18.4707 7V8.05C18.4707 8.78 18.0207 9.39001 17.3907 9.66L17.3885 9.66L17.4071 9.666V9.966C16.9423 10.3021 16.6028 10.7059 16.3716 11.3352C16.2328 11.713 16.1908 11.9936 16.1908 12.35V16.11L18.0808 17.94C18.3401 18.1949 18.6695 18.3338 19.0062 18.3585L19.0051 18.36H19.0261L19.0271 18.3599C19.4368 18.3842 19.8555 18.2398 20.1708 17.93L22.0508 16.09L22.0708 16.11V16.1013L22.0701 16.1V12.352C22.0676 9.99449 20.5007 9.74959 20.5007 9.74959L20.5011 9.72V8.373C20.6856 8.00954 20.7816 7.60761 20.7811 7.2V7H18.4707ZM25.0911 29.17L25.0907 27.7199L23.2508 24.87L25.7372 23.5419L27.5201 27.16C27.5201 27.16 29.0014 28.1983 29.7811 28.74C29.8486 28.7866 29.8994 28.8536 29.9261 28.9312C29.9528 29.0088 29.9539 29.0929 29.9293 29.1711C29.9047 29.2494 29.8557 29.3177 29.7894 29.3661C29.7232 29.4145 29.6431 29.4404 29.5611 29.44H25.3611C25.3256 29.4401 25.2904 29.4332 25.2576 29.4197C25.2248 29.4062 25.195 29.3863 25.1699 29.3612C25.1448 29.3361 25.1249 29.3063 25.1114 29.2735C25.0979 29.2407 25.091 29.2055 25.0911 29.17ZM11.6311 11.897C11.6562 11.858 11.6731 11.8143 11.6807 11.7686C11.6883 11.7228 11.6864 11.676 11.6751 11.631C11.6639 11.586 11.6435 11.5438 11.6153 11.507C11.5871 11.4702 11.5516 11.4396 11.5111 11.417L10.8711 11.037C10.603 10.882 10.2988 10.8003 9.9891 10.8C9.607 10.7999 9.23551 10.9257 8.9321 11.1579C8.62869 11.3902 8.41027 11.716 8.31065 12.0849C8.21103 12.4538 8.23575 12.8452 8.38099 13.1986C8.52623 13.552 8.78389 13.8478 9.11411 14.04L9.7541 14.42C9.80796 14.452 9.86945 14.4689 9.9321 14.469C9.9936 14.469 10.054 14.4523 10.1068 14.4208C10.1596 14.3893 10.2029 14.3441 10.2321 14.29L10.3575 14.0738C10.6468 13.5799 10.9027 13.1423 11.1434 12.7308L11.6311 11.897ZM13.5308 24.44H11.0551L11.6601 27.17L9.4001 28.74C9.33259 28.7866 9.28178 28.8536 9.25512 28.9312C9.22846 29.0088 9.22734 29.0929 9.25194 29.1711C9.27654 29.2494 9.32555 29.3177 9.39181 29.3661C9.45806 29.4145 9.53807 29.4404 9.6201 29.44H13.8201C13.8556 29.4401 13.8908 29.4332 13.9236 29.4197C13.9564 29.4062 13.9862 29.3863 14.0113 29.3612C14.0364 29.3361 14.0563 29.3063 14.0698 29.2735C14.0833 29.2407 14.0902 29.2055 14.0901 29.17L13.5308 24.44Z"
      fill="#212121"
    />
    <path
      d="M24.0308 5.25763L24.0353 5.26163C23.9746 5.20083 23.9992 5.22576 24.0308 5.25763Z"
      fill="#212121"
    />
    <path
      d="M24.0764 5.30279C24.0665 5.29088 24.0526 5.27699 24.0353 5.26163L24.0764 5.30279Z"
      fill="#212121"
    />
  </svg>
);

export default PersonFencingHighContrast;