import { useCallback, useState } from 'react'

import { keys } from '@/forms/Product/product-music/types'
import { Document } from '@/forms/Product/types'

export const useAttrsTracksFiles = (): AttrsTracksFiles => {
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
        map.set('titulo', item.name)
        map.set('duracao', '')
        map.set('data', '')
        map.set('compositor', '')
        map.set('id', index.toString())
        map.set('error', 'false')
        return map
      })

      setMapFiles([...mapFiles, ...arrayMap])
    },
    [file]
  )

  const onChangeAttrTrack = useCallback(
    (value: string, index: number, key: keys) => {
      mapFiles[index].set(key, value)
      setMapFiles([...mapFiles])
    },
    [mapFiles]
  )

  const onRemoveTrack = useCallback(
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
    onChangeAttrTrack,
    onChangeMapFiles,
    onRemoveTrack,
  }
}

export interface AttrsTracksFiles {
  file: Document[]
  mapFiles: Map<keys, string>[]
  onChangeFile: (files: Document[]) => Promise<void>
  onChangeMapFiles: (mapFiles: Map<keys, string>[]) => Promise<void>
  onChangeAttrTrack: (value: string, index: number, key: keys) => void
  onRemoveTrack: (index: number) => void
}
