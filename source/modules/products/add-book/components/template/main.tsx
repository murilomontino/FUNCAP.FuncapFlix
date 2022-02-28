import React from 'react'

import theme from '@/theme'

import Details from '../organism/details'
import Left from '../organism/left'
import Right from '../organism/right'
import { Container } from './styles'

import { useSize } from '@/hooks/use-size'

const Main = () => {
  const { size } = useSize()

  return (
    <Container
      style={[
        {
          padding: 40,
          flexDirection: 'row',
          width: '100%',
          minHeight: size.height,
          marginBottom: theme.CONSTANTS.FOOTER_HIGHT,
          alignItems: 'center',
        },
        size.width < 1127 && {
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
      ]}
    >
      <Left />
      <Details />
      <Right />
    </Container>
  )
}

export default Main
