import { FC, Fragment } from 'react';

import { Countdown } from '../_partitions/Countdown';

import { getTranslations } from '@core/i18n';
import { Button, Icon, Typography } from '@core/uikit';
import { strapi } from '@network/strapi';
import { notFound } from '@core/navigation';

const DashboardSoon: FC = async () => {
  const [
    t,
    {
      data: {
        feature,
        pages: [page],
      },
    },
  ] = await Promise.all([
    getTranslations(),
    strapi.page.getDashboard({ slug: ['dashboard'] }),
  ]);

  if (!page) return notFound();

  return (
    <Fragment>
      <Typography as="h3" className="text-white mt-5">
        {page.Subtitle}
      </Typography>
      <Typography as="p" className="text-white-50 font-size-16">
        {page.Description}
      </Typography>

      <Countdown target={new Date(feature?.ReleaseDate)} />

      <form className="app-search mt-5 mx-auto">
        <div className="position-relative">
          <input
            type="text"
            className="form-control"
            placeholder={t('placeholders.enterYourEmailAddress')}
          />
          <Button type="submit">
            <Icon.Bx name="paper-plane" size={14} />
          </Button>
        </div>
      </form>
    </Fragment>
  );
};

export default DashboardSoon;
