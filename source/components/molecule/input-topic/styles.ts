import theme from '@/theme'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  margin: 8px;
  align-content: center;

  //outlineOffset: ? NumberOrString;
  //outlineStyle: ? string;
`
export const Input = styled.TextInput`
  color: ${theme.COLORS.BORDER_BUTTON};
  background-color: ${theme.COLORS.BACKGROUND_INPUT};
  font-weight: 500;
  padding: 8px;
  border-radius: 2px;
  border-width: 0.2px;
  border-color: ${theme.COLORS.BORDER_BUTTON};
  flex: 4;
  outline-color: orange;
  outline-width: 1px;
  text-align: center;
`
