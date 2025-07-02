import { FC, Fragment } from 'react';

const DashboardSoon: FC = () => {
  return (
    <Fragment>
      <div className="mb-5">
        <a href="index.html">
          <img
            src="assets/images/logo-sm.svg"
            alt=""
            height="30"
            className="me-1"
          />
          <span className="logo-txt text-white font-size-22">
            {process.env.PRODUCT_NAME}
          </span>
        </a>
      </div>
      <h3 className="text-white mt-5">Let's get started with Minia</h3>
      <p className="text-white-50 font-size-16">
        Donec pede justo fringilla vel aliquet nec vulputate eget arcu. In enim
        justo, rhoncus ut imperdiet a venenatis vitae, justo felis
      </p>

      <div data-countdown="2023/12/31" className="counter-number mt-5"></div>

      <form className="app-search mt-5 mx-auto">
        <div className="position-relative">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your email address"
          />
          <button className="btn btn-primary" type="button">
            <i className="bx bx-paper-plane align-middle"></i>
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default DashboardSoon;
