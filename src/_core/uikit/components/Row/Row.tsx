import { ReactElement } from 'react';
import BsRow, { RowProps } from 'react-bootstrap/Row';
import BsCol from 'react-bootstrap/Col';

interface RowPropsComponent {
  (props: RowProps): ReactElement;
  Col: typeof BsCol;
}

export const Row: RowPropsComponent = (props) => <BsRow {...props} />;

Row.Col = BsCol;
