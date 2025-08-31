import { FC, PropsWithChildren } from 'react';

import { getSession } from '@core/auth/server';
import { redirect } from '@core/navigation';
import { RoutePath } from '@common/constants';

type DashboardLayoutProps = PropsWithChildren;

const DashboardLayout: FC<DashboardLayoutProps> = async ({ children }) => {
  const session = getSession();

  if (!session) {
    redirect({
      pathname: RoutePath.SignIn,
      query: { redirect: RoutePath.Admin },
    });
  }

  return (
    <body>
      <div className="auth-page">{children}</div>
    </body>
  );
};

export default DashboardLayout;
