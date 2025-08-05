import { forwardRef } from 'react';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';
import BsPagination from 'react-bootstrap/Pagination';
import BsPageItem, {
  First,
  Prev,
  Next,
  Last,
  Ellipsis,
} from 'react-bootstrap/PageItem';
import {
  FiChevronsRight,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronLeft,
} from 'react-icons/fi';

import { PaginationItem } from './PaginationItem';

export interface PaginationProps {
  total?: number;
  size?: number;
  page?: number;
  range?: number;
  className?: string;
  children?: typeof PaginationItem;
}

// @ts-expect-error x3 error
export const Pagination: BsPrefixRefForwardingComponent<'ul', PaginationProps> =
  forwardRef<HTMLUListElement, PaginationProps>(function Pagination(
    {
      total = 0,
      size = 24,
      page = 1,
      range = 2,
      className,
      children: Children = PaginationItem,
    },
    ref,
  ) {
    const step = 3;

    const count = Math.ceil(total / size);

    if (count <= 1) return null;

    const start = Math.max(1, page - range);
    const end = Math.min(count, page + range);

    return (
      <BsPagination ref={ref} className={className}>
        <First
          as={Children}
          className="mx-1"
          disabled={page === 1}
          // @ts-expect-error x3 error
          page={1}
        >
          <FiChevronsLeft />
        </First>
        <Prev
          as={Children}
          className="mx-1"
          disabled={page === 1}
          // @ts-expect-error x3 error
          page={page - 1}
        >
          <FiChevronLeft />
        </Prev>
        <BsPageItem page={1} as={Children} className="mx-1" active={page === 1}>
          1
        </BsPageItem>
        {start > 2 && (
          <Ellipsis
            as={Children}
            // @ts-expect-error x3 error
            page={Math.max(1, page - step)}
            className="mx-1"
          />
        )}
        {Array.from({ length: end - start }).map((_, value) => {
          const current = value + start;
          return (
            current !== 1 &&
            current !== count && (
              <BsPageItem
                key={value}
                page={current}
                as={Children}
                className="mx-1"
                active={page === current}
              >
                {value + start}
              </BsPageItem>
            )
          );
        })}
        {end < count - 1 && (
          <Ellipsis
            as={Children}
            // @ts-expect-error x3 error
            page={Math.min(count, page + step)}
            className="mx-1"
          />
        )}
        <BsPageItem
          page={count}
          as={Children}
          className="mx-1"
          active={page === count}
        >
          {count}
        </BsPageItem>
        <Next
          as={Children}
          // @ts-expect-error x3 error
          page={page + 1}
          className="mx-1"
          disabled={page === count}
        >
          <FiChevronRight />
        </Next>
        <Last
          as={Children}
          // @ts-expect-error x3 error
          page={count}
          className="mx-1"
          disabled={page === count}
        >
          <FiChevronsRight />
        </Last>
      </BsPagination>
    );
  });
