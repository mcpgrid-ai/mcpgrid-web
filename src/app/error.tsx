'use client';

import { FC } from 'react';
import Image from 'next/image';

import IMAGE from './not-found.png';

import { useTranslations } from '@core/i18n';
import { Button } from '@core/uikit';
import { Link } from '@core/navigation';
import { RoutePath } from '@common/constants';

const Err: FC = () => {
  const t = useTranslations();

  return (
    <div className="my-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center mb-5">
              <h1 className="display-1 fw-semibold">
                5<span className="text-primary mx-2">0</span>0
              </h1>
              <h4 className="text-uppercase">{t('notifications.500.title')}</h4>
              <div className="mt-5 text-center">
                <Button as={Link} pathname={RoutePath.Index}>
                  {t('actions.backToHome')}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-10 col-xl-8">
            <div>
              <Image {...IMAGE} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Err;
