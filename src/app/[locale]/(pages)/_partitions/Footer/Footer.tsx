import { FC } from 'react';

import { getTranslations } from '@core/i18n';

export const Footer: FC = async () => {
  const t = await getTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            {t('common.copyright', { year, name: process.env.PRODUCT_NAME })}
          </div>
          <div className="col-sm-6">
            <div className="text-sm-end d-none d-sm-block"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};
