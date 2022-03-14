import theme from '@/theme'
import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 12px;
  min-height: 150px;
  max-height: auto;
`

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.COLORS.TEXT};
  padding: 12px;
  margin: 4px 0;
  text-align: center;
`

export const Legends = styled.Text`
  font-size: 16px;
  color: ${theme.COLORS.TEXT};
  padding: 12px;
  margin: 4px 0;
  text-align: center;
`

export const ContainerTags = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 12px;
  flex-wrap: wrap;
  align-items: flex-start;
  min-width: 250px;
`
