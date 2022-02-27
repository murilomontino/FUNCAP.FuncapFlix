import theme from '@/theme'
import styled from 'styled-components/native'

export const ContainerButton = styled.View`
  flex: 1;
  max-height: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  z-index: -1;
`

export const Container = styled.View`
  flex: 1;
  width: 100%;
  margin-right: 8px;
`

export const Important = styled.Text`
  flex: 1;
  max-height: 20px;
  font-size: 16;
  text-align: center;
  margin-bottom: 2px;
  color: ${theme.COLORS.IMPORTANT};
`
