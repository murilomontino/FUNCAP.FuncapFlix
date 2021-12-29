import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import AddProduct from '@/modules/products/add-product'
import { Category } from '@/types'

import { TemplateFront } from '@/navigations/template/navigation-frontend-template'

const Stack = createStackNavigator()

export const AddProductStack = ({ ...rest }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AddBooks"
        component={() =>
          TemplateFront({
            children: <AddProduct {...rest} category={Category.Literature} />,
          })
        }
        options={{
          headerShown: false,
          title: 'Adicionar Livro',
        }}
      />

      <Stack.Screen
        name="AddMusic"
        component={() =>
          TemplateFront({
            children: <AddProduct {...rest} category={Category.Music} />,
          })
        }
        options={{
          headerShown: false,
          title: 'Adicionar Música',
        }}
      />
    </Stack.Navigator>
  )
}
