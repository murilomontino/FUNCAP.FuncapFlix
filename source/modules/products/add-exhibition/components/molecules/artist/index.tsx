import React, { memo } from 'react'

import GetImageButton from '@/components/atom/get-image-button-ref'
import FieldCPFandCNPJGeneric from '@/components/molecule/field-cpf-and-cnpj'
import InputTextArea from '@/components/molecule/input-text-area'
import InputTopic from '@/components/molecule/input-topic'

import {
  useFormExhibitionBiography,
  useFormExhibitionCPFandCNPJ,
  useFormExhibitionData,
  useFormExhibitionPhotoOfArtist,
} from '@/forms/Product/product-exhibition/hooks'

import { Container, Title } from './styles'

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
    <Container>
      <Title>Dados do Artista:</Title>
      <GetImageButton
        image={photoOfArtist}
        onChangeImage={onChangePhotoOfArtist}
        height={200}
        width={200}
        placeholder={'Fotografia do Artista'}
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
      <FieldCPFandCNPJGeneric
        viewContainer={{
          width: '70%',
        }}
        isValid={cpfOrCnpjIsValid}
        onChangeIsValid={onChangeCPForCNPJIsValid}
        onChangeValue={onChangeCPForCNPJ}
        value={cpfOrCnpj}
        topic="CPF/CNPJ"
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
    </Container>
  )
}

export default memo(Artist)
