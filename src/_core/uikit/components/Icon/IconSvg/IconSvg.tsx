import { FC } from 'react';

export interface IconSvgProps {
  size?: number;
  icon: string;
  width: number;
  height: number;
}

export const IconSvg: FC<IconSvgProps> = ({
  size = 16,
  icon,
  width,
  height,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${width} ${height}`}
      dangerouslySetInnerHTML={{ __html: icon }}
    ></svg>
  );
};
