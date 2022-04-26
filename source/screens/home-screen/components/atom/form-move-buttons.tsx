import React, { useCallback, useMemo } from 'react'
import {
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import { AntDesign } from '@expo/vector-icons'

import colors from '@/global/colors'
import constants from '@/global/constants'

interface Props {
  refScroll: React.MutableRefObject<ScrollView | undefined>
  abas: number
  current: number
  condition: boolean
  offset: number
}

const MoveButton: React.FC<Props> = ({
  refScroll,
  abas,
  current,
  condition,
  offset,
}) => {
  const web = Platform.OS === 'web'

  const { window, screen } = useDimensions()
  const size = web ? window : screen
  const { height, width } = size

  const MAX_WIDTH_CONTENT = useMemo(() => abas * width, [abas])

  const scrollToOffset = (offset: number) => {
    if (refScroll.current) {
      refScroll.current.scrollTo({
        animated: true,
        x: offset,
      })
    }
  }

  const nextPage = useCallback(() => {
    const next = offset + width

    if (next < MAX_WIDTH_CONTENT) {
      scrollToOffset(next)
    } else {
      scrollToOffset(MAX_WIDTH_CONTENT)
    }
  }, [offset])

  const previousPage = () => {
    const previous = offset - width

    if (previous > 0) {
      scrollToOffset(previous)
    } else {
      scrollToOffset(0)
    }
  }

  return (
    <View
      style={[
        styles.container,
        {
          width: width,
          height: height,
        },
      ]}
    >
      <View
        style={[
          styles.buttonsScrollsContainer,
          {
            width: width,
            top: Math.floor(height / 2) - 150,
          },
        ]}
      >
        <TouchableOpacity
          disabled={current === 0}
          style={[styles.containerButtons, { left: 0 }]}
          onPressIn={previousPage}
        >
          <AntDesign
            style={
              current === 0 || !condition
                ? styles.textNoExist
                : styles.textExist
            }
            name="leftcircle"
            size={24}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity
          disabled={current === abas - 1 || !condition}
          style={[styles.containerButtons, { right: 0 }]}
          onPressIn={nextPage}
        >
          <AntDesign
            style={
              current === abas - 1 || !condition
                ? styles.textNoExist
                : styles.textExist
            }
            name="rightcircle"
            size={24}
            color="white"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.paginationWrapper}>
        {Array.from(Array(abas).keys()).map((key, index) => (
          <View
            style={[
              styles.paginationDots,
              { opacity: current === index ? 1 : 0.4 },
            ]}
            key={index}
          />
        ))}
      </View>
    </View>
  )
}

export default MoveButton

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: constants.headerHight + 8,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsScrollsContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerButtons: {
    backgroundColor: 'transparent',
    padding: 32,
    borderRadius: 2,
    margin: 8,
    borderWidth: 0,
    elevation: 0,
  },
  paginationWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: colors.button,
    marginLeft: 10,
    borderColor: colors.black,
    borderWidth: 1,
  },
  textNoExist: {
    color: 'transparent',
  },
  textExist: {
    backgroundColor: colors.white,
    color: 'black',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 90,
  },
})
