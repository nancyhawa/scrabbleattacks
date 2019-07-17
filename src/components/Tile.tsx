/** @jsx jsx */
import { jsx } from '@emotion/core'
import tinycolor from 'tinycolor2'
import { Stylesheet } from 'types'
import random from 'seed-random'
import { Letter, points } from 'scrabble'

interface TileProps {
  letter: Letter
  size: number
  randomSeed: string
}

export const Tile = ({ letter, size, randomSeed }: TileProps) => {
  const styles = getStyles({ size, randomSeed })

  return (
    <div css={styles.tile}>
      <span css={styles.letter}>{letter}</span>
      <span css={styles.points}>{points(letter)}</span>
    </div>
  )
}

const fadeOut = (color: tinycolor.Instance, percentage = 0.5) =>
  color.setAlpha(percentage).toString()

const getStyles = ({ size = 100, randomSeed = '' }: Partial<TileProps>): Stylesheet => {
  const rnd = random(randomSeed)

  const black = tinycolor('black')
  const white = tinycolor('white')
  const tileBase = tinycolor('#f5cf90')
    .darken(rnd() * 20 - 10)
    .desaturate(rnd() * 20 - 10)
    .toString()
  const thin = (size * 0.5) / 19
  const small = (size * 0.75) / 19
  const med = small * 1.5

  const wood = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/49914/veneer-birch-texture-fs8.png'

  const inset = {
    fontFamily: 'Oswald, sans-serif',
    color: 'rgba(0,0,0,0.6)',
    textShadow: `
        4px 4px 6px ${tileBase},
        0 0 0 rgba(0,0,0,0.7),
        1px 2px 1px rgba(255,255,255,0.5)
        `,
  }

  const styles: Stylesheet = {
    tile: {
      position: 'relative',
      height: `${size * 1.1}px`,
      width: `${size}px`,
      backgroundColor: tileBase,
      backgroundImage: `url(${wood})`,
      borderBottomColor: fadeOut(black, 0.2),
      borderBottomWidth: med,
      borderLeftColor: fadeOut(white, 0.75),
      borderLeftWidth: thin,
      borderRadius: med * 2,
      borderRightColor: fadeOut(black, 0.25),
      borderRightWidth: thin,
      borderStyle: 'solid',
      borderTopColor: fadeOut(white, 0.55),
      borderTopWidth: small,
      boxShadow: `0 ${med}px ${small}px ${-thin}px ${fadeOut(black, 0.2)}`,
      boxSizing: 'border-box',
      margin: size / 40,
    },
    letter: {
      ...inset,
      fontSize: size * 0.7,
      left: '50%',
      top: '45%',
      position: 'absolute',
      textShadow: `
        4px 4px 6px ${tileBase},
        0 0 0 rgba(0,0,0,0.7),
        1px 2px 1px rgba(255,255,255,0.5)
        `,
      textTransform: 'uppercase',
      transform: 'translate(-50%,-50%)',
    },
    points: {
      ...inset,
      bottom: small,
      color: fadeOut(black, 0.3),
      display: 'block',
      fontFamily: 'sans-serif',
      fontSize: size * 0.235,
      left: 0,
      position: 'absolute',
      right: small,
      textAlign: 'right',
    },
  }
  return styles
}
