/* eslint-disable no-undef */
import React from 'react'
import 'react-native'
import { Text, View } from 'react-native'

import App from '@/App'
import { render } from '@testing-library/react-native'

const Button = () => {
  return (
    <View>
      <Text>Hello World</Text>
    </View>
  )
}
describe('Configurando Testes', () => {
  it('renders correctly', () => {
    render(<App />)
  })
})
