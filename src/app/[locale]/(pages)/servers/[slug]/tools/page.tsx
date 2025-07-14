import { FC, Fragment } from 'react';

import { getServerTools } from './page.utils';

import { getTranslations } from '@core/i18n';
import { Box, Collapsible, Typography } from '@core/uikit';

interface ServerDetailsToolsProps {
  params: Promise<{
    slug: string;
  }>;
}

const ServerDetailsTools: FC<ServerDetailsToolsProps> = async ({ params }) => {
  const { slug } = await params;
  const t = await getTranslations();

  const tools = await getServerTools({
    slug,
  });

  return (
    <Fragment>
      {tools.map(({ id, description, parameters }) => {
        return (
          <Box key={id} mb={3}>
            <Collapsible id="slug">
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
                <Typography as="h6">{t('forms.parameters')}</Typography>
                <Box>
                  {parameters?.map(({ name, type, description }) => {
                    return (
                      <Fragment key={name}>
                        <Box>{name}</Box>
                        <Box>{type}</Box>
                        <Box>{description}</Box>
                      </Fragment>
                    );
                  })}
                </Box>
              </Collapsible.Content>
            </Collapsible>
          </Box>
        );
      })}
    </Fragment>
  );
};

export default ServerDetailsTools;
