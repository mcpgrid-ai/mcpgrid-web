import { Option } from 'react-bootstrap-typeahead/types/types';
import { createContext } from 'use-context-selector';

interface TypeaheadItemContextProps {
  option: Option;
  position: number;
}

export const TypeaheadItemContext = createContext<TypeaheadItemContextProps>({
  option: {},
  position: 0,
});
