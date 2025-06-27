import { FC, Fragment } from 'react';

import { RoutePath } from '@common/constants';
import { redirect } from '@core/navigation';
import { strapi } from '@network/strapi';

const SignUp: FC = async () => {
  const {
    data: { feature },
  } = await strapi.page.getSignUp({});

  if (!feature?.Dashboard) redirect(RoutePath.Dashboard);

  return <Fragment>Sign Up</Fragment>;
};

export default SignUp;
