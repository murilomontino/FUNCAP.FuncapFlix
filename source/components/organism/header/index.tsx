import React, { useEffect, useState, useRef } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'
import { useHover } from 'react-native-web-hooks'

import { MotiPressable } from 'moti/interactions'

import ButtonLogin from '@/components/atom/button-login'
import ButtonOpenMenu from '@/components/atom/button-open-menu'
import LogoMapaCultural from '@/components/atom/logo-mapa-cultural'
import NavBar from '@/components/molecule/nav-bar'

import colors from '@/global/colors'
import constants from '@/global/constants'

const Header = () => {
  const DELAY = 100
  const TIME_ANIMATION = 150

  const web = Platform.OS === 'web'
  const { window, screen } = useDimensions()
  const size = web ? window : screen

  const refView = useRef()
  const hover = useHover(refView)

  const [sizeNavBar, setSizeNavBar] = useState(web ? false : true)

  const { width } = size
  web &&
    useEffect(() => {
      if (width < 1127) {
        setSizeNavBar(true)
      } else {
        setSizeNavBar(false)
      }
    }, [width])

  // 1127

  return (
    <View
      ref={refView}
      style={[
        styles.container,
        {
          width: !sizeNavBar ? '98.8%' : '100%',
          zIndex: 1,
        },
      ]}
    >
      <MotiPressable
        animate={({ hovered }) => {
          return {
            opacity: hovered ? 1 : 0.1,
          }
        }}
        transition={{ type: 'timing', delay: DELAY, duration: TIME_ANIMATION }}
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
          height: constants.headerHight,
          backgroundColor: colors.bar_header,
        }}
      >
        {!sizeNavBar ? (
          <>
            <LogoMapaCultural />
            <NavBar />
            <ButtonLogin />
          </>
        ) : (
          <>
            <ButtonOpenMenu />
            <LogoMapaCultural />
            <ButtonLogin textVisible={false} />
          </>
        )}
      </MotiPressable>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flex: 1,
    elevation: 5,
    shadowColor: '#fff',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    position: 'absolute',
    top: 0,
    height: constants.headerHight - 8,
  },
})
