import { FunctionComponent } from 'react';
import styled from 'styled-components';
import Example from './Example';

const Info: FunctionComponent = () => {
  return (
    <StyledInfoContainer>
      <Example />
    </StyledInfoContainer>
  );
};

const StyledInfoContainer = styled.div`
  width: 20%;
`;

export default Info;
