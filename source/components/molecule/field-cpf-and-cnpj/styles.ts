import theme from '@/theme'
import styled from 'styled-components/native'

import { MaskedInput as Input } from '../input-topic-masked/styles'

export const MaskedInput = styled(Input)`
  outline-style: none;
`

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
export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 8px;
  align-content: center;
  outline-style: none;
`
