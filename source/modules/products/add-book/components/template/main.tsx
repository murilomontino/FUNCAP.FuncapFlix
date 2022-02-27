import React from 'react'

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
        size.width < 1127 && {
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
