interface GameOverOverlayProps {
  score: number;
  onRestart: () => void;
}

export function GameOverOverlay({ score, onRestart }: GameOverOverlayProps) {
  return (
    <div
      className="overlay-fade absolute inset-0 z-50 flex items-center justify-center"
      style={{
        background: 'rgba(41, 39, 40, 0.55)',
      }}
    >
      <div
        className="overlay-card flex w-full max-w-sm flex-col items-center gap-8 px-6! py-8!"
        style={{
          background: 'var(--color-bg-surface)',
          borderRadius: 8,
          border: '3px solid var(--color-ink)',
        }}
      >
        {/* Title */}
        <div className="text-center">
          <h2
            className="text-3xl font-black tracking-wider text-[var(--color-ink)] uppercase md:text-4xl"
            style={{
              fontFamily: 'var(--font-display)',
            }}
          >
            Game Over
          </h2>
          <p className="mt-1 text-xs font-bold tracking-widest text-[var(--color-muted)] uppercase">
            Better luck next time!
          </p>
        </div>

        {/* Score Row */}
        <div className="flex w-full items-end justify-between border-b-2 border-[var(--color-ink)] pb-3">
          <span className="text-xs font-bold tracking-widest text-[var(--color-muted)] uppercase">
            Final Score
          </span>
          <span
            className="text-3xl leading-none font-black text-[var(--color-ink)] tabular-nums"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {score.toString().padStart(3, '0')}
          </span>
        </div>

        {/* Button */}
        <button
          onClick={onRestart}
          className="btn-neon w-full cursor-pointer px-6 py-2.5! text-base font-black tracking-widest uppercase"
          style={{
            borderRadius: 4,
          }}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}
