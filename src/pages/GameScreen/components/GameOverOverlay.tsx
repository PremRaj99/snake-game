interface GameOverOverlayProps {
  score: number;
  onRestart: () => void;
}

export function GameOverOverlay({ score, onRestart }: GameOverOverlayProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-900/75">
      <div className="rounded-lg bg-white p-8 text-center">
        <h2 className="mb-4 text-2xl font-bold">Game Over</h2>
        <p className="mb-4">Your score: {score}</p>
        <button
          onClick={onRestart}
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Restart Game
        </button>
      </div>
    </div>
  );
}
