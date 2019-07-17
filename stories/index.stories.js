import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Tile } from '../src/components/Tile'

storiesOf('Tile', module)
    .add('A', () => <Tile letter="A" pointValue="1" size="100"/>)
    .add('Q', () => <Tile letter="Q" pointValue="10" size="50"/>)
