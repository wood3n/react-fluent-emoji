import { SVGProps } from "react";

const BaseballHighContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 16C1 7.71573 7.71573 1 16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16ZM16 3C15.7542 3 15.5099 3.00682 15.2675 3.02029C15.2767 3.0718 15.2862 3.12323 15.2959 3.17458L16.8113 3.65787C17.0744 3.74177 17.2197 4.02306 17.1358 4.28615C17.0519 4.54924 16.7706 4.6945 16.5075 4.6106L15.5499 4.3052C15.8424 5.42603 16.2464 6.5018 16.7494 7.51995L18.2553 7.61706C18.5308 7.63483 18.7398 7.87264 18.722 8.1482C18.7043 8.42377 18.4665 8.63276 18.1909 8.61499L17.308 8.55805C17.8483 9.48358 18.4735 10.3534 19.173 11.157L20.7304 10.8455C21.0011 10.7913 21.2646 10.9669 21.3187 11.2377C21.3729 11.5085 21.1973 11.7719 20.9265 11.8261L19.9748 12.0164C20.8763 12.9185 21.8786 13.7198 22.9634 14.402L24.3756 13.7037C24.6231 13.5813 24.923 13.6828 25.0454 13.9303C25.1678 14.1778 25.0664 14.4777 24.8188 14.6001L24.0012 15.0044C25.0502 15.5648 26.1649 16.0184 27.3307 16.3507L28.3959 15.3232C28.5558 15.1689 28.7922 15.1424 28.9783 15.2417C28.5856 8.41491 22.9252 3 16 3ZM14.2684 3.11431C8.47382 3.88556 3.88556 8.47383 3.11431 14.2684C3.19461 14.2824 3.27472 14.297 3.35464 14.312L4.39421 13.2238C4.58496 13.0241 4.90146 13.0169 5.10113 13.2077C5.30081 13.3984 5.30804 13.7149 5.1173 13.9146L4.49516 14.5658C5.80637 14.9029 7.05979 15.384 8.23757 15.9913L9.64441 15.2957C9.89195 15.1733 10.1918 15.2748 10.3142 15.5223C10.4366 15.7698 10.3352 16.0697 10.0876 16.1921L9.29639 16.5833C10.3852 17.2413 11.3986 18.0113 12.3207 18.8774L13.7304 18.5955C14.0011 18.5413 14.2646 18.7169 14.3187 18.9877C14.3729 19.2585 14.1973 19.5219 13.9265 19.5761L13.168 19.7278C13.9656 20.5833 14.6809 21.5167 15.3012 22.5152L16.8803 22.6171C17.1558 22.6348 17.3648 22.8726 17.347 23.1482C17.3293 23.4238 17.0915 23.6328 16.8159 23.615L15.9005 23.556C16.4767 24.6386 16.9455 25.7871 17.2928 26.9872L18.7702 27.508C19.0306 27.5998 19.1673 27.8853 19.0755 28.1458C18.9837 28.4062 18.6981 28.5429 18.4377 28.4511L17.5876 28.1515C17.6406 28.3944 17.6886 28.6392 17.7316 28.8857C23.5262 28.1144 28.1144 23.5262 28.8857 17.7316C28.671 17.6941 28.4576 17.6529 28.2456 17.6079L28.5676 18.4317C28.6681 18.6889 28.5411 18.9789 28.2839 19.0794C28.0267 19.18 27.7367 19.053 27.6362 18.7958L27.0565 17.3127C25.8265 16.9621 24.6503 16.484 23.543 15.8936L23.5962 16.7178C23.614 16.9934 23.405 17.2312 23.1294 17.249C22.8538 17.2667 22.616 17.0578 22.5983 16.7822L22.5022 15.2932C21.3588 14.5815 20.301 13.7452 19.3478 12.8032L19.1974 13.5552C19.1432 13.8259 18.8798 14.0016 18.609 13.9474C18.3383 13.8932 18.1627 13.6298 18.2168 13.359L18.506 11.913C17.733 11.0381 17.0438 10.0875 16.4509 9.07369L16.0732 9.83764C15.9508 10.0852 15.6509 10.1866 15.4034 10.0642C15.1559 9.94184 15.0544 9.64195 15.1768 9.39441L15.8686 7.99517C15.3542 6.9593 14.9367 5.86685 14.6278 4.72964L14.157 5.2847C13.9783 5.49528 13.6628 5.52118 13.4522 5.34254C13.2416 5.16391 13.2157 4.84839 13.3944 4.6378L14.3438 3.51866C14.3171 3.38441 14.292 3.24962 14.2684 3.11431ZM3.14792 15.2909C3.10543 15.2829 3.06289 15.2751 3.02029 15.2675C3.00682 15.5099 3 15.7542 3 16C3 22.9346 8.42974 28.6011 15.2697 28.9798C15.1572 28.7958 15.1734 28.5527 15.3252 28.3843L16.3325 27.2671C16.0131 26.163 15.5848 25.1052 15.06 24.106L14.6982 24.8376C14.5758 25.0852 14.2759 25.1866 14.0284 25.0642C13.7809 24.9418 13.6794 24.6419 13.8018 24.3944L14.4619 23.0594C13.8608 22.0893 13.1649 21.1841 12.3871 20.3569L12.1974 21.3052C12.1432 21.5759 11.8798 21.7516 11.609 21.6974C11.3383 21.6432 11.1627 21.3798 11.2168 21.109L11.536 19.5131C10.7007 18.741 9.78766 18.0516 8.81006 17.4581L8.86499 18.3098C8.88276 18.5854 8.67377 18.8232 8.3982 18.8409C8.12264 18.8587 7.88483 18.6497 7.86706 18.3742L7.77043 16.8758C6.69518 16.3222 5.55325 15.88 4.35988 15.5643L4.69267 16.3227C4.80362 16.5756 4.68857 16.8705 4.4357 16.9815C4.18283 17.0924 3.88789 16.9774 3.77694 16.7245L3.14792 15.2909ZM16.117 28.9995C16.3233 28.9977 16.5285 28.991 16.7325 28.9797C16.6998 28.7972 16.6641 28.6157 16.6256 28.4353L16.117 28.9995ZM28.9994 16.1305L28.4769 16.6345C28.6436 16.6696 28.8112 16.7023 28.9797 16.7325C28.9908 16.533 28.9974 16.3323 28.9994 16.1305Z"
      fill="#212121"
    />
  </svg>
);

export default BaseballHighContrast;
