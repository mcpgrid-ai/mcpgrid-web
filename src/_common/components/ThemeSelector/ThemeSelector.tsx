'use client';

import { FC } from 'react';
import { Button } from 'react-bootstrap';

import { useTheme, Icon } from '@core/uikit';

export const ThemeSelector: FC = () => {
  const { resolvedTheme, theme, setTheme } = useTheme();

  const value = theme ? theme : resolvedTheme;
  console.log({ theme, resolvedTheme });

  const handleOnClick = () => {
    setTheme((v) => (v === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="dropdown d-none d-sm-inline-block">
      <Button variant="header" onClick={handleOnClick} className="header-item">
        <Icon.Fi name={value === 'dark' ? 'sun' : 'moon'} size={20} />
      </Button>
    </div>
  );
};
