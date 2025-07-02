import { FC, PropsWithChildren } from 'react';

import { RoutePath } from '@common/constants';
import { Link } from '@core/navigation';
import { Button, Icon, Row, Typography } from '@core/uikit';
import { getTranslations } from '@core/i18n';

type ServerCategorySectionProps = PropsWithChildren<{
  title?: string;
  slug?: string;
  count?: number;
}>;

export const ServerCategorySection: FC<ServerCategorySectionProps> = async ({
  slug,
  title = '',
  count = 0,
  children,
}) => {
  const t = await getTranslations();

  return (
    <Row className="mb-5">
      <Row.Col lg={12}>
        <Row className="row align-items-center mb-2">
          <Row.Col>
            <Typography className="card-title" as="h5">
              {t.rich('labels.textWithCount', {
                text: title,
                count: count,
                styled: (chunks) => (
                  <span className="text-muted fw-normal ms-2">{chunks}</span>
                ),
              })}
            </Typography>
          </Row.Col>
          <Row.Col>
            <div className="d-flex flex-wrap align-items-center justify-content-end gap-2">
              <Button
                as={Link}
                variant="link"
                pathname={RoutePath.Servers}
                query={{ category: slug }}
              >
                {t('actions.viewAll')}
                <Icon.Fa name="arrow-right" className="ms-2" size={13} />
              </Button>
            </div>
          </Row.Col>
        </Row>
        <Row>
          <Row.Col lg={12}>{children}</Row.Col>
        </Row>
      </Row.Col>
    </Row>
  );
};
