import { SVGProps } from "react";

const RadioButtonColor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_ii_18590_2944)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.0936 29.8619C23.8223 29.8619 30.0876 23.5966 30.0876 15.8679C30.0876 8.13922 23.8223 1.8739 16.0936 1.8739C8.36499 1.8739 2.09961 8.13922 2.09961 15.8679C2.09961 23.5966 8.36499 29.8619 16.0936 29.8619ZM16.0936 26.0198C21.7003 26.0198 26.2455 21.4746 26.2455 15.8679C26.2455 10.2612 21.7003 5.71606 16.0936 5.71606C10.4869 5.71606 5.94177 10.2612 5.94177 15.8679C5.94177 21.4746 10.4869 26.0198 16.0936 26.0198Z"
        fill="url(#paint0_linear_18590_2944)"
      />
    </g>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.0936 29.8619C23.8223 29.8619 30.0876 23.5966 30.0876 15.8679C30.0876 8.13922 23.8223 1.8739 16.0936 1.8739C8.36499 1.8739 2.09961 8.13922 2.09961 15.8679C2.09961 23.5966 8.36499 29.8619 16.0936 29.8619ZM16.0936 26.0198C21.7003 26.0198 26.2455 21.4746 26.2455 15.8679C26.2455 10.2612 21.7003 5.71606 16.0936 5.71606C10.4869 5.71606 5.94177 10.2612 5.94177 15.8679C5.94177 21.4746 10.4869 26.0198 16.0936 26.0198Z"
      fill="url(#paint1_radial_18590_2944)"
    />
    <g filter="url(#filter1_f_18590_2944)">
      <circle
        cx={16.3365}
        cy={15.625}
        r={11.9626}
        stroke="url(#paint2_linear_18590_2944)"
        strokeWidth={1.25}
      />
    </g>
    <circle
      cx={16.0936}
      cy={15.8679}
      r={10.1519}
      fill="url(#paint3_radial_18590_2944)"
    />
    <circle
      cx={16.0936}
      cy={15.8679}
      r={10.1519}
      fill="url(#paint4_radial_18590_2944)"
    />
    <defs>
      <filter
        id="filter0_ii_18590_2944"
        x={2.09961}
        y={1.1239}
        width={28.488}
        height={28.7379}
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
        <feOffset dy={-0.75} />
        <feGaussianBlur stdDeviation={0.75} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.415686 0 0 0 0 0.286275 0 0 0 0 0.521569 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_18590_2944"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={0.5} />
        <feGaussianBlur stdDeviation={0.5} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.654902 0 0 0 0 0.647059 0 0 0 0 0.658824 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_innerShadow_18590_2944"
          result="effect2_innerShadow_18590_2944"
        />
      </filter>
      <filter
        id="filter1_f_18590_2944"
        x={2.7489}
        y={2.03748}
        width={27.1752}
        height={27.1752}
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
          stdDeviation={0.5}
          result="effect1_foregroundBlur_18590_2944"
        />
      </filter>
      <linearGradient
        id="paint0_linear_18590_2944"
        x1={28.8289}
        y1={2.61374}
        x2={10.6119}
        y2={26.4615}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7D7C7D" />
        <stop offset={1} stopColor="#4C4851" />
      </linearGradient>
      <radialGradient
        id="paint1_radial_18590_2944"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(18.3624 15.2) rotate(-80.4258) scale(11.1518 12.0588)"
      >
        <stop offset={0.771122} stopColor="#544C5D" />
        <stop offset={1} stopColor="#544C5D" stopOpacity={0} />
      </radialGradient>
      <linearGradient
        id="paint2_linear_18590_2944"
        x1={26.3512}
        y1={7.95851}
        x2={6.74367}
        y2={23.6705}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#908F91" />
        <stop offset={1} stopColor="#858288" />
      </linearGradient>
      <radialGradient
        id="paint3_radial_18590_2944"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(16.0936 26.0198) rotate(-90) scale(10.6872 17.9336)"
      >
        <stop stopColor="#9F86B8" />
        <stop offset={1} stopColor="#B9B7BB" />
      </radialGradient>
      <radialGradient
        id="paint4_radial_18590_2944"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(6.43855 11.8216) rotate(22.7379) scale(10.4687 11.1277)"
      >
        <stop offset={0.165185} stopColor="#C6C0CD" />
        <stop offset={1} stopColor="#C6C0CD" stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
);

export default RadioButtonColor;
