import React, { useEffect, useState } from 'react'
import { Platform, StyleSheet } from 'react-native'
import { useLayout } from 'react-native-web-hooks'

import Logo from '@/components/atom/logo-funcap'
import LogoFuncapVertical from '@/components/atom/logo-funcap-vertical'
import LogoGoverno from '@/components/atom/logo-governo'
import AboutFooter from '@/components/molecule/about-footer'

import {
  ContainerFooter,
  ContainerAbout,
  ContainerSocial,
  ContainerLogo,
} from './styles'

const Footer = () => {
  const web = Platform.OS === 'web'

  const [sizeNavBar, setSizeNavBar] = useState(web ? false : true)
  const { onLayout, width } = useLayout()

  web &&
    useEffect(() => {
      if (width < 720) {
        setSizeNavBar(true)
      } else {
        setSizeNavBar(false)
      }
    }, [width])

  // 720

  return (
    <ContainerFooter onLayout={onLayout}>
      <ContainerAbout>
        <AboutFooter />
      </ContainerAbout>
      <ContainerSocial />

      <ContainerLogo>
        {!sizeNavBar ? <LogoFuncapVertical size={8} /> : <Logo size={4} />}
        <LogoGoverno size={!sizeNavBar ? 8 : 4} textVisible={!sizeNavBar} />
      </ContainerLogo>
    </ContainerFooter>
  )
}

export default Footer

const styles = StyleSheet.create({})
