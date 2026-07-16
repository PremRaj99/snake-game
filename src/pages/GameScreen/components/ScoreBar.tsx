interface ScoreBarProps {
  score: number;
  speed: number;
}

export function ScoreBar({ score, speed }: ScoreBarProps) {
  return (
    <div className="flex w-full justify-between px-4">
      <div className="text-xl font-bold text-white">Score: {score}</div>
      <div className="text-xl font-bold text-white">Speed: {speed}</div>
    </div>
  );
}
