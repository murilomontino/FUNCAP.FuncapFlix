import React, { useCallback, useEffect, useState } from 'react'

import Tag from '@/components/atom/tag'
import InputTopic from '@/components/molecule/input-topic'

import { Container, Title, Legends, ContainerTags } from './styles'

type Props = {
  tags: string[]
  width?: number | string
  onChangeTags: (text: string[]) => void
}

const InputTags = ({ onChangeTags, tags, width }: Props) => {
  const [text, setText] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  useEffect(() => {
    setSelectedTags(tags)
  }, [])

  // regex que detecta se a ponto ou virgula na string no final da frase
  const regex = /[.,]$/

  useEffect(() => {
    if (regex.test(text)) {
      onChangeAddTags(text.slice(0, -1))
      setText('')
    }
  }, [text])

  const onChangeAddTags = useCallback(
    (text: string) => {
      selectedTags.push(text)
      onChangeSelectedTags(selectedTags)
    },
    [selectedTags]
  )

  const onChangeRemoveTags = useCallback(
    (index: number) => {
      const filter = selectedTags.filter((_, i) => i !== index)
      onChangeSelectedTags(filter)
    },
    [selectedTags]
  )

  const onChangeSelectedTags = (text: string[]) => {
    setSelectedTags(() => text)
  }

  const data = selectedTags.map((tag, index) => (
    <Tag
      index={index}
      key={index}
      tag={tag}
      onChangeRemoveTags={onChangeRemoveTags}
    />
  ))

  return (
    <Container style={{ width }}>
      <Title>Tags:</Title>
      <Legends>As tags são geradas automaticamente a partir da virgula</Legends>
      <InputTopic onChangeText={setText} value={text} />
      <ContainerTags>{data}</ContainerTags>
    </Container>
  )
}

export default InputTags
