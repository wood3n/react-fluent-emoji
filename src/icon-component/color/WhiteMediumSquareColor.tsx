import { SVGProps } from "react";

const WhiteMediumSquareColor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_iiii_18590_2830)">
      <path
        d="M5 6.57143C5 5.70355 5.70355 5 6.57143 5H25.4286C26.2964 5 27 5.70355 27 6.57143V25.4286C27 26.2964 26.2964 27 25.4286 27H6.57143C5.70355 27 5 26.2964 5 25.4286V6.57143Z"
        fill="url(#paint0_linear_18590_2830)"
      />
    </g>
    <path
      d="M5 6.57143C5 5.70355 5.70355 5 6.57143 5H25.4286C26.2964 5 27 5.70355 27 6.57143V25.4286C27 26.2964 26.2964 27 25.4286 27H6.57143C5.70355 27 5 26.2964 5 25.4286V6.57143Z"
      fill="url(#paint1_linear_18590_2830)"
    />
    <defs>
      <filter
        id="filter0_iiii_18590_2830"
        x={4}
        y={4.25}
        width={24}
        height={23.75}
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
          values="0 0 0 0 1 0 0 0 0 0.996078 0 0 0 0 1 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_18590_2830"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={1} />
        <feGaussianBlur stdDeviation={0.5} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.811765 0 0 0 0 0.756863 0 0 0 0 0.862745 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_innerShadow_18590_2830"
          result="effect2_innerShadow_18590_2830"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={0.5} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.972549 0 0 0 0 0.952941 0 0 0 0 0.992157 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="effect2_innerShadow_18590_2830"
          result="effect3_innerShadow_18590_2830"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={-0.75} />
        <feGaussianBlur stdDeviation={0.75} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.611765 0 0 0 0 0.439216 0 0 0 0 0.760784 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="effect3_innerShadow_18590_2830"
          result="effect4_innerShadow_18590_2830"
        />
      </filter>
      <linearGradient
        id="paint0_linear_18590_2830"
        x1={16}
        y1={9.15807}
        x2={16}
        y2={27}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F6E8FF" />
        <stop offset={1} stopColor="#BBA4D2" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_18590_2830"
        x1={27}
        y1={7.75328}
        x2={23.6813}
        y2={8.12898}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.1933} stopColor="#E8E8E8" />
        <stop offset={1} stopColor="#E8E8E8" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

export default WhiteMediumSquareColor;
