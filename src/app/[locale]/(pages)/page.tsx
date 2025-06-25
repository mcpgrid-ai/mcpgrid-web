import { Fragment } from 'react';

import { Button, Heading, Icon, Row, Typography } from '@core/uikit';
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
                    <Icon.Fa name="arrow-right" className="ms-2" />
                  </Button>
                </div>
              </div>
            </Row.Col>
          </Row>
        </Row.Col>
      </Row>
    </Fragment>
  );
};

export default Home;
