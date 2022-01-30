import React from 'react'
import { Text } from 'react-native'

import colors from '@/global/colors'

type Props = {
  title: string
}

const TitleSlider = ({ title }: Props) => {
  return (
    <Text
      style={[
        {
          fontSize: 16,
          color: colors.white,
          width: '100%',
          fontFamily: 'AlfaSlabOne_400Regular',
          backgroundColor: colors.bluePerCent._10,

          textAlign: 'left',
          padding: 8,
        },
      ]}
    >
      {title.toUpperCase()}
    </Text>
  )
}

export default TitleSlider
