import React, { memo } from 'react'
import { View, Text } from 'react-native'

import InputTextArea from '@/components/atom/input-text-area'
import InputTopic from '@/components/atom/input-topic'

import {
  useFormExhibitionDescription,
  useFormExhibitionEndDate,
  useFormExhibitionLocation,
  useFormExhibitionStartDate,
  useFormExhibitionTitle,
} from '@/forms/Product/product-exhibition/hooks'

const Exhibition = () => {
  const { location, onChangeLocation } = useFormExhibitionLocation()
  const { title, onChangeTitle } = useFormExhibitionTitle()
  const { endDate, onChangeEndDate } = useFormExhibitionEndDate()
  const { startDate, onChangeStartDate } = useFormExhibitionStartDate()
  const { description, onChangeDescription } = useFormExhibitionDescription()

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginVertical: 12,
          width: '70%',
          textAlign: 'left',
          color: '#fff',
          textTransform: 'uppercase',
          fontFamily: 'Inter_900Black',
        }}
      >
        Dados da Exposição:
      </Text>
      <InputTopic
        topic="Título"
        onChangeText={onChangeTitle}
        requered
        value={title}
        styleViewContainer={{
          width: '70%',
        }}
      />
      <InputTopic
        topic="Date de Inicio"
        onChangeText={onChangeStartDate}
        requered
        value={startDate}
        styleViewContainer={{
          width: '70%',
        }}
        mask={'99/99/9999'}
      />
      <InputTopic
        topic="Data de Fim"
        onChangeText={onChangeEndDate}
        value={endDate}
        styleViewContainer={{
          width: '70%',
        }}
        mask={'99/99/9999'}
      />
      <InputTopic
        topic="Local"
        onChangeText={onChangeLocation}
        requered
        value={location}
        styleViewContainer={{
          width: '70%',
        }}
      />
      <InputTextArea
        height={360}
        maxLength={2400}
        numberLines={10}
        topic="Sobre a Obra"
        requered
        onChangeValue={onChangeDescription}
        value={description}
        widthContainer={'70%'}
      />
    </View>
  )
}

export default memo(Exhibition)
