import * as React from "react";

interface Props {
  id: string;
}

/**
 * svg-sprite 组件
 */
const Icon: React.FC<Props> = ({
  id
}) => {
  return (
    <svg width="32" height="32"><use xlinkHref={`#${id}`} /></svg>
  );
};

export default Icon;

