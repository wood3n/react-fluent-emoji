import { SVGProps } from "react";

const HeartDecorationColor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={2}
      y={2}
      width={28}
      height={28}
      rx={4}
      fill="url(#paint0_linear_7000_5041)"
    />
    <path
      d="M2 26H30V26C30 28.2091 28.2091 30 26 30H6C3.79086 30 2 28.2091 2 26V26Z"
      fill="url(#paint1_linear_7000_5041)"
    />
    <path
      d="M6 2L6 30V30C3.79086 30 2 28.2091 2 26L2 6C2 3.79086 3.79086 2 6 2V2Z"
      fill="url(#paint2_linear_7000_5041)"
    />
    <g opacity={0.2} filter="url(#filter0_f_7000_5041)">
      <rect x={5} y={4} width={23} height={1} fill="white" />
    </g>
    <g opacity={0.2} filter="url(#filter1_f_7000_5041)">
      <rect x={27} y={4} width={1} height={22} fill="white" />
    </g>
    <g opacity={0.6} filter="url(#filter2_f_7000_5041)">
      <circle cx={27} cy={5} r={1} fill="white" />
    </g>
    <g filter="url(#filter3_i_7000_5041)">
      <path
        d="M19.3199 8.88628C17.6657 9.17561 16.7979 10.0689 16.3701 10.7311C16.216 10.9695 15.7259 10.9953 15.5594 10.7655C15.0707 10.0911 14.1495 9.15809 12.6763 8.89658C8.03199 8.07215 6.11478 12.1737 6.88372 15.2138C7.9726 19.4784 12.9894 23.322 15.0798 24.7675C15.6368 25.1527 16.3594 25.1527 16.9164 24.7674C19.0068 23.3215 24.0236 19.4762 25.1125 15.2035C25.8917 12.1634 23.9745 8.07215 19.3199 8.88628Z"
        fill="#FFECFF"
      />
      <path
        d="M19.3199 8.88628C17.6657 9.17561 16.7979 10.0689 16.3701 10.7311C16.216 10.9695 15.7259 10.9953 15.5594 10.7655C15.0707 10.0911 14.1495 9.15809 12.6763 8.89658C8.03199 8.07215 6.11478 12.1737 6.88372 15.2138C7.9726 19.4784 12.9894 23.322 15.0798 24.7675C15.6368 25.1527 16.3594 25.1527 16.9164 24.7674C19.0068 23.3215 24.0236 19.4762 25.1125 15.2035C25.8917 12.1634 23.9745 8.07215 19.3199 8.88628Z"
        fill="url(#paint3_linear_7000_5041)"
      />
    </g>
    <g filter="url(#filter4_f_7000_5041)">
      <path
        d="M8.68748 11.4062C8.14581 11.9479 7.23282 14.3123 8.68748 16.8125C10.2875 19.5625 13.0625 22.25 14.25 23.25"
        stroke="url(#paint4_linear_7000_5041)"
        strokeWidth={0.5}
        strokeLinecap="round"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_7000_5041"
        x={3}
        y={2}
        width={27}
        height={5}
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
        <feGaussianBlur
          stdDeviation={1}
          result="effect1_foregroundBlur_7000_5041"
        />
      </filter>
      <filter
        id="filter1_f_7000_5041"
        x={25}
        y={2}
        width={5}
        height={26}
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
        <feGaussianBlur
          stdDeviation={1}
          result="effect1_foregroundBlur_7000_5041"
        />
      </filter>
      <filter
        id="filter2_f_7000_5041"
        x={23}
        y={1}
        width={8}
        height={8}
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
        <feGaussianBlur
          stdDeviation={1.5}
          result="effect1_foregroundBlur_7000_5041"
        />
      </filter>
      <filter
        id="filter3_i_7000_5041"
        x={4.21875}
        y={8.78125}
        width={21.0625}
        height={18.2751}
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
        <feOffset dx={-2.5} dy={2} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.828719 0 0 0 0 0.697552 0 0 0 0 0.945833 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_7000_5041"
        />
      </filter>
      <filter
        id="filter4_f_7000_5041"
        x={6.65308}
        y={10.1562}
        width={8.84691}
        height={14.3438}
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
        <feGaussianBlur
          stdDeviation={0.5}
          result="effect1_foregroundBlur_7000_5041"
        />
      </filter>
      <linearGradient
        id="paint0_linear_7000_5041"
        x1={28.5}
        y1={3.4375}
        x2={-3.0625}
        y2={35.75}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B690FF" />
        <stop offset={1} stopColor="#5B46A2" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_7000_5041"
        x1={19}
        y1={29}
        x2={19}
        y2={26}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6950BB" />
        <stop offset={1} stopColor="#6950BB" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint2_linear_7000_5041"
        x1={3}
        y1={19}
        x2={6}
        y2={19}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6950BB" />
        <stop offset={1} stopColor="#6950BB" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint3_linear_7000_5041"
        x1={13.3125}
        y1={23}
        x2={17.5625}
        y2={21.125}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F0E1FF" />
        <stop offset={1} stopColor="#F0E1FF" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint4_linear_7000_5041"
        x1={12.125}
        y1={20.75}
        x2={7.46875}
        y2={11.0312}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

export default HeartDecorationColor;
