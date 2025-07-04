import { FC, PropsWithChildren } from 'react';

type ListItemProps = PropsWithChildren;

export const ListItem: FC<ListItemProps> = ({ children }) => {
  return <li className="py-2">{children}</li>;
};
