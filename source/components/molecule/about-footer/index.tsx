import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useScaledSize } from 'react-native-web-hooks'

import ItemNavBar from '@/components/atom/item-nav-bar'

import colors from '@/global/colors'

const AboutFooter = () => {
  const fontSize = useScaledSize(0.7)

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <ItemNavBar
          title="Política e Privacidade"
          link="www.google.com"
          fontVariant="proportional-nums"
        />
        <ItemNavBar
          title="Sobre nós"
          link="www.google.com"
          fontVariant="proportional-nums"
        />
      </View>
      <View>
        <Text style={[{ fontSize: fontSize }, styles.textNav]}>
          © 2021 MAPA DA CULTURA DE SERGIPE. Todos os direitos reservados
        </Text>
      </View>
    </>
  )
}

export default AboutFooter

const styles = StyleSheet.create({
  textNav: {
    color: colors.white,
    fontWeight: '700',
    padding: 8,
    fontVariant: ['proportional-nums'],
    marginTop: 12,
  },
})
