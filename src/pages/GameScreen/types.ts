export interface Position {
  x: number;
  y: number;
}

export type Direction = 'up' | 'down' | 'left' | 'right';

export interface Snake {
  head: Position;
  body: Position[];
  direction: Direction;
}

export interface Food {
  position: Position;
}

export interface GameBoardSize {
  rows: number;
  columns: number;
}
