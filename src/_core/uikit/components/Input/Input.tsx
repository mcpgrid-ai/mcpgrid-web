import { noop } from 'lodash';
import { FormEventHandler, memo, useId } from 'react';
import BsFormControl from 'react-bootstrap/FormControl';
import BsSpinner from 'react-bootstrap/Spinner';
import classNames from 'classnames';

import { Button } from '../Button';
import { Icon, IconBxName } from '../Icon';

import { InputOnSubmitCallback } from './Input.types';
import styles from './Input.module.scss';

export interface InputProps {
  icon: IconBxName;
  placeholder?: string;
  onSubmit?: InputOnSubmitCallback;
  className?: string;
  isLoading?: boolean;
}

export const Input = memo<InputProps>(function Input({
  icon,
  isLoading,
  placeholder,
  className,
  onSubmit = noop,
}) {
  const name = useId();

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const values = Object.fromEntries(data.entries());
    onSubmit({ value: values[name] });
  };

  return (
    <form
      className={classNames('app-search', className)}
      onSubmit={handleOnSubmit}
    >
      <div className="position-relative">
        <BsFormControl name={name} type="text" placeholder={placeholder} />
        <Button type="submit">
          {isLoading ? (
            <BsSpinner size="sm" className={styles.spinner} />
          ) : (
            <Icon.Bx name={icon} size={16} />
          )}
        </Button>
      </div>
    </form>
  );
});
