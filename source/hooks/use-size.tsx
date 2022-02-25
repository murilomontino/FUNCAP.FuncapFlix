import { Platform } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

export const useSize = () => {
  const web = Platform.OS === 'web'
  const { window, screen } = useDimensions()

  const size = web ? window : screen

  return { size, web }
}
