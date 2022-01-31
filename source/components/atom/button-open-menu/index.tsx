import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { useScaledSize } from 'react-native-web-hooks'

import { useDrawer } from '@/context/DrawerMenu'

import colors from '@/global/colors'

const ButtonOpenMenu = () => {
  const iconSize = useScaledSize(1.5)
  const { drawerToggle } = useDrawer()

  return (
    <TouchableOpacity
      style={{
        padding: 8,
        marginRight: 8,
      }}
      onPress={() => {
        drawerToggle()
      }}
    >
      <Icon name="menu" type="entypo" size={iconSize} color={colors.white} />
    </TouchableOpacity>
  )
}

export default ButtonOpenMenu

const styles = StyleSheet.create({})
