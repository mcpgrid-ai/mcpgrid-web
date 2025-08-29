import { FC, PropsWithChildren } from 'react';
import Image from 'next/image';

import { Testimonials } from './_partitions/Testimonials';

import { getTranslations } from '@core/i18n';
import { IMAGES, Row } from '@core/uikit';
import { Link } from '@core/navigation';
import { RoutePath } from '@common/constants';
import { keystone } from '@network/keystone';

type AuthLayoutProps = PropsWithChildren;

const AuthLayout: FC<AuthLayoutProps> = async ({ children }) => {
  const t = await getTranslations();

  const page = await keystone.pages.getAuth({});

  return (
    <body>
      <div className="auth-page">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-xxl-3 col-lg-4 col-md-5">
              <div className="auth-full-page-content d-flex p-sm-5 p-4">
                <div className="w-100">
                  <div className="d-flex flex-column h-100">
                    <div className="mb-4 mb-md-5 text-center">
                      <Link
                        pathname={RoutePath.Index}
                        className="d-block auth-logo"
                      >
                        <Image
                          width={28}
                          height={28}
                          src={IMAGES.LOGO}
                          alt={process.env.PRODUCT_NAME}
                        />
                        <span className="logo-txt">
                          {process.env.PRODUCT_NAME}
                        </span>
                      </Link>
                    </div>
                    {children}
                    <div className="mt-4 mt-md-5 text-center">
                      <p className="mb-0">
                        {t('common.copyright', {
                          year: new Date().getFullYear(),
                          name: process.env.PRODUCT_NAME,
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-9 col-lg-8 col-md-7">
              <div className="auth-bg pt-md-5 p-4 d-flex">
                <div className="bg-overlay bg-primary"></div>
                <ul className="bg-bubbles">
                  {Array.from({ length: 10 }).map((_, index) => (
                    <li key={index} />
                  ))}
                </ul>
                <Row className="justify-content-center align-items-center">
                  <Row.Col xl={7}>
                    <div className="p-0 p-sm-4 px-xl-0">
                      <Testimonials {...page.data} />
                    </div>
                  </Row.Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default AuthLayout;
