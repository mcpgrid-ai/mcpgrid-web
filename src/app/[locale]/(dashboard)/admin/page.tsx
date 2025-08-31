import { FC } from 'react';

import { generateCommonMetadata } from '@common/utils';

export const generateMetadata = generateCommonMetadata({
  slug: 'sign-in',
});

const SignIn: FC = async () => {
  return <div className="auth-content my-auto">Admin</div>;
};

export default SignIn;
