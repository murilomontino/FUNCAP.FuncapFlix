import React from 'react'

import TemplateAddProduct from '@/components/templates/template-add-product'

import FormBookProvider from '@/forms/Product/product-book'

import Main from './components/template/main'

import { useSize } from '@/hooks/use-size'

const ModuleAddBook = () => {
  const { size } = useSize()

  return (
    <TemplateAddProduct>
      <FormBookProvider>
        <Main />
      </FormBookProvider>
    </TemplateAddProduct>
  )
}

export default ModuleAddBook
