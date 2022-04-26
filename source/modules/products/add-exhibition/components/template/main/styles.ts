import theme from '@/theme'
import styled from 'styled-components/native'

export const ContainerMenu = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const Container = styled.View`
  margin-bottom: ${theme.CONSTANTS.FOOTER_HIGHT};
  justify-content: center;
  align-items: center;
`

export const ContainerSendForm = styled.View`
  flex: 1;
  width: 100%;
  justify-content: flex-start;
  max-height: 720px;
  align-items: center;
`
