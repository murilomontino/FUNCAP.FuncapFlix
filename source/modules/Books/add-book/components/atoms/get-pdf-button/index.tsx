import React from 'react'
import { Button } from 'react-native-paper'

import { useFormPDF } from 'forms/Product'

import { styles } from '../styles'

const GetPDFButton = () => {
  const { getPDF, pdf } = useFormPDF()

  return (
    <Button style={[styles.buttonContainer]} color="#fff" onPress={getPDF}>
      {pdf.name || 'Escolher PDF'}
    </Button>
  )
}

export default GetPDFButton
