import { SVGProps } from "react";

const BasketFlat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 12C2.44772 12 2 12.4477 2 13V15C2 15.5523 2.44771 16 3 16H3.3L6.85861 27.862C7.2393 29.131 8.40727 30 9.73209 30H22.2679C23.5927 30 24.7607 29.131 25.1414 27.862L28.7 16H29C29.5523 16 30 15.5523 30 15V13C30 12.4477 29.5523 12 29 12H11L10 11.5L9 12H3Z"
      fill="#F3AD61"
    />
    <path
      d="M3.67772 16L3.38721 16.2905L3.71356 17.3784L5.01047 16.0815L6.42469 17.4957L5.01045 18.9099L3.81409 17.7135L4.69264 20.6419L5.01045 20.3241L6.42469 21.7384L5.34536 22.8177L6.23845 25.7948L6.42469 25.981L6.32443 26.0813L6.65079 27.1691L7.13179 26.6881L8.54601 28.1023L7.56926 29.0791C7.80451 29.3236 8.07981 29.5269 8.38294 29.6796L9.25312 28.8094L10.4437 30H12.3052L13.4958 28.8094L14.6863 30H16.5479L17.7384 28.8094L18.929 30H20.7904L21.981 28.8094L23.0643 29.8926C23.4103 29.7974 23.7338 29.6413 24.0206 29.4348L22.6881 28.1023L24.1024 26.6881L25.163 27.7487L25.1807 27.7309L25.4989 26.6704L24.8095 25.981L26.0899 24.7005L26.696 22.6802L26.2237 23.1525L24.8095 21.7383L26.2237 20.3241L27.1307 21.2311L27.4571 20.1432L26.9308 19.617L27.9081 18.6397L28.5142 16.6194L28.345 16.7886L27.5564 16H24.891L24.1024 16.7886L23.3138 16H20.6483L19.8598 16.7886L19.0712 16H16.4057L15.6171 16.7886L14.8285 16H12.163L11.3745 16.7886L10.5859 16H7.92037L7.13179 16.7886L6.34322 16H3.67772ZM5.71756 19.617L7.13179 18.2028L8.54602 19.617L7.13179 21.0313L5.71756 19.617ZM7.8389 21.7384L9.25313 20.3241L10.6673 21.7383L9.25312 23.1526L7.8389 21.7384ZM9.96024 19.617L11.3745 18.2028L12.7887 19.617L11.3745 21.0312L9.96024 19.617ZM9.96022 23.8597L11.3745 22.4454L12.7887 23.8597L11.3744 25.2739L9.96022 23.8597ZM14.91 21.7383L13.4958 23.1526L12.0816 21.7383L13.4958 20.3241L14.91 21.7383ZM12.0815 25.981L13.4958 24.5668L14.91 25.981L13.4958 27.3952L12.0815 25.981ZM14.2029 23.8597L15.6171 22.4454L17.0313 23.8597L15.6171 25.2739L14.2029 23.8597ZM14.2029 28.1023L15.6171 26.6881L17.0313 28.1023L15.6171 29.5166L14.2029 28.1023ZM19.8597 29.5165L18.4455 28.1023L19.8598 26.6881L21.2739 28.1023L19.8597 29.5165ZM16.3242 25.981L17.7384 24.5668L19.1527 25.981L17.7384 27.3952L16.3242 25.981ZM21.981 27.3952L20.5669 25.981L21.9811 24.5668L23.3953 25.981L21.981 27.3952ZM24.1024 25.2738L22.6882 23.8597L24.1024 22.4454L25.5166 23.8596L24.1024 25.2738ZM21.9811 23.1526L20.5669 21.7384L21.9811 20.3241L23.3953 21.7383L21.9811 23.1526ZM25.5166 19.617L24.1024 21.0312L22.6882 19.617L24.1024 18.2028L25.5166 19.617ZM23.3953 17.4957L21.9811 18.9099L20.5669 17.4957L21.9811 16.0815L23.3953 17.4957ZM17.7384 16.0815L19.1527 17.4957L17.7384 18.9099L16.3242 17.4957L17.7384 16.0815ZM19.8598 18.2028L21.274 19.617L19.8598 21.0313L18.4455 19.617L19.8598 18.2028ZM15.6171 18.2028L17.0313 19.617L15.6171 21.0312L14.2029 19.617L15.6171 18.2028ZM17.7384 20.3241L19.1527 21.7384L17.7384 23.1526L16.3242 21.7383L17.7384 20.3241ZM19.8598 25.2739L18.4455 23.8597L19.8598 22.4455L21.274 23.8597L19.8598 25.2739ZM27.6379 17.4957L26.2237 18.9099L24.8095 17.4957L26.2237 16.0815L27.6379 17.4957ZM11.3744 26.6881L12.7887 28.1023L11.3745 29.5166L9.96022 28.1023L11.3744 26.6881ZM14.91 17.4957L13.4958 18.9099L12.0816 17.4957L13.4958 16.0815L14.91 17.4957ZM10.6673 25.981L9.25312 27.3952L7.8389 25.981L9.25312 24.5668L10.6673 25.981ZM8.54601 23.8597L7.13179 25.2739L5.71758 23.8597L7.13179 22.4455L8.54601 23.8597ZM9.25313 18.9099L7.8389 17.4957L9.25312 16.0815L10.6673 17.4957L9.25313 18.9099Z"
      fill="#D3883E"
    />
    <path
      d="M13 2C10.5 2 9 4 9 6V12H11V6C11 3.5 12.5 3 14 3H18C19.5 3 21 3.5 21 6V14C21 14.5523 21.4477 15 22 15C22.5523 15 23 14.5523 23 14V6C23 4 21.5 2 19 2H13Z"
      fill="#E19747"
    />
  </svg>
);

export default BasketFlat;
