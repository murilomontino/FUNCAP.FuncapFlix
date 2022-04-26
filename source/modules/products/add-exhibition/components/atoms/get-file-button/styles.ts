import theme from '@/theme'
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  background-color: ${theme.COLORS.BUTTON_SECONDARY};
  border-radius: 4px;
  width: 250px;
  height: 50px;
  margin: 8px;
  align-self: center;
  justify-content: center;
  align-content: center;
  border-width: 1px;
  border-color: ${theme.COLORS.BORDER_BUTTON};
`

export const TextRequered = styled.Text`
  font-weight: bold;
  color: ${theme.COLORS.IMPORTANT};
  font-size: 18px;
  text-align: right;
  padding-left: 2px;
`

export const ContainerCentered = styled.View`
  flex-direction: row;
  justify-content: center;
  align-content: center;
`

export const Text = styled.Text`
  color: ${theme.COLORS.TEXT};
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
`
