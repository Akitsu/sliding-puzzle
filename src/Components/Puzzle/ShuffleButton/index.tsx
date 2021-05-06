import { motion } from 'framer-motion';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

interface ShuffleButtonProps {
  shuffle: () => void;
}

const ShuffleButton: FunctionComponent<ShuffleButtonProps> = ({ shuffle }) => {
  return (
    <StyledShuffleButton
      whileHover={{
        scale: 1.2,
        transition: { duration: 1 }
      }}
      whileTap={{ scale: 0.9 }}
      onClick={shuffle}>
      Shuffle
    </StyledShuffleButton>
  );
};

const StyledShuffleButton = styled(motion.button)`
  border-radius: 5px;
  background-color: #136eb3;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  text-decoration: none;
  background: cornflowerblue;
  color: #ffffff;
  align-self: baseline;
  cursor: pointer;
`;

export default ShuffleButton;
