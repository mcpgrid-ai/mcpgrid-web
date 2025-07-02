import { FC, Fragment } from 'react';

import { getTranslations } from '@core/i18n';
import { Button } from '@core/uikit';

const DashboardSoon: FC = async () => {
  const [t] = await Promise.all([getTranslations()]);

  return (
    <Fragment>
      <h3 className="text-white mt-5">Let's get started with Mcpbox</h3>
      <p className="text-white-50 font-size-16">
        Donec pede justo fringilla vel aliquet nec vulputate eget arcu. In enim
        justo, rhoncus ut imperdiet a venenatis vitae, justo felis
      </p>

      <div data-countdown="2023/12/31" className="counter-number mt-5">
        <div className="coming-box">
          <div className="count-title">{t('forms.days')}</div>
          <div className="count-num">%D</div>
        </div>
        <div className="coming-box">
          <div className="count-title">{t('forms.hours')}</div>
          <div className="count-num">%H</div>
        </div>
        <div className="coming-box">
          <div className="count-title">{t('forms.minutes')}</div>
          <div className="count-num">%M</div>
        </div>
        <div className="coming-box">
          <div className="count-title">{t('forms.seconds')}</div>
          <div className="count-num">%S</div>
        </div>
      </div>

      <form className="app-search mt-5 mx-auto">
        <div className="position-relative">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your email address"
          />
          <Button>
            <i className="bx bx-paper-plane align-middle"></i>
          </Button>
        </div>
      </form>
    </Fragment>
  );
};

export default DashboardSoon;
