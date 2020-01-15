import styled from 'styled-components';
import { Row } from 'antd';

export const DetailCover = styled(Row)`
  flex-direction: column;
  background: ${props => `${props.color} url(${process.env.REACT_APP_BG_URL})`};

  & > h3 {
    text-transform: uppercase;
  }
`;
