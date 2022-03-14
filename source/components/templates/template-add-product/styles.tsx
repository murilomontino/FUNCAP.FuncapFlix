import theme from '@/theme'
import styledWeb from 'styled-components'
import styled from 'styled-components/native'

import background from '@/assets/background-image.png'

export const ContainerBackground = styledWeb.div`
  background-size: cover;
  background-image: url(${background});
`

export const ContainerLogo = styled.View`
  flex: 1;
  margin-top: ${theme.CONSTANTS.HEADER_HIGHT}px;
  max-height: 150px;
`
export const Container = styled.View`
  padding: 20px;
`
