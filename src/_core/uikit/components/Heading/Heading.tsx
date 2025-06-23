import { PropsWithChildren, ReactElement } from 'react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';

import { HeadingTitle } from './HeadingTitle';
import { HeadingBreadcrumb } from './HeadingBreadcrumb';

const chevron = icon(faChevronRight).html[0];
const chevronBase64 = Buffer.from(chevron).toString('base64');

export type HeadingProps = PropsWithChildren;

interface HeadingComponent {
  (props: HeadingProps): ReactElement;
  Title: typeof HeadingTitle;
  Breadcrumb: typeof HeadingBreadcrumb;
}

export const Heading: HeadingComponent = ({ children }) => {
  return (
    <div className="row">
      <div
        className="col-12"
        style={
          {
            '--bs-breadcrumb-divider': `url("data:image/svg+xml;base64,${chevronBase64}")`,
          } as React.CSSProperties
        }
      >
        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
          {children}
        </div>
      </div>
    </div>
  );
};

Heading.Title = HeadingTitle;
Heading.Breadcrumb = HeadingBreadcrumb;
