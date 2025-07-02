import { FC, Fragment } from 'react';

interface ServerDetailsProps {
  params: Promise<{
    slug: string;
  }>;
}

const ServerDetails: FC<ServerDetailsProps> = async ({ params }) => {
  const q = await params;

  return <Fragment>Overview</Fragment>;
};

export default ServerDetails;
