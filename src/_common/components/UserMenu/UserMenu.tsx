'use client';

import { FC } from 'react';
import Image from 'next/image';

import { Dropdown, Icon } from '@core/uikit';
import { useTranslations } from '@core/i18n';
import { signOut, useSession } from '@core/auth/client';
import { RoutePath } from '@common/constants';

export const UserMenu: FC = () => {
  const t = useTranslations();
  const { data: session } = useSession();

  const handleOnSignOut = () =>
    signOut({
      callbackUrl: RoutePath.SignIn,
    });

  if (!session) return null;

  return (
    <Dropdown>
      <Dropdown.Toggle className="header-item bg-light-subtle border-start border-end">
        {session?.user?.image && (
          <Image
            src={session?.user.image}
            width={36}
            height={36}
            alt={session?.user.name || ''}
            className="rounded-circle header-profile-user"
          />
        )}
        <span className="d-none d-xl-inline-block ms-1 fw-medium">
          {session?.user?.name}
        </span>
        <Icon.Bx name="chevron-down" className="d-none d-xl-inline-block" />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>{t('nav.dashboard')}</Dropdown.Item>
        <Dropdown.Item>{t('nav.profile')}</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={handleOnSignOut}>
          {t('actions.logout')}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
