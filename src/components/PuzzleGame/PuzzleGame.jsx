import { useState } from 'react';
import styles from './PuzzleGame.module.css';

const PuzzleGame = () => {
  const [puzzle, setPuzzle] = useState([
    { id: 1, order: 3 },
    { id: 2, order: 2 },
    { id: 3, order: 1 },
    { id: 4, order: 6 },
    { id: 5, order: 5 },
    { id: 6, order: 4 },
    { id: 7, order: 9 },
    { id: 8, order: 8 },
    { id: 9, order: 7 },
  ]);

  const checkWin = () => {
    const sortedPuzzle = puzzle.slice().sort((a, b) => a.order - b.order);
    for (let i = 0; i < sortedPuzzle.length; i++) {
      if (sortedPuzzle[i].id !== i + 1) {
        return false;
      }
    }
    return true;
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    const draggedId = parseInt(e.dataTransfer.getData('text/plain'), 10);
    const draggedItem = puzzle.find(item => item.id === draggedId);
    const updatedPuzzle = puzzle.map(item => {
      if (item.id === draggedId) {
        return { ...item, order: puzzle[index].order };
      }
      if (item.id === puzzle[index].id) {
        return { ...item, order: draggedItem.order };
      }
      return item;
    });
    setPuzzle(updatedPuzzle);
  };

  const handleDragOver = e => {
    e.preventDefault();
  };

  return (
    <div className={styles.puzzleContainer}>
      {puzzle.map((item, index) => (
        <div
          key={item.id}
          className={styles.puzzlePiece}
          draggable
          onDragOver={e => handleDragOver(e)}
          onDrop={e => handleDrop(e, index)}
          style={{ order: item.order }}
        >
          {item.id}
        </div>
      ))}
      {checkWin() && <div className={styles.successMessage}>¡Has completado el puzzle!</div>}
    </div>
  );
};

export default PuzzleGame;
