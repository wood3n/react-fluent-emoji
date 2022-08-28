import { SVGProps } from "react";

const WhiteSmallSquareColor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_iiii_18590_2870)">
      <path
        d="M11.3438 11.2206C11.3438 10.8267 11.6631 10.5074 12.057 10.5074H20.6158C21.0097 10.5074 21.329 10.8267 21.329 11.2206V19.7794C21.329 20.1733 21.0097 20.4926 20.6158 20.4926H12.057C11.6631 20.4926 11.3438 20.1733 11.3438 19.7794V11.2206Z"
        fill="url(#paint0_linear_18590_2870)"
      />
    </g>
    <path
      d="M11.3438 11.2206C11.3438 10.8267 11.6631 10.5074 12.057 10.5074H20.6158C21.0097 10.5074 21.329 10.8267 21.329 11.2206V19.7794C21.329 20.1733 21.0097 20.4926 20.6158 20.4926H12.057C11.6631 20.4926 11.3438 20.1733 11.3438 19.7794V11.2206Z"
      fill="url(#paint1_linear_18590_2870)"
    />
    <defs>
      <filter
        id="filter0_iiii_18590_2870"
        x={10.5938}
        y={10.0074}
        width={11.4852}
        height={11.2352}
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
        <feOffset dx={-0.75} />
        <feGaussianBlur stdDeviation={0.375} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 0.996078 0 0 0 0 1 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_18590_2870"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={0.75} />
        <feGaussianBlur stdDeviation={0.375} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.811765 0 0 0 0 0.756863 0 0 0 0 0.862745 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_innerShadow_18590_2870"
          result="effect2_innerShadow_18590_2870"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={0.75} />
        <feGaussianBlur stdDeviation={0.375} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.972549 0 0 0 0 0.952941 0 0 0 0 0.992157 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="effect2_innerShadow_18590_2870"
          result="effect3_innerShadow_18590_2870"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={-0.5} />
        <feGaussianBlur stdDeviation={0.5} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.611765 0 0 0 0 0.439216 0 0 0 0 0.760784 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="effect3_innerShadow_18590_2870"
          result="effect4_innerShadow_18590_2870"
        />
      </filter>
      <linearGradient
        id="paint0_linear_18590_2870"
        x1={16.3364}
        y1={12.375}
        x2={16.3364}
        y2={20.4926}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F6E8FF" />
        <stop offset={1} stopColor="#BBA4D2" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_18590_2870"
        x1={21.6875}
        y1={11.6875}
        x2={19.8227}
        y2={11.9276}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E8E8E8" />
        <stop offset={1} stopColor="#E8E8E8" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

export default WhiteSmallSquareColor;