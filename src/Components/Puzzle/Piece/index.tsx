import { FunctionComponent } from 'react';
import styled from 'styled-components';
import photo from '../../../Assets/square-gaba.jpeg';
import { motion } from 'framer-motion';

interface PieceProps {
  piece: number;
  gridSize: number;
  move: () => void;
}

const Piece: FunctionComponent<PieceProps> = ({ piece, gridSize, move }) => {
  return <StyledPiece layout piece={piece} gridSize={gridSize} onClick={move} />;
};

export default Piece;

const StyledPiece = styled(motion.div).attrs(({ piece, gridSize }: { piece: number; gridSize: number }) => ({
  style: {
    backgroundImage: `url(${photo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: `${gridSize}00%`,
    backgroundPosition: `${(100 / (gridSize - 1)) * ((piece - 1) % gridSize)}% ${(100 / (gridSize - 1)) * Math.floor((piece - 1) / gridSize)}%`
  }
}))<{ piece: number; gridSize: number }>`
  cursor: pointer;
  aspect-ratio: 1 / 1;
  @supports not (aspect-ratio: 1 / 1) {
    &:before {
      float: left;
      padding-top: 100%;
      content: '';
    }
    &:after {
      display: block;
      content: '';
      clear: both;
    }
  }
`;
