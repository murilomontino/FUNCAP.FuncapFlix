import theme from '@/theme'
import styled from 'styled-components/native'

export const TitleLogo = styled.Text`
  color: ${theme.COLORS.TEXT};
  font-weight: bold;
  text-transform: uppercase;
  font-family: ${theme.FONTS.TITLE_900};
  margin-left: 20px;
  text-align: left;
`

export const ContainerTitle = styled.View`
  flex: 2;
  justify-content: center;
  align-items: flex-start;
`

export const ContainerLogo = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 0 0 20px 20px;
  max-height: 150;
`
