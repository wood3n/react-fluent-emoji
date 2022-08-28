import { SVGProps } from "react";

const ClosedBookColor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 2H25C26.1046 2 27 2.89543 27 4V26H8V2Z"
      fill="url(#paint0_linear_18_20721)"
    />
    <path
      d="M8 2H25C26.1046 2 27 2.89543 27 4V26H8V2Z"
      fill="url(#paint1_linear_18_20721)"
    />
    <path
      d="M5.5 26.5H27V29H26.5L26 29.5H5.5V26.5Z"
      fill="url(#paint2_linear_18_20721)"
    />
    <path
      d="M5.5 26.5H27V29H26.5L26 29.5H5.5V26.5Z"
      fill="url(#paint3_linear_18_20721)"
    />
    <path
      d="M6.5 2C5.67157 2 5 2.67157 5 3.5V28H6C6 27.4477 6.44772 27 7 27H8V2H6.5Z"
      fill="url(#paint4_linear_18_20721)"
    />
    <path
      d="M6.5 2C5.67157 2 5 2.67157 5 3.5V28H6C6 27.4477 6.44772 27 7 27H8V2H6.5Z"
      fill="url(#paint5_radial_18_20721)"
    />
    <g filter="url(#filter0_i_18_20721)">
      <path
        d="M6.5 26C5.67157 26 5 26.6716 5 27.5V28.5C5 29.3284 5.67157 30 6.5 30H25.9077C26.5608 30 27 29.6655 27 29H7C6.44772 29 6 28.5523 6 28C6 27.4477 6.44772 27 7 27H27V26H6.5Z"
        fill="url(#paint6_linear_18_20721)"
      />
    </g>
    <defs>
      <filter
        id="filter0_i_18_20721"
        x={5}
        y={26}
        width={22}
        height={4.1}
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
        <feOffset dy={0.1} />
        <feGaussianBlur stdDeviation={0.15} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.694118 0 0 0 0 0.192157 0 0 0 0 0.360784 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_18_20721"
        />
      </filter>
      <linearGradient
        id="paint0_linear_18_20721"
        x1={17.5}
        y1={2}
        x2={17.5}
        y2={26}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E13074" />
        <stop offset={1} stopColor="#E0334C" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_18_20721"
        x1={28.69}
        y1={5.38238}
        x2={25.9803}
        y2={5.47916}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.408703} stopColor="#F76594" />
        <stop offset={1} stopColor="#FA6295" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint2_linear_18_20721"
        x1={6.7215}
        y1={28.4155}
        x2={26.819}
        y2={28.4155}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D5BCEB" />
        <stop offset={1} stopColor="#DCCCED" />
        <stop offset={1} stopColor="#E3D3F2" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_18_20721"
        x1={16.25}
        y1={26.738}
        x2={16.25}
        y2={28.1574}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#9F84AE" />
        <stop offset={1} stopColor="#C5B1D6" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint4_linear_18_20721"
        x1={5.20532}
        y1={16.7376}
        x2={8}
        y2={16.7376}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#9A3E4F" />
        <stop offset={1} stopColor="#AA2C4D" />
      </linearGradient>
      <radialGradient
        id="paint5_radial_18_20721"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(5.39887 26.6735) rotate(-90) scale(6.6454 1.17096)"
      >
        <stop stopColor="#9B3F51" />
        <stop offset={1} stopColor="#9B3F51" stopOpacity={0} />
      </radialGradient>
      <linearGradient
        id="paint6_linear_18_20721"
        x1={6.43117}
        y1={28.9639}
        x2={27}
        y2={28.9316}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#AB1F5C" />
        <stop offset={1} stopColor="#A51E5A" />
      </linearGradient>
    </defs>
  </svg>
);

export default ClosedBookColor;
