import { Platform } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import theme from '@/theme'

export const useSize = () => {
  const web = Platform.OS === 'web'
  const { window, screen } = useDimensions()

  const size = web ? window : screen

  const SCREEN_SMALLER_THAN_LARGE_SIZE =
    size.width < theme.CONSTANTS.SCREEN.LARGE

  return { size, web, SCREEN_SMALLER_THAN_LARGE_SIZE }
}
