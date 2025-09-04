import { createContext } from 'use-context-selector';

import { DTO } from '@network/api';

interface ServerLayoutContextProps {
  isFetching: boolean;
  server?: DTO.GetServerResponse;
}

export const ServerLayoutContext = createContext<ServerLayoutContextProps>({
  isFetching: false,
});
