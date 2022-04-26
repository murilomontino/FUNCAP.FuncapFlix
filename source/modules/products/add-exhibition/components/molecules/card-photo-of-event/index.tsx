import React, { useEffect, useState } from 'react'
import { TouchableHighlight, View } from 'react-native'

import { ExhibitionPhotosTypes } from '@/types'
import { AntDesign } from '@expo/vector-icons'

import CacheImage from '@/components/atom/cache-image'
import DatePicker from '@/components/atom/date-picker'
import Dropdown from '@/components/atom/dropdown'
import InputTextArea from '@/components/molecule/input-text-area'
import InputTopic from '@/components/molecule/input-topic'

import { keys } from '@/forms/Product/product-exhibition/type'
import { mapTypeExhibitionPhoto } from '@/forms/Product/types'

import colors from '@/global/colors'

type Props = {
  uri: string
  title: string
  date: string
  description: string
  typeOfPhoto: string
  error: string
  index: number
  onRemovePhoto?: (index: number) => void
  onChangeAttrs: (text: string, index: number, key: keys) => void
}

const CardPhotoOfEvent = ({
  onChangeAttrs,
  onRemovePhoto,
  title,
  description,
  typeOfPhoto,
  uri,
  index,
  error,
}: Props) => {
  const [err, setErr] = useState(() => {
    if (error === 'true') {
      return true
    }
    return false
  })

  useEffect(() => {
    setErr(() => {
      if (error === 'true') {
        return true
      }
      return false
    })
  }, [error])

  const onChangeTitle = (text: string) => {
    onChangeAttrs(text, index, 'titulo')
  }

  const onChangeTypeOfPhoto = (type: ExhibitionPhotosTypes) => {
    onChangeAttrs(`${type}`, index, 'tipo_de_foto')
  }

  const onChangeDate = (text: Date) => {
    onChangeAttrs(text?.toISOString(), index, 'data')
  }

  const onChangeDescription = (text: string) => {
    onChangeAttrs(text, index, 'descricao')
  }

  const onRemovePhotoEvent = () => {
    if (onRemovePhoto) {
      onRemovePhoto(index)
    }
  }

  return (
    <View
      style={[
        {
          flex: 1,
          margin: 10,
          backgroundColor: 'rgba(0,0,0,0.3)',
          borderRadius: 2,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowRadius: 3.84,
          elevation: 5,
        },
        err && {
          borderWidth: 1,
          borderColor: colors.redPrimary,
        },
      ]}
    >
      <TouchableHighlight
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          zIndex: 10,
        }}
        onPress={onRemovePhotoEvent}
      >
        <AntDesign name="close" size={24} color={colors.grey20} />
      </TouchableHighlight>
      <CacheImage
        uri={uri}
        resizeMode={'stretch'}
        width={'100%'}
        height={140}
      />
      <InputTopic
        requered
        stylesViewTitle={{
          marginVertical: 8,
          padding: 4,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        styleTopic={{
          fontSize: 16,
          color: '#fff',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
        styleViewContainer={{
          flexDirection: 'column',
        }}
        styleViewInput={{
          flex: 1,
          width: '95%',
          paddingHorizontal: 8,
        }}
        onChangeText={onChangeTitle}
        value={title}
        placeholder={'Título da foto*'}
        topic=""
      />

      <InputTextArea
        topic=""
        placeholder="Descrição da foto"
        value={description}
        onChangeValue={onChangeDescription}
        height={80}
        maxLength={1500}
        numberLines={4}
        widthContainer={'95%'}
      />
      <View
        style={{
          zIndex: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <DatePicker
          topic=""
          onChangeValue={onChangeDate}
          value={new Date()}
          colorIcon={colors.black}
        />
      </View>
      <Dropdown
        styleContainerButton={{
          height: 40,
          backgroundColor: colors.whitePerCent._80,
        }}
        color={'#000'}
        value={typeOfPhoto as unknown as number}
        onChangeValue={onChangeTypeOfPhoto}
        items={mapTypeExhibitionPhoto}
        label="Tipo de foto"
        requered
      />
    </View>
  )
}

export default CardPhotoOfEvent
