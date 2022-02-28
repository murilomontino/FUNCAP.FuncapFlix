import React from 'react'

import TemplateAddProduct from '@/components/templates/template-add-product'

import FormExhibitionProvider from '@/forms/Product/product-exhibition'

import Main from './components/template/main'

const ModuleAddBook = () => {
  return (
    <TemplateAddProduct>
      <FormExhibitionProvider>
        <Main />
      </FormExhibitionProvider>
    </TemplateAddProduct>
  )
}

export default ModuleAddBook
