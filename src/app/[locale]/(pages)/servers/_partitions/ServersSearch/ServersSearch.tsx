'use client';

import { FC, Fragment } from 'react';
import { createPortal } from 'react-dom';

import { ServersSearch as Search } from '@common/components';
import { DomNodeId } from '@common/constants';
import { Box, Dropdown, Icon } from '@core/uikit';

export const ServersSearch: FC = () => {
  const el = window.document.getElementById(DomNodeId.HeaderSearch);

  if (!el) return null;

  return createPortal(
    <Fragment>
      <Box w={75} d="none" dSm="block">
        <Search />
      </Box>
      <Dropdown className="d-block d-sm-none">
        <Dropdown.Toggle className="header-item" variant="none">
          <Icon.Fa name="magnifying-glass" size={16} />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Search />
        </Dropdown.Menu>
      </Dropdown>
    </Fragment>,
    el,
  );
};
