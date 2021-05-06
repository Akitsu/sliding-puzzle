export const isMovable = (index: number, gap: number, gridSize: number) => {
  const movablePieces = getMovablePieces(gap, gridSize);
  return movablePieces.includes(index);
};

const getMovablePieces = (gap: number, gridSize: number) => {
  // Check if the gap is in the corners first
  // Upper left corner
  if (gap === 0) {
    return [1, 1 + gridSize - 1];
  }
  // Upper right corner
  if (gap === gridSize - 1) {
    return [gridSize - 2, gridSize + gridSize - 1];
  }
  // Bottom left corner
  if (gap === gridSize * gridSize - gridSize) {
    return [gridSize * gridSize - gridSize * 2, gridSize * gridSize - gridSize + 1];
  }
  // Bottom right corner
  if (gap === gridSize * gridSize - 1) {
    return [gridSize * gridSize - gridSize - 1, gridSize * gridSize - 2];
  }

  // Check if the gap is on the edges
  // Left edge
  if ((gap / gridSize) % 1 === 0) {
    return [gap - gridSize, gap + gridSize, gap + 1];
  }
  // Right edge
  if (((gap + 1) / gridSize) % 1 === 0) {
    return [gap - gridSize, gap + gridSize, gap - 1];
  }
  // Top edge
  if (gap < gridSize) {
    return [gap - 1, gap + 1, gap + gridSize];
  }
  // Bottom edge
  if (gap >= gridSize * gridSize - gridSize) {
    return [gap - 1, gap + 1, gap - gridSize];
  }

  // Every other piece
  return [gap - 1, gap + 1, gap - gridSize, gap + gridSize];
};
