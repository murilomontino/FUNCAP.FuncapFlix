import React, { memo } from 'react'
import { View, Text } from 'react-native'

import FieldCPFandCNPJGeneric from '@/components/atom/field-cpf-and-cnpj'
import GetImageButton from '@/components/atom/get-image-button'
import InputTextArea from '@/components/atom/input-text-area'
import InputTopic from '@/components/atom/input-topic'

import {
  useFormExhibitionBiography,
  useFormExhibitionCPFandCNPJ,
  useFormExhibitionData,
  useFormExhibitionPhotoOfArtist,
} from '@/forms/Product/product-exhibition/hooks'

import { styles } from '../../atoms/styles'

const Artist = () => {
  const { biography, onChangeBiography } = useFormExhibitionBiography()
  const { photoOfArtist, onChangePhotoOfArtist } =
    useFormExhibitionPhotoOfArtist()
  const { culturalName, onChangeCulturalName } = useFormExhibitionData()

  const {
    cpfOrCnpj,
    cpfOrCnpjIsValid,
    onChangeCPForCNPJ,
    onChangeCPForCNPJIsValid,
  } = useFormExhibitionCPFandCNPJ()

  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        maxWidth: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 20,
          width: '70%',
          fontWeight: 'bold',
          marginVertical: 12,
          textTransform: 'uppercase',
          color: '#fff',
          textAlign: 'left',
          fontFamily: 'Inter_900Black',
        }}
      >
        Dados do Artista:
      </Text>
      <GetImageButton
        image={photoOfArtist}
        onChangeImage={onChangePhotoOfArtist}
        height={200}
        width={200}
        placeholder={'Fotografia do Artista'}
      />
      <FieldCPFandCNPJGeneric
        isValid={cpfOrCnpjIsValid}
        onChangeIsValid={onChangeCPForCNPJIsValid}
        onChangeValue={onChangeCPForCNPJ}
        value={cpfOrCnpj}
        viewContainer={[styles.textAreaContainer, { width: '70%' }]}
        viewInput={styles.textArea}
        topic="CPF/CNPJ"
        topicForm={styles.topicForm}
        viewTitle={styles.viewTitle}
      />
      <InputTopic
        topic="Nome Cultural"
        requered={true}
        onChangeText={onChangeCulturalName}
        value={culturalName}
        styleViewContainer={{
          width: '70%',
        }}
      />
      <InputTextArea
        height={360}
        maxLength={2400}
        numberLines={10}
        topic="Biografia"
        requered
        onChangeValue={onChangeBiography}
        value={biography}
        widthContainer={'70%'}
      />
    </View>
  )
}

export default memo(Artist)
