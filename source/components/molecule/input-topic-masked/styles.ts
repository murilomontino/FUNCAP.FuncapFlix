import { MaskedTextInput } from 'react-native-mask-text'

import theme from '@/theme'
import styled from 'styled-components/native'

export { Container, Input } from '../input-topic/styles'

export const MaskedInput = styled(MaskedTextInput)`
  color: ${theme.COLORS.BORDER_BUTTON};
  font-weight: 500;
  background-color: #d9d9d9;
  padding: 8px;
  border-radius: 2px;
  border-width: 0.2px;
  border-color: ${theme.COLORS.BORDER_BUTTON};
  flex: 3;
  outline-color: orange;
  outline-width: 1px;
`
