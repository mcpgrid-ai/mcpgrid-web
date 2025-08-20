import { FC, Fragment } from 'react';

import { Countdown } from '../_partitions/Countdown';

import { getTranslations } from '@core/i18n';
import { Button, Icon, Typography } from '@core/uikit';
import { notFound } from '@core/navigation';
import { keystone } from '@network/keystone';
import { generateCommonMetadata } from '@common/utils';

const SLUG = 'dashboard';

export const generateMetadata = generateCommonMetadata({
  slug: SLUG,
});

const DashboardSoon: FC = async () => {
  const t = await getTranslations();

  const {
    data: { config, pages },
  } = await keystone.pages.getDashboard({
    slug: [SLUG],
  });

  const page = pages?.find(({ slug }) => slug === SLUG);

  if (!page) return notFound();

  return (
    <Fragment>
      <Typography as="h3" className="text-white mt-5">
        {page.subtitle}
      </Typography>
      <Typography as="p" className="text-white-50 font-size-16">
        {page.description}
      </Typography>

      <Countdown target={new Date(config?.releaseDate)} />

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
