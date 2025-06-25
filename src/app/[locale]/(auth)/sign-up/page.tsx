import { FC } from 'react';

import { redirect } from '@core/navigation';
import { RoutePath } from '@app/common';

const SignUp: FC = () => {
  redirect(RoutePath.Dashboard);
};

export default SignUp;
