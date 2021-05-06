import { FunctionComponent, useEffect } from 'react';
import styled from 'styled-components';
import { isMovable } from '../../Utils/MoveLogic';
import Piece from './Piece';
import { usePuzzleReducer, PuzzleTypes } from './PuzzleReducer';
import SizeConfigurator from './SizeConfigurator';
import MoveCounter from './MoveCounter';
import ShuffleButton from './ShuffleButton';

const Puzzle: FunctionComponent = () => {
  const [puzzleState, dispatch] = usePuzzleReducer();
  const { pieces, gap, gridSize, amountOfMoves } = puzzleState;

  useEffect(() => {
    const solution = Array.from(Array(gridSize * gridSize).keys());
    solution.push(solution.shift() as number);

    if (pieces.every((piece, i) => piece === solution[i])) {
      const message = setTimeout(function () {
        alert('Congratulations! You solved the puzzle!!');
      }, 1000);
      return () => {
        clearTimeout(message);
      };
    }
  }, [gridSize, pieces]);

  const initialize = (size: number) => {
    dispatch({ type: PuzzleTypes.INITIALIZE, payload: { gridSize: size } });
  };

  const move = (index: number) => {
    if (isMovable(index, gap, gridSize)) {
      dispatch({
        type: PuzzleTypes.MOVE,
        payload: { index }
      });
    }
  };

  const shuffle = () => {
    dispatch({ type: PuzzleTypes.SHUFFLE });
  };

  return (
    <StyledContainer>
      <StyledPuzzleToolbar>
        <SizeConfigurator gridSize={gridSize} initialize={initialize} />
        <ShuffleButton shuffle={shuffle} />
      </StyledPuzzleToolbar>
      <StyledPuzzleContainer gridSize={gridSize}>
        {pieces.map((piece, index) => (piece ? <Piece key={piece} gridSize={gridSize} move={() => move(index)} piece={piece} /> : <div key={piece} />))}
      </StyledPuzzleContainer>
      <MoveCounter amountOfMoves={amountOfMoves} />
    </StyledContainer>
  );
};

export default Puzzle;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

const StyledPuzzleToolbar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledPuzzleContainer = styled.div<{ gridSize: number }>(({ gridSize }) => ({
  display: 'grid',
  gridGap: '1px',
  gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
  border: '1px solid #ccc'
}));
