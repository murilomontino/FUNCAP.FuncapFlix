import React from 'react'
import { ActivityIndicator } from 'react-native'

import MenuOfPhotos from '../../organism/menu-of-photos'
import { Container } from './styles'

import { useSize } from '@/hooks/use-size'

const Main = () => {
  const [loading, setLoading] = React.useState(false)

  const { size } = useSize()

  if (loading) {
    return (
      <Container>
        <ActivityIndicator size={'large'} />
      </Container>
    )
  }

  return (
    <Container>
      <MenuOfPhotos />
    </Container>
  )
}

export default Main
