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
  title,
  count,
  children,
}) => {
  const t = await getTranslations();

  return (
    <Row className="mb-4">
      <Row.Col lg={12}>
        <Row className="row align-items-center mb-2">
          <Row.Col md={6}>
            <Typography className="card-title" as="h5">
              {title}
              <span className="text-muted fw-normal ms-2">({count})</span>
            </Typography>
          </Row.Col>
          <Row.Col md={6}>
            <div className="d-flex flex-wrap align-items-center justify-content-end gap-2">
              <Button
                as={Link}
                variant="link"
                pathname={RoutePath.Servers}
                query={{ category: slug }}
              >
                {t('actions.viewAll')}
                <Icon.Fa
                  name="arrow-right"
                  className="ms-2"
                  height={13}
                  width={13}
                  fixedWidth
                />
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
