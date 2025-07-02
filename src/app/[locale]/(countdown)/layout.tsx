import { FC, Fragment, PropsWithChildren } from 'react';

import BG_IMG from './layout.jpg';
import './layout.scss';

type CountdownLayoutProps = PropsWithChildren;

const CountdownLayout: FC<CountdownLayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <div className="preview-img overflow-hidden ">
        <div className="swiper-container preview-thumb">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div
                className="slide-bg"
                style={{ backgroundImage: `url(${BG_IMG.src})` }}
                // style="background-image: url(./assets/images/bg-1.jpg);"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="coming-content min-vh-100 py-4 px-3 py-sm-5">
        <div className="bg-overlay bg-primary"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center py-4 py-sm-5">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CountdownLayout;
