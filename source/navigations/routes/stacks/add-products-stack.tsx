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
        options={{
          headerShown: false,
          title: 'Adicionar Livro',
        }}
      >
        {() =>
          TemplateFront({
            children: <ModuleAddBook {...rest} />,
          })
        }
      </Stack.Screen>

      <Stack.Screen
        name="AddMusic"
        options={{
          headerShown: false,
          title: 'Adicionar Música',
        }}
      >
        {() =>
          TemplateFront({
            children: <ModuleAddMusic {...rest} />,
          })
        }
      </Stack.Screen>
      <Stack.Screen
        name="AddExhibition"
        options={{
          headerShown: false,
          title: 'Adicionar Exposições',
        }}
      >
        {() =>
          TemplateFront({
            children: <ModuleAddExhibition {...rest} />,
          })
        }
      </Stack.Screen>
    </Stack.Navigator>
  )
}
