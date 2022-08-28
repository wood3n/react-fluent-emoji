import { SVGProps } from "react";

const StopSignColor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_i_18_12046)">
      <path
        d="M11.74 2H20.26C21.25 2 22.19 2.39 22.89 3.09L28.91 9.11C29.61 9.81 30 10.75 30 11.74V20.26C30 21.25 29.61 22.19 28.91 22.89L22.89 28.91C22.19 29.61 21.25 30 20.26 30H11.74C10.75 30 9.81 29.61 9.11 28.91L3.09 22.89C2.39 22.19 2 21.25 2 20.26V11.74C2 10.75 2.39 9.81 3.09 9.11L9.11 3.09C9.81 2.39 10.75 2 11.74 2Z"
        fill="url(#paint0_linear_18_12046)"
      />
      <path
        d="M11.74 2H20.26C21.25 2 22.19 2.39 22.89 3.09L28.91 9.11C29.61 9.81 30 10.75 30 11.74V20.26C30 21.25 29.61 22.19 28.91 22.89L22.89 28.91C22.19 29.61 21.25 30 20.26 30H11.74C10.75 30 9.81 29.61 9.11 28.91L3.09 22.89C2.39 22.19 2 21.25 2 20.26V11.74C2 10.75 2.39 9.81 3.09 9.11L9.11 3.09C9.81 2.39 10.75 2 11.74 2Z"
        fill="url(#paint1_linear_18_12046)"
      />
    </g>
    <path
      d="M12.57 4H19.43C20.42 4 21.36 4.39 22.06 5.09L26.91 9.94C27.61 10.64 28 11.58 28 12.57V19.43C28 20.42 27.61 21.36 26.91 22.06L22.06 26.91C21.36 27.61 20.42 28 19.43 28H12.57C11.58 28 10.64 27.61 9.94 26.91L5.09 22.06C4.39 21.36 4 20.42 4 19.43V12.57C4 11.58 4.39 10.64 5.09 9.94L9.94 5.09C10.64 4.39 11.58 4 12.57 4Z"
      fill="url(#paint2_linear_18_12046)"
    />
    <defs>
      <filter
        id="filter0_i_18_12046"
        x={2}
        y={2}
        width={28.75}
        height={28}
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
        <feOffset dx={0.75} />
        <feGaussianBlur stdDeviation={0.75} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.52549 0 0 0 0 0.513726 0 0 0 0 0.537255 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_18_12046"
        />
      </filter>
      <linearGradient
        id="paint0_linear_18_12046"
        x1={27.8601}
        y1={6.97516}
        x2={8.85076}
        y2={27.5923}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FBF9FC" />
        <stop offset={0.50095} stopColor="#D5C9DD" />
        <stop offset={1} stopColor="#B9B3BC" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_18_12046"
        x1={16}
        y1={31.5784}
        x2={16}
        y2={27.6534}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8C749B" />
        <stop offset={1} stopColor="#8C749B" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint2_linear_18_12046"
        x1={29.1182}
        y1={16}
        x2={3.9981}
        y2={16}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E53146" />
        <stop offset={1} stopColor="#CC307A" />
      </linearGradient>
    </defs>
  </svg>
);

export default StopSignColor;
