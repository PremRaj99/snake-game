import { cn } from '@/lib/utils';
import { useCallback, useEffect, useMemo, useState } from 'react';

interface Snake {
  head: { x: number; y: number };
  body: { x: number; y: number }[];
  direction: 'up' | 'down' | 'left' | 'right';
}

const initialSnake: Snake = {
  head: { x: 3, y: 2 },
  body: [
    { x: 2, y: 2 },
    { x: 1, y: 2 },
  ],
  direction: 'right',
};

interface Food {
  position: { x: number; y: number };
}

interface GameBoardSize {
  rows: number;
  columns: number;
}

export default function GameScreen() {
  const [snake, setSnake] = useState<Snake>(initialSnake);
  const [food, setFood] = useState<Food>({ position: { x: 5, y: 5 } });
  const [score, setScore] = useState<number>(0);
  const [boardSize] = useState<GameBoardSize>({ rows: 20, columns: 20 });
  const [gameOverState, setGameOverState] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(4);
  const frameFrequency = useMemo(() => 1000 / speed, [speed]);

  const generateFood = useCallback(() => {
    const newFood = {
      position: {
        x: Math.floor(Math.random() * boardSize.columns),
        y: Math.floor(Math.random() * boardSize.rows),
      },
    };
    setFood(newFood);
  }, [boardSize.columns, boardSize.rows]);

  const tick = useCallback(() => {
    setSnake((prevSnake) => {
      // Calculate the new head position based on the current direction
      const newHead = { ...prevSnake.head };
      switch (prevSnake.direction) {
        case 'up':
          newHead.y -= 1;
          break;
        case 'down':
          newHead.y += 1;
          break;
        case 'left':
          newHead.x -= 1;
          break;
        case 'right':
          newHead.x += 1;
          break;
      }

      // Check game over: out of bounds or self-collision
      if (
        newHead.x < 0 ||
        newHead.x >= boardSize.columns ||
        newHead.y < 0 ||
        newHead.y >= boardSize.rows ||
        prevSnake.body.some((segment) => segment.x === newHead.x && segment.y === newHead.y)
      ) {
        setGameOverState(true);
        return prevSnake;
      }

      // Check if eating food
      const isEating = newHead.x === food.position.x && newHead.y === food.position.y;

      // Build new body: prepend old head, and only remove tail if NOT eating
      const newBody = isEating
        ? [prevSnake.head, ...prevSnake.body] // grow: keep the tail
        : [prevSnake.head, ...prevSnake.body.slice(0, -1)]; // normal: drop the tail

      if (isEating) {
        setScore((prevScore) => prevScore + 1);
        setSpeed((prevSpeed) => prevSpeed + 1);
        generateFood();
      }

      return { ...prevSnake, head: newHead, body: newBody };
    });
  }, [food, generateFood, boardSize.columns, boardSize.rows]);

  const changeDirection = (newDirection: 'up' | 'down' | 'left' | 'right') => {
    setSnake((prevSnake) => {
      // Prevent the snake from reversing direction
      if (
        (prevSnake.direction === 'up' && newDirection === 'down') ||
        (prevSnake.direction === 'down' && newDirection === 'up') ||
        (prevSnake.direction === 'left' && newDirection === 'right') ||
        (prevSnake.direction === 'right' && newDirection === 'left')
      ) {
        return prevSnake;
      }

      // Prevent the snake from moving in the same direction
      if (prevSnake.direction === newDirection) {
        return prevSnake;
      }

      return { ...prevSnake, direction: newDirection };
    });
  };

  const resetGame = () => {
    setSnake(initialSnake);
    generateFood();
    setScore(0);
    setGameOverState(false);
    setSpeed(4);
  };

  // Game loop
  useEffect(() => {
    const interval = setInterval(() => {
      if (!gameOverState) {
        tick();
      }
    }, frameFrequency);

    return () => clearInterval(interval);
  }, [gameOverState, frameFrequency, tick]);

  // Handle keyboard input for direction change
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
        case 'W':
        case 'w':
          changeDirection('up');
          break;
        case 'ArrowDown':
        case 'S':
        case 's':
          changeDirection('down');
          break;
        case 'ArrowLeft':
        case 'A':
        case 'a':
          changeDirection('left');
          break;
        case 'ArrowRight':
        case 'D':
        case 'd':
          changeDirection('right');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative flex h-screen w-screen items-center justify-center bg-gray-900">
      <div className="flex h-full w-full max-w-7xl flex-col items-center justify-center">
        <div className="flex w-full justify-between px-4">
          <div className="text-xl font-bold text-white">Score: {score}</div>
          <div className="text-xl font-bold text-white">Speed: {speed}</div>
        </div>
        <div
          className="grid border-4"
          style={{ gridTemplateColumns: `repeat(${boardSize.columns}, 1fr)` }}
        >
          {Array.from({ length: boardSize.rows }).map((_, rowIndex) =>
            Array.from({ length: boardSize.columns }).map((_, colIndex) => {
              if (rowIndex === snake.head.y && colIndex === snake.head.x) {
                return (
                  <div
                    key={colIndex}
                    className={cn(
                      'size-6 border bg-green-500',
                      snake.direction === 'up' && 'rounded-t-md',
                      snake.direction === 'down' && 'rounded-b-md',
                      snake.direction === 'left' && 'rounded-l-md',
                      snake.direction === 'right' && 'rounded-r-md',
                    )}
                  />
                );
              } else if (
                snake.body.some((segment) => segment.x === colIndex && segment.y === rowIndex)
              ) {
                return <div key={colIndex} className={cn('size-6 border bg-slate-500')} />;
              } else if (rowIndex === food.position.y && colIndex === food.position.x) {
                return <div key={colIndex} className={cn('size-6 border bg-red-500')} />;
              } else {
                return <div key={colIndex} className={cn('size-6 border bg-gray-700')} />;
              }
            }),
          )}
        </div>
      </div>
      {gameOverState && (
        <div className="bg-opacity-75 absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="rounded-lg bg-white p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold">Game Over</h2>
            <p className="mb-4">Your score: {score}</p>
            <button
              onClick={resetGame}
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            >
              Restart Game
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
