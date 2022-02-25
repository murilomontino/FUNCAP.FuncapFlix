import React, { memo } from 'react'
import { View } from 'react-native'

import {
  useFormExhibitionFiles,
  useFormExhibitionAttrsPhotos,
  useFormExhibitionRemovePhoto,
} from '@/forms/Product/product-exhibition/hooks'

import { GetFileButton } from '../../atoms/get-file-button'
import CardPhotoOfEvent from '../card-photo-of-event'

const PhotosOfEvent = () => {
  const { files, mapFiles, onChangeFiles } = useFormExhibitionFiles()

  const { onChangeAttrsPhotos } = useFormExhibitionAttrsPhotos()

  const { removePhoto } = useFormExhibitionRemovePhoto()

  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
      }}
    >
      <GetFileButton
        files={files}
        onChangeFiles={onChangeFiles}
        type={['image/jpeg', 'image/jpg', 'image/png']}
        multiple
        message="Selecione as fotos"
      />
      <View
        style={{
          zIndex: 1,
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          height: '100%',
          width: '100%',
        }}
      >
        {mapFiles.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                zIndex: 999 - index,
              }}
            >
              <CardPhotoOfEvent
                uri={item.get('uri')}
                title={item.get('titulo')}
                description={item.get('descricao')}
                date={item.get('data')}
                typeOfPhoto={item.get('tipo_de_foto')}
                onChangeAttrs={onChangeAttrsPhotos}
                onRemovePhoto={() => removePhoto(index)}
                index={index}
              />
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default memo(PhotosOfEvent)
