import { useEffect } from 'react';
import type { Direction } from '../types';

const KEY_DIRECTION_MAP: Record<string, Direction> = {
  ArrowUp: 'up',
  w: 'up',
  W: 'up',
  ArrowDown: 'down',
  s: 'down',
  S: 'down',
  ArrowLeft: 'left',
  a: 'left',
  A: 'left',
  ArrowRight: 'right',
  d: 'right',
  D: 'right',
};

export function useKeyboard(onDirection: (dir: Direction) => void, onStart?: () => void) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        onStart?.();
        return;
      }
      const dir = KEY_DIRECTION_MAP[e.key];
      if (dir) onDirection(dir);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onDirection, onStart]);
}
