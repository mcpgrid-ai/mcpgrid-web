import { FC, PropsWithChildren } from 'react';

import { DashboardHeader } from './_partitions/DashboardHeader';
import { DashboardSidebar } from './_partitions/DashboardSidebar';

import { getSession } from '@core/auth/server';
import { redirect } from '@core/navigation';
import { RoutePath } from '@common/constants';

type DashboardLayoutProps = PropsWithChildren<{
  params: Promise<unknown>;
}>;

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
      <div id="layout-wrapper">
        <DashboardHeader />
        <DashboardSidebar />
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              {children}
              {/* @@include("partials/page-title.html", {"pagetitle": "Pages", "title": "Starter Page"}) */}
            </div>
          </div>

          {/* @@include("partials/footer.html") */}
        </div>
      </div>
    </body>
  );
};

export default DashboardLayout;
