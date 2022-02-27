import React, { useEffect, useRef, useState } from 'react'
import { View, FlatList } from 'react-native'

import { v4 } from 'uuid'

import Button from '@/components/atom/button'

import Artist from '../../molecules/artist'
import Exhibition from '../../molecules/exhibition'
import PhotosOfEvent from '../../molecules/photos-of-event'
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
  ]

  return (
    <Container
      style={{
        minHeight: size.height,
      }}
      onLayout={(e) => {
        setWidth(e.nativeEvent.layout.width)
      }}
    >
      <ContainerButton
        style={{
          flex: 1,
          width: width,
          minHeight: 50,
        }}
      >
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
      <FlatList
        ref={ref}
        initialScrollIndex={selected}
        data={data}
        style={{
          flex: 3,
          minHeight: size.height,
        }}
        contentContainerStyle={{
          zIndex: 99,
        }}
        keyExtractor={(item) => item.id}
        horizontal
        scrollEnabled={false}
        disableScrollViewPanResponder
        showsHorizontalScrollIndicator={false}
        decelerationRate="normal"
        renderItem={({ item }) => (
          <View
            style={{
              zIndex: 99,
              padding: 12,
              width: width,
              minHeight: 400,
            }}
          >
            {item.component}
          </View>
        )}
      />
    </Container>
  )
}

export default MenuOfPhotos
