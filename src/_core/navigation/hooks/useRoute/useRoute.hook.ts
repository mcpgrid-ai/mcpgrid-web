'use client';

import {
  usePathname,
  useSelectedLayoutSegment,
  useParams,
} from 'next/navigation';

interface UseRouteReturnState<P extends object> {
  pathname: string;
  segment: string | null;
  params: P;
}

type UseRouteReturnType<P extends object> = [UseRouteReturnState<P>];

export const useRoute = <
  P extends object = object,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  S extends object = object,
>(): UseRouteReturnType<P> => {
  const pathname = usePathname();
  const segment = useSelectedLayoutSegment();
  const params = useParams();

  return [
    {
      pathname,
      segment,
      params: params as P,
    },
  ];
};
