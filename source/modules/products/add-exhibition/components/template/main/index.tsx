import React from 'react'
import { ActivityIndicator } from 'react-native'

import MenuOfPhotos from '../../organism/menu-of-photos'
import { Container } from './styles'

const Main = () => {
  const [loading, setLoading] = React.useState(false)

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
