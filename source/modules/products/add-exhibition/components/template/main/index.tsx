import React from 'react'
import { ActivityIndicator, Button, View } from 'react-native'

import Details from '../../organism/details'
import Left from '../../organism/left'

import { useSize } from '@/hooks/use-size'

const Main = () => {
  const { size } = useSize()

  const [loading, setLoading] = React.useState(false)

  if (loading) {
    return (
      <View
        style={[
          {
            flex: 1,
            marginTop: 40,
            padding: 40,
            flexDirection: 'row',
            minHeight: size.height,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          },
          size.width < 1127 && {
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        ]}
      >
        <ActivityIndicator size={'large'} />
      </View>
    )
  }

  const handlePress = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 10000)
  }

  return (
    <View
      style={[
        {
          flex: 1,
          marginTop: 40,
          padding: 40,
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        size.width < 1127 && {
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
      ]}
    >
      <Left />
      <Details />
      <Button title="Loading" onPress={handlePress} />
    </View>
  )
}

export default Main
