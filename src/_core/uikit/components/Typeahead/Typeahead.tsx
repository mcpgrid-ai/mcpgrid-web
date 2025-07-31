'use client';

import { FC, memo, PropsWithChildren } from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import classNames from 'classnames';

import { Button } from '../Button';
import { Icon } from '../Icon';

import { TypeaheadOnSearchCallback } from './Typeahead.types';
import styles from './Typeahead.module.scss';

export type TypeaheadProps = PropsWithChildren<{
  isLoading: boolean;
  onSearch: TypeaheadOnSearchCallback;
  options: Array<Record<string, unknown>>;
  placeholder?: string;
  bg?: boolean;
  action?: string;
}>;

export const Typeahead: FC<TypeaheadProps> = memo(function Typeahead({
  isLoading,
  onSearch,
  options,
  placeholder,
  bg,
  action,
}) {
  return (
    <form
      method="get"
      action={action}
      className={classNames(styles.wrapper, {
        [styles.bg]: bg,
      })}
    >
      <AsyncTypeahead
        isLoading={isLoading}
        labelKey="Title"
        onSearch={(q) => onSearch({ q })}
        options={options}
        className={classNames(styles.input)}
        placeholder={placeholder}
      />
      <Button type="submit" className={styles.btn}>
        <Icon.Fa name="magnifying-glass" size={16} />
      </Button>
    </form>
  );
});
