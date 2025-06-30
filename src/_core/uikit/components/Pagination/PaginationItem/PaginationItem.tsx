import { FC, PropsWithChildren } from 'react';

type PaginationItemProps = PropsWithChildren<{
  page: number;
  className?: string;
}>;

export const PaginationItem: FC<PaginationItemProps> = ({ children }) => {
  return <a>{children}</a>;
};
