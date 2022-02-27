import { Document } from 'react-pdf'

import theme from '@/theme'
import styled from 'styled-components/native'

export const PDFContainer = styled(Document)`
  display: flex;
  justify-content: center;
  user-select: none;
  margin-top: 20px;
  margin-bottom: 20px;

  @media print {
    display: none;
  }
`
export const ContainerControls = styled.View`
  height: 80px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  flex: 1;
`

export const ContainerButton = styled.TouchableOpacity`
  padding: 12px;
  height: 48px;
  justify-content: center;
  align-items: center;
`
export const TextButton = styled.Text`
  text-transform: uppercase;
  color: ${theme.COLORS.BUTTON_TEXT_LEGEND};
  font-weight: 600;
`

export const Container = styled.View`
  background-color: ${theme.COLORS.BACKGROUND};
  justify-content: center;
  align-items: center;
`

export const ContainerButtonControls = styled.View`
  flex: 1;
  flex-direction: row;
`
