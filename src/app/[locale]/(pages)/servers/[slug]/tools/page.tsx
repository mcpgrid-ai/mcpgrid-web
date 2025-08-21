import { FC, Fragment } from 'react';

import { generateServerMetadata } from '../page.metadata';

import styles from './page.module.scss';
import { ServerTools } from './page.types';

import { getTranslations } from '@core/i18n';
import { Box, Collapsible, Typography, Badge } from '@core/uikit';
import { keystone } from '@network/keystone';
import { notFound } from '@core/navigation';

interface ServerDetailsToolsProps {
  params: Promise<{
    slug: string;
  }>;
}

export const generateMetadata = generateServerMetadata({
  suffix: 'Tools',
});

const ServerDetailsTools: FC<ServerDetailsToolsProps> = async ({ params }) => {
  const { slug } = await params;
  const t = await getTranslations();

  const { servers } = await keystone.pages.getServerTools({
    slug,
  });

  const server = servers?.find(({ slug: id }) => id === slug);

  if (!server) return notFound();

  return (
    <Fragment>
      {(server.tools as ServerTools[])?.map(
        ({ id, description, parameters }) => {
          return (
            <Box key={id} mb={3}>
              <Collapsible id={id}>
                <Collapsible.Header>
                  <Box>
                    <Typography as="h5" className="mb-1 font-size-15">
                      {id}
                    </Typography>
                    {description && (
                      <Typography
                        as="p"
                        className="m-0 font-size-15 text-muted"
                        truncate={2}
                      >
                        {description}
                      </Typography>
                    )}
                  </Box>
                </Collapsible.Header>
                <Collapsible.Content>
                  <Box>
                    <Typography as="h5" className="font-size-15">
                      {t('forms.parameters')}
                    </Typography>
                    <div className="my-3 border-top" />
                    {parameters?.length ? (
                      <Box d="grid" gap={3} className={styles.parameters}>
                        {parameters?.map(
                          ({ name, type, description, required }) => {
                            return (
                              <Fragment key={name}>
                                <Box>
                                  <Typography as="h6" className="m-0">
                                    {name}
                                    {required && (
                                      <span className="text-danger">*</span>
                                    )}
                                  </Typography>
                                </Box>
                                <Box>
                                  <Badge bg="light" className="font-size-12">
                                    {type}
                                  </Badge>
                                </Box>
                                <Box>
                                  <Typography className="m-0 text-muted font-size-15">
                                    {description}
                                  </Typography>
                                </Box>
                              </Fragment>
                            );
                          },
                        )}
                      </Box>
                    ) : (
                      <Box>
                        <Typography className="m-0 text-muted font-size-15">
                          {t('noData.noParametersFound')}
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </Collapsible.Content>
              </Collapsible>
            </Box>
          );
        },
      )}
    </Fragment>
  );
};

export default ServerDetailsTools;
