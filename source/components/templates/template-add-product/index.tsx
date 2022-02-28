import React from 'react'

import HeaderLogo from '@/components/atom/header-logo'
import Footer from '@/components/organism/footer'
import Header from '@/components/organism/header'

import { ContainerLogo, Container, ContainerBackground } from './styles'

import { useSize } from '@/hooks/use-size'

const TemplateAddProduct: React.FC = ({ children }) => {
  const { size } = useSize()

  return (
    <ContainerBackground>
      <Header />
      <ContainerLogo>
        <HeaderLogo />
      </ContainerLogo>
      <Container>{children}</Container>
      <Footer />
    </ContainerBackground>
  )
}

export default TemplateAddProduct
