'use client';

import { FC, useEffect, useState } from 'react';
import { padStart } from 'lodash';
import classNames from 'classnames';

import { getTimeRemaining } from './Countdown.utils';
import styles from './Countdown.module.scss';

import { useTranslations } from '@core/i18n';

interface CountdownProps {
  target: Date;
}

export const Countdown: FC<CountdownProps> = ({ target }) => {
  const [{ days, hours, minutes, seconds }, setTimeLeft] = useState(
    getTimeRemaining(target),
  );
  const t = useTranslations();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(target));
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      data-countdown="2023/12/31"
      className={classNames(styles.number, 'mt-5')}
    >
      <div className={styles.box}>
        <div className={styles.title}>{t('forms.days')}</div>
        <div className={styles.num}>{padStart(days, 2, '0')}</div>
      </div>
      <div className={styles.box}>
        <div className={styles.title}>{t('forms.hours')}</div>
        <div className={styles.num}>{padStart(hours, 2, '0')}</div>
      </div>
      <div className={styles.box}>
        <div className={styles.title}>{t('forms.minutes')}</div>
        <div className={styles.num}>{padStart(minutes, 2, '0')}</div>
      </div>
      <div className={styles.box}>
        <div className={styles.title}>{t('forms.seconds')}</div>
        <div className={styles.num}>{padStart(seconds, 2, '0')}</div>
      </div>
    </div>
  );
};
