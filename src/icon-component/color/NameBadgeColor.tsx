import { SVGProps } from "react";

const NameBadgeColor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_iii_18590_1959)">
      <path
        d="M15.9693 3.88794C15.5859 3.88794 15.3614 4.13045 15.2037 4.30612L11.7133 8.28374C11.316 8.72616 10.6226 8.72616 10.2253 8.28374L7.25179 4.97284C6.88184 4.56092 6.24471 4.52566 5.86157 4.92534C3.45072 7.44028 1.9693 10.8532 1.9693 14.6122C1.9693 22.3441 8.23731 28.6121 15.9693 28.6121C23.7013 28.6121 29.9693 22.3441 29.9693 14.6122C29.9693 10.8532 28.4879 7.44028 26.077 4.92534C25.6939 4.52566 25.0568 4.56092 24.6868 4.97285L21.7133 8.28374C21.316 8.72616 20.6226 8.72616 20.2253 8.28374L16.7393 4.30612C16.5864 4.13588 16.3789 3.88794 15.9693 3.88794Z"
        fill="url(#paint0_linear_18590_1959)"
      />
    </g>
    <path
      d="M5.9693 15.6121C5.9693 15.0598 6.41701 14.6121 6.9693 14.6121H24.9693C25.5216 14.6121 25.9693 15.0598 25.9693 15.6121V17.6121C25.9693 18.1643 25.5216 18.6121 24.9693 18.6121H6.9693C6.41701 18.6121 5.9693 18.1643 5.9693 17.6121V15.6121Z"
      fill="url(#paint1_linear_18590_1959)"
    />
    <defs>
      <filter
        id="filter0_iii_18590_1959"
        x={1.4693}
        y={3.38794}
        width={29}
        height={25.2242}
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
        <feGaussianBlur stdDeviation={0.25} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 0.466667 0 0 0 0 0.670588 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_18590_1959"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={-0.5} />
        <feGaussianBlur stdDeviation={0.375} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.87451 0 0 0 0 0.14902 0 0 0 0 0.356863 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_innerShadow_18590_1959"
          result="effect2_innerShadow_18590_1959"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={0.5} />
        <feGaussianBlur stdDeviation={0.375} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.901961 0 0 0 0 0.164706 0 0 0 0 0.313726 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="effect2_innerShadow_18590_1959"
          result="effect3_innerShadow_18590_1959"
        />
      </filter>
      <linearGradient
        id="paint0_linear_18590_1959"
        x1={15.9693}
        y1={3.88794}
        x2={15.9693}
        y2={28.6121}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF4E92" />
        <stop offset={1} stopColor="#F54C5B" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_18590_1959"
        x1={15.9693}
        y1={15.3124}
        x2={15.9693}
        y2={18.6121}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E7D8FC" />
        <stop offset={1} stopColor="#F5EFFF" />
      </linearGradient>
    </defs>
  </svg>
);

export default NameBadgeColor;
