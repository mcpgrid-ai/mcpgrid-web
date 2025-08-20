import { Fragment } from 'react';
import classNames from 'classnames';

import { ServerCategorySection } from './_partitions/ServerCategorySection';
import { ServersSearch } from './_partitions/ServersSearch';

import { ServerCard } from '@common/components';
import { RoutePath } from '@common/constants';
import { Link, notFound } from '@core/navigation';
import { Button, Heading, Icon, Row, Typography } from '@core/uikit';
import { getTranslations } from '@core/i18n';
import { keystone } from '@network/keystone';
import { generateCommonMetadata } from '@common/utils';

export const generateMetadata = generateCommonMetadata({
  slug: 'home',
});

const Home = async () => {
  const t = await getTranslations();

  const { pages, categories } = await keystone.pages.getHome({
    slug: 'home',
  });

  const page = pages?.find(({ slug }) => slug === 'home');

  if (!page) return notFound();

  return (
    <Fragment>
      <Heading />
      <Row>
        <Row.Col lg={12}>
          <Row className="justify-content-center mt-3">
            <Row.Col xl={5} lg={8}>
              <div className="text-center">
                <Typography as="h1">{page?.subtitle}</Typography>
                <Typography className="text-muted font-size-16">
                  {page?.description}
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
                    pathname={RoutePath.Dashboard}
                    variant="primary"
                    className="mt-2 me-2"
                  >
                    {t('actions.getStarted')}
                    <Icon.Fi name="arrow-right" className="ms-1" size={16} />
                  </Button>
                </div>
                <Row className="justify-content-center">
                  <Row.Col xl={10} sm={9} className="d-none d-sm-block mt-4">
                    <ServersSearch />
                  </Row.Col>
                </Row>
              </div>
            </Row.Col>
          </Row>
        </Row.Col>
      </Row>
      <Row className="mt-5">
        <Row.Col lg={12}>
          {categories.map(({ serverCategory, serversCount, servers }) => {
            return (
              <ServerCategorySection
                key={serverCategory?.slug}
                slug={serverCategory?.slug || ''}
                title={serverCategory?.title || ''}
                count={serversCount || 0}
              >
                <Row className="g-4">
                  {servers?.map((item, index, arr) => {
                    return (
                      <Row.Col
                        sm={6}
                        xs={12}
                        md={6}
                        lg={4}
                        xl={3}
                        key={item?.slug}
                        className={classNames({
                          'd-xl-block':
                            arr.length === 4 && index === arr.length - 1,
                          'd-lg-none':
                            arr.length === 4 && index === arr.length - 1,
                        })}
                      >
                        <ServerCard server={item} className="h-100" />
                      </Row.Col>
                    );
                  })}
                </Row>
              </ServerCategorySection>
            );
          })}
        </Row.Col>
      </Row>
    </Fragment>
  );
};

export default Home;
