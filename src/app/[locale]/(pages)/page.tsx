import { Fragment } from 'react';

import { Button, Heading, Icon, Row, Searchbar, Typography } from '@core/uikit';
import { Link } from '@app/navigation';
import { getTranslations } from '@core/i18n';
import { strapi } from '@network/strapi';
import { RoutePath } from '@app/common';

const Home = async () => {
  const t = await getTranslations();

  const { page, categories } = await strapi.page.getHome({
    slug: 'home',
  });

  return (
    <Fragment>
      <Heading />
      <Row>
        <Row.Col lg={12}>
          <Row className="justify-content-center mt-3">
            <Row.Col xl={5} lg={8}>
              <div className="text-center">
                <Typography as="h1">{page?.Subtitle}</Typography>
                <Typography className="text-muted font-size-16">
                  {page?.Description}
                </Typography>
                <div>
                  {/* <Button
                    as={Link}
                    variant="outline-secondary"
                    pathname={RoutePath.SignIn}
                    className="mt-2 me-2 waves-effect waves-light"
                  >
                    {t('actions.signIn')}
                  </Button> */}
                  <Button
                    as={Link}
                    pathname={RoutePath.SignUp}
                    variant="primary"
                    className="mt-2 me-2 waves-effect waves-light"
                  >
                    {t('actions.getStarted')}
                    <Icon.Fa
                      name="arrow-right"
                      className="ms-2"
                      height={13}
                      width={13}
                      fixedWidth
                    />
                  </Button>
                </div>
                <Row className="justify-content-center">
                  <Row.Col xl={10}>
                    <form
                      className="app-search d-none d-lg-block mt-4"
                      method="get"
                      action={RoutePath.Servers}
                    >
                      <Searchbar
                        name="search"
                        placeholder={t('placeholders.search')}
                      />
                    </form>
                  </Row.Col>
                </Row>
              </div>
            </Row.Col>
          </Row>
        </Row.Col>
      </Row>
      <Row className="mt-5">
        <Row.Col lg={12}>
          {categories.map(({ serverCategory, servers_connection }) => {
            return (
              <Row
                key={serverCategory?.Slug}
                className="row align-items-center"
              >
                <Row.Col md={6}>
                  <div className="mb-3">
                    <Typography className="card-title" as="h5">
                      {serverCategory?.Title}
                      <span className="text-muted fw-normal ms-2">
                        ({servers_connection?.pageInfo.total})
                      </span>
                    </Typography>
                  </div>
                </Row.Col>
                <Row.Col md={6}>
                  <div className="d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3">
                    <Link
                      pathname={RoutePath.Servers}
                      query={{ category: serverCategory?.Slug }}
                    >
                      View all
                    </Link>
                  </div>
                </Row.Col>
              </Row>
            );
          })}
        </Row.Col>
      </Row>
    </Fragment>
  );
};

export default Home;
