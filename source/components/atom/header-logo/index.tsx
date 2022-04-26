import React from 'react'
import { useScaledSize } from 'react-native-web-hooks'

import LogoFuncap from '@/components/atom/logo-funcap'

import { ContainerLogo, ContainerTitle, TitleLogo, Container } from './styles'

import { useSize } from '@/hooks/use-size'

type Props = {
  widthLogo?: number
  textSize?: number
  widthContainer?: number
  subTitle?: string
}

const HeaderLogo = ({
  textSize = 1,
  widthLogo = 3,
  widthContainer = 100,
  subTitle,
}: Props) => {
  const { size } = useSize()

  const TEXT_SIZE = useScaledSize(textSize)
  const SUB_TITLE_SIZE = useScaledSize(textSize - 1)

  return (
    <Container
      style={{
        justifyContent: size.width < 1127 ? 'center' : 'flex-start',
      }}
    >
      <ContainerLogo
        style={{
          width: widthContainer,
          maxWidth: widthContainer,
        }}
      >
        <LogoFuncap size={widthLogo} />
      </ContainerLogo>
      <ContainerTitle>
        <TitleLogo
          style={{
            fontSize: TEXT_SIZE,
          }}
        >
          Fundação de Cultura e Arte Aperipê
        </TitleLogo>
        {!!subTitle && (
          <TitleLogo
            style={{
              fontSize: SUB_TITLE_SIZE,
              textAlign: 'center',
              width: '100%',
            }}
          >
            {subTitle}
          </TitleLogo>
        )}
      </ContainerTitle>
    </Container>
  )
}

export default HeaderLogo
