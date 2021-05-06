import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

interface MoveCounterProps {
  amountOfMoves: number;
}

const MoveCounter: FunctionComponent<MoveCounterProps> = ({ amountOfMoves }) => {
  return (
    <StyledCounterContainer>
      Moves:{' '}
      <AnimatePresence>
        <motion.span
          key={amountOfMoves}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          style={{ position: 'absolute', marginLeft: 10 }}>
          {amountOfMoves}
        </motion.span>
      </AnimatePresence>
    </StyledCounterContainer>
  );
};

const StyledCounterContainer = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-top: 10px;
`;

export default MoveCounter;
