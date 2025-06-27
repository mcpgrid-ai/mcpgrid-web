import { DetailedHTMLProps, FC, ImgHTMLAttributes } from 'react';

export type ImageProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export const Image: FC<ImageProps> = ({ src, ...props }) => {
  return <img src={`${process.env.STRAPI_HOST}${src}`} {...props} />;
};
