'use client';

import { ReactElement, ReactNode } from 'react';
import { AsyncTypeahead, Menu } from 'react-bootstrap-typeahead';
import classNames from 'classnames';

import { Button } from '../Button';
import { Icon, IconFaName } from '../Icon';

import { TypeaheadItem, TypeaheadItemContext } from './TypeaheadItem';
import {
  TypeaheadOnSearchCallback,
  TypeaheadChildrenProps,
} from './Typeahead.types';
import styles from './Typeahead.module.scss';

export interface TypeaheadProps<T extends object> {
  icon?: IconFaName;
  isLoading: boolean;
  onSearch: TypeaheadOnSearchCallback;
  options: Array<T>;
  placeholder?: string;
  bg?: boolean;
  action?: string;
  label: keyof T;
  children: (props: TypeaheadChildrenProps<T>) => ReactElement;
}

interface TypeaheadComponent {
  <T extends object = Record<string, unknown>>(
    props: TypeaheadProps<T>,
  ): ReactElement | ReactNode;
  Item: typeof TypeaheadItem;
}

export const Typeahead: TypeaheadComponent = ({
  isLoading,
  onSearch,
  options,
  placeholder,
  bg,
  action,
  children,
  icon = 'magnifying-glass',
}) => {
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
        labelKey="title"
        onSearch={(q) => onSearch({ q })}
        options={options}
        className={classNames(styles.input)}
        placeholder={placeholder}
        filterBy={() => true}
        renderMenu={(results, menuProps) => (
          <Menu {...menuProps}>
            {results.map((option, index) => (
              <TypeaheadItemContext.Provider
                value={{ option, position: index }}
                key={index}
              >
                {children({
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  option: option as any,
                })}
              </TypeaheadItemContext.Provider>
            ))}
          </Menu>
        )}
      />
      <Button type="submit" className={styles.btn}>
        <Icon.Fa name={icon} size={16} />
      </Button>
    </form>
  );
};

Typeahead.Item = TypeaheadItem;
