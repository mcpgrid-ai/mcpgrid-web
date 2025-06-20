'use client';

import { FC } from 'react';
import classNames from 'classnames';
import Image from 'next/image';

import { useTheme, ThemeMode } from '../ThemeProvider';

import LOGO from './Logo.svg';
import styles from './Logo.module.scss';

export const Logo: FC = () => {
  const { mode } = useTheme();

  return (
    <div
      className={classNames(styles.logo, {
        [styles['logo-dark']]: mode === ThemeMode.Dark,
        [styles['logo-light']]: mode === ThemeMode.Dark,
      })}
    >
      <span className={styles['logo-sm']}>
        <Image {...LOGO} height={24} alt="" />
      </span>
      <span className={styles['logo-lg']}>
        <Image {...LOGO} height={24} alt="" />
        <span className={styles['logo-txt']}>Mcpbox</span>
      </span>
    </div>
  );
};
