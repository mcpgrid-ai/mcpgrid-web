import { FC } from 'react';
import Image from 'next/image';

import IMAGE from './not-found.png';

import { getTranslations } from '@core/i18n';
import { Button } from '@core/uikit';
import { Link } from '@core/navigation';
import { RoutePath } from '@common/constants';

const NotFound: FC = async () => {
  const t = await getTranslations();

  return (
    <body>
      <div className="my-5 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center mb-5">
                <h1 className="display-1 fw-semibold">
                  4<span className="text-primary mx-2">0</span>4
                </h1>
                <h4 className="text-uppercase">
                  {t('notifications.404.title')}
                </h4>
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
                <Image
                  src={IMAGE.src}
                  width={IMAGE.width}
                  height={IMAGE.height}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default NotFound;
