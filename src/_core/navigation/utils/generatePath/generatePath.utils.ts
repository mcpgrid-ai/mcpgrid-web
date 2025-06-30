import { ParsedUrlQueryInput } from 'querystring';

import { generatePath as generate } from 'react-router';

export interface GeneratePathParams {
  pathname: string;
  params?: Record<string, unknown>;
  query?: ParsedUrlQueryInput;
}

export const generatePath = ({
  pathname,
  params = {},
  query = {},
}: GeneratePathParams) => {
  return generate();
};
