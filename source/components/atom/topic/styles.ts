import theme from '@/theme'
import styled from 'styled-components/native'

export const TopicContainer = styled.View`
  flex: 1;
  min-width: 150px;
  width: 150px;
  max-width: 150px;
  flex-direction: row;
  padding-right: 8px;
  justify-content: flex-end;
  align-items: center;
`

export const TopicRequered = styled.Text`
  font-weight: bold;
  font-size: ${theme.FONTS.SIZE.SMALL};
  text-align: right;
  padding-left: 2px;
  color: ${theme.COLORS.IMPORTANT};
`

export const TopicForm = styled.Text`
  font-weight: bold;
  color: ${theme.COLORS.TEXT};
  padding: 4px 4px 0px 0px;
  text-align: right;
`
