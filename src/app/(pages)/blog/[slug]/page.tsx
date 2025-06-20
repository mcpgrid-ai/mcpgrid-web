import { FC, Fragment } from 'react';

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

const BlogPost: FC<BlogPostProps> = async ({ params }) => {
  const { slug } = await params;

  return <Fragment>{slug}</Fragment>;
};

export default BlogPost;
