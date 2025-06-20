import Link from 'next/link';
import { FC } from 'react';

import { AppRoutePath } from '@app/common';

const Blog: FC = () => {
  return (
    <Link
      href={{
        pathname: AppRoutePath.BlogPost,
        query: {
          slug: 'test',
        },
      }}
    >
      Blog post
    </Link>
  );
};

export default Blog;
