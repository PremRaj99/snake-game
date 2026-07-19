interface StartOverlayProps {
  onStart: () => void;
}

export function StartOverlay({ onStart }: StartOverlayProps) {
  return (
    <div
      className="overlay-fade absolute inset-0 z-50 flex items-center justify-center"
      style={{
        background: 'rgba(41, 39, 40, 0.55)',
      }}
    >
      <div
        className="overlay-card flex w-full max-w-sm flex-col items-center gap-6 px-6! py-8!"
        style={{
          background: 'var(--color-bg-surface)',
          borderRadius: 8,
          border: '3px solid var(--color-ink)',
        }}
      >
        {/* Header */}
        <div className="text-center">
          <span
            className="mb-1 inline-block text-[10px] font-bold tracking-widest text-[var(--color-muted)] uppercase"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Classic Arcade
          </span>
          <h2
            className="text-3xl font-black tracking-wider text-[var(--color-ink)] uppercase md:text-4xl"
            style={{
              fontFamily: 'var(--font-display)',
            }}
          >
            Ready to Play?
          </h2>
          <p className="mt-2 text-xs leading-relaxed font-medium text-[var(--color-muted)]">
            Eat targets to grow and gain speed. Avoid borders and self-collision.
          </p>
        </div>

        {/* Action Button */}
        <button
          onClick={onStart}
          className="btn-neon w-full cursor-pointer px-6 py-3! text-base font-black tracking-widest uppercase"
          style={{
            borderRadius: 8,
          }}
        >
          Start Game
        </button>

        {/* Secondary Hint */}
        <div className="flex items-center gap-2">
          <kbd
            className="flex h-6 items-center justify-center rounded border border-[var(--color-ink)] px-2 text-[10px] font-bold text-[var(--color-ink)]"
            style={{
              fontFamily: 'var(--font-mono)',
              background: 'var(--color-bg-deep)',
            }}
          >
            SPACE
          </kbd>
          <span className="text-[11px] font-semibold tracking-wider text-[var(--color-muted)] uppercase">
            or press any arrow key to start
          </span>
        </div>
      </div>
    </div>
  );
}
