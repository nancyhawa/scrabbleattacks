/** @jsx jsx */
import { jsx } from '@emotion/core'
import tinycolor from 'tinycolor2'

interface TileProps {
  letter: string
  pointValue: number
  size: number
}

export const Tile = ({ letter, pointValue, size }: TileProps) => {
  const black = tinycolor('black')
  const white = tinycolor('white')
  const tileBase = '#f5cf90'
  const thin = (size * 0.5) / 19
  const small = (size * 0.75) / 19
  const med = small * 1.5

  const styles = {
    tile: {
      backgroundColor: tileBase,
      backgroundImage:
        "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/49914/veneer-birch-texture-fs8.png')",
      position: 'relative',
      width: `${size}px`,
      height: `${size}px`,
      boxSizing: 'border-box',
      boxShadow: `0 ${med}px ${small}px ${-thin}px ${black.setAlpha(0.2).toString()}`,

      borderStyle: 'solid',

      borderTopWidth: small,
      borderLeftWidth: '1px',
      borderRightWidth: '1px',
      borderBottomWidth: med,

      borderTopColor: white.setAlpha(0.55).toString(),
      borderLeftColor: white.setAlpha(0.75).toString(),

      borderRightColor: black.setAlpha(0.25).toString(),
      borderBottomColor: black.setAlpha(0.2).toString(),

      borderRadius: small,
    },
    letter: {
      textTransform: 'uppercase',
      fontFamily: 'Oswald, sans-serif',
      fontSize: size * 0.7,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',

      color: 'rgba(0,0,0,0.6)',
      textShadow: `4px 4px 6px ${tileBase},
        0 0 0 rgba(0,0,0,0.7),
        1px 2px 1px rgba(255,255,255,0.5)`,
    },
    points: {
      color: black.setAlpha(0.3).toString(),
      fontFamily: 'sans-serif',
      fontSize: /*  @size * 0.225 */ size * 0.225,
      position: 'absolute',
      right: '12.5%',
      bottom: '12.5%',
      transform: 'translate(50%,50%)',
    },
  }
  return (
    <div css={styles.tile}>
      <span css={styles.letter}>{letter}</span>
      <span css={styles.points}>{pointValue}</span>
    </div>
  )
}
