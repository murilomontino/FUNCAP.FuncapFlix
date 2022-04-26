import theme from '@/theme'
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  border-radius: 40px;
  padding: 4px;
  margin: 2px;
  background-color: ${theme.COLORS.WHITE};
  border: 1px solid ${theme.COLORS.BORDER_BUTTON};
  justify-content: center;
  align-items: center;
`
