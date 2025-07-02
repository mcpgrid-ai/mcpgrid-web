import { FC, Fragment, PropsWithChildren } from 'react';

import BG_IMG from './layout.jpg';
import './layout.scss';

import { Row } from '@core/uikit';

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
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="coming-content min-vh-100 py-4 px-3 py-sm-5">
        <div className="bg-overlay bg-primary"></div>
        <div className="container">
          <Row className="justify-content-center">
            <Row.Col lg={8}>
              <div className="text-center py-4 py-sm-5">{children}</div>
            </Row.Col>
          </Row>
        </div>
      </div>
    </Fragment>
  );
};

export default CountdownLayout;
