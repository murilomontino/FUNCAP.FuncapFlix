import React, { memo, useEffect, useMemo, useState } from 'react'
import { View, Text } from 'react-native'

import DatePicker from '@/components/atom/date-picker'
import InputTextArea from '@/components/atom/input-text-area'
import InputTopic from '@/components/atom/input-topic'
import InputTopicRef from '@/components/atom/input-topic-ref'

import {
  useFormExhibitionDescription,
  useFormExhibitionEndDate,
  useFormExhibitionLocation,
  useFormExhibitionStartDate,
  useFormExhibitionTitle,
} from '@/forms/Product/product-exhibition/hooks'

const Exhibition = () => {
  const [disabled, setDisabled] = useState(true)

  const { location, onChangeLocation } = useFormExhibitionLocation()
  const { title, onChangeTitle } = useFormExhibitionTitle()
  const { endDate, onChangeEndDate } = useFormExhibitionEndDate()
  const { startDate, onChangeStartDate } = useFormExhibitionStartDate()
  const { description, onChangeDescription } = useFormExhibitionDescription()

  const [startDateState, setStartDate] = useState<Date>(() => {
    if (startDate) {
      return new Date(startDate)
    }
    return null
  })
  const [endDateState, setEndDate] = useState<Date>(() => {
    if (endDate.current) {
      return new Date(endDate.current)
    }
    return null
  })

  const onChangeStartDateState = (date: Date) => {
    setStartDate(date)
    onChangeStartDate(date?.toISOString())
  }

  const onChangeEndDateState = (date: Date) => {
    setEndDate(date)
    onChangeEndDate(date?.toISOString())
  }

  const memoDateMinimum = useMemo(
    () => new Date(startDateState),
    [startDateState]
  )

  useEffect(() => {
    if (!startDateState) setDisabled(true)
    else setDisabled(false)
  }, [startDateState])

  return (
    <View
      style={{
        zIndex: 1,
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

      <InputTopicRef
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
      <View
        style={{
          zIndex: 10,
          flexDirection: 'row',
        }}
      >
        <DatePicker
          topic="Data de Início"
          requered
          onChangeValue={onChangeStartDateState}
          value={startDateState}
          colorIcon={'#000'}
        />
        <DatePicker
          disabled={disabled}
          topic="Data de Fim"
          onChangeValue={onChangeEndDateState}
          minimumDate={memoDateMinimum}
          value={endDateState}
          colorIcon={'#000'}
        />
      </View>
    </View>
  )
}

export default memo(Exhibition)
