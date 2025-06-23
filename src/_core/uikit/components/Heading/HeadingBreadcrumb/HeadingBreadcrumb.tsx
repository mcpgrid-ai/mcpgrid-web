import classNames from 'classnames';
import { PropsWithChildren, ReactElement } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import { HeadingBreadcrumbItem } from './HeadingBreadcrumbItem';

type HeadingBreadcrumbProps = PropsWithChildren<{
  className?: string;
}>;

interface HeadingBreadcrumbComponent {
  (props: HeadingBreadcrumbProps): ReactElement;
  Item: typeof HeadingBreadcrumbItem;
}

export const HeadingBreadcrumb: HeadingBreadcrumbComponent = ({
  className,
  children,
}) => {
  return (
    <div className="page-title-right">
      <Breadcrumb className={classNames('m-0', className)}>
        {children}
      </Breadcrumb>
    </div>
  );
};

HeadingBreadcrumb.Item = HeadingBreadcrumbItem;
