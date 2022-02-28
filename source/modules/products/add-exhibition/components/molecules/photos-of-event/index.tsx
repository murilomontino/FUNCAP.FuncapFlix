import React, { memo } from 'react'
import { FlatList, View } from 'react-native'

import theme from '@/theme'

import {
  useFormExhibitionFiles,
  useFormExhibitionAttrsPhotos,
  useFormExhibitionRemovePhoto,
} from '@/forms/Product/product-exhibition/hooks'

import { GetFileButton } from '../../atoms/get-file-button'
import CardPhotoOfEvent from '../card-photo-of-event'

import globalStyles from '@/global/globalStyles'

const PhotosOfEvent = () => {
  const { files, mapFiles, onChangeFiles } = useFormExhibitionFiles()

  const { onChangeAttrsPhotos } = useFormExhibitionAttrsPhotos()

  const { removePhoto } = useFormExhibitionRemovePhoto()

  return (
    <View
      style={{
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

      <FlatList
        contentContainerStyle={[
          globalStyles.pHHalf,
          {
            zIndex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: 420 * 2,
          },
        ]}
        data={mapFiles}
        style={{
          width: '100%',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: theme.CONSTANTS.FOOTER_HIGHT,
        }}
        pagingEnabled={true}
        horizontal
        keyExtractor={(item) => item.get('id')}
        renderItem={({ item, index }) => {
          return (
            <CardPhotoOfEvent
              uri={item.get('uri')}
              title={item.get('titulo')}
              description={item.get('descricao')}
              date={item.get('data')}
              typeOfPhoto={item.get('tipo_de_foto')}
              onChangeAttrs={onChangeAttrsPhotos}
              onRemovePhoto={() => removePhoto(index)}
              index={index}
              error={item.get('error')}
            />
          )
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default memo(PhotosOfEvent)
