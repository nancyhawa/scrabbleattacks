import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Tile } from '../src/components/Tile'
import { Word } from '../src/components/Word'

storiesOf('Tile', module)
  .add('A', () => <Tile letter="A" size="300" />)
  .add('Q', () => <Tile letter="Q" size="75" />)

storiesOf('Word', module).add('SCRABBLE', () => <Word letters="SCRABBLE" size="100" />)
