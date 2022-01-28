import React, { useEffect, useState } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { useLayout } from 'react-native-web-hooks'

import Logo from '@/components/atom/logo-funcap'
import LogoFuncapVertical from '@/components/atom/logo-funcap-vertical'
import LogoGoverno from '@/components/atom/logo-governo'
import AboutFooter from '@/components/molecule/about-footer'

import colors from '@/global/colors'
import constants from '@/global/constants'

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
    <View
      onLayout={onLayout}
      style={{
        position: 'absolute',
        flexDirection: 'row',
        flex: 1,
        bottom: 0,
        height: constants.footerHight,
        width: '100%',
        backgroundColor: colors.bluePerCent._10,
        marginTop: 200,
      }}
    >
      <View
        style={{
          flex: 2,
          flexDirection: 'column',
          paddingVertical: 42,
          paddingLeft: 34,
        }}
      >
        <AboutFooter />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}
      ></View>

      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          flexDirection: 'row',
        }}
      >
        {!sizeNavBar ? <LogoFuncapVertical size={8} /> : <Logo size={4} />}
        <LogoGoverno size={!sizeNavBar ? 8 : 4} textVisible={!sizeNavBar} />
      </View>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({})
