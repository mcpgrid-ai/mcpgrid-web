import { FC, Fragment } from 'react';

interface ServerDetailsToolsProps {
  params: Promise<{
    slug: string;
  }>;
}

const ServerDetailsTools: FC<ServerDetailsToolsProps> = async ({ params }) => {
  const q = await params;

  return <Fragment>Tools</Fragment>;
};

export default ServerDetailsTools;
