import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useScaledSize } from 'react-native-web-hooks'

import { Entypo } from '@expo/vector-icons'

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
      <Entypo name="menu" size={iconSize} color={colors.grey20} />
    </TouchableOpacity>
  )
}

export default ButtonOpenMenu
