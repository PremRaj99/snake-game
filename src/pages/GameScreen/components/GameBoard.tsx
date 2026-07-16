import { cn } from '@/lib/utils';
import type { Food, GameBoardSize, Snake } from '../types';

interface GameBoardProps {
  snake: Snake;
  food: Food;
  boardSize: GameBoardSize;
}

export function GameBoard({ snake, food, boardSize }: GameBoardProps) {
  return (
    <div
      className="grid border-4"
      style={{ gridTemplateColumns: `repeat(${boardSize.columns}, 1fr)` }}
    >
      {Array.from({ length: boardSize.rows }).map((_, rowIndex) =>
        Array.from({ length: boardSize.columns }).map((_, colIndex) => {
          const isHead = rowIndex === snake.head.y && colIndex === snake.head.x;
          const isBody = snake.body.some((seg) => seg.x === colIndex && seg.y === rowIndex);
          const isFood = rowIndex === food.position.y && colIndex === food.position.x;

          if (isHead) {
            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={cn(
                  'size-6 border bg-green-500',
                  snake.direction === 'up' && 'rounded-t-md',
                  snake.direction === 'down' && 'rounded-b-md',
                  snake.direction === 'left' && 'rounded-l-md',
                  snake.direction === 'right' && 'rounded-r-md',
                )}
              />
            );
          }

          if (isBody) {
            return <div key={`${rowIndex}-${colIndex}`} className="size-6 border bg-slate-500" />;
          }

          if (isFood) {
            return <div key={`${rowIndex}-${colIndex}`} className="size-6 border bg-red-500" />;
          }

          return <div key={`${rowIndex}-${colIndex}`} className="size-6 border bg-gray-700" />;
        }),
      )}
    </div>
  );
}
