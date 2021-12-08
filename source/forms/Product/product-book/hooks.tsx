import { useContextSelector } from 'use-context-selector'

import { FormProductBookContext } from './index'

export const useFormProductBook = () => {
  const sobreAObra = useContextSelector(
    FormProductBookContext,
    (value) => value.sobreAObra
  )
  const title = useContextSelector(
    FormProductBookContext,
    (value) => value.title
  )
  const subTitle = useContextSelector(
    FormProductBookContext,
    (value) => value.subTitle
  )

  const sinopse = useContextSelector(
    FormProductBookContext,
    (value) => value.sinopse
  )

  const isbn = useContextSelector(FormProductBookContext, (value) => value.isbn)

  const onChangeISBN = useContextSelector(
    FormProductBookContext,
    (value) => value.onChangeISBN
  )

  const onChangeSobreAObra = useContextSelector(
    FormProductBookContext,
    (value) => value.onChangeSobreAObra
  )
  const onChangeTitle = useContextSelector(
    FormProductBookContext,
    (value) => value.onChangeTitle
  )
  const onChangeSubTitle = useContextSelector(
    FormProductBookContext,
    (value) => value.onChangeSubTitle
  )
  const onChangeSinopse = useContextSelector(
    FormProductBookContext,
    (value) => value.onChangeSinopse
  )

  return {
    sobreAObra,
    title,
    subTitle,
    sinopse,
    isbn,
    onChangeISBN,
    onChangeSobreAObra,
    onChangeSubTitle,
    onChangeTitle,
    onChangeSinopse,
  }
}
