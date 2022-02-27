import { MaskedTextInput } from 'react-native-mask-text'

import theme from '@/theme'
import styled from 'styled-components/native'

export { Container, Input } from '../input-topic/styles'

export const MaskedInput = styled(MaskedTextInput)`
  flex: 4;
  color: ${theme.COLORS.BORDER_BUTTON};
  font-weight: 500;
  background-color: ${theme.COLORS.BACKGROUND_INPUT};
  padding: 8px;
  border-radius: 2px;
  border-width: 0.2px;
  border-color: ${theme.COLORS.BORDER_BUTTON};
  outline-color: orange;
  outline-width: 1px;
  text-align: center;
`
