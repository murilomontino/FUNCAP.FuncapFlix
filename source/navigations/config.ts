/* eslint-disable @typescript-eslint/no-namespace */

import { LinkingOptions } from '@react-navigation/native'

import * as Linking from 'expo-linking'

export type RootStackParamList = {
  Literatura: undefined
  Home: undefined
  QRCode: undefined
  AddProducts: undefined
  Music: undefined
}

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined
      Literatura: undefined
      QRCode: undefined
      AddBooks: undefined
      AddMusic: undefined
      AddExhibitions: undefined
      Music: undefined
    }
  }
}

export const prefix = Linking.createURL('/')

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [prefix],
  enabled: true,
  config: {
    initialRouteName: 'Home',
    screens: {
      Home: '/',
      QRCode: 'qrcode',
      Literatura: 'literatura',
      AddProducts: {
        path: '6eade882-2e68-43ca-838e-7742b75e7698',
        screens: {
          AddBooks: 'adicionar-livros',
          AddMusic: 'adicionar-musicas',
          AddExhibition: 'adicionar-exposicoes',
        },
      },
      Music: 'musicas',
    },
  },
}
