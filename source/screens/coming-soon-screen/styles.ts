import theme from '@/theme'
import styledWeb from 'styled-components'
import styled from 'styled-components/native'

import background from '@/assets/background-image.png'

export const ContainerBackground = styledWeb.div`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-image: url(${background});
`

export const ContainerLogo = styled.View`
  margin-top: ${theme.CONSTANTS.HEADER_HIGHT}px;
  align-self: center;
`
export const Container = styled.View`
  padding: 20px;
`
