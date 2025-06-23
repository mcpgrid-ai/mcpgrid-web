import { FC, PropsWithChildren } from 'react';
import { BreadcrumbItem } from 'react-bootstrap';

type HeadingBreadcrumbItemProps = PropsWithChildren<{
  active?: boolean;
}>;

export const HeadingBreadcrumbItem: FC<HeadingBreadcrumbItemProps> = ({
  active = false,
  children,
}) => {
  return <BreadcrumbItem active={active}>{children}</BreadcrumbItem>;
};
