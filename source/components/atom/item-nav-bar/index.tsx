import React, { useRef } from 'react'
import { StyleSheet, Text, TouchableOpacity, FontVariant } from 'react-native'
import { useHover, useScaledSize } from 'react-native-web-hooks'

type Props = {
  title: string
  link?: string
  select?: boolean
  fontVariant?: FontVariant
}

const ItemNavBar: React.FC<Props> = ({
  title,
  link,
  select = true,
  fontVariant = 'small-caps',
}) => {
  const ref = useRef(null)
  const hover = useHover(ref)

  const fontSize = useScaledSize(0.7)

  const handleClickURL = async () => {
    console.log(`navigate ${link}`)
  }

  return (
    <TouchableOpacity style={styles.buttonNav} onPress={handleClickURL}>
      <Text
        ref={ref}
        style={[
          { fontSize, fontVariant: [fontVariant] },
          styles.textNav,
          select && hover && styles.hoverText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default ItemNavBar

const styles = StyleSheet.create({
  textNav: {
    color: '#fff',
    fontWeight: '700',
  },
  hoverText: {
    color: 'orange',
    fontWeight: '600',
  },
  buttonNav: {
    padding: 4,
  },
  selectText: {},
})
