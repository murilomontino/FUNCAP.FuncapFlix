import { MaskedTextInput } from 'react-native-mask-text'

import theme from '@/theme'
import styled from 'styled-components/native'

export const ContainerIcon = styled.View`
  background-color: ${theme.COLORS.WHITE};
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  border-left-width: 0px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-width: 0px;
`

export const MaskedInput = styled(MaskedTextInput)`
  flex: 3;
  color: ${theme.COLORS.BORDER_BUTTON};
  font-weight: 500;
  background-color: #d9d9d9;
  padding: 8px;
  border-radius: 2px;
  border-width: 1px;
  border-right-width: 0px;
  outline-style: none;
  border-color: ${theme.COLORS.BORDER_BUTTON};
  flex: 3;
  outline-color: orange;
  outline-width: 1px;
`

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 8px;
  align-content: center;
  outline-style: none;
`
