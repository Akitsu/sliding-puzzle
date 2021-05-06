import { useReducer, Dispatch } from 'react';

type PuzzleState = {
  gridSize: number;
  pieces: number[];
  gap: number;
  amountOfMoves: number;
};

const initialState = {
  gridSize: 3,
  pieces: [4, 6, 0, 1, 7, 8, 2, 3, 5],
  gap: 2,
  amountOfMoves: 0
};

export enum PuzzleTypes {
  INITIALIZE = 'INITIALIZE',
  MOVE = 'MOVE',
  SHUFFLE = 'SHUFFLE'
}

interface Initialize {
  type: typeof PuzzleTypes.INITIALIZE;
  payload: { gridSize: number };
}

interface Move {
  type: typeof PuzzleTypes.MOVE;
  payload: { index: number };
}

interface Shuffle {
  type: typeof PuzzleTypes.SHUFFLE;
}

type PuzzleActionTypes = Initialize | Move | Shuffle;

const PuzzleReducer = (state: PuzzleState, action: PuzzleActionTypes): any => {
  switch (action.type) {
    case PuzzleTypes.INITIALIZE:
      const newPieces = initialize(action.payload.gridSize * action.payload.gridSize);
      return {
        gridSize: action.payload.gridSize,
        pieces: newPieces,
        gap: newPieces.indexOf(0),
        amountOfMoves: 0
      };
    case PuzzleTypes.MOVE:
      return {
        ...state,
        pieces: move(state.pieces, state.gap, action.payload.index),
        gap: action.payload.index,
        amountOfMoves: state.amountOfMoves + 1
      };
    case PuzzleTypes.SHUFFLE:
      const shuffledPieces = shuffle(state.pieces);
      return {
        ...state,
        pieces: shuffledPieces,
        gap: shuffledPieces.indexOf(0),
        amountOfMoves: 0
      }
    default:
      return state;
  }
};

const shuffle = (pieces: number[]) => {
  const shuffledPieces = pieces.slice();
  shuffledPieces.sort(() => Math.random() - 0.5);
  return shuffledPieces;
}

const initialize = (amountOfPieces: number) => {
  return shuffle(Array.from(Array(amountOfPieces).keys()));
};

const move = (pieces: number[], gap: number, index: number) => {
  const updatedPieces = pieces.slice();
  updatedPieces[gap] = updatedPieces.splice(index, 1, updatedPieces[gap])[0];
  return updatedPieces;
};

export const usePuzzleReducer: () => [PuzzleState, Dispatch<PuzzleActionTypes>] = () => {
  return useReducer(PuzzleReducer, initialState);
};
