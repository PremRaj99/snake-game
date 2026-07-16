interface ScoreBarProps {
  score: number;
  speed: number;
}

export function ScoreBar({ score, speed }: ScoreBarProps) {
  return (
    <div
      className="mb-2! flex w-full items-center justify-between rounded-lg p-2! md:px-4! md:py-3!"
      style={{
        background: 'var(--color-bg-surface)',
        border: '2px solid var(--color-ink)',
      }}
    >
      {/* Score */}
      <div className="flex items-center gap-3">
        <div
          className="flex h-9 w-9 items-center justify-center rounded border-2 border-[var(--color-ink)]"
          style={{ background: 'var(--color-primary)' }}
        >
          <svg
            className="size-4 md:size-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="var(--color-ink)"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.518-4.674z"
            />
          </svg>
        </div>
        <div>
          <p className="text-[10px] font-bold tracking-widest text-[var(--color-muted)] uppercase">
            Score
          </p>
          <p
            className="text-lg leading-tight font-black text-[var(--color-ink)] tabular-nums md:text-2xl"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {score.toString().padStart(3, '0')}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-10 w-[2px] bg-[var(--color-ink)]" />

      {/* Speed */}
      <div className="flex items-center gap-3">
        <div
          className="flex h-9 w-9 items-center justify-center rounded border-2 border-[var(--color-ink)]"
          style={{ background: 'var(--color-accent)' }}
        >
          <svg
            className="size-4 md:size-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="var(--color-ink)"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div>
          <p className="text-[10px] font-bold tracking-widest text-[var(--color-muted)] uppercase">
            Speed
          </p>
          <p
            className="text-lg leading-tight font-black text-[var(--color-ink)] tabular-nums md:text-2xl"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {speed}x
          </p>
        </div>
      </div>
    </div>
  );
}
