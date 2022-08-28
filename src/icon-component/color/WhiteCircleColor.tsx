import { SVGProps } from "react";

const WhiteCircleColor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_i_18590_3113)">
      <path
        d="M29.5474 16C29.5474 23.732 23.2794 30 15.5474 30C7.81538 30 1.54736 23.732 1.54736 16C1.54736 8.26801 7.81538 2 15.5474 2C23.2794 2 29.5474 8.26801 29.5474 16Z"
        fill="url(#paint0_radial_18590_3113)"
      />
      <path
        d="M29.5474 16C29.5474 23.732 23.2794 30 15.5474 30C7.81538 30 1.54736 23.732 1.54736 16C1.54736 8.26801 7.81538 2 15.5474 2C23.2794 2 29.5474 8.26801 29.5474 16Z"
        fill="url(#paint1_linear_18590_3113)"
      />
      <path
        d="M29.5474 16C29.5474 23.732 23.2794 30 15.5474 30C7.81538 30 1.54736 23.732 1.54736 16C1.54736 8.26801 7.81538 2 15.5474 2C23.2794 2 29.5474 8.26801 29.5474 16Z"
        fill="url(#paint2_radial_18590_3113)"
      />
      <path
        d="M29.5474 16C29.5474 23.732 23.2794 30 15.5474 30C7.81538 30 1.54736 23.732 1.54736 16C1.54736 8.26801 7.81538 2 15.5474 2C23.2794 2 29.5474 8.26801 29.5474 16Z"
        fill="url(#paint3_radial_18590_3113)"
      />
      <path
        d="M29.5474 16C29.5474 23.732 23.2794 30 15.5474 30C7.81538 30 1.54736 23.732 1.54736 16C1.54736 8.26801 7.81538 2 15.5474 2C23.2794 2 29.5474 8.26801 29.5474 16Z"
        fill="url(#paint4_radial_18590_3113)"
      />
    </g>
    <defs>
      <filter
        id="filter0_i_18590_3113"
        x={1.29736}
        y={1.75}
        width={28.25}
        height={28.25}
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
        <feOffset dx={-0.25} dy={-0.25} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.760784 0 0 0 0 0.729412 0 0 0 0 0.8 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_18590_3113"
        />
      </filter>
      <radialGradient
        id="paint0_radial_18590_3113"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(23.7266 8.75) rotate(130.168) scale(27.8086)"
      >
        <stop offset={0.115849} stopColor="#DFDDE1" />
        <stop offset={0.853086} stopColor="#C2A4DF" />
      </radialGradient>
      <linearGradient
        id="paint1_linear_18590_3113"
        x1={15.5474}
        y1={2}
        x2={15.5474}
        y2={7.63684}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C4C4C5" />
        <stop offset={1} stopColor="#C4C4C5" stopOpacity={0} />
      </linearGradient>
      <radialGradient
        id="paint2_radial_18590_3113"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(23.1346 12.1404) rotate(138.327) scale(15.6761 14.4742)"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="#FAEAFF" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="paint3_radial_18590_3113"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(20.0391 16) rotate(180) scale(19.25 20)"
      >
        <stop offset={0.62013} stopColor="#BDB5C5" stopOpacity={0} />
        <stop offset={0.951299} stopColor="#D7D5D9" />
      </radialGradient>
      <radialGradient
        id="paint4_radial_18590_3113"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(15.5474 9) rotate(90) scale(22.4376 24.9172)"
      >
        <stop offset={0.725009} stopColor="#B08DCF" stopOpacity={0} />
        <stop offset={1} stopColor="#A283BF" />
      </radialGradient>
    </defs>
  </svg>
);

export default WhiteCircleColor;
