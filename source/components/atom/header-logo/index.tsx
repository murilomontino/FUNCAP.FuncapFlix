import React from 'react'
import { useScaledSize } from 'react-native-web-hooks'

import LogoFuncap from '@/components/atom/logo-funcap'

import { ContainerLogo, ContainerTitle, TitleLogo, Container } from './styles'

import { useSize } from '@/hooks/use-size'

const HeaderLogo = () => {
  const { size } = useSize()

  const TEXT_SIZE = useScaledSize(1)

  const WIDTH_LOGO = useScaledSize(3)

  return (
    <Container
      style={{
        justifyContent: size.width < 1127 ? 'center' : 'flex-start',
      }}
    >
      <ContainerLogo
        style={{
          maxWidth: WIDTH_LOGO,
        }}
      >
        <LogoFuncap size={3} />
      </ContainerLogo>
      <ContainerTitle>
        <TitleLogo
          style={{
            fontSize: TEXT_SIZE,
          }}
        >
          Fundação de Cultura e Arte Aperipê
        </TitleLogo>
      </ContainerTitle>
    </Container>
  )
}

export default HeaderLogo
