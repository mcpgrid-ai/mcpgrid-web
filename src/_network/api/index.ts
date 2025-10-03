export * as DTO from './__generated__/api.schemas';

// Components
export * from './components/ApiProvider';

// Hooks
export {
  useGetServers,
  useGetServersInfinite,
} from './__generated__/servers/servers';
export { useCreateWaitlist } from './__generated__/waitlists/waitlists';
export { useGetInstances } from './__generated__/instances/instances';

// Services
export { ApiClient } from './services/api-client';

// X3
export { getServers, useGetServer } from './__generated__/servers/servers';

export type {
  RequestInterceptorFulfilledFn,
  RequestInterceptorRejectedFn,
  ResponseInterceptorFulfilledFn,
  ResponseInterceptorRejectedFn,
} from './components/ApiProvider/ApiProvider.types';
