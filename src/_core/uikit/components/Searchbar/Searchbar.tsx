import { ButtonHTMLAttributes, FC } from 'react';
import BsFormControl from 'react-bootstrap/FormControl';

import { Icon } from '../Icon';
import { Button } from '../Button';

import styles from './Searchbar.module.scss';

export interface SearchbarProps {
  name?: string;
  placeholder?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

export const Searchbar: FC<SearchbarProps> = ({
  name,
  type = 'button',
  placeholder,
}) => {
  return (
    <div className="position-relative">
      <BsFormControl
        as="input"
        type="text"
        name={name}
        placeholder={placeholder}
        className={styles.input}
      />
      <Button type={type} className={styles.btn}>
        <Icon.Fa name="magnifying-glass" size={16} />
      </Button>
    </div>
  );
};
