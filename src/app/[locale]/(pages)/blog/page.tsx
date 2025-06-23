import { FC } from 'react';

import { Link } from '@app/navigation';
import { AppRoutePath } from '@app/common';

const Blog: FC = () => {
  return (
    <Link pathname={AppRoutePath.BlogPost} params={{ slug: 'test' }}>
      Blog post
    </Link>
  );
};

export default Blog;
