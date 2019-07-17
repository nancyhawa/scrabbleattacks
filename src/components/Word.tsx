/** @jsx jsx */
import { jsx } from '@emotion/core'
import tinycolor from 'tinycolor2'
import { Stylesheet } from 'types'
import random from 'seed-random'
import { Tile } from './Tile'

interface WordProps {
  size: number
  letters: string
  randomSeed: string
}

export const Word = ({ size = 100, letters, randomSeed = '' }: WordProps) => {
  const styles = getStyles({ size, randomSeed })

  return (
    <div css={styles.word}>
      {letters.split('').map((letter, i) => (
        <Tile key={i} size={size} letter={letter} points={1} randomSeed={letter} />
      ))}
    </div>
  )
}

const getStyles = ({ size = 100, randomSeed = '' }: Partial<WordProps>): Stylesheet => {
  const rnd = random(randomSeed)
  return {
    word: {
      display: 'flex',
      justifyContent: 'center',
    },
  }
}
