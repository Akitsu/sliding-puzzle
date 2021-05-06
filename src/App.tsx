import { FunctionComponent } from 'react';
import styled from 'styled-components';
import Puzzle from './Components/Puzzle';
import Info from './Components/Info';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
  min-height: 100%;
  min-width: 100%;
`;

const Title = styled.div`
  width: 100%;
  font-size: 34px;
  text-align: center;
  padding: 20px;
`;

const App: FunctionComponent = () => {
  return (
    <>
      <Title>Sliding Puzzle</Title>
      <Container>
        <Info />
        <Puzzle />
      </Container>
    </>
  );
};

export default App;
