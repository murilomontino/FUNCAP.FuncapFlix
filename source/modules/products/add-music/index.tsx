import React from 'react'

import TemplateAddProduct from '@/components/templates/template-add-product'

import FormMusicProvider from '@/forms/Product/product-music'

import Main from './components/template/main'

const ModuleAddMusic = () => {
  return (
    <TemplateAddProduct>
      <FormMusicProvider>
        <Main />
      </FormMusicProvider>
    </TemplateAddProduct>
  )
}

export default ModuleAddMusic
