'use client';

import { ParsedUrlQueryInput } from 'querystring';

import { FC, HTMLAttributeAnchorTarget, PropsWithChildren } from 'react';
import NextLink from 'next/link';
import { generatePath } from 'react-router';

export type LinkProps = PropsWithChildren<{
  pathname: string;
  params?: Record<string, unknown>;
  query?: ParsedUrlQueryInput;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
}>;

export const Link: FC<LinkProps> = ({
  pathname,
  children,
  params = {},
  query,
  className,
  target,
}) => {
  return (
    <NextLink
      target={target}
      href={{
        query,
        pathname: generatePath(pathname, params),
      }}
      className={className}
    >
      {children}
    </NextLink>
  );
};
