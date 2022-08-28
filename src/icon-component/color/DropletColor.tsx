import { SVGProps } from "react";

const DropletColor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_i_18_15832)">
      <path
        d="M18.2471 3.37065C17.2567 1.52065 14.5854 1.52065 13.6049 3.37065L7.33187 15.1707C3.49002 21.7507 8.28233 29.9807 15.946 29.9807H16.1561C23.7098 29.9807 28.4221 21.8807 24.6502 15.4007L18.2471 3.37065Z"
        fill="url(#paint0_radial_18_15832)"
      />
    </g>
    <path
      d="M18.2471 3.37065C17.2567 1.52065 14.5854 1.52065 13.6049 3.37065L7.33187 15.1707C3.49002 21.7507 8.28233 29.9807 15.946 29.9807H16.1561C23.7098 29.9807 28.4221 21.8807 24.6502 15.4007L18.2471 3.37065Z"
      fill="url(#paint1_radial_18_15832)"
    />
    <path
      d="M18.2471 3.37065C17.2567 1.52065 14.5854 1.52065 13.6049 3.37065L7.33187 15.1707C3.49002 21.7507 8.28233 29.9807 15.946 29.9807H16.1561C23.7098 29.9807 28.4221 21.8807 24.6502 15.4007L18.2471 3.37065Z"
      fill="url(#paint2_radial_18_15832)"
    />
    <g filter="url(#filter1_f_18_15832)">
      <path
        d="M23.4605 14.9173L16.86 2.99377V24.0478L22.3105 20.0918C23.9457 18.905 24.4391 16.685 23.4605 14.9173Z"
        fill="url(#paint3_linear_18_15832)"
      />
    </g>
    <defs>
      <filter
        id="filter0_i_18_15832"
        x={5.97797}
        y={0.983154}
        width={22}
        height={28.9976}
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
        <feOffset dx={2} dy={-1} />
        <feGaussianBlur stdDeviation={1.5} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.423529 0 0 0 0 0.572549 0 0 0 0 0.729412 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_18_15832"
        />
      </filter>
      <filter
        id="filter1_f_18_15832"
        x={14.61}
        y={0.743774}
        width={11.6013}
        height={25.5541}
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
          stdDeviation={1.125}
          result="effect1_foregroundBlur_18_15832"
        />
      </filter>
      <radialGradient
        id="paint0_radial_18_15832"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(21.9112 5.67573) rotate(112.428) scale(28.8219 18.0824)"
      >
        <stop stopColor="#7ADEFF" />
        <stop offset={0.478924} stopColor="#6CCEFF" />
        <stop offset={1} stopColor="#6E99FF" />
      </radialGradient>
      <radialGradient
        id="paint1_radial_18_15832"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(19.7276 8.47318) rotate(109.959) scale(23.8856 18.213)"
      >
        <stop offset={0.572331} stopColor="#7778FF" stopOpacity={0} />
        <stop offset={1} stopColor="#7778FF" />
      </radialGradient>
      <radialGradient
        id="paint2_radial_18_15832"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(23.6992 18.8178) rotate(137.203) scale(9.86906 11.8742)"
      >
        <stop stopColor="#84C8FF" />
        <stop offset={1} stopColor="#84C8FF" stopOpacity={0} />
      </radialGradient>
      <linearGradient
        id="paint3_linear_18_15832"
        x1={21.7324}
        y1={9.34128}
        x2={12.5687}
        y2={13.9455}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.209728} stopColor="#8BEFFF" />
        <stop offset={1} stopColor="#8BEFFF" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

export default DropletColor;
