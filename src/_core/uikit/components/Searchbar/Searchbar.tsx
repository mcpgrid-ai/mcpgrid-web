import { ButtonHTMLAttributes, FC } from 'react';

import { Icon } from '../Icon';

export interface SearchbarProps {
  placeholder?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

export const Searchbar: FC<SearchbarProps> = ({
  type = 'button',
  placeholder,
}) => {
  return (
    <div className="position-relative">
      <input type="text" className="form-control" placeholder={placeholder} />
      <button className="btn btn-primary" type={type}>
        <Icon.Fa name="magnifying-glass" />
      </button>
    </div>
  );
};
