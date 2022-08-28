import { SVGProps } from "react";

const LargeBlueDiamondColor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_iiii_18590_2891)">
      <path
        d="M3.60849 18.3529C2.82744 17.5719 2.82744 16.3055 3.60849 15.5245L14.9222 4.21079C15.7032 3.42974 16.9696 3.42974 17.7506 4.21079L29.0643 15.5245C29.8454 16.3055 29.8454 17.5719 29.0643 18.3529L17.7506 29.6666C16.9696 30.4477 15.7032 30.4477 14.9222 29.6666L3.60849 18.3529Z"
        fill="url(#paint0_linear_18590_2891)"
      />
    </g>
    <defs>
      <filter
        id="filter0_iiii_18590_2891"
        x={2.02271}
        y={2.875}
        width={28.6274}
        height={28.1274}
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
          values="0 0 0 0 0.25098 0 0 0 0 0.462745 0 0 0 0 0.831373 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_18590_2891"
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
          values="0 0 0 0 0.176471 0 0 0 0 0.521569 0 0 0 0 0.803922 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_innerShadow_18590_2891"
          result="effect2_innerShadow_18590_2891"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={0.75} dy={-0.75} />
        <feGaussianBlur stdDeviation={0.5} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.231373 0 0 0 0 0.352941 0 0 0 0 0.784314 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="effect2_innerShadow_18590_2891"
          result="effect3_innerShadow_18590_2891"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={-0.75} dy={0.75} />
        <feGaussianBlur stdDeviation={0.5} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.329412 0 0 0 0 0.698039 0 0 0 0 0.952941 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="effect3_innerShadow_18590_2891"
          result="effect4_innerShadow_18590_2891"
        />
      </filter>
      <linearGradient
        id="paint0_linear_18590_2891"
        x1={10.875}
        y1={11.75}
        x2={23.125}
        y2={25.125}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3D8BDD" />
        <stop offset={1} stopColor="#437FDB" />
      </linearGradient>
    </defs>
  </svg>
);

export default LargeBlueDiamondColor;
