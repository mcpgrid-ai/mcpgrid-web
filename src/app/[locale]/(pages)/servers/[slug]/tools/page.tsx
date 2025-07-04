import { FC, Fragment } from 'react';

interface ServerDetailsToolsProps {
  params: Promise<{
    slug: string;
  }>;
}

const ServerDetailsTools: FC<ServerDetailsToolsProps> = async ({ params }) => {
  const { slug } = await params;

  return <Fragment>Tools: {slug}</Fragment>;
};

export default ServerDetailsTools;
