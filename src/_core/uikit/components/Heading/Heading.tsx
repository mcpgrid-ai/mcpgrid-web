import { PropsWithChildren, ReactElement } from 'react';

import { HeadingTitle } from './HeadingTitle';

export type HeadingProps = PropsWithChildren;

interface HeadingComponent {
  (props: HeadingProps): ReactElement;
  Title: typeof HeadingTitle;
}

export const Heading: HeadingComponent = ({ children }) => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
          {children}

          <div className="page-title-right">
            <ol className="breadcrumb m-0">
              <li className="breadcrumb-item">
                <a href="javascript: void(0);">@@pagetitle</a>
              </li>
              <li className="breadcrumb-item active">@@title</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

Heading.Title = HeadingTitle;
