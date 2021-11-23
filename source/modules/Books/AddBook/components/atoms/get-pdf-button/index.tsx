import React from 'react'
import { Button } from 'react-native-paper'

import { useFormPDF } from 'forms/Product'

const GetPDFButton = () => {
  const { getPDF, pdf } = useFormPDF()

  return <Button onPress={getPDF}>{pdf.name || 'Escolher PDF'}</Button>
}

export default GetPDFButton
