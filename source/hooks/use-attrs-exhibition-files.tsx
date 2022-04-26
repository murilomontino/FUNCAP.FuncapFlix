import { useCallback, useState } from 'react'

import { keys } from '@/forms/Product/product-exhibition/type'
import { Document } from '@/forms/Product/types'

export const useAttrsExhibitionFiles = () => {
  const [mapFiles, setMapFiles] = useState<Map<keys, string>[]>([])
  // eslint-disable-next-line prefer-const
  let file: Document[] = []

  const onChangeMapFiles = async (mapFiles: Map<keys, string>[]) => {
    setMapFiles(mapFiles)
  }

  const onChangeFile = useCallback(
    async (files) => {
      file.push(...files)
      const arrayMap = file.map((item, index) => {
        const map = new Map<keys, string>()
        Object.entries(item).forEach(([key, value]) => {
          map.set(key as keys, value)
        })
        map.set('descricao', '')
        map.set('data', '')
        map.set('tipo_de_foto', '')
        map.set('id', index.toString())
        map.set('error', 'false')
        return map
      })

      setMapFiles([...mapFiles, ...arrayMap])
    },
    [file]
  )

  const onChangeAttrPhotos = useCallback(
    (value: string, index: number, key: keys) => {
      mapFiles[index].set(key, value)
      setMapFiles([...mapFiles])
    },
    [mapFiles]
  )

  const onRemovePhoto = useCallback(
    (index: number) => {
      const map = mapFiles.filter((item, i) => i !== index)
      file = file.filter((item, i) => i !== index)

      setMapFiles([...map])
    },
    [mapFiles]
  )

  return {
    mapFiles,
    file,
    onChangeFile,
    onChangeAttrPhotos,
    onChangeMapFiles,
    onRemovePhoto,
  }
}

export interface AttrsExhibitionFiles {
  file: Document[]
  mapFiles: Map<keys, string>[]
  onChangeFile: (files: Document[]) => Promise<void>
  onChangeMapFiles: (mapFiles: Map<keys, string>[]) => Promise<void>
  onChangeAttrPhotos: (value: string, index: number, key: keys) => void
  onRemovePhoto: (index: number) => void
}
