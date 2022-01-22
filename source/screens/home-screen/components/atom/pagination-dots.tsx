import React from 'react'
import { StyleSheet, View } from 'react-native'

import colors from '@/global/colors'

type Props = {
  abas: number
  current: number
}

const PaginationDots = ({ abas, current }: Props) => {
  return (
    <View style={styles.paginationWrapper}>
      {Array.from(Array(abas).keys()).map((key, index) => (
        <View
          style={[
            styles.paginationDots,
            { opacity: current === index ? 1 : 0.4 },
          ]}
          key={index}
        />
      ))}
    </View>
  )
}

export default PaginationDots

const styles = StyleSheet.create({
  paginationWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: colors.button,
    marginLeft: 10,
    borderColor: colors.black,
    borderWidth: 1,
  },
})
