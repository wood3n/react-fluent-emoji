import { SVGProps } from "react";

const SmallBlueDiamondColor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_iiii_18590_2910)">
      <path
        d="M10.1002 17.3569C9.71888 16.9756 9.71888 16.3574 10.1002 15.9761L15.6238 10.4525C16.0051 10.0712 16.6233 10.0712 17.0047 10.4525L22.5282 15.9761C22.9095 16.3574 22.9095 16.9756 22.5282 17.3569L17.0047 22.8805C16.6233 23.2618 16.0051 23.2618 15.6238 22.8805L10.1002 17.3569Z"
        fill="url(#paint0_linear_18590_2910)"
      />
    </g>
    <defs>
      <filter
        id="filter0_iiii_18590_2910"
        x={9.31421}
        y={9.6665}
        width={14}
        height={14}
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
        <feOffset dx={-0.5} />
        <feGaussianBlur stdDeviation={0.25} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.235294 0 0 0 0 0.407843 0 0 0 0 0.792157 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_18590_2910"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={0.5} />
        <feGaussianBlur stdDeviation={0.25} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.258824 0 0 0 0 0.556863 0 0 0 0 0.835294 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_innerShadow_18590_2910"
          result="effect2_innerShadow_18590_2910"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={0.5} dy={-0.5} />
        <feGaussianBlur stdDeviation={0.375} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.254902 0 0 0 0 0.380392 0 0 0 0 0.756863 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="effect2_innerShadow_18590_2910"
          result="effect3_innerShadow_18590_2910"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={-0.5} dy={0.5} />
        <feGaussianBlur stdDeviation={0.375} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.313726 0 0 0 0 0.682353 0 0 0 0 0.952941 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="effect3_innerShadow_18590_2910"
          result="effect4_innerShadow_18590_2910"
        />
      </filter>
      <linearGradient
        id="paint0_linear_18590_2910"
        x1={13.6478}
        y1={14.1333}
        x2={19.6285}
        y2={20.6632}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3C95E5" />
        <stop offset={1} stopColor="#4171CD" />
      </linearGradient>
    </defs>
  </svg>
);

export default SmallBlueDiamondColor;
