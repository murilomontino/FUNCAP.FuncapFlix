import React from 'react'
import { ViewProps, TextProps } from 'react-native'

import { TopicContainer, TopicRequered, TopicForm } from './styles'

type Props = {
  topic: string
  requered: boolean
  maxWidthTitle?: number | string
  textProps?: TextProps
} & ViewProps

const Topic = ({
  requered,
  topic,
  maxWidthTitle,
  textProps,
  ...rest
}: Props) => {
  return (
    <TopicContainer
      {...rest}
      style={[
        {
          maxWidth: maxWidthTitle,
        },
      ]}
    >
      <TopicForm {...textProps}>{topic}</TopicForm>
      {requered && <TopicRequered {...textProps}>*</TopicRequered>}
    </TopicContainer>
  )
}

export default Topic
