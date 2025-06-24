import { FC } from 'react';

import { Link } from '@app/navigation';
import { RoutePath } from '@app/common';

const Blog: FC = () => {
  return (
    <Link pathname={RoutePath.BlogPost} params={{ slug: 'test' }}>
      Blog post
    </Link>
  );
};

export default Blog;
