import { ParsedUrlQueryInput } from 'querystring';

import { stringify } from 'qs';
import { redirect as nextRedirect } from 'next/navigation';
// import { generatePath } from 'react-router';

interface RedirectParams {
  pathname: string;
  params?: Record<string, unknown>;
  query?: ParsedUrlQueryInput;
}

export const redirect = ({
  pathname: initialPathname,
  //   params = {},
  query: initialQuery = {},
}: RedirectParams) => {
  //   const pathname = generatePath(initialPathname, params);
  const query = stringify(initialQuery, {
    addQueryPrefix: true,
  });

  nextRedirect(initialPathname + query);
};
