import React from 'react'
import { StyleSheet, View } from 'react-native'

import constants from '@/global/constants'

const MusicScreen = () => {
  return (
    <View style={styles.container}>
      <audio controls={true}>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
      </audio>
    </View>
  )
}

export default MusicScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: constants.headerHight,
    marginBottom: constants.footerHight,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
})
