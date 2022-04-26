import theme from '@/theme'
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  background-color: transparent;
  align-items: center;
  justify-content: center;
`

export const Text = styled.Text`
  font-size: ${theme.FONTS.SIZE.TINY};
  font-weight: 600;
`
