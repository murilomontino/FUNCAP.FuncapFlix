import React from 'react'

import InputTags from '@/components/atom/tags'
import CheckingErrs from '@/components/molecule/checking-errs'

import {
  useFormExhibitionTags,
  useSubmitFormExhibition,
} from '@/forms/Product/product-exhibition/hooks'

import SendFormExhibitionButton from '../../atoms/send-form-button'
import { ContainerSendForm } from '../../template/main/styles'

const SendExhibition = () => {
  const { onSubmit, reset, validated } = useSubmitFormExhibition()
  const { tags, onChangeTags } = useFormExhibitionTags()
  return (
    <ContainerSendForm>
      <InputTags width={'50%'} onChangeTags={onChangeTags} tags={tags} />

      <SendFormExhibitionButton
        onSubmit={onSubmit}
        reset={reset}
        validated={validated.isValid}
      />
      <CheckingErrs err={validated.err} />
    </ContainerSendForm>
  )
}

export default SendExhibition
