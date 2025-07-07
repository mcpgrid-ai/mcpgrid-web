import { FC, Fragment, PropsWithChildren } from 'react';

import { ServersSearch } from './_partitions/ServersSearch';

type ServersLayoutProps = PropsWithChildren;

const ServersLayout: FC<ServersLayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <ServersSearch />
      {children}
    </Fragment>
  );
};

export default ServersLayout;
