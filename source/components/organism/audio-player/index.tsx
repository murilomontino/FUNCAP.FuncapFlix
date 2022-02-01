import React from 'react'
import { View } from 'react-native'

type Props = {
  uri: string
  index?: number
  onChangeDuration?: (value: string, index: number) => void
}

const AudioPlayer = ({ uri, onChangeDuration, index }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = React.useRef<any>()

  const onDuration = (durationMs: number) => {
    if (!durationMs) {
      return
    }
    const data = new Date(null)
    data.setSeconds(durationMs)

    const minutes =
      data.getMinutes() < 10
        ? `0${data.getMinutes()}:`
        : `${data.getMinutes()}:`

    const seconds =
      data.getSeconds() < 10 ? `0${data.getSeconds()}` : `${data.getSeconds()}`

    onChangeDuration(`${minutes}${seconds}`, index)
  }

  return (
    <View>
      <audio
        ref={ref}
        onDurationChange={(e) => onDuration(e.target.duration ?? '')}
        controls={true}
      >
        <source src={uri} />
      </audio>
    </View>
  )
}

export default AudioPlayer
