import { Metadata } from 'next';
import { FC, Fragment } from 'react';

import { Heading } from '@core/uikit';

const Faq: FC = async () => {
  return (
    <Fragment>
      <Heading>
        <Heading.Title>FAQs</Heading.Title>
      </Heading>
      <div className="row">
        <div className="col-lg-12">
          <div className="row justify-content-center mt-3">
            <div className="col-xl-5 col-lg-8">
              <div className="text-center">
                <h5>Can't find what you are looking for?</h5>
                <p className="text-muted">
                  If several languages coalesce, the grammar of the resulting
                  language is more simple and regular than that of the
                  individual
                </p>
                <div>
                  <button
                    type="button"
                    className="btn btn-primary mt-2 me-2 waves-effect waves-light"
                  >
                    Contact Us
                  </button>
                  <button
                    type="button"
                    className="btn btn-success mt-2 waves-effect waves-light"
                  >
                    Send us a tweet
                  </button>
                </div>

                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    <form className="app-search d-none d-lg-block mt-4">
                      <div className="position-relative">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search..."
                        />
                        <button className="btn btn-primary" type="button">
                          <i className="bx bx-search-alt align-middle"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-xl-4 col-sm-6">
              <div className="card">
                <div className="card-body overflow-hidden position-relative">
                  <div>
                    <i className="bx bx-help-circle widget-box-1-icon text-primary"></i>
                  </div>
                  <div className="faq-count">
                    <h5 className="text-primary">01.</h5>
                  </div>
                  <h5 className="mt-3">What is Lorem Ipsum?</h5>
                  <p className="text-muted mt-3 mb-0">
                    New common language will be more simple and regular than the
                    existing European languages. It will be as simple as
                    occidental.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-sm-6">
              <div className="card">
                <div className="card-body overflow-hidden position-relative">
                  <div>
                    <i className="bx bx-help-circle widget-box-1-icon text-primary"></i>
                  </div>
                  <div className="faq-count">
                    <h5 className="text-primary">02.</h5>
                  </div>
                  <h5 className="mt-3">Where does it come from?</h5>
                  <p className="text-muted mt-3 mb-0">
                    Everyone realizes why a new common language would be
                    desirable one could refuse to pay expensive translators.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-sm-6">
              <div className="card">
                <div className="card-body overflow-hidden position-relative">
                  <div>
                    <i className="bx bx-help-circle widget-box-1-icon text-primary"></i>
                  </div>
                  <div className="faq-count">
                    <h5 className="text-primary">03.</h5>
                  </div>
                  <h5 className="mt-3">Where can I get some?</h5>
                  <p className="text-muted mt-3 mb-0">
                    If several languages coalesce, the grammar of the resulting
                    language is more simple and regular than that of the
                    individual languages.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-sm-6">
              <div className="card">
                <div className="card-body overflow-hidden position-relative">
                  <div>
                    <i className="bx bx-help-circle widget-box-1-icon text-primary"></i>
                  </div>
                  <div className="faq-count">
                    <h5 className="text-primary">04.</h5>
                  </div>
                  <h5 className="mt-3">Why do we use it?</h5>
                  <p className="text-muted mt-3 mb-0">
                    Their separate existence is a myth. For science, music,
                    sport, etc, Europe uses the same vocabulary.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-sm-6">
              <div className="card">
                <div className="card-body overflow-hidden position-relative">
                  <div>
                    <i className="bx bx-help-circle widget-box-1-icon text-primary"></i>
                  </div>
                  <div className="faq-count">
                    <h5 className="text-primary">05.</h5>
                  </div>
                  <h5 className="mt-3">Where can I get some?</h5>
                  <p className="text-muted mt-3 mb-0">
                    The point of using Lorem Ipsum is that it has a more-or-less
                    normal they distribution of letters opposed to using content
                    here.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-sm-6">
              <div className="card">
                <div className="card-body overflow-hidden position-relative">
                  <div>
                    <i className="bx bx-help-circle widget-box-1-icon text-primary"></i>
                  </div>
                  <div className="faq-count">
                    <h5 className="text-primary">06.</h5>
                  </div>
                  <h5 className="mt-3">What is Lorem Ipsum?</h5>
                  <p className="text-muted mt-3 mb-0">
                    To an English person, it will seem like simplified English,
                    as a skeptical Cambridge friend of mine told me what
                    Occidental
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: 'Blog',
    description: 'Read this blog post',
  };
};

export default Faq;
