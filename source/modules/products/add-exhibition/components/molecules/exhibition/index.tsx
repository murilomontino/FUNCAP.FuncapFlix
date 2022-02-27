import React, { memo, useEffect, useMemo, useState } from 'react'
import { View, Text } from 'react-native'

import { FinancialResources } from '@/types'

import DatePicker from '@/components/atom/date-picker'
import Dropdown from '@/components/atom/dropdown'
import GetImageButton from '@/components/atom/get-image-button'
import InputTextArea from '@/components/molecule/input-text-area'
import InputTopic from '@/components/molecule/input-topic'

import {
  useFormExhibitionDescription,
  useFormExhibitionEndDate,
  useFormExhibitionFinancialResources,
  useFormExhibitionLocation,
  useFormExhibitionStartDate,
  useFormExhibitionThumbnail,
  useFormExhibitionTitle,
} from '@/forms/Product/product-exhibition/hooks'

import { Title, Container } from '../artist/styles'

const ItemsFinancialResources = [
  { label: 'Lei Aldir Blanc ', value: FinancialResources.LeiAldirBlanc },
  {
    label: 'Recursos do Artista',
    value: FinancialResources.RecursoDoArtista,
  },
  { label: 'Funcart', value: FinancialResources.Funcart },
  { label: 'Municipal', value: FinancialResources.Municipal },
  { label: 'Federal', value: FinancialResources.Federal },
]

const Exhibition = () => {
  const [disabled, setDisabled] = useState(true)

  const { location, onChangeLocation } = useFormExhibitionLocation()
  const { title, onChangeTitle } = useFormExhibitionTitle()
  const { endDate, onChangeEndDate } = useFormExhibitionEndDate()
  const { startDate, onChangeStartDate } = useFormExhibitionStartDate()
  const { description, onChangeDescription } = useFormExhibitionDescription()
  const { onChangeFinancialResources, financialResources } =
    useFormExhibitionFinancialResources()

  const { thumbnail, onChangeThumbnail } = useFormExhibitionThumbnail()
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
    <Container>
      <Title>Dados do Exposição:</Title>

      <GetImageButton
        image={thumbnail}
        onChangeImage={onChangeThumbnail}
        height={200}
        width={200}
      />

      <Dropdown
        requered
        items={ItemsFinancialResources}
        onChangeValue={onChangeFinancialResources}
        value={financialResources}
        label={'Recursos'.toUpperCase()}
      />
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
        topic="Local"
        onChangeText={onChangeLocation}
        requered
        value={location}
        styleViewContainer={{
          width: '70%',
        }}
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
    </Container>
  )
}

export default memo(Exhibition)
