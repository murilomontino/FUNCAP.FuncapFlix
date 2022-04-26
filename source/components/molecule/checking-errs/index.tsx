import React from 'react'
import { View } from 'react-native'

import HelperText from '@/components/atom/helper-text'

type Props = {
  err: string[]
}

const SIZE_HELPER_TEXT_HEIGHT = 24

const CheckingErrs = ({ err }: Props) => {
  return (
    <View
      style={{
        flex: 1,
        maxHeight: err?.length * SIZE_HELPER_TEXT_HEIGHT,
      }}
    >
      {err?.length > 0 &&
        err.map((err, index) => (
          <HelperText
            text={err}
            key={index}
            visible
            textStyle={{
              padding: 4,
            }}
          />
        ))}
    </View>
  )
}

export default CheckingErrs
