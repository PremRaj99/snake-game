import { useCallback, useMemo, useState } from 'react';
import type { Direction, Food, GameBoardSize, Snake } from '../types';

const INITIAL_SPEED = 4;

const initialSnake: Snake = {
  head: { x: 3, y: 2 },
  body: [
    { x: 2, y: 2 },
    { x: 1, y: 2 },
  ],
  direction: 'right',
};

export function useSnakeGame(boardSize: GameBoardSize) {
  const [snake, setSnake] = useState<Snake>(initialSnake);
  const [food, setFood] = useState<Food>({ position: { x: 5, y: 5 } });
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [speed, setSpeed] = useState(INITIAL_SPEED);

  const frameFrequency = useMemo(() => 1000 / speed, [speed]);

  const generateFood = useCallback(() => {
    setFood({
      position: {
        x: Math.floor(Math.random() * boardSize.columns),
        y: Math.floor(Math.random() * boardSize.rows),
      },
    });
  }, [boardSize.columns, boardSize.rows]);

  const tick = useCallback(() => {
    setSnake((prev) => {
      const newHead = { ...prev.head };
      switch (prev.direction) {
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

      // Out of bounds or self-collision → game over
      if (
        newHead.x < 0 ||
        newHead.x >= boardSize.columns ||
        newHead.y < 0 ||
        newHead.y >= boardSize.rows ||
        prev.body.some((seg) => seg.x === newHead.x && seg.y === newHead.y)
      ) {
        setGameOver(true);
        return prev;
      }

      const isEating = newHead.x === food.position.x && newHead.y === food.position.y;

      const newBody = isEating ? [prev.head, ...prev.body] : [prev.head, ...prev.body.slice(0, -1)];

      if (isEating) {
        setScore((s) => s + 1);
        setSpeed((s) => s + 1);
        generateFood();
      }

      return { ...prev, head: newHead, body: newBody };
    });
  }, [food, generateFood, boardSize.columns, boardSize.rows]);

  const changeDirection = useCallback((newDir: Direction) => {
    setSnake((prev) => {
      const opposites: Record<Direction, Direction> = {
        up: 'down',
        down: 'up',
        left: 'right',
        right: 'left',
      };

      if (prev.direction === newDir || prev.direction === opposites[newDir]) {
        return prev;
      }

      return { ...prev, direction: newDir };
    });
  }, []);

  const resetGame = useCallback(() => {
    setSnake(initialSnake);
    generateFood();
    setScore(0);
    setGameOver(false);
    setSpeed(INITIAL_SPEED);
  }, [generateFood]);

  return {
    snake,
    food,
    score,
    speed,
    gameOver,
    frameFrequency,
    tick,
    changeDirection,
    resetGame,
  };
}
