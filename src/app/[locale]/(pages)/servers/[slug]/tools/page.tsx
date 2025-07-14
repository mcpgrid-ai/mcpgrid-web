import { FC, Fragment } from 'react';

import styles from './page.module.scss';

import { getTranslations } from '@core/i18n';
import { Box, Collapsible, Typography, Badge } from '@core/uikit';
import { strapi } from '@network/strapi';

interface ServerDetailsToolsProps {
  params: Promise<{
    slug: string;
  }>;
}

const ServerDetailsTools: FC<ServerDetailsToolsProps> = async ({ params }) => {
  const { slug } = await params;
  const t = await getTranslations();

  const { Tools } = await strapi.page.getServerTools({
    slug,
  });

  return (
    <Fragment>
      {Tools?.map(({ id, description, parameters }) => {
        return (
          <Box key={id} mb={3}>
            <Collapsible id={id}>
              <Collapsible.Header>
                <Box>
                  <Typography as="h5" className="mb-1">
                    {id}
                  </Typography>
                  {description && (
                    <Typography as="p" className="m-0 text-muted">
                      {description}
                    </Typography>
                  )}
                </Box>
              </Collapsible.Header>
              <Collapsible.Content>
                {parameters?.length && (
                  <Fragment>
                    <Typography as="h5" className="mb-3">
                      {t('forms.parameters')}
                    </Typography>
                    <Box d="grid" gap={3} className={styles.parameters}>
                      {parameters?.map(({ name, type, description }) => {
                        return (
                          <Fragment key={name}>
                            <Box>
                              <Typography as="h6" className="m-0">
                                {name}
                              </Typography>
                            </Box>
                            <Box>
                              <Badge bg="light" className="font-size-12">
                                {type}
                              </Badge>
                            </Box>
                            <Box>
                              <Typography className="m-0 text-muted">
                                {description}
                              </Typography>
                            </Box>
                          </Fragment>
                        );
                      })}
                    </Box>
                  </Fragment>
                )}
              </Collapsible.Content>
            </Collapsible>
          </Box>
        );
      })}
    </Fragment>
  );
};

export default ServerDetailsTools;
