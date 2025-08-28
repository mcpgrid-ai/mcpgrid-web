import { FC, PropsWithChildren } from 'react';
import Image from 'next/image';

import { getTranslations } from '@core/i18n';
import { IMAGES } from '@core/uikit';
import { Link } from '@core/navigation';
import { RoutePath } from '@common/constants';

type AuthLayoutProps = PropsWithChildren;

const AuthLayout: FC<AuthLayoutProps> = async ({ children }) => {
  const t = await getTranslations();

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
                <div className="row justify-content-center align-items-center">
                  <div className="col-xl-7">
                    <div className="p-0 p-sm-4 px-xl-0">
                      <div
                        id="reviewcarouselIndicators"
                        className="carousel slide"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-indicators carousel-indicators-rounded justify-content-start ms-0 mb-0">
                          <button
                            type="button"
                            data-bs-target="#reviewcarouselIndicators"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#reviewcarouselIndicators"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#reviewcarouselIndicators"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                          ></button>
                        </div>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <div className="testi-contain text-white">
                              <i className="bx bxs-quote-alt-left text-success display-6"></i>

                              <h4 className="mt-4 fw-medium lh-base text-white">
                                “I feel confident imposing change on myself.
                                It's a lot more progressing fun than looking
                                back. That's why I ultricies enim at malesuada
                                nibh diam on tortor neaded to throw curve
                                balls.”
                              </h4>
                              <div className="mt-4 pt-3 pb-5">
                                <div className="d-flex align-items-start">
                                  <div className="flex-shrink-0">
                                    <img
                                      src="assets/images/users/avatar-1.jpg"
                                      className="avatar-md img-fluid rounded-circle"
                                      alt="..."
                                    />
                                  </div>
                                  <div className="flex-grow-1 ms-3 mb-4">
                                    <h5 className="font-size-18 text-white">
                                      Richard Drews
                                    </h5>
                                    <p className="mb-0 text-white-50">
                                      Web Designer
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="carousel-item">
                            <div className="testi-contain text-white">
                              <i className="bx bxs-quote-alt-left text-success display-6"></i>

                              <h4 className="mt-4 fw-medium lh-base text-white">
                                “Our task must be to free ourselves by widening
                                our circle of compassion to embrace all living
                                creatures and the whole of quis consectetur nunc
                                sit amet semper justo. nature and its beauty.”
                              </h4>
                              <div className="mt-4 pt-3 pb-5">
                                <div className="d-flex align-items-start">
                                  <div className="flex-shrink-0">
                                    <img
                                      src="assets/images/users/avatar-2.jpg"
                                      className="avatar-md img-fluid rounded-circle"
                                      alt="..."
                                    />
                                  </div>
                                  <div className="flex-grow-1 ms-3 mb-4">
                                    <h5 className="font-size-18 text-white">
                                      Rosanna French
                                    </h5>
                                    <p className="mb-0 text-white-50">
                                      Web Developer
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="carousel-item">
                            <div className="testi-contain text-white">
                              <i className="bx bxs-quote-alt-left text-success display-6"></i>

                              <h4 className="mt-4 fw-medium lh-base text-white">
                                “I've learned that people will forget what you
                                said, people will forget what you did, but
                                people will never forget how donec in efficitur
                                lectus, nec lobortis metus you made them feel.”
                              </h4>
                              <div className="mt-4 pt-3 pb-5">
                                <div className="d-flex align-items-start">
                                  <img
                                    src="assets/images/users/avatar-3.jpg"
                                    className="avatar-md img-fluid rounded-circle"
                                    alt="..."
                                  />
                                  <div className="flex-1 ms-3 mb-4">
                                    <h5 className="font-size-18 text-white">
                                      Ilse R. Eaton
                                    </h5>
                                    <p className="mb-0 text-white-50">
                                      Manager
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default AuthLayout;
