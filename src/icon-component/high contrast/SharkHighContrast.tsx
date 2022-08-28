import { SVGProps } from "react";

const SharkHighContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M27 3.00013C27 1.82389 25.9984 0.904305 24.8256 1.0037L24.8178 1.00438C22.7794 1.19304 20.733 1.85594 19.0445 2.85538C18.8375 2.84527 18.6293 2.84016 18.42 2.84016H16.81C10.9777 2.84016 5.09351 5.5807 1.56198 10.2775C0.875487 11.184 0.812315 12.4283 1.40507 13.3989C3.06407 16.1537 6.28574 18.0002 9.51 18.0002H8.77C7.65646 18.0002 6.97157 19.2764 7.67152 20.2022L7.67384 20.2052L12.7931 27.0277L11.5548 28.8853L11.5425 28.9057C11.0104 29.7925 11.6183 31.0002 12.72 31.0002H14.34C15.7114 31.0002 17.0036 30.3157 17.7704 29.1674L17.7721 29.1649L18.5579 28C18.658 27.9995 18.7745 27.9973 18.8948 27.9888C25.6216 27.7399 31 22.2145 31 15.4202C31 11.7855 29.4606 8.51158 27 6.21682V3.00013ZM19.8295 4.71913C21.2921 3.79861 23.1475 3.16857 24.9958 2.99646C24.9981 2.99634 24.9993 2.99646 24.9997 2.9965L25 3.00013V7.11918L25.3453 7.41826C27.5858 9.3587 29 12.2219 29 15.4202C29 16.9441 28.6783 18.3922 28.0991 19.7005C28.3544 19.0561 28.4991 18.3602 28.4991 17.6121C28.4991 15.3692 27.7605 13.7735 26.7325 12.6782C25.7141 11.593 24.4417 11.03 23.4081 10.7854C22.9222 10.6704 22.5 11.0523 22.5 11.5105V13.7576C22.5 13.9022 22.4363 14.0197 22.3672 14.0791C22.3348 14.1068 22.3072 14.1173 22.288 14.1206C22.2715 14.1235 22.2457 14.1241 22.2052 14.1058C21.6759 13.8669 21.2581 13.4102 20.9579 12.8577C20.6578 12.3053 20.4962 11.6941 20.4586 11.2107C20.4294 10.8364 20.1223 10.5 19.7001 10.5H18V9.99006C18 9.71006 17.78 9.49006 17.5 9.49006C17.22 9.49006 17 9.71006 17 9.99006V10.5H16V9.99006C16 9.72006 15.78 9.49006 15.5 9.49006C15.22 9.49006 15 9.71006 15 9.99006V10.5H12.6679C12.408 10.5 12.1519 10.5098 11.8999 10.5284C11.6888 9.99352 11.1674 9.61506 10.5575 9.61506C9.76083 9.61506 9.115 10.2609 9.115 11.0576C9.115 11.0752 9.11531 11.0927 9.11594 11.1101C7.06897 11.8177 5.44838 13.0071 4.4186 13.9457C3.90971 13.4789 3.46712 12.9468 3.11688 12.3646L3.11261 12.3576C2.94824 12.0894 2.96534 11.7368 3.1567 11.4845L3.15935 11.481C6.28797 7.31893 11.563 4.84016 16.81 4.84016H18.42C18.6901 4.84016 18.9577 4.85024 19.2224 4.87001L19.5508 4.89455L19.8295 4.71913ZM5.20762 14.5805C6.18162 13.7138 7.66223 12.6601 9.49819 12.0367C9.76171 12.3217 10.1388 12.5001 10.5575 12.5001C11.1888 12.5001 11.7253 12.0946 11.9209 11.5298C12.166 11.5103 12.4151 11.5 12.6679 11.5H15V12.0001C15 12.2801 15.22 12.5001 15.5 12.5001C15.77 12.5001 16 12.2801 16 12.0001V11.5H17V12.0001C17 12.2801 17.22 12.5001 17.5 12.5001C17.77 12.5001 18 12.2801 18 12.0001V11.5H19.4834C19.5566 12.0736 19.7512 12.7314 20.0793 13.3351C20.4484 14.0145 21.0074 14.6624 21.7939 15.0173C22.2481 15.2223 22.7027 15.1089 23.0185 14.8379C23.3209 14.5783 23.5 14.1778 23.5 13.7576V11.8446C24.3206 12.0893 25.2504 12.5602 26.0033 13.3625C26.8472 14.2617 27.4991 15.6083 27.4991 17.6121C27.4991 19.7682 26.0142 21.5073 23.9934 22.8075C22.2136 23.9526 20.1092 24.6938 18.5387 25.0275V24.6221C18.7373 24.571 18.9328 24.516 19.1255 24.4586L19.1373 24.4549C20.9532 23.8895 22.6479 22.9009 24.0501 21.5639L24.0585 21.5557C24.6788 20.9503 25.0341 20.0943 25.0199 19.1845L25.0197 19.1758C24.9758 17.3774 23.4667 16.0002 21.72 16.0002H9.51C8.00221 16.0002 6.47191 15.4708 5.20762 14.5805ZM17.5387 24.8338V25.63C17.5387 25.7765 17.6029 25.9156 17.7145 26.0106C17.7589 26.0484 17.809 26.0778 17.8625 26.0979C17.499 26.2231 17.1845 26.4632 16.9638 26.7868L16.961 26.7909L16.111 28.0509L16.108 28.0555C15.7145 28.6456 15.0476 29.0002 14.34 29.0002H13.8819L14.5521 27.9949C14.9621 27.3799 14.9504 26.5655 14.4985 25.9681L14.4962 25.9651L10.0204 20.0002C11.6112 20.0003 13.1164 20.7281 14.1302 21.9862L14.1312 21.9874L15.8891 24.1849L15.896 24.1934C16.2891 24.6738 16.9137 24.9245 17.5387 24.8338ZM18.8177 25.9903C20.4854 25.6272 22.6682 24.8492 24.5345 23.6484C25.7246 22.8827 26.8229 21.9194 27.5602 20.7536C25.7875 23.7853 22.5491 25.8533 18.8177 25.9903ZM24.9997 2.9965C24.9997 2.99651 24.9998 2.99652 24.9997 2.9965ZM20.5 18.0002H21.72C22.4318 18.0002 23.0017 18.5604 23.0202 19.2202C23.0247 19.5866 22.8819 19.9073 22.6651 20.121C21.4897 21.2403 20.0683 22.0693 18.5486 22.5436C18.1443 22.6638 17.7556 22.7637 17.3696 22.8339L15.6909 20.7355L15.6888 20.7329C14.3027 19.0118 12.2285 18.0002 10.02 18.0002H16.6864C17.0018 18.9898 17.7008 19.8333 18.6549 20.3215L18.7448 20.3714L18.7526 20.3754C19.5599 20.7877 20.5 20.1984 20.5 19.3001V18.0002ZM19.5 18.0002V19.3001C19.5 19.4596 19.3445 19.55 19.213 19.4876L19.1248 19.4386L19.1167 19.4345C18.5001 19.1209 18.0257 18.6093 17.7548 18.0002H19.5Z"
      fill="#212121"
    />
  </svg>
);

export default SharkHighContrast;
