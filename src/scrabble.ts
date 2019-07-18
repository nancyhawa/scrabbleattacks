const letters = {
  A: { points: 1, tiles: 9 },
  B: { points: 3, tiles: 2 },
  C: { points: 3, tiles: 2 },
  D: { points: 2, tiles: 4 },
  E: { points: 1, tiles: 12 },
  F: { points: 4, tiles: 2 },
  G: { points: 2, tiles: 3 },
  H: { points: 4, tiles: 2 },
  I: { points: 1, tiles: 9 },
  J: { points: 8, tiles: 1 },
  K: { points: 5, tiles: 1 },
  L: { points: 1, tiles: 4 },
  M: { points: 3, tiles: 2 },
  N: { points: 1, tiles: 6 },
  O: { points: 1, tiles: 8 },
  P: { points: 3, tiles: 2 },
  Q: { points: 10, tiles: 1 },
  R: { points: 1, tiles: 6 },
  S: { points: 1, tiles: 4 },
  T: { points: 1, tiles: 6 },
  U: { points: 1, tiles: 4 },
  V: { points: 4, tiles: 2 },
  W: { points: 4, tiles: 2 },
  X: { points: 8, tiles: 1 },
  Y: { points: 4, tiles: 2 },
  Z: { points: 10, tiles: 1 },
}

export type Letter = keyof typeof letters

export const points = (letter: Letter) => {
  if (!letters[letter]) throw new Error('not a letter')
  return letters[letter].points
}

export const tiles = (letter: Letter) => {
  if (!letters[letter]) throw new Error('not a letter')
  return letters[letter].tiles
}
