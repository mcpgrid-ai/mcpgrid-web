import { FC } from 'react';

import { keystone } from '@network/keystone';
import { notFound } from '@core/navigation';
import { generateCommonMetadata } from '@common/utils';
import { Box, Button, Logo, Typography } from '@core/uikit';
import { getTranslations } from '@core/i18n';

export const generateMetadata = generateCommonMetadata({
  slug: 'sign-in',
});

const SignIn: FC = async () => {
  const t = await getTranslations();

  const {
    data: { page },
  } = await keystone.pages.getSignIn({});

  if (!page) return notFound();

  return (
    <div className="auth-content my-auto">
      <Box text="center">
        <Typography as="h5" className="mb-0">
          {page?.subtitle}
        </Typography>
        <Typography as="p" className="text-muted mt-2">
          {page?.description}{' '}
        </Typography>
      </Box>
      {/* <form className="mt-4 pt-2" action="index.html">
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter username"
          />
        </div>
        <div className="mb-3">
          <div className="d-flex align-items-start">
            <div className="flex-grow-1">
              <label className="form-label">Password</label>
            </div>
            <div className="flex-shrink-0">
              <div className="">
                <a href="auth-recoverpw.html" className="text-muted">
                  Forgot password?
                </a>
              </div>
            </div>
          </div>

          <div className="input-group auth-pass-inputgroup">
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              aria-label="Password"
              aria-describedby="password-addon"
            />
            <button
              className="btn btn-light shadow-none ms-0"
              type="button"
              id="password-addon"
            >
              <i className="mdi mdi-eye-outline"></i>
            </button>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="remember-check"
              />
              <label className="form-check-label">Remember me</label>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <button
            className="btn btn-primary w-100 waves-effect waves-light"
            type="submit"
          >
            Log In
          </button>
        </div>
      </form> */}

      <Box mt={4} pt={2} text="center">
        <div className="signin-other-title">
          <Typography
            as="h5"
            className="font-size-14 mb-3 text-muted fw-medium"
          >
            - {t('labels.signInWith')} -
          </Typography>
        </div>

        {/* <ul className="list-inline mb-0">
          <li className="list-inline-item">
            <a
              href="javascript:void()"
              className="social-list-item bg-primary text-white border-primary"
            >
              <i className="mdi mdi-facebook"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="javascript:void()"
              className="social-list-item bg-info text-white border-info"
            >
              <i className="mdi mdi-twitter"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="javascript:void()"
              className="social-list-item bg-danger text-white border-danger"
            >
              <i className="mdi mdi-google"></i>
            </a>
          </li>
        </ul> */}
      </Box>

      <Box d="grid" gap={3}>
        <Button variant="outline-light">
          <Logo name="google" className="me-2" />
          {t('actions.continueWithGoogle')}
        </Button>
        <Button variant="outline-light">
          <Logo name="github" className="me-2" />
          {t('actions.continueWithGithub')}
        </Button>
      </Box>

      {/* <div className="mt-5 text-center">
        <p className="text-muted mb-0">
          Don't have an account ?{' '}
          <a href="auth-register.html" className="text-primary fw-semibold">
            {' '}
            Signup now{' '}
          </a>{' '}
        </p>
      </div> */}
    </div>
  );
};

export default SignIn;
