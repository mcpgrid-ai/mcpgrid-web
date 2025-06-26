import { Fragment } from 'react';

import { Button, Heading, Icon, Row, Searchbar, Typography } from '@core/uikit';
import { Link } from '@app/navigation';
import { getTranslations } from '@core/i18n';
import { strapi } from '@network/strapi';
import { RoutePath } from '@app/common';

const Home = async () => {
  const t = await getTranslations();

  const {
    data: {
      pages: [home],
    },
  } = await strapi.page.getHome({
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
                <Typography as="h1">{home?.Subtitle}</Typography>
                <Typography className="text-muted font-size-16">
                  {home?.Description}
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
                    <form className="app-search d-none d-lg-block mt-4">
                      <Searchbar placeholder={t('placeholders.search')} />
                    </form>
                  </Row.Col>
                </Row>
              </div>
            </Row.Col>
          </Row>
        </Row.Col>
      </Row>
    </Fragment>
  );
};

export default Home;
