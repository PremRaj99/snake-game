import { useMemo } from 'react';
import type { Food, GameBoardSize, Snake } from '../types';

interface GameBoardProps {
  snake: Snake;
  food: Food;
  boardSize: GameBoardSize;
}

export function GameBoard({ snake, food, boardSize }: GameBoardProps) {
  const bodySet = useMemo(() => {
    const set = new Set<string>();
    snake.body.forEach((seg) => set.add(`${seg.x},${seg.y}`));
    return set;
  }, [snake.body]);

  const tailPos = snake.body.length > 0 ? snake.body[snake.body.length - 1] : null;

  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: `calc(var(--cell-size) * ${boardSize.columns} + 6px)`,
        height: `calc(var(--cell-size) * ${boardSize.rows} + 6px)`,
        borderRadius: 8,
        border: '3px solid var(--color-ink)',
        background: 'var(--color-bg-surface)',
      }}
    >
      {/* Grid lines */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(41, 39, 40, 0.06) 1px, transparent 1px),
             linear-gradient(90deg, rgba(41, 39, 40, 0.06) 1px, transparent 1px)`,
          backgroundSize: 'var(--cell-size) var(--cell-size)',
        }}
      />

      {/* Game cells */}
      <div
        className="relative grid"
        style={{
          gridTemplateColumns: `repeat(${boardSize.columns}, var(--cell-size))`,
          gridTemplateRows: `repeat(${boardSize.rows}, var(--cell-size))`,
        }}
      >
        {Array.from({ length: boardSize.rows }).map((_, rowIndex) =>
          Array.from({ length: boardSize.columns }).map((_, colIndex) => {
            const isHead = rowIndex === snake.head.y && colIndex === snake.head.x;
            const isBody = bodySet.has(`${colIndex},${rowIndex}`);
            const isFood = rowIndex === food.position.y && colIndex === food.position.x;
            const isTail = tailPos?.x === colIndex && tailPos?.y === rowIndex;

            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className="relative flex items-center justify-center"
                style={{ width: 'var(--cell-size)', height: 'var(--cell-size)' }}
              >
                {isHead && <SnakeHead direction={snake.direction} />}
                {!isHead && isBody && <SnakeBodySegment isTail={isTail} />}
                {isFood && <FoodCell />}
              </div>
            );
          }),
        )}
      </div>
    </div>
  );
}

/* ─── Snake Head ─── */
function SnakeHead({ direction }: { direction: string }) {
  const rotation: Record<string, string> = {
    up: 'rotate(-90deg)',
    down: 'rotate(90deg)',
    left: 'rotate(180deg)',
    right: 'rotate(0deg)',
  };

  return (
    <div
      className="absolute inset-[2px] flex items-center justify-end rounded border border-[var(--color-ink)] pr-[3px]"
      style={{
        background: 'var(--color-accent)',
        transform: rotation[direction],
      }}
    >
      <div className="flex flex-col gap-[5px]">
        <div
          className="rounded-full border border-[var(--color-ink)] bg-[var(--color-bg-deep)]"
          style={{ width: 6, height: 6 }}
        >
          <div
            className="mt-[1px] ml-[1px] rounded-full bg-[var(--color-ink)]"
            style={{ width: 2, height: 2 }}
          />
        </div>
        <div
          className="rounded-full border border-[var(--color-ink)] bg-[var(--color-bg-deep)]"
          style={{ width: 6, height: 6 }}
        >
          <div
            className="mt-[1px] ml-[1px] rounded-full bg-[var(--color-ink)]"
            style={{ width: 2, height: 2 }}
          />
        </div>
      </div>
    </div>
  );
}

/* ─── Snake Body ─── */
function SnakeBodySegment({ isTail }: { isTail: boolean }) {
  return (
    <div
      className="absolute inset-[2px] rounded border border-[var(--color-ink)]"
      style={{
        background: 'var(--color-primary)',
        opacity: isTail ? 0.6 : 1,
      }}
    />
  );
}

/* ─── Food ─── */
function FoodCell() {
  return (
    <div className="absolute inset-[3px]">
      <div
        className="h-full w-full rounded-full border border-[var(--color-ink)]"
        style={{
          background: 'var(--color-accent)',
        }}
      />
    </div>
  );
}
