import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import ModuleAddBook from '@/modules/products/add-book'
import ModuleAddExhibition from '@/modules/products/add-exhibition'
import ModuleAddMusic from '@/modules/products/add-music'

import { TemplateFront } from '@/navigations/template/navigation-frontend-template'

const Stack = createStackNavigator()

export const AddProductStack = ({ ...rest }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AddBooks"
        component={() =>
          TemplateFront({
            children: <ModuleAddBook {...rest} />,
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
            children: <ModuleAddMusic {...rest} />,
          })
        }
        options={{
          headerShown: false,
          title: 'Adicionar Música',
        }}
      />
      <Stack.Screen
        name="AddExhibition"
        component={() =>
          TemplateFront({
            children: <ModuleAddExhibition {...rest} />,
          })
        }
        options={{
          headerShown: false,
          title: 'Adicionar Exposições',
        }}
      />
    </Stack.Navigator>
  )
}
