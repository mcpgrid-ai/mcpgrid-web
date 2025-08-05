'use client';

import { ReactElement, ReactNode } from 'react';
import { AsyncTypeahead, Menu } from 'react-bootstrap-typeahead';
import classNames from 'classnames';
import BsSpinner from 'react-bootstrap/Spinner';
import BsFormControl from 'react-bootstrap/FormControl';

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
  name?: string;
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
  name,
  label,
  icon = 'magnifying-glass',
}) => {
  return (
    <form method="get" action={action} className={classNames(styles.wrapper)}>
      <AsyncTypeahead
        isLoading={isLoading}
        labelKey={label.toString()}
        onSearch={(q) => onSearch({ q })}
        options={options}
        className={classNames(styles.input)}
        placeholder={placeholder}
        filterBy={() => true}
        minLength={3}
        renderInput={({ inputRef, referenceElementRef, ...inputProps }) => (
          // @ts-expect-error x3 error
          <BsFormControl
            as="input"
            type="text"
            placeholder={placeholder}
            ref={(input) => {
              inputRef(input);
              referenceElementRef(input);
            }}
            {...inputProps}
            className={classNames(styles.input, {
              [styles.bg]: bg,
            })}
            name={name}
          />
        )}
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
      >
        {() => null}
      </AsyncTypeahead>
      <Button type="submit" className={styles.btn}>
        {isLoading ? (
          <BsSpinner size="sm" className={styles.spinner} />
        ) : (
          <Icon.Fa name={icon} size={16} />
        )}
      </Button>
    </form>
  );
};

Typeahead.Item = TypeaheadItem;
