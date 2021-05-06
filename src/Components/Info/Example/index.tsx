import { FunctionComponent } from 'react';
import styled from 'styled-components';
import photo from '../../../Assets/square-gaba.jpeg';

const Example: FunctionComponent = () => {
  return <StyledExampleContainer>Example: <StyledExample src={photo} alt="puzzle example" /></StyledExampleContainer>;
};

const StyledExampleContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 22px;
`;

const StyledExample = styled.img`
  align-self: center;
  max-width: 100%;
  margin-top: 20px;
`;

export default Example;
