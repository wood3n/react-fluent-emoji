import { SVGProps } from "react";

const ClubSuitColor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_iii_18_4053)">
      <path
        d="M23.7672 23.4264C27.2148 23.2563 30.0097 20.4848 30.1423 17.1029C30.2953 13.3309 27.225 10.2292 23.4204 10.2292H23.4102C23.0328 10.2292 22.7574 9.90902 22.8084 9.54883C22.8696 9.1386 22.89 8.71835 22.8696 8.27811C22.6962 4.87625 19.8708 2.13477 16.4027 2.0047C12.5675 1.86462 9.41568 4.87626 9.41568 8.59829C9.41568 8.91847 9.43608 9.23866 9.48708 9.54883C9.53808 9.90902 9.24228 10.2092 8.88527 10.2092H8.87507C5.07044 10.2092 2.00022 13.3109 2.15322 17.0829C2.28582 20.4748 5.08064 23.2363 8.52827 23.4064C10.5275 23.5064 12.3533 22.746 13.6487 21.4653C13.8221 21.2952 14.1077 21.4153 14.1077 21.6454V22.9061C14.1077 25.0072 12.3941 26.7182 10.2521 26.7582H10.2215C9.31368 26.7582 8.52827 27.4586 8.50787 28.3491C8.48747 29.2596 9.24228 30 10.1603 30H10.1705H10.2521H15.0155H17.2493H22.0128H22.0944H22.1046C22.8186 30 23.4714 29.5598 23.6754 28.8994C24.0324 27.7788 23.1858 26.7582 22.1046 26.7582H22.023C19.8912 26.7182 18.1674 25.0072 18.1674 22.9061V21.6454C18.1674 21.4053 18.4632 21.2952 18.6264 21.4653C19.9524 22.7661 21.768 23.5265 23.7672 23.4264Z"
        fill="url(#paint0_linear_18_4053)"
      />
    </g>
    <defs>
      <filter
        id="filter0_iii_18_4053"
        x={1.14774}
        y={1.25}
        width={29.75}
        height={29.5}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={-1} />
        <feGaussianBlur stdDeviation={0.5} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.427451 0 0 0 0 0.372549 0 0 0 0 0.482353 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_18_4053"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={0.75} dy={-0.75} />
        <feGaussianBlur stdDeviation={0.625} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.172549 0 0 0 0 0.109804 0 0 0 0 0.227451 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_innerShadow_18_4053"
          result="effect2_innerShadow_18_4053"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={0.75} dy={0.75} />
        <feGaussianBlur stdDeviation={0.625} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.196078 0 0 0 0 0.192157 0 0 0 0 0.2 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="effect2_innerShadow_18_4053"
          result="effect3_innerShadow_18_4053"
        />
      </filter>
      <linearGradient
        id="paint0_linear_18_4053"
        x1={24.4649}
        y1={11.0784}
        x2={11.6021}
        y2={29.1961}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#534165" />
        <stop offset={1} stopColor="#3F3946" />
      </linearGradient>
    </defs>
  </svg>
);

export default ClubSuitColor;
