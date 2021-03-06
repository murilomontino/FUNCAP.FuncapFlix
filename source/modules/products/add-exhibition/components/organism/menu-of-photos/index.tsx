import React, { useEffect, useRef, useState } from 'react'
import { View, FlatList } from 'react-native'

import { v4 } from 'uuid'

import Button from '@/components/atom/button'

import Artist from '../../molecules/artist'
import Exhibition from '../../molecules/exhibition'
import PhotosOfEvent from '../../molecules/photos-of-event'
import SendExhibition from '../../molecules/send-exhibition'
import { Container, ContainerButton, Important } from './styles'

import { useSize } from '@/hooks/use-size'

const MenuOfPhotos = () => {
  const { size } = useSize()
  const [width, setWidth] = useState(0)

  const [selected, setSelected] = useState(0)

  useEffect(() => {
    return () => {
      setSelected(0)
    }
  }, [])

  const ref = useRef<FlatList>(null)

  const scrollToIndex = (index: number) => {
    ref.current.scrollToOffset({
      offset: width * index,
      animated: true,
    })
    setSelected(index)
  }

  const BottomsMap = [
    {
      label: 'Exposição',
      onPress: (index: number) => {
        scrollToIndex(index)
      },
    },
    {
      label: 'Artista',
      onPress: (index: number) => {
        scrollToIndex(index)
      },
    },
    {
      label: 'Fotos do Evento',
      onPress: (index: number) => {
        scrollToIndex(index)
      },
    },
    {
      label: 'Enviar Exposição',
      onPress: (index: number) => {
        scrollToIndex(index)
      },
    },
  ]

  const data = [
    {
      id: v4(),
      component: <Exhibition />,
    },
    {
      id: v4(),
      component: <Artist />,
    },
    {
      id: v4(),
      component: <PhotosOfEvent />,
    },
    {
      id: v4(),
      component: <SendExhibition />,
    },
  ]

  return (
    <Container
      style={[
        {
          minHeight: size.height * 1.5,
        },
        size.width < 1188 && {
          minHeight: size.height * 2.5,
        },
      ]}
      onLayout={(e) => {
        setWidth(e.nativeEvent.layout.width)
      }}
    >
      <ContainerButton>
        {BottomsMap.map((item, index) => (
          <Button
            key={index}
            text={item.label}
            onPress={() => item.onPress(index)}
            selectable
            selected={selected === index}
          />
        ))}
      </ContainerButton>

      <Important>* Campos Obrigatórios</Important>
      <View
        style={{
          minHeight: size.height,
          width: size.width,
        }}
      >
        <FlatList
          ref={ref}
          initialScrollIndex={selected}
          data={data}
          keyExtractor={(item) => item.id}
          horizontal
          scrollEnabled={false}
          disableScrollViewPanResponder
          showsHorizontalScrollIndicator={false}
          decelerationRate="normal"
          renderItem={({ item }) => (
            <View
              style={{
                flex: 1,
                zIndex: 99,
                padding: 12,
                width: width,
              }}
            >
              {item.component}
            </View>
          )}
        />
      </View>
    </Container>
  )
}

export default MenuOfPhotos
