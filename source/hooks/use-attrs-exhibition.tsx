import { MutableRefObject, useCallback, useRef, useState } from 'react'

import { Argument } from '@/forms/Product/product-exhibition/type'
import { Document } from '@/forms/Product/types'

export const useAttrsExhibition = (): AttrsExhibition => {
  const [titleExhibition, setTitleExhibition] = useState('')
  const [descriptionExhibition, setDescriptionExhibition] = useState('')
  const [startDate, setStartDate] = useState('')

  // Fields Optionals
  const location = useRef<string>('')
  const biography = useRef<string>('')
  const endDate = useRef<string>('')
  const photoOfArtist = useRef<Document>()

  const onChangeRefAttrs = useCallback((attr: MutableRefObject<Argument>) => {
    return (value: Argument) => {
      attr.current = value
    }
  }, [])

  const onChangeLocation = onChangeRefAttrs(location)
  const onChangeBiography = onChangeRefAttrs(biography)
  const onChangeEndDate = onChangeRefAttrs(endDate)
  const onChangePhotoOfArtist = onChangeRefAttrs(photoOfArtist)

  const onChangeTitleExhibition = useCallback(
    (value: string) => {
      setTitleExhibition(value)
    },
    [titleExhibition]
  )

  const onChangeDescriptionExhibition = useCallback(
    (value: string) => {
      setDescriptionExhibition(value)
    },
    [descriptionExhibition]
  )

  const onChangeStartDate = useCallback(
    (value: string) => {
      setStartDate(value)
    },
    [startDate]
  )

  return {
    titleExhibition,
    descriptionExhibition,
    startDate,
    location,
    biography,
    endDate,
    photoOfArtist,
    onChangeTitleExhibition,
    onChangeDescriptionExhibition,
    onChangeStartDate,
    onChangeLocation,
    onChangeBiography,
    onChangeEndDate,
    onChangePhotoOfArtist,
  }
}

export interface AttrsExhibition {
  location: MutableRefObject<string>
  onChangeLocation: (value: string) => void
  biography: MutableRefObject<string>
  onChangeBiography: (value: string) => void
  photoOfArtist: MutableRefObject<Document>
  onChangePhotoOfArtist: (value: Document) => void
  endDate: MutableRefObject<string>
  onChangeEndDate: (value: string) => void
  titleExhibition: string
  onChangeTitleExhibition: (value: string) => void
  descriptionExhibition: string
  onChangeDescriptionExhibition: (value: string) => void
  startDate: string
  onChangeStartDate: (value: string) => void
}
