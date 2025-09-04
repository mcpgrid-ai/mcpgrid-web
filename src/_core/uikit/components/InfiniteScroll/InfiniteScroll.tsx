'use client';

import { FC, PropsWithChildren, ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { InfiniteScrollLoader } from './InfiniteScrollLoader/InfiniteScrollLoader';

const ReactInfiniteScroll = dynamic(
  () => import('react-infinite-scroll-component'),
  { ssr: false },
);

export type InfiniteScrollProps = PropsWithChildren<{
  length: number;
  target?: string;
  disabled: boolean;
  loader?: ReactNode;
  onScroll: () => void;
}>;

export const InfiniteScroll: FC<InfiniteScrollProps> = ({
  length,
  target,
  disabled,
  children,
  onScroll,
  loader = <InfiniteScrollLoader />,
}) => {
  return (
    <ReactInfiniteScroll
      next={onScroll}
      loader={loader}
      dataLength={length}
      hasMore={!disabled}
      scrollableTarget={target}
    >
      {children}
    </ReactInfiniteScroll>
  );
};
