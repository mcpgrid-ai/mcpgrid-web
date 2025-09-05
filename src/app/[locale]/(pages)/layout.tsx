import { FC, PropsWithChildren } from 'react';

import { Header } from './_partitions/Header';
import { Footer } from './_partitions/Footer';

type PagesLayoutProps = PropsWithChildren;

const PagesLayout: FC<PagesLayoutProps> = ({ children }) => {
  return (
    <body data-layout-size="boxed" data-layout="horizontal">
      <div id="layout-wrapper">
        <Header background />
        <div className="main-content">
          <div className="page-content mt-3">
            <div className="container-fluid">{children}</div>
            <Footer />
          </div>
        </div>
      </div>
    </body>
  );
};

export default PagesLayout;
