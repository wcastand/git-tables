import React from 'react'
import {Div} from 'glamorous'

import Icon from './icon'

const Align = ({state, idx, action}) => (
  <Div display="flex">
    <Icon type="format_align_left" selected={state[idx] === 'l'} onClick={() => action(idx, 'l')} />
    <Icon
      type="format_align_center"
      selected={state[idx] === 'c'}
      onClick={() => action(idx, 'c')}
    />
    <Icon
      type="format_align_right"
      selected={state[idx] === 'r'}
      onClick={() => action(idx, 'r')}
    />
  </Div>
)

export default Align
