import { FC } from 'react';
import { RoutePath } from '@common/constants';

import { Link } from '@core/navigation';

const Blog: FC = () => {
  return (
    <Link pathname={RoutePath.BlogPost} params={{ slug: 'test' }}>
      Blog post
    </Link>
  );
};

export default Blog;
