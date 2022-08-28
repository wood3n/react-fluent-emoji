import { SVGProps } from "react";

const WarningColor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_iii_18590_533)">
      <path
        d="M14.4423 6.4966L1.78226 28.4266C1.27226 29.3166 1.91226 30.4366 2.94226 30.4366H28.2623C29.2923 30.4366 29.9323 29.3266 29.4223 28.4266L16.7623 6.4966C16.2423 5.6066 14.9623 5.6066 14.4423 6.4966Z"
        fill="url(#paint0_linear_18590_533)"
      />
    </g>
    <g filter="url(#filter1_i_18590_533)">
      <path
        d="M14.2023 22.1348C14.2023 22.9048 14.8223 23.5348 15.6023 23.5348C16.3823 23.5348 17.0023 22.9048 17.0023 22.1248V12.9648C17.0023 12.1948 16.3823 11.5648 15.6023 11.5648C14.8323 11.5648 14.2023 12.1848 14.2023 12.9648V22.1348Z"
        fill="#4A4351"
      />
      <path
        d="M17.0023 26.1148C17.0023 26.888 16.3755 27.5148 15.6023 27.5148C14.8291 27.5148 14.2023 26.888 14.2023 26.1148C14.2023 25.3416 14.8291 24.7148 15.6023 24.7148C16.3755 24.7148 17.0023 25.3416 17.0023 26.1148Z"
        fill="#4A4351"
      />
    </g>
    <defs>
      <filter
        id="filter0_iii_18590_533"
        x={1.15327}
        y={5.4291}
        width={29.0479}
        height={25.0075}
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
        <feOffset dx={-0.45} />
        <feGaussianBlur stdDeviation={0.3} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 0.996078 0 0 0 0 0.458824 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_18590_533"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={0.6} dy={-0.4} />
        <feGaussianBlur stdDeviation={0.4} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.929412 0 0 0 0 0.411765 0 0 0 0 0.313726 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_innerShadow_18590_533"
          result="effect2_innerShadow_18590_533"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={0.3} />
        <feGaussianBlur stdDeviation={0.3} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.737255 0 0 0 0 0.564706 0 0 0 0 0.239216 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="effect2_innerShadow_18590_533"
          result="effect3_innerShadow_18590_533"
        />
      </filter>
      <filter
        id="filter1_i_18590_533"
        x={13.4523}
        y={11.5648}
        width={3.55005}
        height={16.7001}
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
        <feOffset dx={-0.75} dy={0.75} />
        <feGaussianBlur stdDeviation={0.6} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.180392 0 0 0 0 0.145098 0 0 0 0 0.223529 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_18590_533"
        />
      </filter>
      <linearGradient
        id="paint0_linear_18590_533"
        x1={15.6023}
        y1={5.8291}
        x2={15.6023}
        y2={30.4366}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFD758" />
        <stop offset={1} stopColor="#FFA956" />
      </linearGradient>
    </defs>
  </svg>
);

export default WarningColor;
