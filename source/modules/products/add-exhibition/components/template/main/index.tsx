import React from 'react'
import { ActivityIndicator } from 'react-native'

import HeaderLogo from '@/components/atom/header-logo'
import InputTags from '@/components/atom/tags'

import {
  useFormExhibitionTags,
  useSubmitFormExhibition,
} from '@/forms/Product/product-exhibition/hooks'

import SendFormExhibitionButton from '../../atoms/send-form-button'
import MenuOfPhotos from '../../organism/menu-of-photos'
import { ContainerMenu, Container, ContainerSendForm } from './styles'

import { useSize } from '@/hooks/use-size'

const Main = () => {
  const [loading, setLoading] = React.useState(false)
  const {
    size: { width, height },
  } = useSize()

  const { onSubmit, reset, validated } = useSubmitFormExhibition()
  const { tags, onChangeTags } = useFormExhibitionTags()

  if (loading) {
    return (
      <Container>
        <ActivityIndicator size={'large'} />
      </Container>
    )
  }

  return (
    <Container>
      <HeaderLogo />

      <ContainerMenu
        style={
          width < 1127 && {
            flex: 5,
            minHeight: height,
            flexDirection: 'column',
            width: '100%',
          }
        }
      >
        <MenuOfPhotos />
      </ContainerMenu>

      <ContainerSendForm>
        <InputTags width={'50%'} onChangeTags={onChangeTags} tags={tags} />

        <SendFormExhibitionButton
          onSubmit={onSubmit}
          reset={reset}
          validated={true}
        />
      </ContainerSendForm>
    </Container>
  )
}

export default Main
