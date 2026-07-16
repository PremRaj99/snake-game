import { useEffect, useState } from 'react';
import type { GameBoardSize } from './types';
import { useSnakeGame } from './hooks/useSnakeGame';
import { useKeyboard } from './hooks/useKeyboard';
import { ScoreBar } from './components/ScoreBar';
import { GameBoard } from './components/GameBoard';
import { GameOverOverlay } from './components/GameOverOverlay';

export default function GameScreen() {
  const [boardSize] = useState<GameBoardSize>({ rows: 20, columns: 20 });

  const { snake, food, score, speed, gameOver, frameFrequency, tick, changeDirection, resetGame } =
    useSnakeGame(boardSize);

  // Game loop
  useEffect(() => {
    const interval = setInterval(() => {
      if (!gameOver) tick();
    }, frameFrequency);

    return () => clearInterval(interval);
  }, [gameOver, frameFrequency, tick]);

  // Keyboard controls
  useKeyboard(changeDirection);

  return (
    <div className="relative flex h-screen w-screen items-center justify-center bg-gray-900">
      <div className="flex h-full w-full max-w-7xl flex-col items-center justify-center">
        <ScoreBar score={score} speed={speed} />
        <GameBoard snake={snake} food={food} boardSize={boardSize} />
      </div>
      {gameOver && <GameOverOverlay score={score} onRestart={resetGame} />}
    </div>
  );
}
