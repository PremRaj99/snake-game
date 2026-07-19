import { useEffect, useState } from 'react';
import { GameBoard } from './components/GameBoard';
import { GameOverOverlay } from './components/GameOverOverlay';
import { ScoreBar } from './components/ScoreBar';
import { StartOverlay } from './components/StartOverlay';
import { useKeyboard } from './hooks/useKeyboard';
import { useSnakeGame } from './hooks/useSnakeGame';
import type { GameBoardSize } from './types';

export default function GameScreen() {
  const [boardSize] = useState<GameBoardSize>({ rows: 20, columns: 20 });

  const {
    isStarted,
    snake,
    food,
    score,
    speed,
    gameOver,
    frameFrequency,
    tick,
    changeDirection,
    startGame,
  } = useSnakeGame(boardSize);

  // Game loop (only ticks when game has started and is not over)
  useEffect(() => {
    const interval = setInterval(() => {
      if (isStarted && !gameOver) tick();
    }, frameFrequency);

    return () => clearInterval(interval);
  }, [isStarted, gameOver, frameFrequency, tick]);

  // Keyboard controls (Space or Enter starts game; arrows/WASD direct snake and auto-start)
  useKeyboard(changeDirection, startGame);

  return (
    <div
      className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden select-none"
      style={{ background: 'var(--color-bg-deep)' }}
    >
      {/* Title */}
      <h1
        className="mb-2! text-3xl font-black tracking-widest text-[var(--color-ink)] uppercase md:text-5xl"
        style={{
          fontFamily: 'var(--font-display)',
        }}
      >
        SNAKE
      </h1>

      {/* Game container */}
      <div className="flex flex-col items-center" style={{ width: 'fit-content' }}>
        <ScoreBar score={score} speed={speed} />
        <GameBoard snake={snake} food={food} boardSize={boardSize} />

        {/* Controls hint (Desktop only) */}
        <div className="mb-2 hidden items-center gap-4 md:mt-2! md:flex">
          <div className="flex items-center gap-2">
            {['W', 'A', 'S', 'D'].map((key) => (
              <kbd
                key={key}
                className="flex h-8 w-8 items-center justify-center rounded border-2 border-[var(--color-ink)] text-xs font-bold text-[var(--color-ink)]"
                style={{
                  fontFamily: 'var(--font-mono)',
                  background: 'var(--color-bg-surface)',
                }}
              >
                {key}
              </kbd>
            ))}
          </div>
          <span className="text-xs font-medium tracking-wider text-[var(--color-muted)] uppercase">
            or Arrow Keys
          </span>
        </div>

        {/* Mobile D-Pad controls */}
        <div className="mx-auto mt-2! grid max-w-[160px] grid-cols-3 gap-2 md:hidden">
          <div />
          <button
            onClick={() => changeDirection('up')}
            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded border-2 border-[var(--color-ink)] bg-[var(--color-bg-surface)] text-lg font-black transition-colors select-none active:bg-[var(--color-primary)] active:text-[var(--color-bg-deep)]"
            style={{ touchAction: 'manipulation' }}
          >
            ▲
          </button>
          <div />
          <button
            onClick={() => changeDirection('left')}
            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded border-2 border-[var(--color-ink)] bg-[var(--color-bg-surface)] text-lg font-black transition-colors select-none active:bg-[var(--color-primary)] active:text-[var(--color-bg-deep)]"
            style={{ touchAction: 'manipulation' }}
          >
            ◀
          </button>
          <div className="flex h-12 w-12 items-center justify-center text-[8px] font-black text-[var(--color-muted)]">
            ●
          </div>
          <button
            onClick={() => changeDirection('right')}
            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded border-2 border-[var(--color-ink)] bg-[var(--color-bg-surface)] text-lg font-black transition-colors select-none active:bg-[var(--color-primary)] active:text-[var(--color-bg-deep)]"
            style={{ touchAction: 'manipulation' }}
          >
            ▶
          </button>
          <div />
          <button
            onClick={() => changeDirection('down')}
            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded border-2 border-[var(--color-ink)] bg-[var(--color-bg-surface)] text-lg font-black transition-colors select-none active:bg-[var(--color-primary)] active:text-[var(--color-bg-deep)]"
            style={{ touchAction: 'manipulation' }}
          >
            ▼
          </button>
          <div />
        </div>
      </div>

      {/* Start Game overlay */}
      {!isStarted && !gameOver && <StartOverlay onStart={startGame} />}

      {/* Game Over overlay */}
      {gameOver && <GameOverOverlay score={score} onRestart={startGame} />}
    </div>
  );
}
