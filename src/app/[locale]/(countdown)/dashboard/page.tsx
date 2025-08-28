import { FC, Fragment } from 'react';

import { Countdown } from '../_partitions/Countdown';

import { WaitlistForm } from './_partitions/WaitlistForm';

import { Typography } from '@core/uikit';
import { notFound } from '@core/navigation';
import { keystone } from '@network/keystone';
import { generateCommonMetadata } from '@common/utils';

export const generateMetadata = generateCommonMetadata({
  slug: 'dashboard',
});

const DashboardSoon: FC = async () => {
  const {
    data: { config, page },
  } = await keystone.pages.getDashboard({});

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

      <WaitlistForm />
    </Fragment>
  );
};

export default DashboardSoon;
